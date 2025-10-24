"use client";

import React, { useEffect, useState, useMemo } from 'react';

const ParticleBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particles = useMemo(() => {
    if (!isClient) return [];
    return Array.from({ length: 15 }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 10;
      return {
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        } as React.CSSProperties
      };
    });
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={p.style}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
