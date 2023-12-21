// Servicios.js
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import CardServicios from './CardServicios'; // Importa el nuevo componente
import './style.css';
import Wallpaper from './Wallpaper';
import space from './images/section1.jpg';
import imgService1 from './images/service1.jpg';
import imgService2 from './images/service2.jpg';
import imgService3 from './images/service3.jpg';
import imgService4 from './images/service4.jpg';
import imgService5 from './images/service5.jpg';
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

        {/* Reemplaza la lista con las tarjetas de servicios */}
        <div className="tarjetas-servicios">
          <CardServicios
            titulo="Consultoría Estratégica"
            texto="Nuestro equipo de consultores altamente calificados trabaja en estrecha colaboración contigo para comprender tu visión, objetivos y desafíos empresariales. Proporcionamos asesoramiento estratégico para optimizar tus operaciones, identificar oportunidades de crecimiento y mejorar la eficiencia general de tu organización."
            imagenSrc={imgService1}
          />
          <CardServicios
            titulo="Desarrollo de Software Personalizado"
            texto="Ofrecemos servicios de desarrollo de software a medida para adaptarnos a las necesidades específicas de tu empresa. Desde la creación de aplicaciones personalizadas hasta la implementación de soluciones empresariales complejas, nuestro equipo de desarrolladores está listo para convertir tus ideas en realidad."
            imagenSrc={imgService2}
          />
          <CardServicios
            titulo="Marketing Digital Integral"
            texto="Maximiza tu presencia en línea con nuestras estrategias de marketing digital. Desde la optimización de motores de búsqueda (SEO) hasta la gestión de campañas publicitarias en redes sociales, te ayudamos a construir una presencia sólida en la web y a llegar a tu audiencia objetivo de manera efectiva."
            imagenSrc={imgService3}
          />
          <CardServicios
            titulo="Desarrollo y Gestión de Proyectos"
            texto="Si buscas una ejecución eficiente de proyectos, nuestro equipo de gestión de proyectos está aquí para ayudarte. Desde la planificación inicial hasta la implementación y la evaluación post-implementación, garantizamos una gestión de proyectos sin problemas y resultados exitosos."
            imagenSrc={imgService4}
          />
          <CardServicios
            titulo="Capacitación y Desarrollo"
            texto="Invertimos en el crecimiento de tu equipo a través de programas de capacitación personalizados. Desarrollamos sesiones de formación adaptadas a tus necesidades empresariales, mejorando las habilidades y el conocimiento de tus empleados."
            imagenSrc={imgService5}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Servicios;
