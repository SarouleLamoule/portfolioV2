'use client';

import NextLink from 'next/link';
import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  className?: string;
  external?: boolean;
}

export default function Link({
  href,
  children,
  variant = 'default',
  className = '',
  external = false,
}: LinkProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'accent':
        return {
          color: 'var(--color-accent-red)',
          fontWeight: 'var(--font-weight-medium)',
        };
      case 'muted':
        return {
          color: 'var(--color-text-tertiary)',
          fontSize: 'var(--font-size-sm)',
        };
      default:
        return {
          color: 'var(--color-text-primary)',
        };
    }
  };

  const baseStyles = {
    ...getVariantStyles(),
    textDecoration: 'none',
    transition: 'color var(--duration-200) var(--ease-in-out)',
    position: 'relative' as const,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;

    if (variant === 'accent') {
      target.style.color = 'var(--color-accent-red-light)';
    } else if (variant === 'muted') {
      target.style.color = 'var(--color-text-secondary)';
    } else {
      target.style.color = 'var(--color-accent-red)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;

    if (variant === 'accent') {
      target.style.color = 'var(--color-accent-red)';
    } else if (variant === 'muted') {
      target.style.color = 'var(--color-text-tertiary)';
    } else {
      target.style.color = 'var(--color-text-primary)';
    }
  };

  if (external) {
    return (
      <a
        href={href}
        className={`link link-${variant} ${className}`}
        style={baseStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span
          style={{
            marginLeft: 'var(--spacing-1)',
            fontSize: 'var(--font-size-xs)',
            opacity: 0.7,
          }}
        >
          ↗
        </span>
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={`link link-${variant} ${className}`}
      style={baseStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </NextLink>
  );
}
