import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeProvider';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { isWireframe } = useTheme();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (prefersReducedMotion || isTouchDevice) {
      gsap.set(cursor, { display: 'none' });
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    const handleHoverEnter = () => {
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: isWireframe ? 'rgba(0,0,0,0.1)' : '#ffffff',
        mixBlendMode: isWireframe ? 'normal' : 'difference',
        duration: 0.3,
      });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: isWireframe ? '#1a1a1a' : 'var(--color-accent)',
        mixBlendMode: 'normal',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Attach hover effects to buttons and links
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    // Observer to handle dynamically added elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('button, a');
      newElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
        el.addEventListener('mouseenter', handleHoverEnter);
        el.addEventListener('mouseleave', handleHoverLeave);
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, [isWireframe]);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block pointer-events-none fixed z-[9999]"
      style={{
        top: 0,
        left: 0,
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: isWireframe ? '#1a1a1a' : 'var(--color-accent)',
        transform: 'translate(-50%, -50%)',
        willChange: 'transform, background-color',
      }}
    />
  );
}
