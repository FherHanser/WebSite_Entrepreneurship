// RevistaExito.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Revista from './Revista'; 
import './style.css';

function PaginaRevista() {
  const pdfUrl = './images/revista1.pdf'; 

  return (
    <div>
      <Header />
      <Nav />
      <Revista pdfUrl={pdfUrl} />
      <Footer />
    </div>
  );
}

export default PaginaRevista;
