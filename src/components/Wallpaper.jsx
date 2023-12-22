import React, { useRef, useEffect } from 'react';
import './style.css'; 

const Wallpaper = ({ imageUrl }) => {
  const wallpaperRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { current: wallpaper } = wallpaperRef;

      if (wallpaper) {
        const offsetX = clientX / window.innerWidth - 0.1;
        const offsetY = clientY / window.innerHeight - 0.1;

        wallpaper.style.transform = `scale(${1 + Math.abs(offsetX) + Math.abs(offsetY)})`;
        wallpaper.style.opacity = 0.3 + Math.abs(offsetX) + Math.abs(offsetY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="wallpaper-container" ref={wallpaperRef}>
      <img src={imageUrl} alt="Wallpaper" className="wallpaper-image" />
    </div>
  );
};

export default Wallpaper;
