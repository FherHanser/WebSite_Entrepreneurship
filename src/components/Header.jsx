// Header.js
import React from 'react';
import logo from './images/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Izquierdo" className="logo" />
      <h1>PÁGINA PRINCIPAL</h1>
      <img src={logo} alt="Logo Derecho" className="logo" />
    </header>
  );
}

export default Header;
