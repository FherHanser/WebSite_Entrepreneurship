// Alianzas.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import './style.css';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import imgAlianza1 from './images/alianza11.jpg';
import imgAlianza2 from './images/alianza12.jpg';
import imgAlianza3 from './images/alianza13.jpg';

function Alianzas() {
  return (
    
    <div>
  <Wallpaper imageUrl={space} />
      <Header />
      <Nav />

    <div className="alianzas-container">
      <h1>Alianzas</h1>
      <h2>Alianza Internacional</h2>
      <p>
      En el contexto empresarial nacional, las alianzas estratégicas son fundamentales para potenciar el crecimiento y la competitividad. 
      Estas colaboraciones entre empresas locales permiten aprovechar sinergias, compartir recursos y acceder a nuevos mercados. 
      Al unir fuerzas, las organizaciones pueden enfrentar desafíos comunes, fortalecer sus capacidades y contribuir al desarrollo económico del país. 
      Las alianzas estratégicas nacionales son un testimonio del espíritu colaborativo que impulsa la innovación y el progreso empresarial en el ámbito local.
      </p>

      <p>
      En un mundo globalizado, las alianzas estratégicas internacionales se han convertido en un pilar fundamental para el éxito empresarial. 
      Estas asociaciones trascienden fronteras y permiten a las empresas expandir su alcance a nivel global. 
      Colaborar con socios internacionales no solo brinda acceso a nuevos mercados, sino que también proporciona una diversidad de perspectivas, tecnologías y talentos. 
      Las alianzas estratégicas internacionales son un testimonio del compromiso de las empresas con la innovación, la diversificación y la creación de un impacto 
      positivo a escala mundial.
      </p>
      <p>
      En el dinámico escenario empresarial actual, las alianzas estratégicas, tanto a nivel nacional como internacional, desempeñan un papel esencial en la construcción de un futuro empresarial sostenible. 
      Estas asociaciones no solo generan oportunidades de crecimiento, sino que también fomentan la resiliencia empresarial al compartir riesgos y recompensas. 
      La colaboración estratégica se erige como un catalizador para la innovación, la eficiencia operativa y la adaptabilidad a un entorno empresarial en constante cambio. 
      En última instancia, las alianzas estratégicas se perfilan como un vehículo poderoso para forjar el camino hacia el éxito a largo plazo.
      </p>

      {/* Sección de imágenes */}
      <div className="imagen-section">
        <img src={imgAlianza1} alt="Alianza 1" />
        <img src={imgAlianza2} alt="Alianza 2" />
        <img src={imgAlianza3} alt="Resultados" />
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Alianzas;
