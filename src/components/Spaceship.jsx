// Spaceship.js
import React, { useEffect } from 'react';
import nave from './images/nav.png';

function Spaceship() {
  useEffect(() => {
    animateSpaceship(); // Llamar a tu función animateSpaceship al montar el componente
  }, []);

  function animateSpaceship() {
    const spaceshipContainer = document.getElementById('spaceshipContainer');
    const spaceship = document.getElementById('spaceship');
    const windowHeight = window.innerHeight;
    const spaceshipHeight = spaceship.clientHeight;

    let currentPosition = windowHeight;

    function moveSpaceship() {
      if (currentPosition < -spaceshipHeight) {
        currentPosition = windowHeight;
      }

      spaceshipContainer.style.transform = `translateY(${currentPosition}px)`;
      currentPosition -= 2; // Ajusta la velocidad de desplazamiento según sea necesario

      requestAnimationFrame(moveSpaceship);
    }

    spaceship.addEventListener('click', function () {
      spaceship.classList.add('paused');
      setTimeout(function () {
        spaceship.classList.remove('paused');
      }, 400); // Ajusta la duración de la pausa (en milisegundos)
    });

    moveSpaceship();
  }

  return (
    <div id="spaceshipContainer">
      <img src={nave} alt="Spaceship" id="spaceship" />
    </div>
  );
}

export default Spaceship;
