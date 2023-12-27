// Nav.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Asegúrate de importar tu archivo de estilos

function Nav() {
  useEffect(() => {
    // Restablecer los estilos del nav al cargar la página
    resetNavStyles();

    // Agregar un listener para el evento de cambio de ruta
    const handleRouteChange = () => {
      // Restablecer los estilos del nav al cambiar de ruta
      resetNavStyles();
    };

    // Agregar el listener al evento de cambio de ruta
    window.addEventListener('popstate', handleRouteChange);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const resetNavStyles = () => {
    const nav = document.querySelector('nav');
    if (nav) {
      // Restablecer estilos del nav
      nav.style.flexDirection = 'row';
      nav.style.alignItems = 'center';
      nav.style.justifyContent = 'center';
    }
  };

  const handleNavClick = () => {
    // Desplaza la página al principio
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
      <Link to="/Alianzas" onClick={handleNavClick}>
        Alianzas
     </Link>
     <Link to="/Market" onClick={handleNavClick}>
        Market
     </Link>
     <Link to="/Revista" onClick={handleNavClick}>
        Revista
        </Link>
      <Link to="/Contacto" onClick={handleNavClick}>
        Contacto
     </Link>
    </nav>
  );
}

export default Nav;
