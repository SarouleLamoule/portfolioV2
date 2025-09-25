'use client';

import { ReactNode, useState } from 'react';

interface ProjectDocumentProps {
  children: ReactNode;
  level?: 'public' | 'private' | 'confidential';
  title?: string;
  className?: string;
}

export default function ProjectDocument({
  children,
  level = 'public',
  title,
  className = '',
}: ProjectDocumentProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = () => {
    switch (level) {
      case 'private':
        return 'var(--color-warning)';
      case 'confidential':
        return 'var(--color-error)';
      default:
        return 'var(--color-accent-primary)';
    }
  };

  const getLevelText = () => {
    switch (level) {
      case 'private':
        return 'PRIVÉ';
      case 'confidential':
        return 'CONFIDENTIEL';
      default:
        return 'PUBLIC';
    }
  };

  return (
    <div
      className={`project-document ${className}`}
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-bg-secondary)',
        border: `2px solid ${getLevelColor()}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-6)',
        margin: 'var(--spacing-6) 0',
        boxShadow: 'var(--shadow-redacted)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Particules de sécurité autour du document */}
      <div
        className="document-particles"
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          right: '-10px',
          bottom: '-10px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {[...Array(12)].map((_, i) => {
          // Utiliser des valeurs déterministes pour éviter les erreurs d'hydratation
          const angles = [
            0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
          ];
          const angle = angles[i] * (Math.PI / 180);
          const radius = 80;
          const x = Math.round(Math.cos(angle) * radius * 100) / 100;
          const y = Math.round(Math.sin(angle) * radius * 100) / 100;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                width: '3px',
                height: '3px',
                backgroundColor: getLevelColor(),
                borderRadius: '50%',
                boxShadow: `0 0 12px ${getLevelColor()}`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          );
        })}
      </div>

      {/* Watermark de fond avec animation */}
      <div
        className="document-watermark"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          fontSize: 'var(--font-size-6xl)',
          fontWeight: 'var(--font-weight-extrabold)',
          color: 'rgba(0, 255, 65, 0.05)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 1,
          transition: 'opacity 0.3s ease',
          opacity: isHovered ? 0.1 : 0.05,
        }}
      >
        {getLevelText()}
      </div>

      {/* Ligne de scan animée */}
      <div
        className="scan-line"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${getLevelColor()}, transparent)`,
          opacity: 0,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Flux de données vertical */}
      <div
        className="document-data-stream"
        style={{
          position: 'absolute',
          left: '20%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: `linear-gradient(to bottom, transparent, ${getLevelColor()}, transparent)`,
          opacity: 0,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />
      <div
        className="document-data-stream"
        style={{
          position: 'absolute',
          left: '80%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: `linear-gradient(to bottom, transparent, ${getLevelColor()}, transparent)`,
          opacity: 0,
          zIndex: 3,
          pointerEvents: 'none',
          animationDelay: '1.5s',
        }}
      />

      {/* En-tête du document */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--spacing-4)',
          paddingBottom: 'var(--spacing-4)',
          borderBottom: `1px solid ${getLevelColor()}`,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div>
          {title && (
            <h3
              style={{
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                margin: 0,
                fontFamily: 'var(--font-family-display)',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
              }}
            >
              {title}
            </h3>
          )}
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--font-size-xs)',
              margin: 0,
              marginTop: 'var(--spacing-1)',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
            }}
          >
            Document projet — Accès {level === 'public' ? 'libre' : 'restreint'}
          </p>
        </div>

        {/* Badge de classification avec animation */}
        <div
          className="security-badge"
          style={{
            backgroundColor: getLevelColor(),
            color: 'white',
            padding: 'var(--spacing-1) var(--spacing-3)',
            borderRadius: 'var(--radius-base)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            boxShadow: isHovered
              ? `0 0 15px ${getLevelColor()}`
              : 'var(--shadow-sm)',
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          {getLevelText()}
        </div>
      </div>

      {/* Contenu du document avec effet de révélation */}
      <div
        className="document-content"
        style={{
          position: 'relative',
          zIndex: 2,
          color: 'var(--color-text-primary)',
          transition: 'all 0.3s ease',
          filter: isHovered ? 'blur(0px)' : 'blur(1px)',
          opacity: isHovered ? 1 : 0.8,
        }}
      >
        {children}
      </div>

      {/* Grille de sécurité animée */}
      <div
        className="document-security-grid"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.2,
        }}
      />

      {/* Effet de bruit avec animation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 65, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 65, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 255, 65, 0.02) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: isHovered ? 0.05 : 0.02,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Effet de glow sur les bords */}
      <div
        className="document-border"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'var(--radius-lg)',
          boxShadow: `0 0 5px ${getLevelColor()}`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Indicateur de déclassification */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--spacing-2)',
            right: 'var(--spacing-2)',
            backgroundColor: 'var(--color-success)',
            color: 'white',
            padding: 'var(--spacing-1) var(--spacing-2)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-bold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            zIndex: 4,
            animation: 'contentReveal 0.3s ease forwards',
          }}
        >
          DÉCLASSIFIÉ
        </div>
      )}
    </div>
  );
}
