'use client';

import { useEffect, useState } from 'react';

export default function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Effet de glow cybersécurité qui suit la souris */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: isVisible
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 65, 0.02) 0%, transparent 50%)`
            : 'transparent',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Curseur avec glow cybersécurité */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        {isVisible && (
          <>
            {/* Glow principal */}
            <div
              style={{
                position: 'absolute',
                left: mousePosition.x - 15,
                top: mousePosition.y - 15,
                width: '30px',
                height: '30px',
                background:
                  'radial-gradient(circle, rgba(0, 255, 65, 0.3) 0%, rgba(0, 255, 65, 0.1) 50%, transparent 100%)',
                borderRadius: '50%',
                animation: 'cyberGlow 2s ease-in-out infinite',
                transition: 'all 0.1s ease',
              }}
            />

            {/* Glow secondaire */}
            <div
              style={{
                position: 'absolute',
                left: mousePosition.x - 8,
                top: mousePosition.y - 8,
                width: '16px',
                height: '16px',
                background:
                  'radial-gradient(circle, rgba(0, 255, 65, 0.6) 0%, rgba(0, 255, 65, 0.2) 70%, transparent 100%)',
                borderRadius: '50%',
                animation: 'cyberGlow 1.5s ease-in-out infinite reverse',
                transition: 'all 0.1s ease',
              }}
            />

            {/* Point central */}
            <div
              style={{
                position: 'absolute',
                left: mousePosition.x - 2,
                top: mousePosition.y - 2,
                width: '4px',
                height: '4px',
                backgroundColor: 'rgba(0, 255, 65, 0.8)',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(0, 255, 65, 1)',
                transition: 'all 0.1s ease',
              }}
            />
          </>
        )}
      </div>
    </>
  );
}
