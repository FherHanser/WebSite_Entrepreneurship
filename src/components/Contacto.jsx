// Contacto.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import FormularioContacto from './FormularioContacto';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import './style.css'; 

const Contacto = () => {
  return (
    <div>
          <Wallpaper imageUrl={space} />
      <Header />
      <Nav />

      <div className="contacto-container">
        <h1>Escríbenos</h1>
        <FormularioContacto />
      </div>

      <Footer />
    </div>
  );
};

export default Contacto;
