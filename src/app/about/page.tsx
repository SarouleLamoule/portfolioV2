'use client';

import { Header, Footer } from '../../components';
import TypewriterEffect from '../../components/TypewriterEffect';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  // CSS pour la responsivité de la scanline
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (min-width: 768px) {
        .scanline-desktop {
          display: block !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
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
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(newParticles);

    // Générer les caractères Matrix rain
    const newMatrixChars = Array.from({ length: 50 }, (_, i) => ({
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
  }, []);
  return (
    <>
      <Header />

      <main
        id="main-content"
        style={{ minHeight: '100vh', paddingTop: '80px', position: 'relative' }}
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
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              {/* Effet de scanline derrière le titre - Caché sur mobile */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '2px',
                  background:
                    'linear-gradient(90deg, transparent, var(--color-accent-primary), transparent)',
                  boxShadow: '0 0 10px var(--color-accent-primary)',
                  animation: 'scanline 3s ease-in-out infinite',
                  display: 'none', // Caché par défaut
                }}
                className="scanline-desktop"
              />

              <h1
                style={{
                  fontSize: 'var(--font-size-5xl)',
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
                À PROPOS
              </h1>

              {/* Lignes décoratives */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-4)',
                  marginBottom: 'var(--spacing-6)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '1px',
                    background:
                      'linear-gradient(90deg, transparent, var(--color-accent-primary))',
                    boxShadow: '0 0 5px var(--color-accent-primary)',
                  }}
                />
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--color-accent-primary)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px var(--color-accent-primary)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <div
                  style={{
                    width: '60px',
                    height: '1px',
                    background:
                      'linear-gradient(90deg, var(--color-accent-primary), transparent)',
                    boxShadow: '0 0 5px var(--color-accent-primary)',
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                  marginBottom: 'var(--spacing-8)',
                  textShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
                  textAlign: 'center',
                }}
              >
                <TypewriterEffect
                  texts={[
                    'Découvrez mon parcours et mes compétences en développement',
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={3000}
                  className="about-typewriter"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section À propos */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            position: 'relative',
            overflow: 'hidden',
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

          {/* Grille de sécurité */}
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
              backgroundSize: '20px 20px',
              opacity: 0.3,
              pointerEvents: 'none',
            }}
          />

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
                maxWidth: '900px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1,
                padding: '0 var(--spacing-4)',
              }}
            >
              {/* Contenu principal - Organisation fluide */}
              <div
                style={{
                  background: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-12)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 30px rgba(0, 255, 65, 0.2)',
                  transition: 'all var(--duration-300) var(--ease-in-out)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow =
                    '0 0 50px rgba(0, 255, 65, 0.4), 0 0 100px rgba(0, 255, 65, 0.2)';
                  e.currentTarget.style.borderColor =
                    'var(--color-accent-secondary)';
                  e.currentTarget.style.background = 'rgba(10, 10, 10, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(0, 255, 65, 0.2)';
                  e.currentTarget.style.borderColor =
                    'var(--color-accent-primary)';
                  e.currentTarget.style.background = 'rgba(10, 10, 10, 0.8)';
                }}
              >
                {/* Security Grid Background */}
                <div
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
                    animation: 'securityGrid 4s ease-in-out infinite',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />
                {/* Introduction fluide */}
                <div
                  style={{
                    marginBottom: 'var(--spacing-10)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <h2
                    style={{
                      fontSize: 'var(--font-size-3xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-primary)',
                      marginBottom: 'var(--spacing-6)',
                      fontFamily: 'var(--font-family-display)',
                      textAlign: 'center',
                      textShadow: '0 0 20px var(--color-accent-primary)',
                      animation: 'glitchEffect 2s ease-in-out infinite',
                    }}
                  >
                    Salut, moi c&apos;est{' '}
                    <span style={{ color: 'var(--color-accent-secondary)' }}>
                      Tim
                    </span>
                  </h2>

                  <p
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--color-text-primary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-6)',
                      textAlign: 'center',
                    }}
                  >
                    Développeur Full Stack passionné, formé dans des cursus
                    spécialisés en{' '}
                    <span style={{ color: 'var(--color-accent-primary)' }}>
                      développement logiciel
                    </span>{' '}
                    et en{' '}
                    <span style={{ color: 'var(--color-accent-secondary)' }}>
                      architecture des systèmes d&apos;information
                    </span>
                    .
                  </p>

                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-8)',
                      textAlign: 'center',
                    }}
                  >
                    J&apos;ai pu évoluer en alternance sur des projets concrets,
                    ce qui m&apos;a permis de développer de solides compétences
                    techniques et humaines dès mes débuts.
                  </p>

                  {/* Citation centrée */}
                  <div
                    style={{
                      background: 'rgba(0, 255, 65, 0.1)',
                      border: '1px solid var(--color-accent-primary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      margin: 'var(--spacing-8) 0',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-accent-primary)',
                        fontStyle: 'italic',
                        margin: 0,
                        textShadow: '0 0 10px var(--color-accent-primary)',
                        fontFamily: 'monospace',
                      }}
                    >
                      <TypewriterEffect
                        texts={[
                          "J'code pas pour montrer ce que je sais faire, mais pour découvrir ce que je peux encore apprendre.",
                        ]}
                        typingSpeed={50}
                        deletingSpeed={30}
                        pauseTime={3000}
                        className="quote-typewriter"
                      />
                    </div>
                  </div>
                </div>

                {/* Mon profil - Section fluide */}
                <div style={{ marginBottom: 'var(--spacing-10)' }}>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-2xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-primary)',
                      marginBottom: 'var(--spacing-6)',
                      fontFamily: 'var(--font-family-display)',
                      textAlign: 'center',
                      textShadow: '0 0 15px var(--color-accent-primary)',
                      animation: 'glitchEffect 2s ease-in-out infinite',
                    }}
                  >
                    Mon profil
                  </h3>

                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-6)',
                      textAlign: 'center',
                    }}
                  >
                    Curieux et polyvalent, je maîtrise principalement{' '}
                    <span style={{ color: 'var(--color-accent-primary)' }}>
                      JavaScript
                    </span>
                    ,{' '}
                    <span style={{ color: 'var(--color-accent-primary)' }}>
                      React
                    </span>
                    ,{' '}
                    <span style={{ color: 'var(--color-accent-primary)' }}>
                      Node.js
                    </span>
                    ,{' '}
                    <span style={{ color: 'var(--color-accent-primary)' }}>
                      Next.js
                    </span>
                    , ainsi que des bases de données comme{' '}
                    <span style={{ color: 'var(--color-accent-secondary)' }}>
                      MongoDB
                    </span>{' '}
                    et{' '}
                    <span style={{ color: 'var(--color-accent-secondary)' }}>
                      PostgreSQL
                    </span>
                    .
                  </p>

                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-8)',
                      textAlign: 'center',
                    }}
                  >
                    J&apos;ai aussi des bases solides dans d&apos;autres
                    langages et outils comme{' '}
                    <span style={{ color: 'var(--color-accent-warning)' }}>
                      Python
                    </span>
                    ,{' '}
                    <span style={{ color: 'var(--color-accent-warning)' }}>
                      Lua
                    </span>
                    ,{' '}
                    <span style={{ color: 'var(--color-accent-warning)' }}>
                      C#
                    </span>
                    ,{' '}
                    <span style={{ color: 'var(--color-accent-warning)' }}>
                      Docker
                    </span>
                    ,{' '}
                    <span style={{ color: 'var(--color-accent-warning)' }}>
                      Unreal Engine
                    </span>
                    ,{' '}
                    <span style={{ color: 'var(--color-accent-warning)' }}>
                      PHP
                    </span>
                    , et bien d&apos;autres.
                  </p>
                </div>

                {/* Ce que je développe - Section fluide */}
                <div style={{ marginBottom: 'var(--spacing-10)' }}>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-2xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-primary)',
                      marginBottom: 'var(--spacing-6)',
                      fontFamily: 'var(--font-family-display)',
                      textAlign: 'center',
                      textShadow: '0 0 15px var(--color-accent-primary)',
                      animation: 'glitchEffect 2s ease-in-out infinite',
                    }}
                  >
                    Ce que je développe
                  </h3>

                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      marginBottom: 'var(--spacing-6)',
                      textAlign: 'center',
                    }}
                  >
                    J&apos;ai fait du{' '}
                    <span style={{ color: 'var(--color-accent-primary)' }}>
                      développement web
                    </span>
                    , mais mon terrain de jeu se trouve surtout dans la{' '}
                    <span style={{ color: 'var(--color-accent-secondary)' }}>
                      création d&apos;applications interactives
                    </span>
                    , comme :
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--spacing-4)',
                      marginBottom: 'var(--spacing-8)',
                      maxWidth: '600px',
                      margin: '0 auto var(--spacing-8) auto',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-3)',
                        padding: 'var(--spacing-3)',
                        background: 'rgba(0, 255, 65, 0.05)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(0, 255, 65, 0.2)',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: 'var(--color-accent-primary)',
                          borderRadius: '50%',
                          boxShadow: '0 0 10px var(--color-accent-primary)',
                        }}
                      />
                      <span style={{ color: 'var(--color-text-secondary)' }}>
                        des{' '}
                        <span style={{ color: 'var(--color-accent-primary)' }}>
                          bots Discord
                        </span>{' '}
                        pour animer des communautés et automatiser des tâches
                      </span>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-3)',
                        padding: 'var(--spacing-3)',
                        background: 'rgba(0, 212, 255, 0.05)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: 'var(--color-accent-secondary)',
                          borderRadius: '50%',
                          boxShadow: '0 0 10px var(--color-accent-secondary)',
                        }}
                      />
                      <span style={{ color: 'var(--color-text-secondary)' }}>
                        des{' '}
                        <span
                          style={{ color: 'var(--color-accent-secondary)' }}
                        >
                          jeux vidéo
                        </span>
                        , notamment avec{' '}
                        <span
                          style={{ color: 'var(--color-accent-secondary)' }}
                        >
                          Unreal Engine
                        </span>{' '}
                        et{' '}
                        <span
                          style={{ color: 'var(--color-accent-secondary)' }}
                        >
                          FiveM
                        </span>
                      </span>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-3)',
                        padding: 'var(--spacing-3)',
                        background: 'rgba(255, 255, 0, 0.05)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255, 255, 0, 0.2)',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: 'var(--color-accent-warning)',
                          borderRadius: '50%',
                          boxShadow: '0 0 10px var(--color-accent-warning)',
                        }}
                      />
                      <span style={{ color: 'var(--color-text-secondary)' }}>
                        des{' '}
                        <span style={{ color: 'var(--color-accent-warning)' }}>
                          scripts sur mesure
                        </span>{' '}
                        pour répondre à des besoins précis ou automatiser des
                        tâches
                      </span>
                    </div>
                  </div>

                  {/* Citation finale */}
                  <div
                    style={{
                      background: 'rgba(0, 212, 255, 0.1)',
                      border: '1px solid var(--color-accent-secondary)',
                      borderRadius: 'var(--radius-lg)',
                      padding: 'var(--spacing-6)',
                      textAlign: 'center',
                    }}
                  >
                    <p
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-accent-secondary)',
                        fontStyle: 'italic',
                        margin: 0,
                        textShadow: '0 0 10px var(--color-accent-secondary)',
                      }}
                    >
                      Toujours en veille, j&apos;aime apprendre, expérimenter,
                      et relever de nouveaux{' '}
                      <span style={{ color: 'var(--color-accent-primary)' }}>
                        défis technologiques
                      </span>
                      .
                    </p>
                  </div>
                </div>

                {/* Compétences et Outils - Section fluide */}
                <div style={{ marginBottom: 'var(--spacing-8)' }}>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-2xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-accent-primary)',
                      marginBottom: 'var(--spacing-8)',
                      fontFamily: 'var(--font-family-display)',
                      textAlign: 'center',
                      textShadow: '0 0 15px var(--color-accent-primary)',
                      animation: 'glitchEffect 2s ease-in-out infinite',
                    }}
                  >
                    Mes Compétences & Outils
                  </h3>

                  {/* Compétences principales */}
                  <div style={{ marginBottom: 'var(--spacing-8)' }}>
                    <h4
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-accent-primary)',
                        marginBottom: 'var(--spacing-4)',
                        textAlign: 'center',
                        fontWeight: 'var(--font-weight-semibold)',
                      }}
                    >
                      Langages & Technologies
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'var(--spacing-3)',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-6)',
                      }}
                    >
                      {[
                        'JavaScript',
                        'React',
                        'Node.js',
                        'Java',
                        'C#',
                        'Python',
                        'PHP',
                        'Lua',
                        'HTML5',
                        'CSS3',
                      ].map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-accent-primary)',
                            background: 'rgba(0, 255, 65, 0.1)',
                            padding: 'var(--spacing-2) var(--spacing-4)',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid rgba(0, 255, 65, 0.3)',
                            fontWeight: 'var(--font-weight-medium)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Frameworks & Outils */}
                  <div style={{ marginBottom: 'var(--spacing-8)' }}>
                    <h4
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-accent-secondary)',
                        marginBottom: 'var(--spacing-4)',
                        textAlign: 'center',
                        fontWeight: 'var(--font-weight-semibold)',
                      }}
                    >
                      Frameworks & Outils
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'var(--spacing-3)',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-6)',
                      }}
                    >
                      {[
                        'Bootstrap',
                        'Angular',
                        'Vue.js',
                        'MySQL',
                        'PostgreSQL',
                        'MongoDB',
                        'Git',
                        'Docker',
                        'Unreal Engine',
                        'Blender',
                      ].map((tool) => (
                        <span
                          key={tool}
                          style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-accent-secondary)',
                            background: 'rgba(0, 212, 255, 0.1)',
                            padding: 'var(--spacing-2) var(--spacing-4)',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            fontWeight: 'var(--font-weight-medium)',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outils de développement */}
                  <div>
                    <h4
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-accent-warning)',
                        marginBottom: 'var(--spacing-4)',
                        textAlign: 'center',
                        fontWeight: 'var(--font-weight-semibold)',
                      }}
                    >
                      Environnement de développement
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'var(--spacing-3)',
                        justifyContent: 'center',
                      }}
                    >
                      {[
                        'VS Code',
                        'GitHub',
                        'Postman',
                        'Discord',
                        'Figma',
                        'WordPress',
                      ].map((tool) => (
                        <span
                          key={tool}
                          style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-accent-warning)',
                            background: 'rgba(255, 255, 0, 0.1)',
                            padding: 'var(--spacing-2) var(--spacing-4)',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid rgba(255, 255, 0, 0.3)',
                            fontWeight: 'var(--font-weight-medium)',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
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
