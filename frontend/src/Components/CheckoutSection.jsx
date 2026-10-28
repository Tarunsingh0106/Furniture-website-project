import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useCart, writeCart, cartTotal } from '../cart';

const fields = [
  ['country', 'Country'], ['firstname', 'First name'], ['lastname', 'Last name'],
  ['companyName', 'Company (optional)'], ['address', 'Street address'], ['state', 'State'],
  ['Zip', 'Postal code'], ['email', 'Email address'], ['phoneNo', 'Phone number'],
];
export default function CheckoutSection() {
  const [formdata, setForm] = useState(Object.fromEntries([...fields.map(([name]) => [name, '']), ['Notes', '']]));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const items = useCart();
  const navigate = useNavigate();
  const submit = async event => {
    event.preventDefault();
    setBusy(true); setError('');
    try {
      const result = await api('/checkout/insert', { method: 'POST', body: JSON.stringify({ formdata, cartdata: items }) });
      writeCart([]);
      navigate('/thankyou', { state: { orderId: result.orderId } });
    } catch (error) { setError(error.message); }
    finally { setBusy(false); }
  };
  if (!items.length) return <div className="container py-5 text-center"><h2>Your cart is empty</h2><Link to="/shop" className="btn">Browse furniture</Link></div>;
  return (
    <div className="untree_co-section"><div className="container"><form onSubmit={submit}><div className="row g-5">
      <div className="col-md-6"><h2 className="h3 text-black">Billing details</h2><div className="p-4 border bg-white">
        {fields.map(([name, label]) => <div className="mb-3" key={name}>
          <label htmlFor={`billing-${name}`} className="form-label text-black">{label}{name !== 'companyName' && ' *'}</label>
          <input id={`billing-${name}`} name={name} className="form-control" required={name !== 'companyName'} type={name === 'email' ? 'email' : name === 'phoneNo' ? 'tel' : 'text'} maxLength={200} value={formdata[name]} onChange={event => setForm({ ...formdata, [name]: event.target.value })} />
        </div>)}
        <label htmlFor="billing-notes" className="form-label text-black">Notes (optional)</label>
        <textarea id="billing-notes" className="form-control" maxLength={1000} value={formdata.Notes} onChange={event => setForm({ ...formdata, Notes: event.target.value })} />
      </div></div>
      <div className="col-md-6"><h2 className="h3 text-black">Your order</h2><div className="p-4 border bg-white">
        <table className="table"><thead><tr><th>Product</th><th>Total</th></tr></thead><tbody>
          {items.map(item => <tr key={item.id}><td>{item.productName} × {item.pQuantity}</td><td>${(item.productPrice * item.pQuantity).toFixed(2)}</td></tr>)}
          <tr><th>Total</th><th>${cartTotal(items).toFixed(2)}</th></tr>
        </tbody></table>
        <p>This is a demonstration order. No payment will be taken and no products will be shipped.</p>
        {error && <p role="alert" className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-black" disabled={busy}>{busy ? 'Saving…' : 'Place Demo Order'}</button>
      </div></div>
    </div></form></div></div>
  );
}
