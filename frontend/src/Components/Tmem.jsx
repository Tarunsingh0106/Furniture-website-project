import React from 'react';

function Tmem({ one }) {
  const role = one?.position || one?.postion || 'Craft Specialist';
  const bio = one?.description || 'Master artisan with decades of woodworking expertise, upholding Indian timber craft heritage.';

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
      <img src={one.image} alt={one.name} className="img-fluid mb-4 rounded" />
      <h3>
        <span className="text-dark fw-bold">{one.name}</span>
      </h3>
      <span className="d-block position text-primary mb-3 fw-medium">{role}</span>
      <p className="text-muted small">
        {bio}
      </p>
      <p className="mb-0">
        <span className="more dark text-decoration-none">
          {one.more || 'Artisan Profile'} <span className="icon-arrow_forward" />
        </span>
      </p>
    </div>
  );
}

export default Tmem;
