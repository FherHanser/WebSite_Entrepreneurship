import React from 'react';
import './style.css';

function Testimonio({ emprendimiento, nombre, contenido, imagenSrc }) {
  return (
    <div className="testimonio-card">
      <div className="testimonio-content">
        {/* Nuevo título para el emprendimiento */}
        <h2 className="emprendimiento-titulo">{emprendimiento}</h2>
        <p>{contenido}</p>
        <p className="nombre-persona">{nombre}</p>
      </div>
      <div className="testimonio-imagen">
        <img
          src={imagenSrc}
          alt={`Foto de ${nombre}`}
          className="imagen-testimonio"
        />
      </div>
    </div>
  );
}

export default Testimonio;


