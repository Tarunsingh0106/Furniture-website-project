import { useCart, readCart, writeCart, formatINR } from '../cart';

export default function CardProductList({ one }) {
  const cart = useCart();
  const added = cart.some(item => item.id === one.id);
  const add = () => {
    const current = readCart();
    if (!current.some(item => item.id === one.id)) writeCart([...current, { ...one, pQuantity: 1 }]);
  };
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <button type="button" className="product-item product-button" onClick={add} disabled={added} aria-label={`${added ? 'Added' : 'Add'} ${one.productName}${added ? '' : ' to cart'}`}>
        <img src={one.productImage} alt={one.productName} className="img-fluid product-thumbnail" />
        <h3 className="product-title">{one.productName}</h3>
        <strong className="product-price">{formatINR(one.productPrice)}</strong>
        <span className="icon-cross">{added ? <span aria-hidden="true">✓</span> : <img src="/images/cross.svg" alt="" className="img-fluid" />}</span>
      </button>
    </div>
  );
}
