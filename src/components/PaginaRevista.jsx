// PaginaRevista.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Revista from './Revista';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import revista1 from './images/revista1.pdf';
import revista2 from './images/revista2.pdf';
import './style.css';

function PaginaRevista() {
  return (
    <div>
      <Wallpaper imageUrl={space} />
      <Header />
      <Nav />
      <div className='pdfViewContainer1'>
        {/* Instancia componente Revista */}
        <Revista pdfUrl={revista1} title='Revista N°.1' />
        
        <Revista pdfUrl={revista2} title='Revista N°.2' />
      </div>
      <Footer />
    </div>
  );
}

export default PaginaRevista;
