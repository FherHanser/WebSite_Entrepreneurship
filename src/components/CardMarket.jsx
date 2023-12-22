// CardMarket.js
import React from 'react';
import './style.css';

function CardMarket({ logoSrc, titulo, descripcion }) {
  return (
    <div className="card-market">
      <div className="card-left">
        <div className="logo-container">
          <img src={logoSrc} alt="Logo del mercado" className="logo-market" />
        </div>
        <div className="info-market">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
      <div className="card-right">

      </div>
    </div>
  );
}

export default CardMarket;
