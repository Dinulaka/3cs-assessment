import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeProvider';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const { isWireframe } = useTheme();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Simulate loading percentage for that premium agency feel
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 4;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);
      
      if (currentProgress === 100) {
        clearInterval(interval);
      }
    }, 60);

    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
        onComplete();
      }
    });

    // Start exit animation strictly after counter finishes (around 1s total)
    tl.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      delay: 1.0, 
      ease: 'power2.in'
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'expo.inOut'
    });

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isWireframe ? '#ffffff' : '#0a0a0a',
        color: isWireframe ? '#1a1a1a' : '#f5f5f5',
        fontFamily: isWireframe ? 'var(--font-mono)' : 'var(--font-sans)',
        willChange: 'transform',
      }}
    >
      <div 
        ref={textRef} 
        style={{ 
          fontSize: '3rem', 
          fontWeight: 900, 
          letterSpacing: '0.05em',
          willChange: 'transform, opacity'
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
