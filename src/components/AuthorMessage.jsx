// AuthorMessage.js
import React from 'react';
import authorPhoto from './images/user.png';

function AuthorMessage() {
  return (
    <section id="author-message">
      <div className="author-message-content">
        <img src={authorPhoto} alt="Foto del autor" />
        <p>¡Gracias por visitar nuestro sitio! Esperamos que encuentres inspiración y la motivación para cumplir todas tus metas.</p>
      </div>
    </section>
  );
}

export default AuthorMessage;
