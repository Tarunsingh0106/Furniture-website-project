import { formatINR } from '../cart';

export default function Hy({ item, onQuantity, onRemove }) {
  return (
    <tr>
      <td className="product-thumbnail"><img src={item.productImage} alt={item.productName} className="img-fluid" /></td>
      <td className="product-name"><h2 className="h5 text-black">{item.productName}</h2></td>
      <td>{formatINR(item.productPrice)}</td>
      <td>
        <div className="input-group quantity-container" style={{ maxWidth: 150 }}>
          <button className="btn btn-outline-black" type="button" onClick={() => onQuantity(item.pQuantity - 1)} disabled={item.pQuantity <= 1} aria-label={`Decrease ${item.productName} quantity`}>−</button>
          <input type="number" min="1" max="99" className="form-control text-center" value={item.pQuantity} aria-label={`${item.productName} quantity`} onChange={event => onQuantity(Number(event.target.value))} />
          <button className="btn btn-outline-black" type="button" onClick={() => onQuantity(item.pQuantity + 1)} disabled={item.pQuantity >= 99} aria-label={`Increase ${item.productName} quantity`}>+</button>
        </div>
      </td>
      <td>{formatINR(item.productPrice * item.pQuantity)}</td>
      <td><button type="button" className="btn btn-black btn-sm" onClick={onRemove} aria-label={`Remove ${item.productName}`}>×</button></td>
    </tr>
  );
}
