const { test, after } = require('node:test');
const assert = require('node:assert/strict');
process.env.NODE_ENV = 'test';
delete process.env.MONGODB_URI;
delete process.env.URL;
const app = require('../backend');
const server = app.listen(0);
const base = `http://127.0.0.1:${server.address().port}/api`;
after(() => server.close());

test('catalog loads without a database and has unique numeric product IDs', async () => {
  const response = await fetch(`${base}/shop/alldata`);
  assert.equal(response.status, 200);
  const { data } = await response.json();
  assert.equal(new Set(data.map(item => item.id)).size, data.length);
  assert.ok(data.every(item => Number.isFinite(item.productPrice) && item.productImage.startsWith('/images/')));
});

test('checkout uses catalog prices and rejects duplicate or invalid quantities', () => {
  const items = app.orderItems([{ id: 2, productPrice: 0.01, pQuantity: 3 }]);
  assert.equal(items[0].productPrice * items[0].pQuantity, 28497);
  for (const input of [[], [{ id: 2, pQuantity: 0 }], [{ id: 2, pQuantity: 1.5 }], [{ id: 2, pQuantity: 100 }], [{ id: 999, pQuantity: 1 }], [{ id: 2, pQuantity: 1 }, { id: 2, pQuantity: 2 }]]) assert.throws(() => app.orderItems(input));
});

test('invalid input is rejected; unconfigured persistence never returns fake success', async () => {
  const send = data => fetch(`${base}/contact/insert`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  assert.equal((await send({ email: 'invalid' })).status, 400);
  if (!process.env.MONGODB_URI && !process.env.URL) {
    const response = await send({ firstName: 'Demo', lastName: 'Test', email: 'demo@example.com', message: 'Test only' });
    assert.equal(response.status, 503);
    assert.match((await response.json()).message, /unavailable/i);
  }
});
