// HistoriaExito4.js
import React, { useEffect } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import './style.css';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import Historia from './Historia'; 
import imgAlianza1 from './images/alianza11.jpg';
import imgAlianza2 from './images/alianza12.jpg';
import imgAlianza3 from './images/alianza13.jpg';

function HistoriaExito4() {
  const historiaData = {
    title: '"Siempre Positivo"',
    subtitle: '"Estas historias resaltan cómo cultivar una mentalidad positiva no solo mejora la calidad de vida, sino que también sirve como fuente de inspiración para aquellos que buscan superar obstáculos...',
    paragraphs: [
      'En el contexto empresarial nacional, las alianzas estratégicas son fundamentales para potenciar el crecimiento y la competitividad. Estas colaboraciones entre empresas locales permiten aprovechar sinergias, compartir recursos y acceder a nuevos mercados. Al unir fuerzas, las organizaciones pueden enfrentar desafíos comunes, fortalecer sus capacidades y contribuir al desarrollo económico del país. Las alianzas estratégicas nacionales son un testimonio del espíritu colaborativo que impulsa la innovación y el progreso empresarial en el ámbito local.',
      'En un mundo globalizado, las alianzas estratégicas internacionales se han convertido en un pilar fundamental para el éxito empresarial. Estas asociaciones trascienden fronteras y permiten a las empresas expandir su alcance a nivel global. Colaborar con socios internacionales no solo brinda acceso a nuevos mercados, sino que también proporciona una diversidad de perspectivas, tecnologías y talentos. Las alianzas estratégicas internacionales son un testimonio del compromiso de las empresas con la innovación, la diversificación y la creación de un impacto positivo a escala mundial.',
      'En el dinámico escenario empresarial actual, las alianzas estratégicas, tanto a nivel nacional como internacional, desempeñan un papel esencial en la construcción de un futuro empresarial sostenible. Estas asociaciones no solo generan oportunidades de crecimiento, sino que también fomentan la resiliencia empresarial al compartir riesgos y recompensas. La colaboración estratégica se erige como un catalizador para la innovación, la eficiencia operativa y la adaptabilidad a un entorno empresarial en constante cambio. En última instancia, las alianzas estratégicas se perfilan como un vehículo poderoso para forjar el camino hacia el éxito a largo plazo.',
    ],
    images: [imgAlianza1, imgAlianza2, imgAlianza3],
  };

  useEffect(() => {
    // Desplaza la página al principio al cargar el componente
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Agrega desplazamiento suave 
    });
  }, []);

  return (
    <div>
      <Wallpaper imageUrl={space} />
      <Header />
      <Nav />
      <Historia {...historiaData} />
      <Footer />
    </div>
  );
}

export default HistoriaExito4;
