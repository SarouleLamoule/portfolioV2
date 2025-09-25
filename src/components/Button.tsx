'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'var(--color-bg-secondary)',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border-primary)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-accent-red)',
          border: '2px solid var(--color-accent-red)',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-text-primary)',
          border: 'none',
        };
      default:
        return {
          backgroundColor: 'var(--color-accent-red)',
          color: 'white',
          border: 'none',
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: 'var(--spacing-2) var(--spacing-4)',
          fontSize: 'var(--font-size-sm)',
        };
      case 'lg':
        return {
          padding: 'var(--spacing-4) var(--spacing-8)',
          fontSize: 'var(--font-size-lg)',
        };
      default:
        return {
          padding: 'var(--spacing-3) var(--spacing-6)',
          fontSize: 'var(--font-size-base)',
        };
    }
  };

  const baseStyles = {
    ...getVariantStyles(),
    ...getSizeStyles(),
    borderRadius: 'var(--radius-lg)',
    fontWeight: 'var(--font-weight-medium)',
    cursor: 'pointer',
    transition: 'all var(--duration-200) var(--ease-in-out)',
    boxShadow: 'var(--shadow-sm)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-2)',
    textDecoration: 'none',
    fontFamily: 'var(--font-family-primary)',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;

    if (variant === 'primary') {
      target.style.backgroundColor = 'var(--color-accent-red-light)';
      target.style.transform = 'translateY(-2px)';
      target.style.boxShadow = 'var(--shadow-lg)';
    } else if (variant === 'outline') {
      target.style.backgroundColor = 'var(--color-accent-red)';
      target.style.color = 'white';
      target.style.transform = 'translateY(-2px)';
    } else if (variant === 'secondary') {
      target.style.backgroundColor = 'var(--color-bg-tertiary)';
      target.style.transform = 'translateY(-1px)';
    } else if (variant === 'ghost') {
      target.style.backgroundColor = 'var(--color-bg-secondary)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;

    if (variant === 'primary') {
      target.style.backgroundColor = 'var(--color-accent-red)';
      target.style.transform = 'translateY(0)';
      target.style.boxShadow = 'var(--shadow-sm)';
    } else if (variant === 'outline') {
      target.style.backgroundColor = 'transparent';
      target.style.color = 'var(--color-accent-red)';
      target.style.transform = 'translateY(0)';
    } else if (variant === 'secondary') {
      target.style.backgroundColor = 'var(--color-bg-secondary)';
      target.style.transform = 'translateY(0)';
    } else if (variant === 'ghost') {
      target.style.backgroundColor = 'transparent';
    }
  };

  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      style={baseStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Particules d'énergie */}
      <div
        className="btn-particles"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${i * 25 + 12.5}%`,
              top: '50%',
              width: '3px',
              height: '3px',
              backgroundColor:
                variant === 'primary' ? 'white' : 'var(--color-accent-red)',
              borderRadius: '50%',
              boxShadow: `0 0 8px ${variant === 'primary' ? 'white' : 'var(--color-accent-red)'}`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Ligne de scan */}
      <div
        className="btn-scan"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${variant === 'primary' ? 'white' : 'var(--color-accent-red)'}, transparent)`,
          opacity: 0,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Effet de ripple au clic */}
      <div
        className="btn-ripple"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '20px',
          height: '20px',
          backgroundColor:
            variant === 'primary'
              ? 'rgba(255, 255, 255, 0.3)'
              : 'rgba(180, 35, 45, 0.3)',
          borderRadius: '50%',
          opacity: 0,
          zIndex: 2,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Contenu du bouton */}
      <span style={{ position: 'relative', zIndex: 3 }}>{children}</span>
    </button>
  );
}
