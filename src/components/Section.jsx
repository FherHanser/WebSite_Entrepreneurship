// Section.js
import React from 'react';

function Section({ id, title, content, imageSrc, parallaxClass }) {
  return (
    <section id={id} className={`parallax ${parallaxClass}`}>
      <div className="content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="read-more">
          <a href="#readmore">Seguir Leyendo</a>
        </div>
      </div>
      <img src={imageSrc} alt={`Imagen ${id}`} />
    </section>
  );
}

export default Section;
