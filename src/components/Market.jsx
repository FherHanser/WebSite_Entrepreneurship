// Market.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import CardMarket from './CardMarket';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import logoNeg1 from'./images/logoNegocio1.jpg';
import logoNeg2 from'./images/logoNegocio2.jpg';
import logoNeg3 from'./images/logoNegocio3.jpg';
import logoNeg4 from'./images/logoNegocio4.jpg';
import logoNeg5 from'./images/logoNegocio5.svg';

import './style.css'; 

function Market() {
  return (
    <div>
      <Wallpaper imageUrl={space} />
      <Header />
      <Nav />

      <div className="market-container">
        {/* Contenido específico de la página "Market" */}
        <h1>Nuestro Market</h1>
        <p>
          Descubre los negocios destacados en nuestro Market. Explora sus productos y servicios
          excepcionales y encuentra lo que necesitas.
        </p>

        {/* Instancia componente CardMarket */}
        <CardMarket
          logoSrc={logoNeg1}
          titulo="Tony'z Pizza"
          descripcion="Ven y conoce del mejor sabor de la pizza, ambiente agradable, sala de juegos y servicio a domicilio"
          imagenes={['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']}
        />

        <CardMarket
          logoSrc={logoNeg2}
          titulo="Beauty Salón"
          descripcion="Luce siempre bella, siempre única, en nuestro salón seras la reina a donde quiera que vayas"
          imagenes={['imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg']}
        />

        <CardMarket
          logoSrc={logoNeg3}
          titulo="Bella Boutique"
          descripcion="Prendas de la mejores marcas, importadores directos con los mejores precios. Atención a mayoristas"
          imagenes={['imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg']}
        />
        <CardMarket
          logoSrc={logoNeg5}
          titulo="La Granja de Mingo"
          descripcion="Huevos frescos, gallinas de pie, leche fresca, todo lo que necesite se lo llevamos a la puerta de su casa"
          imagenes={['imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg']}
        />

        <CardMarket
          logoSrc={logoNeg4}
          titulo="Taller Mecánico Ortíz"
          descripcion="Mecánica en general, servicio de enderezado y pintura. Confíe su patrimonio en manos expertas"
          imagenes={['imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg']}
        />  

      </div>
      <Footer />
    </div>
  );
}

export default Market;
