// Section.js
import React from 'react';
import { Link } from 'react-router-dom';

function Section({ id, title, content, imageSrc, parallaxClass, enlaceHistoria }) {
  return (
    <section id={id} className={`parallax ${parallaxClass}`}>
      <div className="content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="read-more">
          {/* Utiliza Link de react-router-dom para navegar a la página de la historia */}
          <Link to={enlaceHistoria}>Seguir Leyendo</Link>
        </div>
      </div>
      <img src={imageSrc} alt={`Imagen ${id}`} />
    </section>
  );
}

export default Section;

