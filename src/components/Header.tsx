'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      id="navigation"
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-index-sticky)',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-primary)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--spacing-4) 0',
            minHeight: '60px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-accent-red)',
                fontFamily: 'var(--font-family-display)',
                textShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
                letterSpacing: '0.1em',
                filter: 'drop-shadow(0 0 8px rgba(0, 255, 65, 0.3))',
              }}
            >
              TIM
            </div>
          </Link>

          {/* Navigation Desktop avec effets spectaculaires */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'var(--spacing-8)',
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              style={{
                color: isActive('/')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-base)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>Accueil</span>
            </Link>

            <Link
              href="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              style={{
                color: isActive('/about')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-base)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>À propos</span>
            </Link>

            <Link
              href="/formation"
              className={`nav-link ${isActive('/formation') ? 'active' : ''}`}
              style={{
                color: isActive('/formation')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-base)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>Formation</span>
            </Link>

            <Link
              href="/projects"
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              style={{
                color: isActive('/projects')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-base)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>Projets</span>
            </Link>

            <Link
              href="/cv"
              className={`nav-link ${isActive('/cv') ? 'active' : ''}`}
              style={{
                color: isActive('/cv')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-base)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>CV</span>
            </Link>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              padding: 'var(--spacing-2)',
              fontSize: 'var(--font-size-lg)',
            }}
            className="mobile-menu-toggle"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Mobile avec effets */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            role="navigation"
            aria-label="Navigation mobile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-4)',
              padding: 'var(--spacing-4) 0',
              borderTop: '1px solid var(--color-border-primary)',
              backgroundColor: 'var(--color-bg-secondary)',
              animation: 'navSlideIn 0.3s ease-out',
            }}
            className="mobile-nav"
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              style={{
                color: isActive('/')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                borderRadius: 'var(--radius-base)',
                margin: '0 var(--spacing-4)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>Accueil</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              style={{
                color: isActive('/about')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                borderRadius: 'var(--radius-base)',
                margin: '0 var(--spacing-4)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>À propos</span>
            </Link>

            <Link
              href="/formation"
              onClick={() => setIsMenuOpen(false)}
              className={`nav-link ${isActive('/formation') ? 'active' : ''}`}
              style={{
                color: isActive('/formation')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                borderRadius: 'var(--radius-base)',
                margin: '0 var(--spacing-4)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>Formation</span>
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              style={{
                color: isActive('/projects')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                borderRadius: 'var(--radius-base)',
                margin: '0 var(--spacing-4)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>Projets</span>
            </Link>

            <Link
              href="/cv"
              onClick={() => setIsMenuOpen(false)}
              className={`nav-link ${isActive('/cv') ? 'active' : ''}`}
              style={{
                color: isActive('/cv')
                  ? 'var(--color-accent-red)'
                  : 'var(--color-text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                transition: 'color var(--duration-200) var(--ease-in-out)',
                position: 'relative',
                borderRadius: 'var(--radius-base)',
                margin: '0 var(--spacing-4)',
                overflow: 'hidden',
              }}
            >
              <span style={{ position: 'relative', zIndex: 3 }}>CV</span>
            </Link>
          </nav>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
