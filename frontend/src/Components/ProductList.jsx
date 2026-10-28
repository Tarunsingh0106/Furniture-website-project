import React, { useEffect, useState } from "react";
import CardProductList from "./CardProductList";
import { api } from '../api';

function ProductList() {
  const [cardData, setCardData] = useState([])
  const [error, setError] = useState('');
  useEffect(() => {
    const apiFetch = async () => {
      try {
        const result = await api('/shop/alldata');
        setCardData(result.data);
      } catch (error) { setError(error.message); }
    }
    apiFetch()
  }, [])
  return (
    <>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {error && <p role="alert">{error}</p>}
            {cardData.map((item, index) => (
              <CardProductList one={item} key={index} />
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default ProductList;
