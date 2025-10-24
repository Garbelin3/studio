"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
}

export function AnimateOnScroll({ children, className, delay = 0, as: Tag = 'div', ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn('animate-on-scroll', isVisible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
