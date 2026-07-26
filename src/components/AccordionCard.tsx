import { useRef, useState, useCallback, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeProvider';

interface AccordionCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  expandedContent: ReactNode;
  icon?: ReactNode;
}

export default function AccordionCard({
  title,
  description,
  image,
  imageAlt,
  expandedContent,
  icon,
}: AccordionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { isWireframe } = useTheme();

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    // Set initial scale to allow room for parallax movement without showing edges
    gsap.set(img, { scale: 1.2 });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isWireframe) return;

    const tween = gsap.fromTo(
      img,
      { y: '-10%' },
      {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, [isWireframe]);

  const toggle = useCallback(() => {
    const content = contentRef.current;
    const chevron = chevronRef.current;
    const img = imageRef.current;
    if (!content || !chevron) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isExpanded) {
      gsap.set(content, { height: 'auto' });
      const fullHeight = content.offsetHeight;
      gsap.set(content, { height: 0 });

      if (prefersReducedMotion) {
        gsap.set(content, { height: fullHeight });
        gsap.set(chevron, { rotation: 90 });
      } else {
        // Silky smooth height expansion
        gsap.to(content, {
          height: fullHeight,
          duration: 0.6,
          ease: 'power3.inOut',
        });
        gsap.to(chevron, {
          rotation: 90,
          duration: 0.4,
          ease: 'power3.out',
        });
        
        // Micro-interaction: image zoom-out
        if (img && !isWireframe) {
          gsap.fromTo(
            img,
            { scale: 1.3 }, // Adjusted for parallax base scale
            { scale: 1.2, duration: 0.6, ease: 'power2.out' }
          );
        }
      }
    } else {
      if (prefersReducedMotion) {
        gsap.set(content, { height: 0 });
        gsap.set(chevron, { rotation: 0 });
      } else {
        // Smooth collapse
        gsap.to(content, {
          height: 0,
          duration: 0.5,
          ease: 'power3.inOut',
        });
        gsap.to(chevron, {
          rotation: 0,
          duration: 0.4,
          ease: 'power3.out',
        });
      }
    }
    setIsExpanded(!isExpanded);
  }, [isExpanded, isWireframe]);

  return (
    <div
      className="glass-card transition-all duration-500 shadow-2xl"
      style={{
        borderRadius: isWireframe ? '0' : '20px',
        padding: '0',
        overflow: 'hidden',
        border: isWireframe ? '2px dashed #999' : '1px solid rgba(255, 255, 255, 0.1)',
        background: isWireframe ? '#ffffff' : 'rgba(20, 20, 20, 0.6)',
      }}
    >
      {/* Image Container */}
      <div
        className="wireframe-image relative overflow-hidden"
        style={{ height: '260px' }}
      >
        <img
          ref={imageRef}
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ opacity: isWireframe ? 0 : 0.85, willChange: 'transform' }}
          loading="lazy"
        />
        <span className="wireframe-label">{imageAlt}</span>
      </div>

      {/* Content Container with generous padding to prevent edge crowding */}
      <div style={{ padding: '2.5rem 2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          {icon && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3.25rem',
                height: '3.25rem',
                background: isWireframe ? 'transparent' : 'rgba(220, 38, 38, 0.12)',
                border: isWireframe ? '2px dashed #999' : '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: isWireframe ? '0' : '12px',
                color: isWireframe ? '#1a1a1a' : '#dc2626',
                flexShrink: 0,
              }}
            >
              {icon}
            </div>
          )}
          <div>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: isWireframe ? '#1a1a1a' : 'var(--color-offwhite)',
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            color: isWireframe ? '#555' : 'rgba(245, 245, 245, 0.75)',
          }}
        >
          {description}
        </p>

        {/* Accordion content */}
        <div ref={contentRef} className="accordion-content" style={{ height: 0, overflow: 'hidden' }}>
          <div
            style={{
              paddingTop: '1.25rem',
              paddingBottom: '0.5rem',
              marginTop: '0.5rem',
              borderTop: isWireframe ? '1px dashed #ccc' : '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: isWireframe ? '#444' : 'rgba(245, 245, 245, 0.65)',
              }}
            >
              {expandedContent}
            </div>
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={toggle}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: isWireframe ? '#1a1a1a' : 'var(--color-accent)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span>{isExpanded ? 'Collapse details' : 'Read more'}</span>
          <ChevronRight ref={chevronRef} size={18} />
        </button>
      </div>
    </div>
  );
}
