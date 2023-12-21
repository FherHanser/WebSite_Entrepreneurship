// CardServicios.js
import React from 'react';
import './style.css';

function CardServicios({ titulo, texto, imagenSrc }) {
  return (
    <div className="card-servicios">
      <div className="card-contenido">
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
      <div className="card-imagen">
        {/* La imagen solo se mostrará si se proporciona la URL */}
        {imagenSrc && <img src={imagenSrc} alt={`Imagen para ${titulo}`} />}
      </div>
    </div>
  );
}

export default CardServicios;
