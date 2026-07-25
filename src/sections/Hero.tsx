import SplitTextReveal from '../components/SplitTextReveal';
import { useTheme } from '../context/ThemeProvider';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const { isWireframe } = useTheme();
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Instantly show everything without animation
      gsap.set([overlineRef.current, subtitleRef.current, ctaRef.current, arrowRef.current], {
        opacity: 1,
        y: 0,
        skewY: 0,
      });
      return;
    }

    // SplitTextReveal uses delay: 0.5 and takes ~1.2s to finish (staggered). 
    // It finishes around 1.7s.
    const tl = gsap.timeline({ delay: 1.5 });
    
    if (overlineRef.current) {
      gsap.fromTo(overlineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.5 });
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power3.out' }
      );
    }
    
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.6'
      );
    }
    
    if (arrowRef.current) {
      tl.fromTo(
        arrowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      );
      gsap.to(arrowRef.current, {
        y: 12,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut',
        delay: 2.5,
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero-bg"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '64rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Overline */}
        <p
          ref={overlineRef}
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            marginBottom: '2rem',
            fontWeight: 600,
            color: isWireframe ? '#777' : 'var(--color-accent)',
            opacity: 0,
          }}
        >
          3CS Digital Agency
        </p>

        {/* Main headline with Masked SplitText */}
        <SplitTextReveal
          text="Engineered for the Apex"
          tag="h1"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8"
          delay={0.6}
        />

        {/* Subtitle - centered explicitly, animated via timeline with un-skew */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
            maxWidth: '46rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            color: isWireframe ? '#555' : 'rgba(245, 245, 245, 0.75)',
            opacity: 0,
          }}
        >
          We architect high-converting digital funnels for brands that refuse to blend in.
          Bold strategy. Ruthless execution. Measurable dominance.
        </p>

        {/* CTA Button Wrapper */}
        <div
          ref={ctaRef}
          style={{
            opacity: 0,
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <button
            onClick={() =>
              document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              padding: '1rem 2.25rem',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: isWireframe ? 'transparent' : 'var(--color-accent)',
              color: isWireframe ? '#1a1a1a' : '#fff',
              border: isWireframe ? '2px dashed #333' : 'none',
              borderRadius: isWireframe ? '0' : '999px',
              boxShadow: isWireframe ? 'none' : '0 10px 30px -10px rgba(220, 38, 38, 0.5)',
            }}
            onMouseEnter={(e) => {
              if (!isWireframe) {
                (e.target as HTMLElement).style.transform = 'translateY(-2px) scale(1.03)';
                (e.target as HTMLElement).style.boxShadow = '0 15px 35px -5px rgba(220, 38, 38, 0.7)';
              } else {
                (e.target as HTMLElement).style.background = '#f0f0f0';
              }
            }}
            onMouseLeave={(e) => {
              if (!isWireframe) {
                (e.target as HTMLElement).style.transform = 'translateY(0) scale(1)';
                (e.target as HTMLElement).style.boxShadow = '0 10px 30px -10px rgba(220, 38, 38, 0.5)';
              } else {
                (e.target as HTMLElement).style.background = 'transparent';
              }
            }}
          >
            Enter the Funnel
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={arrowRef}
        style={{
          opacity: 0,
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ArrowDown
          size={24}
          style={{ color: isWireframe ? '#777' : 'rgba(245, 245, 245, 0.4)' }}
        />
      </div>
    </section>
  );
}
