import { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/**
 * Reveal component for scroll-triggered animations
 * Wraps children and reveals them when they enter the viewport
 */
export default function Reveal({ 
  children, 
  threshold = 0.15, 
  direction = 'right',
  className = '' 
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Direction-based transform classes
  // Simpler, cleaner animation - just fade and slight upward movement
  const baseClasses = prefersReducedMotion 
    ? '' 
    : 'reveal';
  
  const visibleClasses = prefersReducedMotion 
    ? '' 
    : 'visible';

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${inView ? visibleClasses : ''} ${className}`}
    >
      {children}
    </div>
  );
}
