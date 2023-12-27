// Header.js
import React, { useEffect } from 'react';
import logo from './images/logo.png';
import './style.css'; // Asegúrate de importar tu archivo de estilos

function Header() {
  useEffect(() => {
    // Restablecer los estilos del header al cargar la página
    resetHeaderStyles();

    // Agregar un listener para el evento de cambio de ruta
    const handleRouteChange = () => {
      // Restablecer los estilos del header al cambiar de ruta
      resetHeaderStyles();
    };

    // Agregar el listener al evento de cambio de ruta
    window.addEventListener('popstate', handleRouteChange);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const resetHeaderStyles = () => {
    const header = document.querySelector('header');
    if (header) {
      // Restablecer estilos del header
      header.style.flexDirection = 'row';
      header.style.alignItems = 'center';
      header.style.justifyContent = 'space-between';
    }
  };

  return (
    <header>
      <h1 className="title">PÁGINA PRINCIPAL</h1>
      <div className="logos-container">
        <img src={logo} alt="Logo Izquierdo" className="logo" />
        <img src={logo} alt="Logo Derecho" className="logo" />
      </div>
    </header>
  );
}

export default Header;
