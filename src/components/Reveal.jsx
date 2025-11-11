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
  const directionClasses = {
    right: 'translate-x-10',
    left: '-translate-x-10',
    up: 'translate-y-10',
    down: '-translate-y-10',
  };

  const baseClasses = prefersReducedMotion 
    ? '' 
    : `opacity-0 ${directionClasses[direction] || directionClasses.right} transition-all duration-700 ease-out`;
  
  const visibleClasses = prefersReducedMotion 
    ? '' 
    : 'opacity-100 translate-x-0 translate-y-0';

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${inView ? visibleClasses : ''} ${className}`}
    >
      {children}
    </div>
  );
}
