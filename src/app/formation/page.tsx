'use client';

import { Header, Footer } from '../../components';
import TypewriterEffect from '../../components/TypewriterEffect';
import { useEffect, useState } from 'react';

export default function FormationPage() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      delay: number;
      duration: number;
    }>
  >([]);

  const [matrixChars, setMatrixChars] = useState<
    Array<{
      id: number;
      char: string;
      left: number;
      top: number;
      speed: number;
      opacity: number;
    }>
  >([]);

  const matrixCharacters =
    '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

  useEffect(() => {
    // Générer les positions des particules côté client uniquement
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(newParticles);

    // Générer les caractères Matrix rain
    const newMatrixChars = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      char: matrixCharacters[
        Math.floor(Math.random() * matrixCharacters.length)
      ],
      left: Math.random() * 100,
      top: Math.random() * 100,
      speed: 0.5 + Math.random() * 2,
      opacity: 0.1 + Math.random() * 0.4,
    }));
    setMatrixChars(newMatrixChars);

    // Ajouter les animations CSS pour les nouveaux effets
    const style = document.createElement('style');
    style.textContent = `
      @keyframes securityGridMove {
        0% { transform: translate(0, 0); }
        100% { transform: translate(30px, 30px); }
      }
      
      @keyframes dataStream {
        0% { transform: translateX(-200px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateX(calc(100vw + 200px)); opacity: 0; }
      }
      
      @keyframes networkPulse {
        0%, 100% { 
          transform: scale(1); 
          opacity: 0.8; 
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.6);
        }
        50% { 
          transform: scale(1.5); 
          opacity: 1; 
          box-shadow: 0 0 25px rgba(0, 255, 65, 1);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <>
      <Header />

      <main
        id="main-content"
        style={{ minHeight: '100vh', paddingTop: '0px', position: 'relative' }}
      >
        {/* Matrix Rain Background */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: -1,
            overflow: 'hidden',
          }}
        >
          {matrixChars.map((char) => (
            <div
              key={char.id}
              style={{
                position: 'absolute',
                left: `${char.left}%`,
                top: `${char.top}%`,
                color: 'var(--color-accent-primary)',
                fontSize: '14px',
                fontFamily: 'monospace',
                opacity: char.opacity,
                textShadow: '0 0 5px var(--color-accent-primary)',
                animation: `matrixRain ${char.speed}s linear infinite`,
                animationDelay: `${char.id * 0.1}s`,
              }}
            >
              {char.char}
            </div>
          ))}
        </div>
        {/* Section Hero */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            background: `
              linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)
            `,
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'calc(100vh - 80px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0px',
          }}
        >
          {/* Effets de fond cybersécurité */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)
              `,
              pointerEvents: 'none',
            }}
          />

          {/* Grille de sécurité animée */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              animation: 'securityGridMove 15s linear infinite',
              opacity: 0.4,
              pointerEvents: 'none',
            }}
          />

          {/* Lignes de données qui traversent l'écran */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: `${20 + i * 10}%`,
                  left: '-100px',
                  width: '200px',
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.6), transparent)`,
                  boxShadow: '0 0 10px rgba(0, 212, 255, 0.4)',
                  animation: `dataStream ${3 + i * 0.5}s linear infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Points de connexion réseau */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${10 + i * 7}%`,
                  top: `${15 + i * 6}%`,
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'rgba(0, 255, 65, 0.8)',
                  borderRadius: '50%',
                  boxShadow: '0 0 15px rgba(0, 255, 65, 0.6)',
                  animation: `networkPulse ${2 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          {/* Particules flottantes */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
            }}
          >
            {particles.map((particle) => (
              <div
                key={particle.id}
                style={{
                  position: 'absolute',
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: '2px',
                  height: '2px',
                  backgroundColor: 'rgba(0, 255, 65, 0.6)',
                  borderRadius: '50%',
                  boxShadow: '0 0 6px rgba(0, 255, 65, 0.8)',
                  animation: `float ${particle.duration}s ease-in-out infinite`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>

          <div className="container">
            <div
              style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              <h1
                style={{
                  fontSize: 'var(--font-size-4xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-accent-primary)',
                  marginBottom: 'var(--spacing-6)',
                  textShadow: `
                    0 0 10px var(--color-accent-primary),
                    0 0 20px var(--color-accent-primary),
                    0 0 40px var(--color-accent-primary)
                  `,
                  fontFamily: 'var(--font-family-display)',
                  letterSpacing: '0.2em',
                  position: 'relative',
                  zIndex: 2,
                  background:
                    'linear-gradient(45deg, var(--color-accent-primary), var(--color-accent-secondary))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'cyberGlow 2s ease-in-out infinite alternate',
                }}
              >
                FORMATION
              </h1>

              <div
                style={{
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                  marginBottom: 'var(--spacing-8)',
                  textAlign: 'center',
                }}
              >
                <TypewriterEffect
                  texts={['Mes principales formations et qualifications']}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={3000}
                  className="formation-typewriter"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Formation */}
        <section style={{ padding: 'var(--spacing-16) 0' }}>
          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {/* Formation principale */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-8)',
                  marginBottom: 'var(--spacing-8)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--duration-300) var(--ease-in-out)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(0, 255, 65, 0.3), 0 0 60px rgba(0, 255, 65, 0.1)';
                  e.currentTarget.style.borderColor =
                    'var(--color-accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor =
                    'var(--color-border-primary)';
                }}
              >
                {/* Effet de glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background:
                      'linear-gradient(90deg, transparent, var(--color-accent-primary), transparent)',
                    boxShadow: '0 0 10px var(--color-accent-primary)',
                  }}
                />

                <h2
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-4)',
                    fontFamily: 'var(--font-family-display)',
                    animation: 'glitchEffect 2s ease-in-out infinite',
                  }}
                >
                  Manager architecture d&apos;application et système
                  d&apos;information
                </h2>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-4)',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-2)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    CESI
                  </h3>
                  <span
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      background: 'var(--color-bg-tertiary)',
                      padding: 'var(--spacing-2) var(--spacing-3)',
                      borderRadius: 'var(--radius-base)',
                      border: '1px solid var(--color-border-primary)',
                    }}
                  >
                    sept. 2022 – sept. 2024
                  </span>
                </div>

                <p
                  style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Formation spécialisée en architecture des systèmes
                  d&apos;information, management d&apos;équipes et
                  transformation digitale. Approche pratique avec projets
                  concrets en entreprise.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-2)',
                  }}
                >
                  {[
                    'Architecture SI',
                    'Management',
                    'Transformation digitale',
                    'Projets IT',
                    "Gestion d'équipes",
                  ].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-accent-primary)',
                        background: 'rgba(0, 255, 65, 0.1)',
                        padding: 'var(--spacing-1) var(--spacing-3)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(0, 255, 65, 0.3)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Formation secondaire */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-8)',
                  marginBottom: 'var(--spacing-8)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--duration-300) var(--ease-in-out)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)';
                  e.currentTarget.style.borderColor =
                    'var(--color-accent-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor =
                    'var(--color-border-primary)';
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-4)',
                    fontFamily: 'var(--font-family-display)',
                    animation: 'glitchEffect 2s ease-in-out infinite',
                  }}
                >
                  Licence professionnelle, Informatique
                </h2>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-4)',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-2)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    Université de Bordeaux
                  </h3>
                  <span
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      background: 'var(--color-bg-tertiary)',
                      padding: 'var(--spacing-2) var(--spacing-3)',
                      borderRadius: 'var(--radius-base)',
                      border: '1px solid var(--color-border-primary)',
                    }}
                  >
                    sept. 2021 – sept. 2022
                  </span>
                </div>

                <p
                  style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Formation professionnalisante en informatique avec
                  spécialisation en développement d&apos;applications. Approche
                  pratique avec stages en entreprise et projets concrets.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-2)',
                  }}
                >
                  {[
                    'Développement web',
                    'Bases de données',
                    'Réseaux',
                    'Algorithmique',
                    'Projets professionnels',
                  ].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-accent-secondary)',
                        background: 'rgba(0, 212, 255, 0.1)',
                        padding: 'var(--spacing-1) var(--spacing-3)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* BTS SIO */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-8)',
                  marginBottom: 'var(--spacing-8)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--duration-300) var(--ease-in-out)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(255, 255, 0, 0.3), 0 0 60px rgba(255, 255, 0, 0.1)';
                  e.currentTarget.style.borderColor =
                    'var(--color-accent-warning)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor =
                    'var(--color-border-primary)';
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-4)',
                    fontFamily: 'var(--font-family-display)',
                    animation: 'glitchEffect 2s ease-in-out infinite',
                  }}
                >
                  BTS SIO, Programmation informatique
                </h2>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-4)',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-2)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    Cité scolaire Bertran de Born
                  </h3>
                  <span
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      background: 'var(--color-bg-tertiary)',
                      padding: 'var(--spacing-2) var(--spacing-3)',
                      borderRadius: 'var(--radius-base)',
                      border: '1px solid var(--color-border-primary)',
                    }}
                  >
                    2019 – 2021
                  </span>
                </div>

                <p
                  style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Formation technique en services informatiques aux
                  organisations, spécialisation en développement
                  d&apos;applications spécifiques. Approche pratique avec
                  projets et stages.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-2)',
                  }}
                >
                  {[
                    'Programmation',
                    'Applications spécifiques',
                    'Services informatiques',
                    'Réseaux',
                    'Maintenance',
                  ].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-accent-warning)',
                        background: 'rgba(255, 255, 0, 0.1)',
                        padding: 'var(--spacing-1) var(--spacing-3)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(255, 255, 0, 0.3)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Baccalauréat */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-8)',
                  marginBottom: 'var(--spacing-8)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--duration-300) var(--ease-in-out)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(255, 0, 64, 0.3), 0 0 60px rgba(255, 0, 64, 0.1)';
                  e.currentTarget.style.borderColor =
                    'var(--color-accent-alert)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor =
                    'var(--color-border-primary)';
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-4)',
                    fontFamily: 'var(--font-family-display)',
                    animation: 'glitchEffect 2s ease-in-out infinite',
                  }}
                >
                  Baccalauréat Scientifique, spécialité SVT
                </h2>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-4)',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-2)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    Cité scolaire Bertran de Born
                  </h3>
                  <span
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                      background: 'var(--color-bg-tertiary)',
                      padding: 'var(--spacing-2) var(--spacing-3)',
                      borderRadius: 'var(--radius-base)',
                      border: '1px solid var(--color-border-primary)',
                    }}
                  >
                    2019
                  </span>
                </div>

                <p
                  style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Formation générale scientifique avec spécialisation en
                  Sciences de la Vie et de la Terre. Base solide en sciences et
                  méthodologie pour la poursuite d&apos;études supérieures.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-2)',
                  }}
                >
                  {[
                    'Sciences',
                    'Mathématiques',
                    'Physique-Chimie',
                    'SVT',
                    'Méthodologie',
                  ].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-accent-alert)',
                        background: 'rgba(255, 0, 64, 0.1)',
                        padding: 'var(--spacing-1) var(--spacing-3)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(255, 0, 64, 0.3)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-8)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--duration-300) var(--ease-in-out)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(0, 255, 65, 0.3), 0 0 60px rgba(0, 255, 65, 0.1)';
                  e.currentTarget.style.borderColor =
                    'var(--color-accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor =
                    'var(--color-border-primary)';
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                    animation: 'glitchEffect 2s ease-in-out infinite',
                  }}
                >
                  Certifications
                </h2>

                {/* Certifications de Maîtrise de Compétences */}
                <div style={{ marginBottom: 'var(--spacing-8)' }}>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-primary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                      animation: 'glitchEffect 2s ease-in-out infinite',
                    }}
                  >
                    Certifications de Maîtrise de Compétences
                  </h3>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: 'var(--spacing-4)',
                    }}
                  >
                    {[
                      "Concevoir l'architecture logicielle du SI",
                      'Superviser et assurer le développement des applications logicielles',
                      'Manager les équipes et la transformation du SI',
                      'Superviser le portefeuille projets de la DSI et sa mise en œuvre',
                    ].map((title, index) => (
                      <div
                        key={index}
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(0, 255, 65, 0.05) 0%, rgba(0, 255, 65, 0.02) 100%)',
                          border: '2px solid var(--color-accent-primary)',
                          borderRadius: 'var(--radius-lg)',
                          padding: 'var(--spacing-6)',
                          position: 'relative',
                          transition:
                            'all var(--duration-300) var(--ease-in-out)',
                          cursor: 'pointer',
                          boxShadow: '0 4px 20px rgba(0, 255, 65, 0.1)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.boxShadow =
                            '0 8px 30px rgba(0, 255, 65, 0.2)';
                          e.currentTarget.style.borderColor =
                            'var(--color-accent-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow =
                            '0 4px 20px rgba(0, 255, 65, 0.1)';
                          e.currentTarget.style.borderColor =
                            'var(--color-accent-primary)';
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-3)',
                          }}
                        >
                          <div
                            style={{
                              width: '12px',
                              height: '12px',
                              backgroundColor: 'var(--color-accent-primary)',
                              borderRadius: '50%',
                              boxShadow: '0 0 15px rgba(0, 255, 65, 0.8)',
                              flexShrink: 0,
                              minWidth: '12px',
                              minHeight: '12px',
                              animation: 'pulse 2s ease-in-out infinite',
                            }}
                          />
                          <h4
                            style={{
                              fontSize: 'var(--font-size-lg)',
                              color: 'var(--color-accent-primary)',
                              fontWeight: 'var(--font-weight-bold)',
                              margin: 0,
                              fontFamily: 'var(--font-family-display)',
                              textShadow: '0 0 10px rgba(0, 255, 65, 0.3)',
                              lineHeight: 'var(--line-height-tight)',
                            }}
                          >
                            {title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications MOOC Sécurité */}
                <div style={{ marginBottom: 'var(--spacing-8)' }}>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-secondary)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                      animation: 'glitchEffect 2s ease-in-out infinite',
                    }}
                  >
                    Certifications MOOC Sécurité
                  </h3>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: 'var(--spacing-3)',
                    }}
                  >
                    {[
                      'Panorama de la SSI',
                      "Sécurité de l'authentification",
                      'Sécurité sur Internet',
                      'Sécurité du poste de travail et nomadisme',
                    ].map((cert, index) => (
                      <div
                        key={index}
                        style={{
                          background: 'rgba(0, 212, 255, 0.1)',
                          border: '1px solid rgba(0, 212, 255, 0.3)',
                          borderRadius: 'var(--radius-base)',
                          padding: 'var(--spacing-3)',
                          textAlign: 'center',
                        }}
                      >
                        <span
                          style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-accent-secondary)',
                            fontWeight: 'var(--font-weight-medium)',
                          }}
                        >
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification Linguistique */}
                <div>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-warning)',
                      marginBottom: 'var(--spacing-4)',
                      fontFamily: 'var(--font-family-display)',
                      animation: 'glitchEffect 2s ease-in-out infinite',
                    }}
                  >
                    Certification Linguistique
                  </h3>

                  <div
                    style={{
                      background: 'rgba(255, 255, 0, 0.1)',
                      border: '1px solid rgba(255, 255, 0, 0.3)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      textAlign: 'center',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-accent-warning)',
                        marginBottom: 'var(--spacing-2)',
                      }}
                    >
                      TOEIC
                    </h4>
                    <p
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)',
                        margin: 0,
                      }}
                    >
                      Test of English for International Communication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
