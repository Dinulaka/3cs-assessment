import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export default function SplitTextReveal({
  text,
  className = '',
  tag: Tag = 'h1',
  delay = 0.3,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('.split-char');
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(chars, { y: '0%', opacity: 1 });
      return;
    }

    // Push characters down outside of their overflow-hidden mask
    gsap.set(chars, { y: '100%' });

    const tween = gsap.to(chars, {
      y: '0%',
      duration: 1.2,
      stagger: 0.05,
      delay,
      ease: 'power4.out',
    });

    return () => {
      tween.kill();
    };
  }, [text, delay]);

  const words = text.split(' ');

  return (
    <Tag
      ref={containerRef as React.RefObject<any>}
      className={`char-reveal ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="split-char-mask"
              style={{
                display: 'inline-block',
                overflow: 'hidden', // The masking effect
                verticalAlign: 'bottom',
              }}
            >
              <span
                className="split-char"
                style={{
                  display: 'inline-block',
                  willChange: 'transform',
                }}
              >
                {char}
              </span>
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="split-char-mask" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
              <span className="split-char" style={{ display: 'inline-block' }}>
                &nbsp;
              </span>
            </span>
          )}
        </span>
      ))}
    </Tag>
  );
}
