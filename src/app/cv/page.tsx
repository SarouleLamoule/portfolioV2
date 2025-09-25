'use client';

import { Header, Footer } from '../../components';

export default function CVPage() {
  return (
    <>
      <Header />

      <main
        id="main-content"
        style={{ minHeight: '100vh', paddingTop: '80px' }}
      >
        {/* Section Hero */}
        <section
          style={{
            padding: 'var(--spacing-16) 0',
            background:
              'linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)',
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
                linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              opacity: 0.5,
            }}
          />

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
                  textShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
                  fontFamily: 'var(--font-family-display)',
                }}
              >
                CURRICULUM VITAE
              </h1>

              <p
                style={{
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                  marginBottom: 'var(--spacing-8)',
                }}
              >
                Mon parcours professionnel et mes compétences en développement
                et cybersécurité
              </p>
            </div>
          </div>
        </section>

        {/* Section CV */}
        <section style={{ padding: 'var(--spacing-16) 0' }}>
          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {/* Informations personnelles */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-8)',
                  marginBottom: 'var(--spacing-8)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Informations Personnelles
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-4)',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-2)',
                      }}
                    >
                      Tim
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      Développeur Full Stack & Expert Cybersécurité
                    </p>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-1)',
                      }}
                    >
                      📧 Email
                    </h4>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      tim@portfolio.dev
                    </p>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-1)',
                      }}
                    >
                      📱 Téléphone
                    </h4>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      +33 6 XX XX XX XX
                    </p>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--spacing-1)',
                      }}
                    >
                      🌐 LinkedIn
                    </h4>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      linkedin.com/in/tim-dev
                    </p>
                  </div>
                </div>
              </div>

              {/* Expérience professionnelle */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-8)',
                  marginBottom: 'var(--spacing-8)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Expérience Professionnelle
                </h2>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-6)',
                  }}
                >
                  {[
                    {
                      title: 'Développeur Full Stack Senior',
                      company: 'TechCorp Solutions',
                      period: '2023 - Présent',
                      description:
                        "Développement d'applications web sécurisées, architecture microservices, et mise en place de protocoles de sécurité.",
                      achievements: [
                        'Sécurisation de 15+ applications web',
                        'Réduction de 40% des vulnérabilités',
                        'Mise en place de CI/CD sécurisé',
                      ],
                    },
                    {
                      title: 'Développeur Cybersécurité',
                      company: 'SecureDev Agency',
                      period: '2022 - 2023',
                      description:
                        "Tests de pénétration, audits de sécurité, et développement d'outils de détection d'intrusions.",
                      achievements: [
                        'Audit de 20+ systèmes',
                        'Détection de 150+ vulnérabilités',
                        'Formation de 10+ développeurs',
                      ],
                    },
                    {
                      title: 'Développeur Web Junior',
                      company: 'WebStart Studio',
                      period: '2021 - 2022',
                      description:
                        "Développement d'applications web modernes avec React, Node.js et bases de données.",
                      achievements: [
                        'Développement de 8 applications',
                        'Amélioration des performances de 60%',
                        'Mise en place de tests automatisés',
                      ],
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      style={{
                        background: 'var(--color-bg-tertiary)',
                        border: '1px solid var(--color-border-secondary)',
                        borderRadius: 'var(--radius-base)',
                        padding: 'var(--spacing-6)',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: 'var(--spacing-4)',
                          flexWrap: 'wrap',
                          gap: 'var(--spacing-2)',
                        }}
                      >
                        <div>
                          <h3
                            style={{
                              fontSize: 'var(--font-size-lg)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'var(--color-text-primary)',
                              marginBottom: 'var(--spacing-1)',
                            }}
                          >
                            {job.title}
                          </h3>
                          <p
                            style={{
                              fontSize: 'var(--font-size-base)',
                              color: 'var(--color-accent-primary)',
                              fontWeight: 'var(--font-weight-medium)',
                            }}
                          >
                            {job.company}
                          </p>
                        </div>
                        <span
                          style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)',
                            background: 'var(--color-bg-primary)',
                            padding: 'var(--spacing-2) var(--spacing-3)',
                            borderRadius: 'var(--radius-base)',
                            border: '1px solid var(--color-border-primary)',
                          }}
                        >
                          {job.period}
                        </span>
                      </div>

                      <p
                        style={{
                          color: 'var(--color-text-secondary)',
                          lineHeight: 'var(--line-height-relaxed)',
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        {job.description}
                      </p>

                      <div>
                        <h4
                          style={{
                            fontSize: 'var(--font-size-sm)',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--spacing-2)',
                          }}
                        >
                          Réalisations clés :
                        </h4>
                        <ul
                          style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {job.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-secondary)',
                                marginBottom: 'var(--spacing-1)',
                                paddingLeft: 'var(--spacing-4)',
                                position: 'relative',
                              }}
                            >
                              <span
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  color: 'var(--color-accent-primary)',
                                }}
                              >
                                ▶
                              </span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compétences techniques */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-8)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <h2
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--spacing-6)',
                    fontFamily: 'var(--font-family-display)',
                  }}
                >
                  Compétences Techniques
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-6)',
                  }}
                >
                  {[
                    {
                      category: 'Développement Web',
                      skills: [
                        'React',
                        'Next.js',
                        'Vue.js',
                        'Node.js',
                        'Express',
                        'TypeScript',
                      ],
                      color: 'var(--color-accent-primary)',
                    },
                    {
                      category: 'Cybersécurité',
                      skills: [
                        'Pentesting',
                        'OWASP',
                        'Burp Suite',
                        'Nmap',
                        'Metasploit',
                        'Wireshark',
                      ],
                      color: 'var(--color-accent-secondary)',
                    },
                    {
                      category: 'Bases de données',
                      skills: [
                        'PostgreSQL',
                        'MongoDB',
                        'Redis',
                        'Elasticsearch',
                        'SQL',
                        'NoSQL',
                      ],
                      color: 'var(--color-accent-warning)',
                    },
                    {
                      category: 'DevOps & Cloud',
                      skills: [
                        'Docker',
                        'Kubernetes',
                        'AWS',
                        'Azure',
                        'CI/CD',
                        'Terraform',
                      ],
                      color: 'var(--color-accent-alert)',
                    },
                  ].map((category, index) => (
                    <div
                      key={index}
                      style={{
                        background: 'var(--color-bg-tertiary)',
                        border: '1px solid var(--color-border-secondary)',
                        borderRadius: 'var(--radius-base)',
                        padding: 'var(--spacing-4)',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 'var(--font-size-lg)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: category.color,
                          marginBottom: 'var(--spacing-4)',
                        }}
                      >
                        {category.category}
                      </h3>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 'var(--spacing-2)',
                        }}
                      >
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            style={{
                              fontSize: 'var(--font-size-sm)',
                              color: category.color,
                              background: `${category.color}15`,
                              padding: 'var(--spacing-1) var(--spacing-3)',
                              borderRadius: 'var(--radius-full)',
                              border: `1px solid ${category.color}40`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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
