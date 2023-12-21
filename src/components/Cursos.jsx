// Cursos.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import CardCurso from './CardCurso';
import './style.css';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import curso1 from './images/port_curso1.jpg';
import curso2 from './images/port_curso2.png';
import curso3 from './images/port_curso3.jpg';
import curso4 from './images/port_curso4.png';

function Cursos() {
  return (
    <div>
        <Wallpaper imageUrl={space} />
      <Header />
      <Nav />
      <div className="txt_container">
        {/* Contenido específico de la página "Cursos" */}
        <h1>Nuestros Cursos</h1>
        <CardCurso
          nombre="Curso de Excel Básico"
          descripcion="Aprende a aprender a utilizar la hoja de cálculo más famosa."
          portadaSrc={curso1}
         // enlace="/cursos/desarrollo-web" 
        />
           <CardCurso
          nombre="Curso de Word Básico"
          descripcion="Aprende a crear Word de una manera práctica."
          portadaSrc={curso2}
        />
            <CardCurso
          nombre="Canvas"
          descripcion="Aprende la metodología más famosa de las StarUps."
          portadaSrc={curso3}
        />
            <CardCurso
          nombre="Contabilidad Básica"
          descripcion="Lleva tus finanzas de una forma más organizada."
          portadaSrc={curso4}
        />
        {/* Agrega más instancias de CardCurso según sea necesario */}
      </div>
      <Footer />
    </div>
  );
}

export default Cursos;
