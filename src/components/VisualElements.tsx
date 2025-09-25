'use client';

import { ReactNode } from 'react';

interface ProjectStampProps {
  children: ReactNode;
  className?: string;
}

export function ProjectStamp({ children, className = '' }: ProjectStampProps) {
  return (
    <div
      className={`project-stamp ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: 'var(--spacing-2) var(--spacing-4)',
        backgroundColor: 'var(--color-bg-secondary)',
        border: '2px solid var(--color-accent-primary)',
        borderRadius: 'var(--radius-lg)',
        color: 'var(--color-accent-primary)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-bold)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        textAlign: 'center',
        boxShadow: 'var(--shadow-classified)',
        transform: 'rotate(-5deg)',
        transition: 'transform var(--duration-200) var(--ease-in-out)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'rotate(-5deg) scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'rotate(-5deg) scale(1)';
      }}
    >
      {/* Effet de bruit sur le tampon */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 255, 65, 0.1) 0%, transparent 50%)
          `,
          borderRadius: 'var(--radius-lg)',
          pointerEvents: 'none',
        }}
      />

      {/* Lignes de scan */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 65, 0.1) 2px,
              rgba(0, 255, 65, 0.1) 4px
            )
          `,
          borderRadius: 'var(--radius-lg)',
          pointerEvents: 'none',
        }}
      />

      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
    </div>
  );
}

interface ProjectWatermarkProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  className?: string;
}

export function ProjectWatermark({
  text = 'PROJECT',
  size = 'md',
  opacity = 0.05,
  className = '',
}: ProjectWatermarkProps) {
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { fontSize: 'var(--font-size-2xl)' };
      case 'lg':
        return { fontSize: 'var(--font-size-5xl)' };
      case 'xl':
        return { fontSize: 'var(--font-size-6xl)' };
      default:
        return { fontSize: 'var(--font-size-4xl)' };
    }
  };

  return (
    <div
      className={`project-watermark ${className}`}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-45deg)',
        ...getSizeStyles(),
        fontWeight: 'var(--font-weight-extrabold)',
        color: `rgba(0, 255, 65, ${opacity})`,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 1,
        fontFamily: 'var(--font-family-display)',
        letterSpacing: '0.1em',
        textShadow: `0 0 20px rgba(0, 255, 65, ${opacity * 2})`,
      }}
    >
      {text}
    </div>
  );
}

interface ProjectBadgeProps {
  level: 'public' | 'private' | 'confidential' | 'restricted';
  className?: string;
}

export function ProjectBadge({ level, className = '' }: ProjectBadgeProps) {
  const getLevelStyles = () => {
    switch (level) {
      case 'public':
        return {
          backgroundColor: 'var(--color-text-tertiary)',
          text: 'PUBLIC',
        };
      case 'private':
        return {
          backgroundColor: 'var(--color-accent-primary)',
          text: 'PRIVATE',
        };
      case 'confidential':
        return {
          backgroundColor: 'var(--color-warning)',
          text: 'CONFIDENTIAL',
        };
      case 'restricted':
        return {
          backgroundColor: 'var(--color-error)',
          text: 'RESTRICTED',
        };
      default:
        return {
          backgroundColor: 'var(--color-text-tertiary)',
          text: 'UNKNOWN',
        };
    }
  };

  const { backgroundColor, text } = getLevelStyles();

  return (
    <div
      className={`project-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-1)',
        backgroundColor,
        color: 'white',
        padding: 'var(--spacing-1) var(--spacing-3)',
        borderRadius: 'var(--radius-base)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-bold)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'white',
          boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)',
        }}
      />
      {text}
    </div>
  );
}

interface ScanlineEffectProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function ScanlineEffect({
  children,
  intensity = 'medium',
  className = '',
}: ScanlineEffectProps) {
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return {
          opacity: 0.1,
          height: '1px',
        };
      case 'high':
        return {
          opacity: 0.3,
          height: '3px',
        };
      default:
        return {
          opacity: 0.2,
          height: '2px',
        };
    }
  };

  const { opacity, height } = getIntensityStyles();

  return (
    <div
      className={`scanline-effect ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}

      {/* Lignes de scan animées */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 4px,
              rgba(0, 255, 65, ${opacity}) 4px,
              rgba(0, 255, 65, ${opacity}) ${4 + parseInt(height)}px
            )
          `,
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'scanline-move 3s linear infinite',
        }}
      />

      <style jsx>{`
        @keyframes scanline-move {
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

interface GlitchTextProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function GlitchText({
  children,
  intensity = 'medium',
  className = '',
}: GlitchTextProps) {
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return {
          animationDuration: '4s',
          animationDelay: '0s',
        };
      case 'high':
        return {
          animationDuration: '1s',
          animationDelay: '0s',
        };
      default:
        return {
          animationDuration: '2s',
          animationDelay: '0s',
        };
    }
  };

  const { animationDuration, animationDelay } = getIntensityStyles();

  return (
    <span
      className={`glitch-text ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        color: 'var(--color-accent-primary)',
        fontWeight: 'var(--font-weight-bold)',
        textShadow: 'var(--shadow-classified)',
        animation: `glitch ${animationDuration} infinite ${animationDelay}`,
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
            transform: translate(-1px, 1px);
            filter: hue-rotate(90deg);
          }
          20% {
            transform: translate(1px, -1px);
            filter: hue-rotate(180deg);
          }
          30% {
            transform: translate(-1px, -1px);
            filter: hue-rotate(270deg);
          }
          40% {
            transform: translate(1px, 1px);
            filter: hue-rotate(360deg);
          }
          50% {
            transform: translate(-1px, 1px);
            filter: hue-rotate(45deg);
          }
          60% {
            transform: translate(1px, -1px);
            filter: hue-rotate(135deg);
          }
          70% {
            transform: translate(-1px, -1px);
            filter: hue-rotate(225deg);
          }
          80% {
            transform: translate(1px, 1px);
            filter: hue-rotate(315deg);
          }
          90% {
            transform: translate(-1px, 1px);
            filter: hue-rotate(45deg);
          }
        }
      `}</style>
    </span>
  );
}

interface NoiseOverlayProps {
  children: ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function NoiseOverlay({
  children,
  intensity = 'medium',
  className = '',
}: NoiseOverlayProps) {
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return {
          opacity: 0.02,
          size: '1px',
        };
      case 'high':
        return {
          opacity: 0.05,
          size: '3px',
        };
      default:
        return {
          opacity: 0.03,
          size: '2px',
        };
    }
  };

  const { opacity } = getIntensityStyles();

  return (
    <div
      className={`noise-overlay ${className}`}
      style={{
        position: 'relative',
      }}
    >
      {children}

      {/* Overlay de bruit */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 65, ${opacity}) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 65, ${opacity}) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 255, 65, ${opacity}) 0%, transparent 50%),
            radial-gradient(circle at 60% 40%, rgba(0, 255, 65, ${opacity}) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
}
