'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { FadeIn } from '../../../components/Animations';
import {
  ProjectBadge,
  ProjectWatermark,
} from '../../../components/VisualElements';

interface Member {
  id: string;
  codeName: string;
  tag: string;
  image: string;
  status: 'active' | 'inactive' | 'deceased';
  rank: string;
  specialization: string;
  joinDate: string;
  missions: number;
  description?: string;
  skills?: string[];
  notableMissions?: string[];
  // Données étendues pour le profil
  psychologicalProfile?: {
    riskAssessment: string;
    stressTolerance: string;
    teamCompatibility: string;
    notes: string;
  };
  arsenal?: {
    weapons: string[];
    equipment: string[];
    specialties: string[];
  };
  recentActivities?: {
    date: string;
    activity: string;
    classification: 'public' | 'classified' | 'secret' | 'top-secret';
  }[];
  additionalInfo?: {
    clearanceLevel: string;
    lastEvaluation: string;
    nextMission: string;
  };
}

export default function MemberProfilePage() {
  const params = useParams();
  const codeName = params.code as string;
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMember = async () => {
      try {
        // Charger depuis l'API
        const response = await fetch(`/api/members/${codeName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (result.success) {
          setMember(result.data);
        } else {
          throw new Error(result.message || 'Failed to load member');
        }
      } catch (error) {
        console.error('Failed to load member:', error);
        // En cas d'erreur, on ne charge pas de données de fallback
        // pour éviter les conflits avec l'API
        setMember(null);
      } finally {
        setLoading(false);
      }
    };

    if (codeName) {
      loadMember();
    }
  }, [codeName]);

  if (loading) {
    return (
      <div>
        <Header />
        <main style={{ padding: 'var(--spacing-16) 0', textAlign: 'center' }}>
          <div className="container">
            <FadeIn>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Chargement du dossier...
              </p>
            </FadeIn>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!member) {
    return (
      <div>
        <Header />
        <main style={{ padding: 'var(--spacing-16) 0', textAlign: 'center' }}>
          <div className="container">
            <FadeIn>
              <h1
                style={{
                  color: 'var(--color-accent-red)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                Membre non trouvé
              </h1>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Le dossier demandé n&apos;existe pas ou a été supprimé.
              </p>
            </FadeIn>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'var(--color-success)';
      case 'inactive':
        return 'var(--color-warning)';
      case 'deceased':
        return 'var(--color-error)';
      default:
        return 'var(--color-text-secondary)';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'inactive':
        return 'Inactif';
      case 'deceased':
        return 'Décédé';
      default:
        return status;
    }
  };

  return (
    <div>
      <Header />

      <main id="main-content" role="main">
        {/* En-tête du profil */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-secondary)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <ProjectWatermark />
          <div className="container">
            <FadeIn>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: 'var(--spacing-8)',
                  alignItems: 'start',
                }}
              >
                {/* Photo du membre avec effets de scan facial */}
                <div
                  className="member-photo-container"
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '300px',
                    height: '200px',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-bg-tertiary)',
                    margin: '0 auto',
                    border: '2px solid var(--color-accent-red)',
                    boxShadow: '0 0 20px rgba(180, 35, 45, 0.3)',
                  }}
                >
                  {/* Grille biométrique animée */}
                  <div
                    className="biometric-grid"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `
                        linear-gradient(rgba(180, 35, 45, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(180, 35, 45, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                      opacity: 0.3,
                      pointerEvents: 'none',
                      zIndex: 1,
                    }}
                  />

                  {/* Lignes de scan facial */}
                  <div
                    className="facial-scan"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background:
                        'linear-gradient(90deg, transparent, var(--color-accent-red), transparent)',
                      opacity: 0,
                      zIndex: 3,
                      pointerEvents: 'none',
                      boxShadow: '0 0 10px var(--color-accent-red)',
                    }}
                  />

                  {/* Particules de pixels */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="pixel-particles"
                        style={{
                          position: 'absolute',
                          left: `${(i * 8) % 100}%`,
                          top: `${(i * 7) % 100}%`,
                          width: '3px',
                          height: '3px',
                          backgroundColor: 'var(--color-accent-red)',
                          borderRadius: '50%',
                          boxShadow: '0 0 8px var(--color-accent-red)',
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Lignes de scan horizontales */}
                  <div
                    className="scan-lines"
                    style={{
                      position: 'absolute',
                      top: '25%',
                      left: 0,
                      right: 0,
                      height: '1px',
                      background:
                        'linear-gradient(90deg, transparent, rgba(180, 35, 45, 0.8), transparent)',
                      opacity: 0,
                      zIndex: 3,
                      pointerEvents: 'none',
                    }}
                  />
                  <div
                    className="scan-lines"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      height: '1px',
                      background:
                        'linear-gradient(90deg, transparent, rgba(180, 35, 45, 0.8), transparent)',
                      opacity: 0,
                      zIndex: 3,
                      pointerEvents: 'none',
                      animationDelay: '0.5s',
                    }}
                  />
                  <div
                    className="scan-lines"
                    style={{
                      position: 'absolute',
                      top: '75%',
                      left: 0,
                      right: 0,
                      height: '1px',
                      background:
                        'linear-gradient(90deg, transparent, rgba(180, 35, 45, 0.8), transparent)',
                      opacity: 0,
                      zIndex: 3,
                      pointerEvents: 'none',
                      animationDelay: '1s',
                    }}
                  />

                  {/* Flux de données vertical */}
                  <div
                    className="data-stream"
                    style={{
                      position: 'absolute',
                      left: '20%',
                      top: 0,
                      bottom: 0,
                      width: '2px',
                      background:
                        'linear-gradient(to bottom, transparent, var(--color-accent-red), transparent)',
                      opacity: 0,
                      zIndex: 3,
                      pointerEvents: 'none',
                    }}
                  />
                  <div
                    className="data-stream"
                    style={{
                      position: 'absolute',
                      left: '80%',
                      top: 0,
                      bottom: 0,
                      width: '2px',
                      background:
                        'linear-gradient(to bottom, transparent, var(--color-accent-red), transparent)',
                      opacity: 0,
                      zIndex: 3,
                      pointerEvents: 'none',
                      animationDelay: '1.5s',
                    }}
                  />

                  {/* Contenu principal avec effet de révélation */}
                  <div
                    className="image-reveal"
                    style={{
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(45deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-tertiary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      textAlign: 'center',
                      padding: 'var(--spacing-4)',
                      position: 'relative',
                      zIndex: 1,
                      filter: 'brightness(0.5)',
                      transition: 'all 1.5s ease',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 'var(--font-size-xs)',
                          color: 'var(--color-accent-red)',
                          marginBottom: 'var(--spacing-2)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 'var(--font-weight-bold)',
                        }}
                      >
                        SCAN BIOMÉTRIQUE
                      </div>
                      <div
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--color-text-tertiary)',
                        }}
                      >
                        IMAGE CLASSIFIÉE
                      </div>
                    </div>
                  </div>

                  {/* Indicateur de niveau de sécurité */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 'var(--spacing-2)',
                      right: 'var(--spacing-2)',
                      backgroundColor: 'var(--color-accent-red)',
                      color: 'white',
                      padding: 'var(--spacing-1) var(--spacing-2)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-bold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      zIndex: 4,
                      boxShadow: '0 0 10px rgba(180, 35, 45, 0.8)',
                    }}
                  >
                    TOP SECRET
                  </div>

                  {/* Indicateur de scan en cours */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 'var(--spacing-2)',
                      left: 'var(--spacing-2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-1)',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      padding: 'var(--spacing-1) var(--spacing-2)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-accent-red)',
                      zIndex: 4,
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'var(--color-accent-red)',
                        borderRadius: '50%',
                        animation: 'pulse 1s infinite',
                      }}
                    />
                    SCAN EN COURS
                  </div>
                </div>

                {/* Informations principales */}
                <div>
                  <h1
                    style={{
                      fontSize: 'var(--font-size-4xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-red)',
                      marginBottom: 'var(--spacing-2)',
                      fontFamily: 'var(--font-family-display)',
                    }}
                  >
                    {member.codeName}
                  </h1>
                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--spacing-4)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    {member.tag} • {member.rank}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-6)',
                    }}
                  >
                    {member.specialization}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-4)',
                      marginBottom: 'var(--spacing-6)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2)',
                      }}
                    >
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: getStatusColor(member.status),
                        }}
                      />
                      <span
                        style={{
                          fontSize: 'var(--font-size-base)',
                          color: 'var(--color-text-primary)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        {getStatusText(member.status)}
                      </span>
                    </div>
                    <ProjectBadge level="restricted" />
                  </div>
                  <p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section Informations en cours d'investigation avec effets spectaculaires */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-primary)',
          }}
        >
          <div className="container">
            <FadeIn>
              <div
                className="investigation-container"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '2px solid var(--color-accent-red)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--spacing-12)',
                  textAlign: 'center',
                  position: 'relative',
                  maxWidth: '800px',
                  margin: '0 auto',
                  boxShadow: 'var(--shadow-classified)',
                  overflow: 'hidden',
                }}
              >
                {/* Grille de scan animée en arrière-plan */}
                <div
                  className="border-scan"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                      linear-gradient(rgba(180, 35, 45, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(180, 35, 45, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />

                {/* Particules de données qui s'échappent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                >
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="data-escape"
                      style={{
                        position: 'absolute',
                        left: `${(i * 7) % 100}%`,
                        top: `${(i * 6) % 100}%`,
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--color-accent-red)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px var(--color-accent-red)',
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Badge ENQUÊTE EN COURS avec pulsation */}
                <div
                  className="warning-pulse"
                  style={{
                    position: 'absolute',
                    top: 'var(--spacing-4)',
                    right: 'var(--spacing-4)',
                    backgroundColor: 'var(--color-accent-red)',
                    color: 'var(--color-bg-primary)',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: '0.05em',
                    zIndex: 4,
                    boxShadow: '0 0 15px rgba(180, 35, 45, 0.8)',
                  }}
                >
                  ENQUÊTE EN COURS
                </div>

                {/* Cercle principal avec pulsation intense */}
                <div
                  className="intense-pulse"
                  style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'var(--color-bg-tertiary)',
                    border: '3px solid var(--color-accent-red)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--spacing-8)',
                    position: 'relative',
                    zIndex: 3,
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'pulse 1s infinite',
                      boxShadow: '0 0 20px rgba(180, 35, 45, 0.8)',
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'var(--color-bg-primary)',
                        borderRadius: '50%',
                        animation: 'pulse 0.5s infinite reverse',
                      }}
                    />
                  </div>
                </div>

                {/* Titre avec effet de glitch */}
                <h2
                  className="text-glitch"
                  style={{
                    fontSize: 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-red)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                    position: 'relative',
                    zIndex: 3,
                    textShadow: '0 0 20px rgba(180, 35, 45, 0.5)',
                  }}
                >
                  Informations en cours d&apos;investigation
                </h2>

                {/* Texte principal */}
                <p
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--spacing-6)',
                    lineHeight: 'var(--line-height-relaxed)',
                    position: 'relative',
                    zIndex: 3,
                  }}
                >
                  Le dossier de cet opérateur fait actuellement l&apos;objet
                  d&apos;une enquête approfondie. Toutes les informations
                  détaillées sont temporairement classifiées et inaccessibles.
                </p>

                {/* Zone d'avertissement avec effets */}
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-tertiary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-6)',
                    marginTop: 'var(--spacing-8)',
                    position: 'relative',
                    zIndex: 3,
                    boxShadow: '0 0 10px rgba(180, 35, 45, 0.2)',
                  }}
                >
                  <p
                    className="warning-pulse"
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      fontStyle: 'italic',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--spacing-2)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-accent-red)',
                        animation: 'pulse 1s infinite',
                      }}
                    >
                      ⚠️
                    </span>
                    Accès restreint - Niveau de sécurité requis : TOP SECRET
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-text-tertiary)',
                      margin: 'var(--spacing-2) 0 0 0',
                    }}
                  >
                    Les informations seront déclassifiées une fois
                    l&apos;enquête terminée.
                  </p>
                </div>

                {/* Indicateurs de statut d'enquête */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 'var(--spacing-4)',
                    left: 'var(--spacing-4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 'var(--spacing-1) var(--spacing-3)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-accent-red)',
                    zIndex: 4,
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: '50%',
                      animation: 'pulse 1s infinite',
                    }}
                  />
                  ENQUÊTE ACTIVE
                </div>

                {/* Indicateur de progression */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 'var(--spacing-4)',
                    right: 'var(--spacing-4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 'var(--spacing-1) var(--spacing-3)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-accent-red)',
                    zIndex: 4,
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--color-accent-red)',
                      borderRadius: '50%',
                      animation: 'pulse 1.5s infinite',
                    }}
                  />
                  EN COURS
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
