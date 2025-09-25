'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { FadeIn } from '../components/Animations';
import TypewriterEffect from '../components/TypewriterEffect';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useState } from 'react';

export default function Home() {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <div>
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section avec effets avancés */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-8)',
            background: `
              linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)
            `,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Effet de particules flottantes */}
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
            {[...Array(20)].map((_, i) => {
              // Utiliser des valeurs déterministes basées sur l'index pour éviter l'erreur d'hydratation
              const left = ((i * 7) % 100) + ((i * 3) % 20);
              const top = ((i * 11) % 100) + ((i * 5) % 15);
              const duration = 3 + (i % 4);
              const delay = (i % 2) + i * 0.1;

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '2px',
                    height: '2px',
                    backgroundColor: 'rgba(0, 255, 65, 0.6)',
                    borderRadius: '50%',
                    left: `${left}%`,
                    top: `${top}%`,
                    animation: `particleFloat ${duration}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                    boxShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
                  }}
                />
              );
            })}
          </div>

          {/* Effet Matrix Rain */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              opacity: 0.1,
            }}
          >
            {[...Array(15)].map((_, i) => {
              // Utiliser des valeurs déterministes basées sur l'index
              const duration = 8 + (i % 4);
              const delay = i % 5;

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${(i * 100) / 15}%`,
                    top: '-100px',
                    width: '2px',
                    height: '100px',
                    background:
                      'linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.8), transparent)',
                    animation: `matrixRain ${duration}s linear infinite`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>

          {/* Lignes de scan */}
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
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background:
                  'linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.8), transparent)',
                animation: 'scanLine 6s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.6)',
              }}
            />
          </div>

          {/* Effet holographique de fond */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '200px',
              height: '200px',
              background:
                'radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'hologram 4s ease-in-out infinite',
              filter: 'blur(1px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: '150px',
              height: '150px',
              background:
                'radial-gradient(circle, rgba(0, 255, 65, 0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'hologram 5s ease-in-out infinite reverse',
              filter: 'blur(1px)',
            }}
          />

          {/* Contenu principal avec effets 3D */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '900px',
              position: 'relative',
              zIndex: 10,
              transform: 'perspective(1000px) rotateX(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <FadeIn delay={200}>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--font-size-6xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-red)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                    textShadow: `
                      0 0 20px rgba(0, 255, 65, 0.8),
                      0 0 40px rgba(0, 255, 65, 0.6),
                      0 0 60px rgba(0, 255, 65, 0.4)
                    `,
                    letterSpacing: '0.1em',
                    animation: 'glow 3s ease-in-out infinite',
                    transform: 'translateZ(50px)',
                    filter: 'drop-shadow(0 0 30px rgba(0, 255, 65, 0.5))',
                  }}
                >
                  PORTFOLIO TIM
                </h1>

                {/* Effet de glitch sur le titre */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(0, 255, 65, 0.1) 50%, transparent 100%)',
                    animation:
                      'slideInFromLeft 2s ease-in-out infinite alternate',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div
                style={{
                  position: 'relative',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                <p
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                    transform: 'translateZ(30px)',
                    animation: 'float 6s ease-in-out infinite',
                    minHeight: '2.5em', // Pour éviter le saut de ligne pendant l'animation
                  }}
                >
                  <TypewriterEffect
                    texts={[
                      'Développeur Full Stack',
                      'Architecte logiciel',
                      'Manager de projet',
                      'Développeur mobile',
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseTime={2500}
                    className="typewriter-text"
                  />{' '}
                </p>

                {/* Effet de données qui défilent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-100px',
                    width: '2px',
                    height: '20px',
                    background:
                      'linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.8), transparent)',
                    animation: 'dataStream 4s linear infinite',
                    transform: 'translateY(-50%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-100px',
                    width: '2px',
                    height: '20px',
                    background:
                      'linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.8), transparent)',
                    animation: 'dataStream 4s linear infinite 2s',
                    transform: 'translateY(-50%)',
                  }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div
                style={{
                  maxWidth: '900px',
                  margin: '0 auto',
                  padding: 'var(--spacing-8)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                  transform: 'translateZ(20px)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 30px rgba(0, 255, 65, 0.2)',
                }}
              >
                {/* Effet de scanlines */}
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
                        transparent 2px,
                        rgba(0, 255, 65, 0.03) 2px,
                        rgba(0, 255, 65, 0.03) 4px
                      )
                    `,
                    borderRadius: 'var(--radius-lg)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Bordure animée */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 'var(--radius-lg)',
                    background: `
                      linear-gradient(45deg, 
                        transparent, 
                        rgba(0, 255, 65, 0.1), 
                        transparent, 
                        rgba(0, 212, 255, 0.1), 
                        transparent
                      )
                    `,
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 8s ease-in-out infinite',
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h2
                    onClick={() => setShowPresentation(!showPresentation)}
                    style={{
                      fontSize: 'var(--font-size-2xl)',
                      color: 'var(--color-accent-primary)',
                      textAlign: 'center',
                      marginBottom: showPresentation
                        ? 'var(--spacing-6)'
                        : 'var(--spacing-4)',
                      textShadow: '0 0 10px var(--color-accent-primary)',
                      fontWeight: 'var(--font-weight-bold)',
                      letterSpacing: '0.1em',
                      cursor: 'pointer',
                      transition: 'all var(--duration-200) var(--ease-in-out)',
                      position: 'relative',
                      padding: 'var(--spacing-2)',
                      borderRadius: 'var(--radius-md)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        'rgba(0, 255, 65, 0.1)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.textShadow =
                        '0 0 20px var(--color-accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.textShadow =
                        '0 0 10px var(--color-accent-primary)';
                    }}
                  >
                    Laissez-moi me présenter
                    <span
                      style={{
                        marginLeft: 'var(--spacing-2)',
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-accent-secondary)',
                        transition:
                          'transform var(--duration-200) var(--ease-in-out)',
                        display: 'inline-block',
                        transform: showPresentation
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      }}
                    >
                      ▼
                    </span>
                  </h2>

                  <div
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-height-relaxed)',
                      textAlign: 'justify',
                      maxHeight: showPresentation ? '1000px' : '0',
                      overflow: 'hidden',
                      opacity: showPresentation ? 1 : 0,
                      transition: 'all var(--duration-300) var(--ease-in-out)',
                      transform: showPresentation
                        ? 'translateY(0)'
                        : 'translateY(-20px)',
                    }}
                  >
                    <p style={{ marginBottom: 'var(--spacing-4)' }}>
                      <strong style={{ color: 'var(--color-accent-primary)' }}>
                        Développeur Full Stack
                      </strong>{' '}
                      passionné par les nouvelles technologies, je conçois des
                      applications web modernes, performantes et maintenables.
                      Mon parcours en alternance et mes études en architecture
                      des systèmes d&apos;information m&apos;ont permis de
                      développer une solide expertise en{' '}
                      <span style={{ color: 'var(--color-accent-secondary)' }}>
                        JavaScript
                      </span>
                      ,{' '}
                      <span style={{ color: 'var(--color-accent-secondary)' }}>
                        React.js
                      </span>
                      ,{' '}
                      <span style={{ color: 'var(--color-accent-secondary)' }}>
                        Node.js
                      </span>
                      , et bien plus.
                    </p>

                    <p style={{ marginBottom: 'var(--spacing-4)' }}>
                      Mais je ne me limite pas au développement web !<br />
                      Je m&apos;intéresse aussi au développement
                      d&apos;applications de tout type, qu&apos;il s&apos;agisse
                      de{' '}
                      <span style={{ color: 'var(--color-accent-warning)' }}>
                        logiciels
                      </span>
                      , de{' '}
                      <span style={{ color: 'var(--color-accent-warning)' }}>
                        scripts automatisés
                      </span>{' '}
                      ou d&apos;{' '}
                      <span style={{ color: 'var(--color-accent-warning)' }}>
                        expériences interactives
                      </span>
                      .
                    </p>

                    <p style={{ marginBottom: 'var(--spacing-4)' }}>
                      Je développe également des jeux vidéo, notamment avec{' '}
                      <span style={{ color: 'var(--color-accent-alert)' }}>
                        Unreal Engine
                      </span>{' '}
                      et sur des plateformes comme{' '}
                      <span style={{ color: 'var(--color-accent-alert)' }}>
                        FiveM
                      </span>{' '}
                      ou{' '}
                      <span style={{ color: 'var(--color-accent-alert)' }}>
                        Roblox
                      </span>
                      , où je crée des mécaniques personnalisées et des systèmes
                      complexes.
                    </p>

                    <p style={{ marginBottom: 'var(--spacing-4)' }}>
                      Toujours curieux et motivé, je suis en recherche constante
                      de nouveaux défis pour repousser mes limites et créer des
                      projets utiles, immersifs ou simplement fun, en
                      m&apos;appuyant sur les{' '}
                      <span style={{ color: 'var(--color-accent-primary)' }}>
                        technologies les plus actuelles
                      </span>
                      .
                    </p>

                    {/* Bouton En savoir plus - visible seulement quand la présentation est ouverte */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 'var(--spacing-6)',
                      }}
                    >
                      <Link
                        href="/about"
                        style={{
                          color: 'var(--color-accent-primary)',
                          textDecoration: 'none',
                          fontSize: 'var(--font-size-sm)',
                          padding: 'var(--spacing-2) var(--spacing-4)',
                          border: '1px solid var(--color-accent-primary)',
                          borderRadius: 'var(--radius-md)',
                          transition:
                            'all var(--duration-200) var(--ease-in-out)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            'var(--color-accent-primary)';
                          e.currentTarget.style.color =
                            'var(--color-bg-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color =
                            'var(--color-accent-primary)';
                        }}
                      >
                        En savoir plus →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Indicateur de scroll */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'float 2s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  width: '2px',
                  height: '30px',
                  background:
                    'linear-gradient(to bottom, rgba(0, 255, 65, 0.8), transparent)',
                  borderRadius: '1px',
                }}
              />
            </div>
          </div>

          {/* Effet de grille de fond */}
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
              backgroundSize: '50px 50px',
              animation: 'rotate 20s linear infinite',
              pointerEvents: 'none',
            }}
          />
        </section>
      </main>

      <Footer />
      <SpeedInsights />
    </div>
  );
}
