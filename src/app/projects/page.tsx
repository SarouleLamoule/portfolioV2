'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FadeIn, StaggeredFadeIn } from '../../components/Animations';
import { ProjectCard, ProjectModal } from '../../components';

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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'professional' | 'academic' | 'personal'
  >('personal');

  useEffect(() => {
    // Données des projets personnels uniquement
    const projectsData: Project[] = [
      {
        id: '1',
        name: 'Animeo',
        tag: 'ANIMEO-PLATFORM',
        image: '/projects/animeo.png',
        status: 'in-progress',
        startDate: '2023',
        technologies: [],
        description:
          "Membre de l'équipe de développement d'Animeo, une plateforme communautaire autour des animés.",
        liveUrl: 'https://animeovf.fr/',
      },
      {
        id: '2',
        name: 'Karma - Bot Discord',
        tag: 'KARMA-BOT',
        image: '/projects/karma.png',
        status: 'in-progress',
        startDate: '2025',
        technologies: ['Node.js', 'MongoDB', 'Discord.js', 'GitHub Actions'],
        description:
          'Bot Discord exclusif pour la communauté Animeo avec système de Karma/Coins, Clans et événements.',
      },
      {
        id: '3',
        name: 'Portfolio V1',
        tag: 'PORTFOLIO-V1',
        image: '/projects/portfolioV1.png',
        status: 'completed',
        startDate: '2024',
        technologies: ['React.js', 'CSS', 'React Router', 'JavaScript'],
        description: 'Version 1 de mon portfolio personnel.',
        liveUrl: 'https://saroulelamoule.github.io/portfolio/',
        githubUrl: 'https://github.com/SarouleLamoule/portfolio',
      },
      {
        id: '4',
        name: 'carteldelRitmo',
        tag: 'CARTELDELRITMO',
        image: '/projects/carteldelritmo.png',
        status: 'completed',
        startDate: '2024',
        technologies: ['React.js', 'CSS', 'React Router', 'JavaScript'],
        description:
          "Site dédiée à un label de musique pour l'univers GTA RP. Possibilité d'écouter les musiques.",
        liveUrl: 'https://cartel-del-ritmo.vercel.app/',
        githubUrl: 'https://github.com/SarouleLamoule/CartelDelRitmo',
      },
      {
        id: '5',
        name: 'Black Water',
        tag: 'BLACK-WATER',
        image: '/projects/blackwater.png',
        status: 'in-progress',
        startDate: '2025',
        technologies: ['Next.js', 'CSS', 'TypeScript', 'JavaScript'],
        description:
          "Site dédiée à un groupe illégal fictif pour l'univers GTA RP.",
        liveUrl: 'https://black-water-self.vercel.app/',
        githubUrl: 'https://github.com/SarouleLamoule/Black-Water',
      },
      {
        id: '6',
        name: 'Saroule RP - Serveur GTA RP',
        tag: 'SAROULE-RP',
        image: '/projects/default.png',
        status: 'completed',
        startDate: '2024',
        technologies: ['FiveM', 'Lua', 'Infrastructure', 'Custom Scripts'],
        description:
          "Projet personnel de serveur GTA RP développé entièrement from scratch dans un but d'apprentissage autonome.",
      },
      {
        id: '7',
        name: 'Serveur Cache-Cache GTA RP',
        tag: 'CACHE-CACHE',
        image: '/projects/default.png',
        status: 'completed',
        startDate: '2024',
        technologies: ['FiveM', 'Lua', 'Multiplayer', 'Custom Maps'],
        description:
          'Projet fun développé pour jouer entre amis, proposant des sessions de cache-cache multijoueur.',
      },
    ];

    setProjects(projectsData);
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleTabChange = (tab: 'professional' | 'academic' | 'personal') => {
    setActiveTab(tab);
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

          {/* Effet de terminal avec texte qui s'affiche - Desktop */}
          <div
            className="projects-terminal"
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              right: '10%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid rgba(0, 255, 65, 0.5)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-4)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-accent-primary)',
              textAlign: 'left',
              maxWidth: '600px',
              margin: '0 auto',
              boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-2)' }}>
              <span style={{ color: 'var(--color-success)' }}>
                TIM@DEVELOPER:
              </span>
              <span style={{ color: 'var(--color-text-secondary)' }}>~$</span>
              <span style={{ color: 'var(--color-accent-primary)' }}>
                {' '}
                ls -la projects/
              </span>
            </div>
            <div style={{ marginBottom: 'var(--spacing-2)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>
                Loading project database...
              </span>
            </div>
            <div style={{ marginBottom: 'var(--spacing-2)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>
                Authentication:{' '}
              </span>
              <span style={{ color: 'var(--color-success)' }}>GRANTED</span>
            </div>
            <div style={{ marginBottom: 'var(--spacing-2)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>
                Loading project files:{' '}
              </span>
              <div
                style={{
                  width: '200px',
                  height: '4px',
                  backgroundColor: 'rgba(0, 255, 65, 0.3)',
                  borderRadius: '2px',
                  marginTop: 'var(--spacing-1)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--color-accent-primary)',
                    borderRadius: '2px',
                    animation: 'loadingBar 3s ease-in-out infinite',
                    boxShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
                  }}
                />
              </div>
            </div>
            <div>
              <span style={{ color: 'var(--color-success)' }}>
                PROJECTS LOADED
              </span>
              <span
                style={{
                  color: 'var(--color-accent-primary)',
                  animation: 'terminalBlink 1s infinite',
                }}
              >
                _
              </span>
            </div>
          </div>

          {/* Contenu principal avec effet de terminal */}
          <div
            className="container projects-main-container"
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
                  className="projects-hero-title"
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
                  Mes Projets
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
                  className="projects-description"
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
                  Découvrez mes projets de développement, de la cybersécurité au
                  DevOps. Chaque projet reflète ma passion pour
                  l&apos;innovation technologique.
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

            {/* Indicateur d'accès accordé */}
            <FadeIn delay={600}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: 'var(--spacing-6)',
                  animation: 'accessGranted 2s ease-in-out infinite',
                }}
                className="access-granted-indicator"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid var(--color-success)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    color: 'var(--color-success)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-bold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: 'var(--color-success)',
                      borderRadius: '50%',
                      animation: 'pulse 1s infinite',
                    }}
                  />
                  Projets Accessibles
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Barre de navigation des projets */}
        <section
          style={{
            padding: 'var(--spacing-8) 0',
            backgroundColor: 'var(--color-bg-primary)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {/* Barre de navigation horizontale améliorée */}
              <div
                className="projects-navigation"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--spacing-1)',
                  marginBottom: 'var(--spacing-8)',
                  background:
                    'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)',
                  border: '2px solid rgba(0, 255, 65, 0.3)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--spacing-1)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.6),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    0 0 20px rgba(0, 255, 65, 0.2)
                  `,
                  position: 'relative',
                  overflow: 'hidden',
                  // Styles responsive
                  flexWrap: 'wrap',
                  maxWidth: '100%',
                }}
              >
                {/* Effet de grille de sécurité en arrière-plan */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                      linear-gradient(rgba(0, 255, 65, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 255, 65, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    animation: 'securityGridMove 10s linear infinite',
                    pointerEvents: 'none',
                    opacity: 0.3,
                  }}
                />

                {[
                  { key: 'professional', label: 'Professionnels' },
                  { key: 'academic', label: 'Académiques' },
                  { key: 'personal', label: 'Personnels' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() =>
                      handleTabChange(
                        tab.key as 'professional' | 'academic' | 'personal'
                      )
                    }
                    className="nav-tab-button"
                    style={{
                      padding: 'var(--spacing-5) var(--spacing-8)',
                      borderRadius: 'var(--radius-lg)',
                      border: 'none',
                      background:
                        activeTab === tab.key
                          ? 'linear-gradient(135deg, rgba(0, 255, 65, 0.2) 0%, rgba(0, 255, 65, 0.1) 100%)'
                          : 'transparent',
                      color:
                        activeTab === tab.key
                          ? 'var(--color-accent-primary)'
                          : 'var(--color-text-secondary)',
                      fontSize: 'var(--font-size-lg)',
                      fontWeight:
                        activeTab === tab.key
                          ? 'var(--font-weight-bold)'
                          : 'var(--font-weight-semibold)',
                      cursor: 'pointer',
                      transition: 'all var(--duration-300) var(--ease-in-out)',
                      position: 'relative',
                      overflow: 'hidden',
                      textAlign: 'center',
                      textShadow:
                        activeTab === tab.key
                          ? '0 0 10px rgba(0, 255, 65, 0.5)'
                          : 'none',
                      boxShadow:
                        activeTab === tab.key
                          ? '0 4px 20px rgba(0, 255, 65, 0.3), inset 0 1px 0 rgba(0, 255, 65, 0.2)'
                          : 'none',
                      // Styles responsive
                      flex: '1 1 auto',
                      minWidth: '120px',
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab.key) {
                        e.currentTarget.style.background =
                          'rgba(0, 255, 65, 0.05)';
                        e.currentTarget.style.color =
                          'var(--color-accent-primary)';
                        e.currentTarget.style.textShadow =
                          '0 0 8px rgba(0, 255, 65, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab.key) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color =
                          'var(--color-text-secondary)';
                        e.currentTarget.style.textShadow = 'none';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {/* Effet de scan pour l'onglet actif */}
                    {activeTab === tab.key && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          right: 0,
                          bottom: 0,
                          background:
                            'linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.4), transparent)',
                          animation: 'slideInFromLeft 3s ease-in-out infinite',
                        }}
                      />
                    )}

                    {/* Point indicateur pour l'onglet actif */}
                    {activeTab === tab.key && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: 'var(--spacing-2)',
                          transform: 'translateY(-50%)',
                          width: '6px',
                          height: '6px',
                          backgroundColor: 'var(--color-accent-primary)',
                          borderRadius: '50%',
                          boxShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
                          animation: 'pulse 2s ease-in-out infinite',
                        }}
                      />
                    )}

                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contenu des projets selon l'onglet actif */}
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
              {/* Contenu dynamique selon l'onglet actif */}
              {activeTab === 'professional' && (
                <>
                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      textAlign: 'center',
                      lineHeight: 'var(--line-height-relaxed)',
                      maxWidth: '800px',
                      margin: '0 auto var(--spacing-12) auto',
                    }}
                  >
                    Au cours de mes différentes alternances, j&apos;ai eu
                    l&apos;opportunité de travailler sur des projets complexes
                    et variés dans des contextes professionnels exigeants. Bien
                    que ces projets soient soumis à des clauses de
                    confidentialité, ils m&apos;ont permis de développer des
                    compétences concrètes dans des domaines clés.
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(350px, 1fr))',
                      gap: 'var(--spacing-8)',
                      marginBottom: 'var(--spacing-16)',
                    }}
                  >
                    {/* Application mobile de gestion viticole */}
                    <div
                      style={{
                        background: 'rgba(10, 10, 10, 0.8)',
                        border: '1px solid var(--color-accent-primary)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-8)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition:
                          'all var(--duration-300) var(--ease-in-out)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow =
                          '0 0 30px rgba(0, 255, 65, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 'var(--font-size-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--color-accent-primary)',
                          marginBottom: 'var(--spacing-4)',
                          fontFamily: 'var(--font-family-display)',
                        }}
                      >
                        Application mobile de gestion viticole
                      </h3>
                      <p
                        style={{
                          color: 'var(--color-text-secondary)',
                          lineHeight: 'var(--line-height-relaxed)',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        Application multiplateforme réalisée sur une durée
                        d&apos;un an en Xamarin pour simplifier la gestion
                        quotidienne des viticulteurs bordelais.
                      </p>
                      <ul
                        style={{
                          color: 'var(--color-text-tertiary)',
                          paddingLeft: 'var(--spacing-4)',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        <li>Gestion des stocks et interventions</li>
                        <li>Traçabilité complète</li>
                        <li>Synchronisation cloud</li>
                        <li>Travail hors-ligne</li>
                      </ul>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 'var(--spacing-2)',
                        }}
                      >
                        {['Xamarin', 'C#', 'Cloud Sync', 'Offline Mode'].map(
                          (tech) => (
                            <span
                              key={tech}
                              style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-accent-primary)',
                                background: 'rgba(0, 255, 65, 0.1)',
                                padding: 'var(--spacing-1) var(--spacing-3)',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid rgba(0, 255, 65, 0.3)',
                              }}
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Coffre-fort numérique */}
                    <div
                      style={{
                        background: 'rgba(10, 10, 10, 0.8)',
                        border: '1px solid var(--color-accent-secondary)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-8)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition:
                          'all var(--duration-300) var(--ease-in-out)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow =
                          '0 0 30px rgba(0, 212, 255, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 'var(--font-size-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--color-accent-secondary)',
                          marginBottom: 'var(--spacing-4)',
                          fontFamily: 'var(--font-family-display)',
                        }}
                      >
                        Coffre-fort numérique
                      </h3>
                      <p
                        style={{
                          color: 'var(--color-text-secondary)',
                          lineHeight: 'var(--line-height-relaxed)',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        Développement d&apos;une solution sécurisée de gestion
                        des identifiants avec chiffrement des données sensibles.
                      </p>
                      <ul
                        style={{
                          color: 'var(--color-text-tertiary)',
                          paddingLeft: 'var(--spacing-4)',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        <li>Chiffrement des données sensibles</li>
                        <li>Gestion fine des accès et droits</li>
                        <li>Interface d&apos;administration complète</li>
                        <li>Sécurité renforcée</li>
                      </ul>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 'var(--spacing-2)',
                        }}
                      >
                        {[
                          'C#',
                          'Encryption',
                          'Access Control',
                          'Admin Panel',
                        ].map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: 'var(--font-size-sm)',
                              color: 'var(--color-accent-secondary)',
                              background: 'rgba(0, 212, 255, 0.1)',
                              padding: 'var(--spacing-1) var(--spacing-3)',
                              borderRadius: 'var(--radius-full)',
                              border: '1px solid rgba(0, 212, 255, 0.3)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Refonte logiciel interne */}
                    <div
                      style={{
                        background: 'rgba(10, 10, 10, 0.8)',
                        border: '1px solid var(--color-accent-warning)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-8)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition:
                          'all var(--duration-300) var(--ease-in-out)',
                        gridColumn: '1 / -1',
                        maxWidth: '600px',
                        margin: '0 auto',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow =
                          '0 0 30px rgba(255, 255, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 'var(--font-size-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--color-accent-warning)',
                          marginBottom: 'var(--spacing-4)',
                          fontFamily: 'var(--font-family-display)',
                        }}
                      >
                        Refonte logiciel interne
                      </h3>
                      <p
                        style={{
                          color: 'var(--color-text-secondary)',
                          lineHeight: 'var(--line-height-relaxed)',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        Refonte complète d&apos;un logiciel interne
                        d&apos;entreprise avec modernisation de
                        l&apos;architecture.
                      </p>
                      <p
                        style={{
                          color: 'var(--color-text-tertiary)',
                          fontStyle: 'italic',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        Détails confidentiels.
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 'var(--spacing-2)',
                        }}
                      >
                        {['.NET', 'SQL Server', 'WPF'].map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: 'var(--font-size-sm)',
                              color: 'var(--color-accent-warning)',
                              background: 'rgba(255, 255, 0, 0.1)',
                              padding: 'var(--spacing-1) var(--spacing-3)',
                              borderRadius: 'var(--radius-full)',
                              border: '1px solid rgba(255, 255, 0, 0.3)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'academic' && (
                <>
                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      textAlign: 'center',
                      lineHeight: 'var(--line-height-relaxed)',
                      maxWidth: '800px',
                      margin: '0 auto var(--spacing-12) auto',
                    }}
                  >
                    Durant ma formation, j&apos;ai participé à de nombreux
                    projets pédagogiques, seul ou en équipe. Voici quelques
                    exemples représentatifs parmi les différents projets
                    réalisés.
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: 'var(--spacing-6)',
                      marginBottom: 'var(--spacing-16)',
                    }}
                  >
                    {[
                      {
                        title:
                          "Application Android de gestion d'entreprise de bus",
                        tech: 'Android Studio, Java',
                        details: [
                          'Gestion des lignes, conducteurs, véhicules et horaires',
                          'Base de données locale SQLite',
                          'Interface utilisateur Material Design',
                        ],
                        color: 'var(--color-accent-primary)',
                      },
                      {
                        title: 'Blog avec CMS personnalisé',
                        tech: 'PHP & MySQL',
                        details: [
                          'CMS personnalisé',
                          'Base de données MySQL',
                          "Interface d'administration",
                        ],
                        color: 'var(--color-accent-secondary)',
                      },
                      {
                        title: 'API REST',
                        tech: 'Node.js / Express',
                        details: [
                          'Architecture REST',
                          'Base de données MongoDB',
                          'Endpoints sécurisés',
                        ],
                        color: 'var(--color-accent-warning)',
                      },
                      {
                        title: 'Application de gestion C#',
                        tech: 'WPF',
                        details: [
                          'Interface WPF',
                          'Architecture moderne',
                          'Gestion de données',
                        ],
                        color: 'var(--color-accent-alert)',
                      },
                      {
                        title: 'CRM',
                        tech: 'Laravel',
                        details: [
                          'Framework Laravel',
                          'Gestion client',
                          'Interface moderne',
                        ],
                        color: 'var(--color-accent-primary)',
                      },
                      {
                        title: 'Dashboard système',
                        tech: 'Python / Flask',
                        details: [
                          'Framework Flask',
                          'Visualisation de données',
                          'Interface dashboard',
                        ],
                        color: 'var(--color-accent-secondary)',
                      },
                      {
                        title: 'App météo',
                        tech: 'React',
                        details: [
                          'Framework React',
                          'API météo',
                          'Interface responsive',
                        ],
                        color: 'var(--color-accent-warning)',
                      },
                    ].map((project, index) => (
                      <div
                        key={index}
                        style={{
                          background: 'rgba(10, 10, 10, 0.8)',
                          border: `1px solid ${project.color}`,
                          borderRadius: 'var(--radius-lg)',
                          padding: 'var(--spacing-6)',
                          position: 'relative',
                          overflow: 'hidden',
                          transition:
                            'all var(--duration-300) var(--ease-in-out)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.boxShadow = `0 0 20px ${project.color}40`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <h3
                          style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: project.color,
                            marginBottom: 'var(--spacing-3)',
                            fontFamily: 'var(--font-family-display)',
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-tertiary)',
                            marginBottom: 'var(--spacing-3)',
                            fontStyle: 'italic',
                          }}
                        >
                          {project.tech}
                        </p>
                        <ul
                          style={{
                            color: 'var(--color-text-secondary)',
                            paddingLeft: 'var(--spacing-4)',
                            fontSize: 'var(--font-size-sm)',
                            lineHeight: 'var(--line-height-relaxed)',
                          }}
                        >
                          {project.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'personal' && (
                <>
                  <p
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      textAlign: 'center',
                      lineHeight: 'var(--line-height-relaxed)',
                      maxWidth: '800px',
                      margin: '0 auto var(--spacing-12) auto',
                    }}
                  >
                    Je suis également très actif sur des projets persos,
                    notamment dans les domaines communautaires, le
                    divertissement et la passion.
                  </p>

                  {projects.length > 0 && (
                    <StaggeredFadeIn>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns:
                            'repeat(auto-fit, minmax(350px, 1fr))',
                          gap: 'var(--spacing-8)',
                        }}
                      >
                        {projects.map((project, index) => (
                          <div
                            key={project.id}
                            style={{
                              animationDelay: `${index * 100}ms`,
                            }}
                          >
                            <ProjectCard
                              project={project}
                              onClick={() => handleCardClick(project)}
                              className="project-card-3d"
                            />
                          </div>
                        ))}
                      </div>
                    </StaggeredFadeIn>
                  )}

                  {/* Section Statistiques - Seulement pour les projets personnels */}
                  <section
                    style={{
                      padding: 'var(--spacing-16) 0',
                      backgroundColor: 'var(--color-bg-secondary)',
                      marginTop: 'var(--spacing-8)',
                    }}
                  >
                    <div className="container">
                      <FadeIn>
                        <h2
                          style={{
                            textAlign: 'center',
                            color: 'var(--color-accent-primary)',
                          }}
                        >
                          Statistiques des Projets Personnels
                        </h2>
                      </FadeIn>
                      <StaggeredFadeIn>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 'var(--spacing-8)',
                            backgroundColor: 'var(--color-bg-primary)',
                            border: '1px solid var(--color-border-primary)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--spacing-8)',
                            maxWidth: '800px',
                            margin: '0 auto',
                            boxShadow: 'var(--shadow-lg)',
                          }}
                        >
                          <div style={{ textAlign: 'center' }}>
                            <p
                              style={{
                                fontSize: 'var(--font-size-5xl)',
                                fontWeight: 'var(--font-weight-bold)',
                                color: 'var(--color-text-primary)',
                                margin: 0,
                                lineHeight: 1,
                              }}
                            >
                              {projects.length}
                            </p>
                            <p
                              style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-secondary)',
                                marginTop: 'var(--spacing-2)',
                              }}
                            >
                              Projets personnels
                            </p>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <p
                              style={{
                                fontSize: 'var(--font-size-5xl)',
                                fontWeight: 'var(--font-weight-bold)',
                                color: 'var(--color-success)',
                                margin: 0,
                                lineHeight: 1,
                              }}
                            >
                              {
                                projects.filter((p) => p.status === 'completed')
                                  .length
                              }
                            </p>
                            <p
                              style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-secondary)',
                                marginTop: 'var(--spacing-2)',
                              }}
                            >
                              Terminés
                            </p>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <p
                              style={{
                                fontSize: 'var(--font-size-5xl)',
                                fontWeight: 'var(--font-weight-bold)',
                                color: 'var(--color-warning)',
                                margin: 0,
                                lineHeight: 1,
                              }}
                            >
                              {
                                projects.filter(
                                  (p) => p.status === 'in-progress'
                                ).length
                              }
                            </p>
                            <p
                              style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-secondary)',
                                marginTop: 'var(--spacing-2)',
                              }}
                            >
                              En cours
                            </p>
                          </div>
                        </div>
                      </StaggeredFadeIn>
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Modal des projets */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}
