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

  const handleNavClick = () => {
    // Desplaza la página al principio
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Agrega desplazamiento suave si lo deseas
    });
  };

  return (
    <nav>
      <Link to="/" onClick={handleNavClick}>
        Inicio
      </Link>
      <Link to="/QuienesSomos" onClick={handleNavClick}>
        Quienes Somos
      </Link>
      <Link to="/Servicios" onClick={handleNavClick}>
        Servicios
      </Link>
      <Link to="/Cursos" onClick={handleNavClick}>
        Cursos
        </Link>
      <a href="#section3" onClick={handleNavClick}>
        Alianzas
      </a>
      <a href="#section3" onClick={handleNavClick}>
        Market
      </a>
      <a href="#section4" onClick={handleNavClick}>
        Revista
      </a>
      <a href="#section4" onClick={handleNavClick}>
        Contacto
      </a>
    </nav>
  );
}

export default Nav;
