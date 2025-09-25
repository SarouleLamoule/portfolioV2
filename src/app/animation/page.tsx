'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

export default function AnimationPage() {
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
    // Générer les caractères Matrix rain
    const newMatrixChars = Array.from({ length: 30 }, (_, i) => ({
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

        {/* Hero Section */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            textAlign: 'center',
            position: 'relative',
            background: `
              radial-gradient(circle at 20% 30%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%)
            `,
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 var(--spacing-4)',
            }}
          >
            <h1
              style={{
                fontSize: 'var(--font-size-4xl)',
                color: 'var(--color-accent-primary)',
                marginBottom: 'var(--spacing-4)',
                textShadow: '0 0 20px var(--color-accent-primary)',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '0.1em',
              }}
            >
              GALERIE D&apos;ANIMATIONS
            </h1>
            <p
              style={{
                fontSize: 'var(--font-size-lg)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-8)',
              }}
            >
              Aperçu de tous les effets visuels disponibles
            </p>
          </div>
        </section>

        {/* Animations Grid */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: 'var(--spacing-4)',
            paddingRight: 'var(--spacing-4)',
          }}
        >
          {/* Effets de Texte */}
          <div style={{ marginBottom: 'var(--spacing-12)' }}>
            <h2
              style={{
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--color-accent-primary)',
                marginBottom: 'var(--spacing-6)',
                textAlign: 'center',
                textShadow: '0 0 10px var(--color-accent-primary)',
              }}
            >
              EFFETS DE TEXTE
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--spacing-6)',
              }}
            >
              {/* Glow Effect */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Glow Effect
                </h3>
                <div
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--color-accent-primary)',
                    textShadow: '0 0 20px var(--color-accent-primary)',
                    animation: 'glow 2s ease-in-out infinite',
                  }}
                >
                  GLOW TEXT
                </div>
              </div>

              {/* Terminal Typing */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Terminal Typing
                </h3>
                <div
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-accent-primary)',
                    fontFamily: 'monospace',
                    animation: 'terminalTyping 3s steps(20) infinite',
                  }}
                >
                  $ typing effect...
                </div>
              </div>

              {/* Glitch Effect */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Glitch Effect
                </h3>
                <div
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--color-accent-primary)',
                    animation: 'glitchEffect 2s ease-in-out infinite',
                  }}
                >
                  GLITCH
                </div>
              </div>
            </div>
          </div>

          {/* Effets de Fond */}
          <div style={{ marginBottom: 'var(--spacing-12)' }}>
            <h2
              style={{
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--color-accent-primary)',
                marginBottom: 'var(--spacing-6)',
                textAlign: 'center',
                textShadow: '0 0 10px var(--color-accent-primary)',
              }}
            >
              EFFETS DE FOND
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--spacing-6)',
              }}
            >
              {/* Scanlines */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Scanlines
                </h3>
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
                        rgba(0, 255, 65, 0.1) 2px,
                        rgba(0, 255, 65, 0.1) 4px
                      )
                    `,
                    animation: 'scanlines 2s linear infinite',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Lignes de scan animées
                </div>
              </div>

              {/* Security Grid */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Security Grid
                </h3>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                      linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px),
                      linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    animation: 'securityGrid 4s linear infinite',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Grille de sécurité
                </div>
              </div>

              {/* Data Streams */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Data Streams
                </h3>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-100px',
                    width: '2px',
                    height: '20px',
                    background:
                      'linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.8), transparent)',
                    animation: 'dataStream 3s linear infinite',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Flux de données
                </div>
              </div>
            </div>
          </div>

          {/* Effets Interactifs */}
          <div style={{ marginBottom: 'var(--spacing-12)' }}>
            <h2
              style={{
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--color-accent-primary)',
                marginBottom: 'var(--spacing-6)',
                textAlign: 'center',
                textShadow: '0 0 10px var(--color-accent-primary)',
              }}
            >
              EFFETS INTERACTIFS
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--spacing-6)',
              }}
            >
              {/* Hover Glow */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all var(--duration-200) var(--ease-in-out)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(0, 255, 65, 0.5)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Hover Glow
                </h3>
                <div style={{ color: 'var(--color-text-secondary)' }}>
                  Survolez cette carte
                </div>
              </div>

              {/* Pulse Effect */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Pulse Effect
                </h3>
                <div style={{ color: 'var(--color-text-secondary)' }}>
                  Effet de pulsation
                </div>
              </div>

              {/* Float Effect */}
              <div
                style={{
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  border: '1px solid var(--color-accent-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <h3
                  style={{
                    color: 'var(--color-accent-secondary)',
                    marginBottom: 'var(--spacing-4)',
                  }}
                >
                  Float Effect
                </h3>
                <div style={{ color: 'var(--color-text-secondary)' }}>
                  Effet de flottement
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
