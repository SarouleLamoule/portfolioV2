'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  tag: string;
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  technologies: string[];
  description?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
  className?: string;
}

export default function ProjectCard({
  project,
  onClick,
  className = '',
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  const getStatusColor = () => {
    switch (project.status) {
      case 'completed':
        return 'var(--color-success)';
      case 'in-progress':
        return 'var(--color-warning)';
      case 'planned':
        return 'var(--color-info)';
      default:
        return 'var(--color-text-tertiary)';
    }
  };

  const getStatusText = () => {
    switch (project.status) {
      case 'completed':
        return 'TERMINÉ';
      case 'in-progress':
        return 'EN COURS';
      case 'planned':
        return 'PLANIFIÉ';
      default:
        return 'INCONNU';
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  return (
    <div
      className={`project-card ${className}`}
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-4)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all var(--duration-200) var(--ease-in-out)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          e.currentTarget.style.borderColor = 'var(--color-border-primary)';
        }
      }}
    >
      {/* Watermark de fond */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          fontSize: 'var(--font-size-4xl)',
          fontWeight: 'var(--font-weight-extrabold)',
          color: 'rgba(0, 255, 65, 0.03)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 1,
        }}
      ></div>

      {/* En-tête avec image et status */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-4)',
          marginBottom: 'var(--spacing-4)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Image du projet */}
        <div
          style={{
            position: 'relative',
            width: '80px',
            height: '80px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '2px solid var(--color-accent-primary)',
            boxShadow: 'var(--shadow-classified)',
          }}
        >
          {!imageError ? (
            <Image
              src={project.image}
              alt={`Projet ${project.name}`}
              fill
              style={{
                objectFit: 'cover',
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-tertiary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            ></div>
          )}

          {/* Overlay de classification */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 255, 65, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: 'var(--color-accent-primary)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-bold)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
              }}
            ></span>
          </div>
        </div>

        {/* Informations de base */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              color: 'var(--color-text-primary)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-semibold)',
              margin: 0,
              marginBottom: 'var(--spacing-1)',
              fontFamily: 'var(--font-family-display)',
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--font-size-sm)',
              margin: 0,
              marginBottom: 'var(--spacing-2)',
            }}
          >
            {project.description}
          </p>

          {/* Badge de statut */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-1)',
              backgroundColor: getStatusColor(),
              color:
                project.status === 'in-progress'
                  ? 'var(--color-bg-primary)'
                  : 'white',
              padding: 'var(--spacing-1) var(--spacing-2)',
              borderRadius: 'var(--radius-base)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-bold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow:
                project.status === 'in-progress'
                  ? '0 0 8px rgba(255, 255, 0, 0.3)'
                  : 'none',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor:
                  project.status === 'in-progress'
                    ? 'var(--color-bg-primary)'
                    : 'white',
                boxShadow:
                  project.status === 'in-progress'
                    ? '0 0 4px rgba(0, 0, 0, 0.3)'
                    : '0 0 4px rgba(255, 255, 255, 0.5)',
              }}
            />
            {getStatusText()}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--spacing-1)',
          marginBottom: 'var(--spacing-3)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            style={{
              backgroundColor: 'var(--color-bg-tertiary)',
              color: 'var(--color-text-primary)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-medium)',
              border: '1px solid var(--color-border-primary)',
            }}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span
            style={{
              backgroundColor: 'var(--color-bg-tertiary)',
              color: 'var(--color-text-tertiary)',
              padding: 'var(--spacing-1) var(--spacing-2)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-medium)',
              border: '1px solid var(--color-border-primary)',
            }}
          >
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Date de début */}
      <div
        style={{
          marginTop: 'var(--spacing-3)',
          paddingTop: 'var(--spacing-3)',
          borderTop: '1px solid var(--color-border-primary)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: 'var(--color-text-tertiary)',
            fontSize: 'var(--font-size-xs)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Début: {project.startDate}
        </p>
      </div>

      {/* Effet de bruit */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 65, 0.01) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 65, 0.01) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
}
