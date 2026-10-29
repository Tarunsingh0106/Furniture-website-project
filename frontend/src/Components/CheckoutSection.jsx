import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useCart, writeCart, cartTotal, formatINR } from '../cart';

const fields = [
  ['country', 'Country', 'India', 'text', 'India'],
  ['firstname', 'First name', '', 'text', 'e.g. Aarav'],
  ['lastname', 'Last name', '', 'text', 'e.g. Sharma'],
  ['companyName', 'Apartment / Building / Company (optional)', '', 'text', 'e.g. Flat 402, Green Meadows'],
  ['address', 'Street Address / Locality', '', 'text', 'e.g. 14th Cross, Indiranagar'],
  ['state', 'State / Union Territory', 'Delhi', 'text', 'e.g. Karnataka, Maharashtra, Delhi', 'indian-states'],
  ['Zip', 'PIN Code (6 digits)', '', 'text', 'e.g. 560038'],
  ['email', 'Email address', '', 'email', 'e.g. aarav.sharma@example.com'],
  ['phoneNo', 'Mobile Number (10 digits)', '', 'tel', 'e.g. +91 98765 43210'],
];

const indianStates = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Delhi NCR',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Punjab',
  'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

export default function CheckoutSection() {
  const [formdata, setForm] = useState(
    Object.fromEntries([...fields.map(([name, , def]) => [name, def || '']), ['Notes', '']])
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const items = useCart();
  const navigate = useNavigate();

  const submit = async event => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      const result = await api('/checkout/insert', { method: 'POST', body: JSON.stringify({ formdata, cartdata: items }) });
      writeCart([]);
      navigate('/thankyou', { state: { orderId: result.orderId } });
    } catch (error) {
      setError(error.message);
    } finally {
      setBusy(false);
    }
  };

  if (!items.length) {
    return (
      <div className="container py-5 text-center">
        <h2 className="mb-3">Your cart is empty</h2>
        <p className="text-muted mb-4">Add your favorite handcrafted Indian furniture pieces before checking out.</p>
        <Link to="/shop" className="btn btn-black">Browse Collection</Link>
      </div>
    );
  }

  const totalAmount = cartTotal(items);

  return (
    <div className="untree_co-section">
      <div className="container">
        <datalist id="indian-states">
          {indianStates.map(state => <option key={state} value={state} />)}
        </datalist>
        <form onSubmit={submit}>
          <div className="row g-5">
            <div className="col-md-6">
              <h2 className="h3 text-black mb-3">Delivery &amp; Billing Details</h2>
              <div className="p-4 border bg-white rounded shadow-sm">
                {fields.map(([name, label, , type, placeholder, list]) => (
                  <div className="mb-3" key={name}>
                    <label htmlFor={`billing-${name}`} className="form-label text-black fw-medium">
                      {label}{name !== 'companyName' && <span className="text-danger"> *</span>}
                    </label>
                    <input
                      id={`billing-${name}`}
                      name={name}
                      className="form-control"
                      required={name !== 'companyName'}
                      type={type}
                      maxLength={200}
                      placeholder={placeholder}
                      list={list}
                      value={formdata[name]}
                      onChange={event => setForm({ ...formdata, [name]: event.target.value })}
                    />
                  </div>
                ))}
                <div className="mb-3">
                  <label htmlFor="billing-notes" className="form-label text-black fw-medium">Delivery Instructions (optional)</label>
                  <textarea
                    id="billing-notes"
                    className="form-control"
                    maxLength={1000}
                    placeholder="e.g. Call before delivery, elevator available on 3rd floor..."
                    rows={3}
                    value={formdata.Notes}
                    onChange={event => setForm({ ...formdata, Notes: event.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="h3 text-black mb-3">Order Summary</h2>
              <div className="p-4 border bg-white rounded shadow-sm">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th className="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr key={item.id}>
                        <td>{item.productName} × {item.pQuantity}</td>
                        <td className="text-end">{formatINR(item.productPrice * item.pQuantity)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="text-muted">Pan-India White-Glove Delivery</td>
                      <td className="text-end text-success fw-bold">FREE</td>
                    </tr>
                    <tr>
                      <td className="text-muted">Goods &amp; Services Tax (18% GST)</td>
                      <td className="text-end text-muted">Included</td>
                    </tr>
                    <tr className="border-top border-dark">
                      <th className="h5">Total Payable</th>
                      <th className="h5 text-end text-primary">{formatINR(totalAmount)}</th>
                    </tr>
                  </tbody>
                </table>

                <div className="alert alert-info py-2 px-3 small my-3" role="alert">
                  <strong>Portfolio Demo:</strong> No real payment is charged. Submitting logs a demo order for verification.
                </div>

                {error && <p role="alert" className="text-danger small">{error}</p>}

                <button type="submit" className="btn btn-black w-100 py-3" disabled={busy}>
                  {busy ? 'Processing Demo Order…' : `Place Demo Order • ${formatINR(totalAmount)}`}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
