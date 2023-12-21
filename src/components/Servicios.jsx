// Servicios.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import './style.css';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';

function Servicios() {
  return (
    <div>
        <Wallpaper imageUrl={space} />
      <Header />
      <Nav />
      <div className="txt_container">
        {/* Contenido específico de la página "Servicios" */}
        <h1>Nuestros Servicios</h1>
        <p>
  Ofrecemos una amplia gama de servicios diseñados para satisfacer las necesidades de nuestros clientes. Desde consultoría hasta desarrollo personalizado, estamos aquí para ayudar. Descubre cómo podemos contribuir al éxito de tu proyecto.
</p>


<p>
  Nos enorgullece ofrecer una amplia variedad de servicios diseñados para satisfacer las demandas cambiantes del mundo empresarial actual. Desde la consultoría estratégica hasta la implementación de soluciones tecnológicas de vanguardia, estamos comprometidos con el éxito de nuestros clientes.
</p>

<ol>
  <li>
    <strong>Consultoría Estratégica</strong>
    <p>
      Nuestro equipo de consultores altamente calificados trabaja en estrecha colaboración contigo para comprender tu visión, objetivos y desafíos empresariales. Proporcionamos asesoramiento estratégico para optimizar tus operaciones, identificar oportunidades de crecimiento y mejorar la eficiencia general de tu organización.
    </p>
  </li>

  <li>
    <strong>Desarrollo de Software Personalizado</strong>
    <p>
      Ofrecemos servicios de desarrollo de software a medida para adaptarnos a las necesidades específicas de tu empresa. Desde la creación de aplicaciones personalizadas hasta la implementación de soluciones empresariales complejas, nuestro equipo de desarrolladores está listo para convertir tus ideas en realidad.
    </p>
  </li>

  <li>
    <strong>Marketing Digital Integral</strong>
    <p>
      Maximiza tu presencia en línea con nuestras estrategias de marketing digital. Desde la optimización de motores de búsqueda (SEO) hasta la gestión de campañas publicitarias en redes sociales, te ayudamos a construir una presencia sólida en la web y a llegar a tu audiencia objetivo de manera efectiva.
    </p>
  </li>

  <li>
    <strong>Desarrollo y Gestión de Proyectos</strong>
    <p>
      Si buscas una ejecución eficiente de proyectos, nuestro equipo de gestión de proyectos está aquí para ayudarte. Desde la planificación inicial hasta la implementación y la evaluación post-implementación, garantizamos una gestión de proyectos sin problemas y resultados exitosos.
    </p>
  </li>

  <li>
    <strong>Capacitación y Desarrollo</strong>
    <p>
      Invertimos en el crecimiento de tu equipo a través de programas de capacitación personalizados. Desarrollamos sesiones de formación adaptadas a tus necesidades empresariales, mejorando las habilidades y el conocimiento de tus empleados.
    </p>
  </li>
</ol>

      </div>
      <Footer />
    </div>
  );
}

export default Servicios;
