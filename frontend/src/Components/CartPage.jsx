import { Link } from 'react-router-dom';
import Hy from './Hy';
import { useCart, writeCart, cartTotal, formatINR } from '../cart';

export default function CartPage() {
  const items = useCart();
  const quantity = (id, count) => {
    if (Number.isInteger(count) && count >= 1 && count <= 99) writeCart(items.map(item => item.id === id ? { ...item, pQuantity: count } : item));
  };
  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        {!items.length ? <div className="text-center py-5">
          <h2 className="mb-3">Your shopping cart is empty</h2>
          <p className="text-muted mb-4">Discover handcrafted Sheesham and Teak wood furniture for your home.</p>
          <Link to="/shop" className="btn btn-black">Explore Collection</Link>
        </div> : <>
          <div className="table-responsive mb-5"><table className="table site-blocks-table align-middle">
            <thead><tr>{['Image', 'Product', 'Price', 'Quantity', 'Total', 'Remove'].map(label => <th key={label}>{label}</th>)}</tr></thead>
            <tbody>{items.map(item => <Hy key={item.id} item={item} onQuantity={count => quantity(item.id, count)} onRemove={() => writeCart(items.filter(other => other.id !== item.id))} />)}</tbody>
          </table></div>
          <div className="d-flex flex-wrap justify-content-between align-items-start gap-4 p-4 rounded bg-white border">
            <div>
              <Link to="/shop" className="btn btn-outline-black mb-3">Continue Shopping</Link>
              <div className="text-muted small">
                <p className="mb-1"><i className="fa fa-truck me-2 text-primary"></i> Free Pan-India White-Glove Delivery</p>
                <p className="mb-1"><i className="fa fa-shield-alt me-2 text-primary"></i> 10-Year Solid Wood Warranty</p>
                <p className="mb-0"><i className="fa fa-check-circle me-2 text-primary"></i> All prices are inclusive of GST</p>
              </div>
            </div>
            <div className="text-end">
              <h3 className="text-black mb-1">Cart Total: {formatINR(cartTotal(items))}</h3>
              <p className="text-muted small mb-3">Quantities and totals update automatically.</p>
              <Link to="/checkout" className="btn btn-black px-4 py-2">Proceed to Checkout</Link>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
}
