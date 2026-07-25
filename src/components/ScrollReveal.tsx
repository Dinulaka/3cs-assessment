import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, scale: 1, y: 0, x: 0, skewY: 0 });
      return;
    }

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      scale: 0.98, // More subtle scale to prevent layout choppiness
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
      skewY: direction === 'up' ? 1 : 0,
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      skewY: 0,
      duration: 1.5, // Longer duration for a silkier glide
      delay,
      ease: 'expo.out', // Expo out gives a fast start but very long, smooth tail
      scrollTrigger: {
        trigger: el,
        start: 'top 85%', // Slightly lower trigger so the smooth tail is fully visible
        toggleActions: 'play none none none',
      },
    };

    const tween = gsap.fromTo(el, fromVars, toVars);

    return () => {
      tween.kill();
    };
  }, [delay, direction]);

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ opacity: 0, willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
}
