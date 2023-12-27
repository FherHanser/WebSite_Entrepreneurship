// FormularioContacto.js
import React, { useState } from 'react';
import './style.css'; 

const FormularioContacto = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [empresa, setEmpresa] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    //  lógica para enviar los datos del formulario
    console.log('Datos del formulario:', { nombre, apellido, email, telefono, mensaje });
  };

  const handleCancel = () => {
    // agregar lógica para limpiar el formulario o realizar otras acciones al cancelar
    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
    setMensaje('');
    setEmpresa('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="nombre-apellido">
        <div className="nombre-container">
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </label>
        </div>
        <div className="apellido-container">
          <label>
            Apellido:
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </label>
        </div>
      </div>
      <br />

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />

      <label>
        Teléfono:
        <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <br />

      <label>
        Institución:
        <input type="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
      </label>
      <br />

      <label>
        Mensaje:
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="mensaje-textarea"
        />
      </label>
      <br />

      <button type="submit">Enviar</button>
      <button type="button" onClick={handleCancel}>Cancelar</button>
    </form>
  );
};

export default FormularioContacto;
