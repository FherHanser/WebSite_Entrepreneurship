// Historia.js
import React from 'react';
import PropTypes from 'prop-types';
import './style.css'; 

function Historia({ title, subtitle, paragraphs, images }) {
  return (
    <div className="historia-container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {/* Sección de imágenes */}
      <div className="imagen-section">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

Historia.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Historia;
