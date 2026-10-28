const path = require('node:path');
if (process.env.NODE_ENV !== 'test') require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const { connect, Contact, Order } = require('./conn');
const { products, teams } = require('./catalog');
const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '16kb' }));

const text = (value, max = 200) => typeof value === 'string' ? value.trim().slice(0, max) : '';
const emailValid = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const invalid = message => Object.assign(new Error(message), { status: 400 });

function orderItems(items) {
  if (!Array.isArray(items) || !items.length || items.length > 50) throw invalid('Your cart is empty or invalid.');
  const ids = new Set();
  return items.map(item => {
    const product = products.find(product => product.id === item?.id);
    if (!product || ids.has(item.id) || !Number.isInteger(item.pQuantity) || item.pQuantity < 1 || item.pQuantity > 99) {
      throw invalid('Please check the products and quantities in your cart.');
    }
    ids.add(item.id);
    return { ...product, pQuantity: item.pQuantity };
  });
}

app.get('/api/health', (req, res) => res.json({ ok: true, databaseConfigured: Boolean(process.env.MONGODB_URI || process.env.URL) }));
app.get('/api/shop/alldata', (req, res) => res.json({ data: products }));
app.get('/api/about/teams', (req, res) => res.json({ data: teams }));

app.post('/api/contact/insert', async (req, res, next) => {
  try {
    const source = req.body || {};
    const data = {
      firstName: text(source.firstName), lastName: text(source.lastName),
      email: text(source.email).toLowerCase(), message: text(source.message, 2000),
    };
    if (!data.firstName || !data.lastName || !emailValid(data.email) || !data.message) {
      throw invalid('Please enter your name, a valid email address and a message.');
    }
    await connect();
    await Contact.create(data);
    res.status(201).json({ message: 'Your message has been saved. Thank you!' });
  } catch (error) { next(error); }
});

app.post('/api/checkout/insert', async (req, res, next) => {
  try {
    const source = req.body?.formdata || {};
    const formdata = {};
    for (const key of ['country', 'firstname', 'lastname', 'companyName', 'address', 'state', 'Zip', 'email', 'phoneNo', 'Notes']) {
      formdata[key] = text(source[key], key === 'Notes' ? 1000 : 200);
    }
    if (['country', 'firstname', 'lastname', 'address', 'state', 'Zip', 'phoneNo'].some(key => !formdata[key]) || !emailValid(formdata.email)) {
      throw invalid('Please complete the required billing details with a valid email address.');
    }
    const cartdata = orderItems(req.body?.cartdata);
    const total = cartdata.reduce((sum, item) => sum + item.productPrice * item.pQuantity, 0);
    await connect();
    const order = await Order.create({ formdata, cartdata, total });
    res.status(201).json({ message: 'Demo order saved. No payment has been taken.', orderId: order._id, total });
  } catch (error) { next(error); }
});

app.use('/api', (req, res) => res.status(404).json({ message: 'API route not found.' }));
app.use((error, req, res, next) => {
  const status = error.status || 503;
  res.status(status).json({ message: error.status ? error.message : 'Submissions are temporarily unavailable. Please try again later.' });
});
if (require.main === module) app.listen(process.env.PORT || 8000, () => console.log('Furniture API ready.'));
module.exports = app;
module.exports.orderItems = orderItems;
