export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border-primary)',
        marginTop: 'auto',
        padding: 'var(--spacing-8) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grille de sécurité en arrière-plan */}
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
          backgroundSize: '30px 30px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-8)',
            marginBottom: 'var(--spacing-8)',
          }}
        >
          {/* Section Portfolio Tim */}
          <div>
            <h3
              style={{
                color: 'var(--color-accent-primary)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-4)',
                fontFamily: 'var(--font-family-display)',
                textShadow: '0 0 10px rgba(0, 255, 65, 0.3)',
              }}
            >
              PORTFOLIO TIM
            </h3>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-sm)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              Développeur Full Stack passionné
            </p>
          </div>

          {/* Section Contact */}
          <div>
            <h3
              style={{
                color: 'var(--color-accent-primary)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-4)',
                fontFamily: 'var(--font-family-display)',
              }}
            >
              MES RESEAUX
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-3)',
              }}
            >
              {/* GitHub */}
              <a
                href="https://github.com/SarouleLamoule"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-sm)',
                  transition: 'all var(--duration-200) var(--ease-in-out)',
                  padding: 'var(--spacing-1) 0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent-primary)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <span
                  style={{
                    color: 'var(--color-accent-primary)',
                    fontSize: 'var(--font-size-xs)',
                  }}
                >
                  →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tim-p-6824831a1/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-sm)',
                  transition: 'all var(--duration-200) var(--ease-in-out)',
                  padding: 'var(--spacing-1) 0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent-primary)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
                <span
                  style={{
                    color: 'var(--color-accent-primary)',
                    fontSize: 'var(--font-size-xs)',
                  }}
                >
                  →
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:chaussat.tim@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-sm)',
                  transition: 'all var(--duration-200) var(--ease-in-out)',
                  padding: 'var(--spacing-1) 0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent-primary)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>chaussat.tim@gmail.com</span>
                <span
                  style={{
                    color: 'var(--color-accent-primary)',
                    fontSize: 'var(--font-size-xs)',
                  }}
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation avec effet de scan */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-primary)',
            paddingTop: 'var(--spacing-6)',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Effet de scan sur la ligne */}
          <div
            style={{
              position: 'absolute',
              top: '-1px',
              left: '0',
              right: '0',
              height: '2px',
              background:
                'linear-gradient(90deg, transparent, var(--color-accent-primary), transparent)',
              opacity: 0.6,
              animation: 'scanline-move 3s linear infinite',
            }}
          />

          {/* Copyright */}
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: 'var(--font-size-xs)',
              margin: 0,
              marginBottom: 'var(--spacing-2)',
            }}
          >
            © {currentYear} Tim Perrichot-Chaussat. Tous droits réservés.
          </p>
          <p
            style={{
              color: 'var(--color-text-tertiary)',
              fontSize: 'var(--font-size-xs)',
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            Designed and Developed by Tim
          </p>
        </div>
      </div>
    </footer>
  );
}
