import ScrollReveal from '../components/ScrollReveal';
import AccordionCard from '../components/AccordionCard';
import { useTheme } from '../context/ThemeProvider';
import { Layers, Cpu } from 'lucide-react';

export default function MethodologySection() {
  const { isWireframe } = useTheme();

  return (
    <section
      id="methodology"
      style={{
        position: 'relative',
        paddingTop: '7rem',
        paddingBottom: '7rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '78rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <ScrollReveal direction="right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Interactive Card Column (Alternating for visual harmony) */}
            <div className="lg:col-span-7">
              <AccordionCard
                title="The Modular Stack"
                description="We utilize custom-engineered React architectures and fluid GSAP animation pipelines to deliver unmatched visual engagement and speed."
                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
                imageAlt="Architecture and modular stack"
                icon={<Cpu size={24} />}
                expandedContent={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>
                      <strong style={{ color: isWireframe ? '#111' : 'var(--color-accent)' }}>01. Deconstruction:</strong>{' '}
                      We break down generic page structures and remove bloated third-party overhead, mapping a direct emotional and logical path for your archetype.
                    </p>
                    <p>
                      <strong style={{ color: isWireframe ? '#111' : 'var(--color-accent)' }}>02. Precision Engineering:</strong>{' '}
                      Built with sub-second load targets, 60fps hardware-accelerated animations, and responsive layouts that look seamless across every breakpoint and display.
                    </p>
                  </div>
                }
              />
            </div>

            {/* Right Narrative Column */}
            <div className="lg:col-span-5">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  marginBottom: '1.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  borderRadius: isWireframe ? '0' : '999px',
                  background: isWireframe ? 'transparent' : 'rgba(220, 38, 38, 0.1)',
                  color: isWireframe ? '#333' : 'var(--color-accent)',
                  border: isWireframe ? '1px dashed #777' : '1px solid rgba(220, 38, 38, 0.3)',
                }}
              >
                <Layers size={14} />
                <span>Phase 02 — Method</span>
              </div>
              
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.5rem',
                  color: isWireframe ? '#1a1a1a' : 'var(--color-offwhite)',
                }}
              >
                The Architectural Shift
              </h2>
              
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: isWireframe ? '#555' : 'rgba(245, 245, 245, 0.7)',
                  marginBottom: '1.5rem',
                }}
              >
                We don't start with passive templates. We build bespoke digital experiences designed specifically to anchor brand authority and command user attention.
              </p>
              
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: isWireframe ? '#666' : 'rgba(245, 245, 245, 0.5)',
                }}
              >
                Every motion is calibrated to guide the user's eye toward conversion endpoints, harmonizing aesthetic brilliance with ruthless commercial logic.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
