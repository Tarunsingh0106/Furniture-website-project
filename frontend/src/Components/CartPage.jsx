import { Link } from 'react-router-dom';
import Hy from './Hy';
import { useCart, writeCart, cartTotal } from '../cart';

export default function CartPage() {
  const items = useCart();
  const quantity = (id, count) => {
    if (Number.isInteger(count) && count >= 1 && count <= 99) writeCart(items.map(item => item.id === id ? { ...item, pQuantity: count } : item));
  };
  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        {!items.length ? <div className="text-center"><h2>Your cart is empty</h2><Link to="/shop" className="btn btn-black">Browse furniture</Link></div> : <>
          <div className="table-responsive mb-5"><table className="table site-blocks-table align-middle">
            <thead><tr>{['Image', 'Product', 'Price', 'Quantity', 'Total', 'Remove'].map(label => <th key={label}>{label}</th>)}</tr></thead>
            <tbody>{items.map(item => <Hy key={item.id} item={item} onQuantity={count => quantity(item.id, count)} onRemove={() => writeCart(items.filter(other => other.id !== item.id))} />)}</tbody>
          </table></div>
          <div className="d-flex flex-wrap justify-content-between align-items-start gap-4">
            <Link to="/shop" className="btn btn-outline-black">Continue Shopping</Link>
            <div><h3 className="text-black">Cart Total: ${cartTotal(items).toFixed(2)}</h3><p>Quantities and totals update automatically.</p><Link to="/checkout" className="btn btn-black">Proceed to Checkout</Link></div>
          </div>
        </>}
      </div>
    </div>
  );
}
