import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className="footer-section"><div className="container relative">
    <div className="sofa-img"><img src="/images/sofa.png" alt="Sofa" className="img-fluid" /></div>
    <div className="row g-5 mb-5">
      <div className="col-lg-5"><Link to="/" className="footer-logo">Furni.</Link><p className="mt-3">Furniture for modern living. Explore the collection and try the shopping cart.</p></div>
      <div className="col-lg-4"><ul className="list-unstyled links-wrap">
        {[['/shop', 'Shop'], ['/about', 'About us'], ['/services', 'Services'], ['/blog', 'Blog'], ['/contact', 'Contact us'], ['/cart', 'Shopping cart']].map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
      </ul></div>
      <div className="col-lg-3"><p>Portfolio project by Tarun Singh</p><p><a href="https://github.com/Tarunsingh0106/Furniture-website-project">Project source on GitHub</a></p></div>
    </div>
    <div className="border-top copyright pt-4"><p className="mb-0">Furni template designed by <a href="https://untree.co">Untree.co</a>, distributed by <a href="https://themewagon.com">ThemeWagon</a>. <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.</p></div>
  </div></footer>;
}
