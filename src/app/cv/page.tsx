'use client';

import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FadeIn } from '../../components/Animations';

export default function CVPage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV_TIM_PERRICHOT-CHAUSSAT.pdf';
    link.download = 'CV_TIM_PERRICHOT-CHAUSSAT.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Header />

      <main id="main-content" role="main">
        {/* Hero Section avec effets cybersécurité */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--spacing-16) 0',
            background: `
              linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)
            `,
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Grille de sécurité animée en arrière-plan */}
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
              animation: 'securityGridMove 20s linear infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Particules de données flottantes */}
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
            {[...Array(15)].map((_, i) => {
              const left = ((i * 7) % 100) + ((i * 3) % 20);
              const top = ((i * 11) % 100) + ((i * 5) % 15);
              const delay = (i % 3) + i * 0.2;

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${left}%`,
                    top: `${top}%`,
                    width: '3px',
                    height: '3px',
                    backgroundColor: 'rgba(0, 255, 65, 0.6)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
                    animation: `dataFloat ${4 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>

          {/* Contenu principal */}
          <div
            className="container cv-main-container"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <FadeIn>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <h1
                  className="cv-hero-title"
                  style={{
                    fontSize: 'var(--font-size-5xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                    textShadow: `
                      0 0 20px rgba(0, 255, 65, 0.8),
                      0 0 40px rgba(0, 255, 65, 0.6),
                      0 0 60px rgba(0, 255, 65, 0.4)
                    `,
                    letterSpacing: '0.1em',
                    animation: 'terminalGlow 3s ease-in-out infinite',
                    transform: 'translateZ(50px)',
                  }}
                >
                  Mon CV
                </h1>

                {/* Effet de scan sur le titre */}
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
                  className="cv-description"
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: 'var(--line-height-relaxed)',
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                    transform: 'translateZ(30px)',
                    animation: 'float 6s ease-in-out infinite',
                  }}
                >
                  Découvrez mon parcours professionnel et mes compétences
                  techniques. Téléchargez mon CV pour en savoir plus.
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

            {/* Bouton de téléchargement principal */}
            <FadeIn delay={600}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                <button
                  onClick={handleDownload}
                  className="btn cv-download-btn"
                  style={{
                    padding: 'var(--spacing-6) var(--spacing-12)',
                    backgroundColor: 'var(--color-accent-primary)',
                    color: 'var(--color-bg-primary)',
                    border: '2px solid var(--color-accent-primary)',
                    borderRadius: 'var(--radius-xl)',
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    cursor: 'pointer',
                    transition: 'all var(--duration-300) var(--ease-in-out)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 8px 32px rgba(0, 255, 65, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow =
                      '0 12px 40px rgba(0, 255, 65, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 8px 32px rgba(0, 255, 65, 0.4)';
                  }}
                >
                  📄 Télécharger mon CV
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section Preview du CV */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            backgroundColor: 'var(--color-bg-secondary)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <FadeIn>
                <div
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '2px solid var(--color-accent-primary)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--spacing-8)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Effet de grille de sécurité */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `
                        linear-gradient(rgba(0, 255, 65, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 65, 0.02) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                      animation: 'securityGridMove 15s linear infinite',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Preview du CV avec image */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      textAlign: 'center',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-accent-primary)',
                        marginBottom: 'var(--spacing-6)',
                        fontFamily: 'var(--font-family-display)',
                      }}
                    >
                      CV Tim Perrichot-Chaussat
                    </h2>

                    {/* Image du CV */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '800px',
                        margin: '0 auto var(--spacing-8) auto',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        border: '2px solid var(--color-accent-primary)',
                      }}
                    >
                      <Image
                        src="/CV_TIM_PERRICHOT-CHAUSSAT.jpg"
                        alt="CV Tim Perrichot-Chaussat"
                        width={800}
                        height={1131}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                        priority
                      />
                    </div>

                    {/* Bouton de téléchargement en bas */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <button
                        onClick={handleDownload}
                        className="btn cv-download-btn-bottom"
                        style={{
                          padding: 'var(--spacing-4) var(--spacing-8)',
                          backgroundColor: 'transparent',
                          color: 'var(--color-accent-primary)',
                          border: '2px solid var(--color-accent-primary)',
                          borderRadius: 'var(--radius-lg)',
                          fontSize: 'var(--font-size-lg)',
                          fontWeight: 'var(--font-weight-semibold)',
                          cursor: 'pointer',
                          transition:
                            'all var(--duration-300) var(--ease-in-out)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            'var(--color-accent-primary)';
                          e.currentTarget.style.color =
                            'var(--color-bg-primary)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow =
                            '0 4px 15px rgba(0, 255, 65, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color =
                            'var(--color-accent-primary)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        📄 Télécharger CV
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
