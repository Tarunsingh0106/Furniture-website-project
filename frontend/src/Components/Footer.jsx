import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img">
          <img src="/images/sofa.png" alt="Handcrafted Indian Wooden Sofa" className="img-fluid" />
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-5">
            <Link to="/" className="footer-logo">Furni<span className="text-secondary">.in</span></Link>
            <p className="mt-3 text-muted">
              Handcrafted solid timber furniture celebrating centuries of Indian woodworking heritage and modern functional design. Ethically crafted from seasoned Sheesham and Malabar Teak wood.
            </p>
            <div className="small text-muted mt-2">
              <span className="me-3">📍 Jaipur Studio &amp; Bengaluru Workshop</span>
              <span>📞 +91 90243 49037</span>
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="list-unstyled links-wrap">
              {[
                ['/shop', 'Shop Collection'],
                ['/about', 'Our Artisans'],
                ['/services', 'Custom Services'],
                ['/blog', 'Design Journal'],
                ['/contact', 'Contact Studio'],
                ['/cart', 'Shopping Cart']
              ].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <p className="fw-medium mb-1">Portfolio Project by Tarun Singh</p>
            <p className="text-muted small mb-2">Full-stack React &amp; Express storefront with pan-India INR pricing and cart persistence.</p>
            <p><a href="https://github.com/Tarunsingh0106/Furniture-website-project" target="_blank" rel="noreferrer">Project source on GitHub</a></p>
          </div>
        </div>
        <div className="border-top copyright pt-4">
          <p className="mb-0 text-muted small">
            Furni template design by <a href="https://untree.co">Untree.co</a>, distributed by <a href="https://themewagon.com">ThemeWagon</a> under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Handcrafted Indian storefront adaptation by Tarun Singh.
          </p>
        </div>
      </div>
    </footer>
  );
}
