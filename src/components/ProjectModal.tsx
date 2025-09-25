'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  name: string;
  tag: string;
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  technologies: string[];
  description?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Gérer la fermeture avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Gérer le clic en dehors du modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !project) {
    return null;
  }

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

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)',
        zIndex: 'var(--z-index-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-4)',
      }}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="project-modal-content"
        style={{
          backgroundColor: 'var(--color-bg-primary)',
          border: '2px solid var(--color-accent-primary)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: 'var(--shadow-redacted)',
        }}
      >
        {/* En-tête du modal */}
        <div
          className="project-modal-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--spacing-6)',
            borderBottom: '1px solid var(--color-border-primary)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--color-bg-primary)',
            zIndex: 2,
          }}
        >
          <div>
            <h2
              className="project-modal-title"
              style={{
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-bold)',
                margin: 0,
                fontFamily: 'var(--font-family-display)',
              }}
            >
              {project.name}
            </h2>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-sm)',
                margin: 0,
                marginTop: 'var(--spacing-1)',
              }}
            >
              Détails du projet
            </p>
          </div>

          <div
            className="project-modal-close"
            onClick={onClose}
            style={{
              minWidth: 'auto',
              padding: 'var(--spacing-2)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-lg)',
              color: 'var(--color-text-primary)',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-bold)',
              transition: 'all var(--duration-200) var(--ease-in-out)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
            }}
          >
            ✕
          </div>
        </div>

        {/* Contenu du modal */}
        <div style={{ padding: 'var(--spacing-6)' }}>
          {/* Section principale */}
          <div
            className="project-modal-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: 'var(--spacing-6)',
              marginBottom: 'var(--spacing-6)',
            }}
          >
            {/* Image du projet */}
            <div
              className="project-modal-image"
              style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '2px solid var(--color-accent-primary)',
                boxShadow: 'var(--shadow-classified)',
              }}
            >
              <Image
                src={project.image}
                alt={`Projet ${project.name}`}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />

              {/* Overlay de classification */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 255, 65, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    color: 'var(--color-accent-primary)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-bold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
                    textAlign: 'center',
                  }}
                ></span>
              </div>
            </div>

            {/* Informations de base */}
            <div>
              <div
                className="project-modal-info"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--spacing-4)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                <div>
                  <p
                    style={{
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-xs)',
                      margin: 0,
                      marginBottom: 'var(--spacing-1)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Tag
                  </p>
                  <p
                    style={{
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      margin: 0,
                      fontFamily: 'var(--font-family-mono)',
                    }}
                  >
                    {project.tag}
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-xs)',
                      margin: 0,
                      marginBottom: 'var(--spacing-1)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Statut
                  </p>
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
                      padding: 'var(--spacing-1) var(--spacing-3)',
                      borderRadius: 'var(--radius-base)',
                      fontSize: 'var(--font-size-sm)',
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
                        width: '8px',
                        height: '8px',
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

                <div>
                  <p
                    style={{
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-xs)',
                      margin: 0,
                      marginBottom: 'var(--spacing-1)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Date de début
                  </p>
                  <p
                    style={{
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      margin: 0,
                    }}
                  >
                    {project.startDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          {project.description && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  margin: 0,
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Description
              </h3>
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 'var(--line-height-relaxed)',
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  margin: 0,
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Technologies
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-2)',
                }}
              >
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      color: 'var(--color-text-primary)',
                      padding: 'var(--spacing-1) var(--spacing-3)',
                      borderRadius: 'var(--radius-base)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      border: '1px solid var(--color-border-primary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Fonctionnalités */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  margin: 0,
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Fonctionnalités
              </h3>
              <ul
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 'var(--line-height-relaxed)',
                  margin: 0,
                  paddingLeft: 'var(--spacing-4)',
                }}
              >
                {project.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: 'var(--spacing-2)' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Liens */}
          {(project.githubUrl || project.liveUrl) && (
            <div style={{ marginBottom: 'var(--spacing-6)' }}>
              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  margin: 0,
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Liens
              </h3>
              <div
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-3)',
                  flexWrap: 'wrap',
                }}
              >
                {project.githubUrl && (
                  <div
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    style={{
                      padding: 'var(--spacing-3) var(--spacing-6)',
                      backgroundColor: 'transparent',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-lg)',
                      color: 'var(--color-text-primary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all var(--duration-200) var(--ease-in-out)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      userSelect: 'none',
                    }}
                  >
                    📁 GitHub
                  </div>
                )}
                {project.liveUrl && (
                  <div
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    style={{
                      padding: 'var(--spacing-3) var(--spacing-6)',
                      backgroundColor: 'var(--color-accent-primary)',
                      border: '1px solid var(--color-accent-primary)',
                      borderRadius: 'var(--radius-lg)',
                      color: 'var(--color-bg-primary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all var(--duration-200) var(--ease-in-out)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      userSelect: 'none',
                    }}
                  >
                    🌐 Voir le projet
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Pied du modal */}
        <div
          style={{
            padding: 'var(--spacing-4) var(--spacing-6)',
            borderTop: '1px solid var(--color-border-primary)',
            backgroundColor: 'var(--color-bg-secondary)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            onClick={onClose}
            style={{
              padding: 'var(--spacing-3) var(--spacing-6)',
              backgroundColor: 'transparent',
              border: '1px solid var(--color-border-primary)',
              borderRadius: 'var(--radius-lg)',
              color: 'var(--color-text-primary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              cursor: 'pointer',
              transition: 'all var(--duration-200) var(--ease-in-out)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
            }}
          >
            Fermer
          </div>
        </div>
      </div>
    </div>
  );
}
