'use client';

import { ReactNode, useEffect, useState } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 600,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getDirectionStyles = () => {
    switch (direction) {
      case 'down':
        return { transform: 'translateY(-20px)' };
      case 'left':
        return { transform: 'translateX(20px)' };
      case 'right':
        return { transform: 'translateX(-20px)' };
      default:
        return { transform: 'translateY(20px)' };
    }
  };

  return (
    <div
      className={`fade-in ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        ...getDirectionStyles(),
        transition: `opacity ${duration}ms var(--ease-in-out), transform ${duration}ms var(--ease-in-out)`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggeredFadeInProps {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function StaggeredFadeIn({
  children,
  delay = 0,
  stagger = 100,
  duration = 600,
  direction = 'up',
  className = '',
}: StaggeredFadeInProps) {
  // Si children n'est pas un tableau, on le convertit en tableau
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={`staggered-fade-in ${className}`}>
      {childrenArray.map((child, index) => (
        <FadeIn
          key={index}
          delay={delay + index * stagger}
          duration={duration}
          direction={direction}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  );
}

interface ScanlineAnimationProps {
  children: ReactNode;
  speed?: 'slow' | 'medium' | 'fast';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function ScanlineAnimation({
  children,
  speed = 'medium',
  intensity = 'medium',
  className = '',
}: ScanlineAnimationProps) {
  const getSpeedStyles = () => {
    switch (speed) {
      case 'slow':
        return { animationDuration: '4s' };
      case 'fast':
        return { animationDuration: '1s' };
      default:
        return { animationDuration: '2s' };
    }
  };

  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return { opacity: 0.1, height: '1px' };
      case 'high':
        return { opacity: 0.3, height: '3px' };
      default:
        return { opacity: 0.2, height: '2px' };
    }
  };

  const { animationDuration } = getSpeedStyles();
  const { opacity, height } = getIntensityStyles();

  return (
    <div
      className={`scanline-animation ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}

      {/* Ligne de scan animée */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: `${height}`,
          background: `linear-gradient(90deg, transparent, var(--color-accent-red), transparent)`,
          opacity,
          animation: `scanline-move ${animationDuration} linear infinite`,
          zIndex: 2,
        }}
      />

      <style jsx>{`
        @keyframes scanline-move {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
}

interface PulseEffectProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  duration?: number;
  className?: string;
}

export function PulseEffect({
  children,
  intensity = 'medium',
  duration = 2000,
  className = '',
}: PulseEffectProps) {
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return { scale: 1.02, opacity: 0.8 };
      case 'high':
        return { scale: 1.1, opacity: 0.6 };
      default:
        return { scale: 1.05, opacity: 0.7 };
    }
  };

  const { scale, opacity } = getIntensityStyles();

  return (
    <div
      className={`pulse-effect ${className}`}
      style={{
        animation: `pulse ${duration}ms ease-in-out infinite`,
      }}
    >
      {children}

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(${scale});
            opacity: ${opacity};
          }
        }
      `}</style>
    </div>
  );
}

interface GlitchEffectProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  frequency?: 'low' | 'medium' | 'high';
  className?: string;
}

export function GlitchEffect({
  children,
  intensity = 'medium',
  frequency = 'medium',
  className = '',
}: GlitchEffectProps) {
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return {
          translateX: '1px',
          translateY: '1px',
          hueRotate: '45deg',
        };
      case 'high':
        return {
          translateX: '3px',
          translateY: '3px',
          hueRotate: '180deg',
        };
      default:
        return {
          translateX: '2px',
          translateY: '2px',
          hueRotate: '90deg',
        };
    }
  };

  const getFrequencyStyles = () => {
    switch (frequency) {
      case 'low':
        return { animationDuration: '4s' };
      case 'high':
        return { animationDuration: '1s' };
      default:
        return { animationDuration: '2s' };
    }
  };

  const { translateX, translateY, hueRotate } = getIntensityStyles();
  const { animationDuration } = getFrequencyStyles();

  return (
    <div
      className={`glitch-effect ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        animation: `glitch ${animationDuration} infinite`,
      }}
    >
      {children}

      <style jsx>{`
        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          10% {
            transform: translate(-${translateX}, ${translateY});
            filter: hue-rotate(${hueRotate});
          }
          20% {
            transform: translate(${translateX}, -${translateY});
            filter: hue-rotate(-${hueRotate});
          }
          30% {
            transform: translate(-${translateX}, -${translateY});
            filter: hue-rotate(${hueRotate});
          }
          40% {
            transform: translate(${translateX}, ${translateY});
            filter: hue-rotate(-${hueRotate});
          }
          50% {
            transform: translate(-${translateX}, ${translateY});
            filter: hue-rotate(${hueRotate});
          }
          60% {
            transform: translate(${translateX}, -${translateY});
            filter: hue-rotate(-${hueRotate});
          }
          70% {
            transform: translate(-${translateX}, -${translateY});
            filter: hue-rotate(${hueRotate});
          }
          80% {
            transform: translate(${translateX}, ${translateY});
            filter: hue-rotate(-${hueRotate});
          }
          90% {
            transform: translate(-${translateX}, ${translateY});
            filter: hue-rotate(${hueRotate});
          }
        }
      `}</style>
    </div>
  );
}

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypewriterEffect({
  text,
  speed = 50,
  delay = 0,
  className = '',
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayedText('');
    }, delay);

    return () => clearTimeout(initialTimer);
  }, [delay]);

  return (
    <span
      className={`typewriter-effect ${className}`}
      style={{
        fontFamily: 'var(--font-family-mono)',
        color: 'var(--color-accent-red)',
        fontWeight: 'var(--font-weight-medium)',
      }}
    >
      {displayedText}
      <span
        style={{
          animation: 'blink 1s infinite',
          color: 'var(--color-accent-red)',
        }}
      >
        |
      </span>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}

interface MatrixRainProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function MatrixRain({
  children,
  intensity = 'medium',
  className = '',
}: MatrixRainProps) {
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return { opacity: 0.1, speed: '8s' };
      case 'high':
        return { opacity: 0.3, speed: '2s' };
      default:
        return { opacity: 0.2, speed: '4s' };
    }
  };

  const { opacity, speed } = getIntensityStyles();

  return (
    <div
      className={`matrix-rain ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}

      {/* Effet de pluie de caractères */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, ${opacity}) 2px,
              rgba(0, 255, 0, ${opacity}) 4px
            )
          `,
          animation: `matrix-fall ${speed} linear infinite`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}

interface HologramEffectProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function HologramEffect({
  children,
  intensity = 'medium',
  className = '',
}: HologramEffectProps) {
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return { opacity: 0.1, blur: '1px' };
      case 'high':
        return { opacity: 0.3, blur: '3px' };
      default:
        return { opacity: 0.2, blur: '2px' };
    }
  };

  const { opacity, blur } = getIntensityStyles();

  return (
    <div
      className={`hologram-effect ${className}`}
      style={{
        position: 'relative',
        filter: `blur(${blur})`,
        animation: 'hologram-flicker 3s ease-in-out infinite',
      }}
    >
      {children}

      {/* Overlay holographique */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(45deg, 
              transparent 0%, 
              rgba(0, 255, 255, ${opacity}) 25%, 
              transparent 50%, 
              rgba(255, 0, 255, ${opacity}) 75%, 
              transparent 100%
            )
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <style jsx>{`
        @keyframes hologram-flicker {
          0%,
          100% {
            opacity: 1;
            filter: blur(${blur});
          }
          50% {
            opacity: 0.8;
            filter: blur(${parseInt(blur) + 1}px);
          }
        }
      `}</style>
    </div>
  );
}
