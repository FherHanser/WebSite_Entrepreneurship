// CardCurso.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function CardCurso({ nombre, descripcion, portadaSrc, enlace }) {
  return (
    <div className="card-curso">
      <div className="portada-curso">
        <img
          src={portadaSrc}
          alt={`Portada de ${nombre}`}
          className="imagen-curso"
        />
      </div>
      <div className="info-curso">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <Link to={enlace}>Más Información</Link>
      </div>
    </div>
  );
}

export default CardCurso;
