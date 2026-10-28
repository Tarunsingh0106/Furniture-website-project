import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart';

const links = [['home', '/', 'Home'], ['shop', '/shop', 'Shop'], ['about', '/about', 'About us'], ['service', '/services', 'Services'], ['blog', '/blog', 'Blog'], ['contact', '/contact', 'Contact us']];
export default function Navbar({ one }) {
  const items = useCart();
  const [expanded, setExpanded] = useState(false);
  const count = items.reduce((sum, item) => sum + item.pQuantity, 0);
  return <>
    <div className="demo-notice">Portfolio demo · No payments or product fulfilment</div>
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation">
      <div className="container">
        <Link className="navbar-brand" to="/">Furni<span>.</span></Link>
        <button className="navbar-toggler" type="button" onClick={() => setExpanded(!expanded)} aria-controls="navbarsFurni" aria-expanded={expanded} aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`} id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            {links.map(([key, to, label]) => <li key={key} className={`nav-item${one.highlight === key ? ' active' : ''}`}><Link className="nav-link" to={to} onClick={() => setExpanded(false)}>{label}</Link></li>)}
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-md-5"><li>
            <Link className="nav-link position-relative me-4 my-auto" to="/cart" onClick={() => setExpanded(false)} aria-label={`Cart, ${count} items`}>
              <img src="/images/cart.svg" alt="" /><span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: -5, left: 24, minWidth: 20, height: 20 }}>{count}</span>
            </Link>
          </li></ul>
        </div>
      </div>
    </nav>
  </>;
}
