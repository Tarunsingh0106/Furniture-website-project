import React, { useEffect, useState } from "react";
import Tmem from "./Tmem";
import { api } from '../api';

function OurTeams() {
  let [teamsData, setTeamsData] = useState([])
  const [error, setError] = useState('');
  useEffect(() => {
    const apiFetch = async () => {
      try {
        const result = await api('/about/teams');
        setTeamsData(result.data);
      } catch (error) { setError(error.message); }
    }
    apiFetch()
  }, [])
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Our Master Artisans &amp; Designers</h2>
              <p className="text-muted">Meet the woodcraft masters, heritage artisans, and interior architects behind Furni India.</p>
            </div>
          </div>
          <div className="row">
            {teamsData.map((item, index) => (
              <Tmem one={item} key={index}/>
            ))}
            {error && <p role="alert">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeams;
