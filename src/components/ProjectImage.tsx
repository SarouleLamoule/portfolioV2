import Image from 'next/image';
import { useState } from 'react';

interface ProjectImageProps {
  projectName: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ProjectImage({
  projectName,
  className = '',
  width = 200,
  height = 200,
  priority = false,
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Afficher un placeholder généré dynamiquement
    return (
      <div
        className={className}
        style={{
          position: 'relative',
          width: '100%',
          height: `${height}px`,
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg-tertiary)',
          background: `linear-gradient(45deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary) 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-tertiary)',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-bold)',
          fontFamily: 'var(--font-family-display)',
        }}
      >
        {projectName.substring(0, 2).toUpperCase()}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(45deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-tertiary)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            textAlign: 'center',
            padding: 'var(--spacing-4)',
          }}
        ></div>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-tertiary)',
      }}
    >
      <Image
        src={`/projects/${projectName.toLowerCase().replace(/\s+/g, '_')}_blur.svg`}
        alt={`Aperçu flouté — Projet ${projectName}`}
        width={width}
        height={height}
        priority={priority}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setImageError(true)}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(45deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-tertiary)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          textAlign: 'center',
          padding: 'var(--spacing-4)',
        }}
      ></div>
    </div>
  );
}
