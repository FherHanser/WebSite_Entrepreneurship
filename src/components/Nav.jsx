import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Asegúrate de importar tu archivo CSS

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    // Cierra el menú móvil después de hacer clic en un enlace
    setMobileMenuOpen(false);
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
