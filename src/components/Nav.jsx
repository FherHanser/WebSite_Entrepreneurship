import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  useEffect(() => {
    const colors = ['#FFC0D9', '#EA1179', '#8ACDD7', '#A6FF96'];
    let currentColorIndex = 0;

    function changeNavColor() {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
      }
    }

    const intervalId = setInterval(changeNavColor, 20000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento [] asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/QuienesSomos">Quienes Somos</Link>
      <Link to="/Servicios">Servicios</Link>
      <a href="#section4">Cursos</a>
      <a href="#section3">Alianzas</a>
      <a href="#section3">Market</a>
      <a href="#section4">Revista</a>
      <a href="#section4">Contacto</a>
    </nav>
  );
}

export default Nav;
