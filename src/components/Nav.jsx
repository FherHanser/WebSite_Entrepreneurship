import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Asegúrate de importar tu archivo CSS

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Restablecer los estilos del nav al cargar la página
    resetNavStyles();

    // Agregar un listener para el evento de cambio de ruta
    const handleRouteChange = () => {
      // Restablecer los estilos del nav al cambiar de ruta
      resetNavStyles();
      // Cierra el menú móvil después de hacer clic en un enlace durante la navegación
      setMobileMenuOpen(false);
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
      nav.style.top = '120px'; // Ajusta el valor según sea necesario
    }
  };

  const handleNavClick = () => {
    // Desplaza la página al principio
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMobileMenuToggle = () => {
    // Invierte el estado del menú móvil al hacer clic en el botón hamburguesa
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
        &#9776; {/* Icono de hamburguesa */}
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
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
      </div>
    </nav>
  );
}

export default Nav;
