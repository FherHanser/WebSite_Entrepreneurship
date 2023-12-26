// RevistaExito.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Revista from './Revista'; 
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import './style.css';
import pdfUrl from './images/revista1.pdf'; 

function PaginaRevista() {
  return (
    <div>
      <Wallpaper imageUrl={space} />
      <Header />
      <Nav />
      <div className='pdfViewContainer'>
        <Revista pdfUrl={pdfUrl} />
      </div>
      <Footer />
    </div>
  );
}

export default PaginaRevista;
