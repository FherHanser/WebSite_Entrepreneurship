// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import Spaceship from './components/Spaceship';
import Footer from './components/Footer';
import Nav from './components/Nav'; 
import AuthorMessage from './components/AuthorMessage';
import section1Image from './components/images/section2.png';
import section2Image from './components/images/section3.jpg';
import section3Image from './components/images/section4.jpg';
import section4Image from './components/images/section44.jpg';
import section5Image from './components/images/section5.jpg';
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios';
import Cursos from './components/Cursos';
import Alianzas from './components/Alianzas';
import Market from './components/Market';
import Contacto from './components/Contacto';
import './components/style.css';



const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Spaceship />
      <Section
        id="section1"
        title='"Historias que Inspiran"'
        content='"Historias que Inspiran" es una recopilación cautivadora de relatos llenos de momentos transformadores...'
        imageSrc={section1Image}
        parallaxClass="parallax1"
      />
      <Section
        id="section"
        title='"La Constancia y Perseverancia tienen sus frutos"'
        content='"Este lema sirve como recordatorio de que el esfuerzo sostenido, incluso en los momentos difíciles, conduce al éxito a largo plazo...'
        imageSrc={section2Image}
        parallaxClass="parallax1"
      />
      <Section
        id="section"
        title='"Trabajo en Familia"'
        content='"Este enfoque laboral no solo fortalece los lazos afectivos, sino que también impulsa el rendimiento y la productividad...'
        imageSrc={section3Image}
        parallaxClass="parallax1"
      />
      <Section
        id="section"
        title='"Deseo de Superación"'
        content='"Estos relatos inspiradores ilustran cómo el anhelo de superación impulsa a las personas a enfrentar desafíos, aprender de las adversidades y alcanzar nuevas alturas...'
        imageSrc={section4Image}
        parallaxClass="parallax1"
      />
      <Section
        id="section"
        title='"Siempre Positivo"'
        content='"Estas historias resaltan cómo cultivar una mentalidad positiva no solo mejora la calidad de vida, sino que también sirve como fuente de inspiración para aquellos que buscan superar obstáculos...'
        imageSrc={section5Image}
        parallaxClass="parallax1"
      />
      <AuthorMessage />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Alianzas" element={<Alianzas />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Contacto" element={<Contacto />} />

        {/* Otras rutas y componentes según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;
