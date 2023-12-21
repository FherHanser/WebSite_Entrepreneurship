// QuienesSomos.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import './style.css';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import Testimonio from './Testimonio';
import imgTest1 from './images/men.jpg'
import imgTest2 from './images/women.jpg'

function QuienesSomos() {
  return (
    <div>
      <Wallpaper imageUrl={space} />
      <Header />
      <Nav />
      <div className="txt_container">
        {/* Contenido específico de la página "Quiénes Somos" */}
        <h1>Quiénes Somos</h1>
        <p>
          Somos una comunidad apasionada y comprometida con la creación y compartición de historias inspiradoras. Nuestra misión es conectar corazones y mentes a través de relatos que cautivan, emocionan y transforman. Creemos en el poder de las palabras para inspirar, motivar y generar un impacto positivo en la vida de las personas.
        </p>
        <p>
          En Quiénes Somos, nos esforzamos por proporcionar un espacio donde cada historia cuente, donde cada palabra tenga significado y donde cada lector encuentre inspiración. Nuestra diversa comunidad de escritores y lectores comparte la visión de construir un mundo mejor a través del poder de las historias que resuenan en el corazón humano.
        </p>
        <p>
          Únete a nosotros en este viaje emocionante de descubrimiento, aprendizaje y crecimiento. Explora nuestras secciones, sumérgete en relatos conmovedores y comparte tus propias experiencias. Juntos, creamos un espacio donde las palabras cobran vida y donde la inspiración se encuentra en cada página.
        </p>

        <Testimonio
          emprendimiento="Herrería 'Los Amigos'"
          nombre="Juan Pérez"
          contenido="¡Increíble servicio! Gracias a por inspirarme cada día. Las historias compartidas aquí realmente tocan el corazón."
          imagenSrc={imgTest1} // Reemplaza con la URL de la imagen
/>

        <Testimonio
          emprendimiento="Sala de Belleza 'Bella Maria'"
          nombre="María López"
          contenido="¡Gracias a su apoyo pude realizar mis sueños, ya dos años de ser parte de este equipo y vamos por más"
          imagenSrc={imgTest2} // Reemplaza con la URL de la imagen
        />

        {/* Otro contenido */}
      </div>
      <Footer />
    </div>
  );
}

export default QuienesSomos;
