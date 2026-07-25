import ScrollReveal from '../components/ScrollReveal';
import AccordionCard from '../components/AccordionCard';
import { useTheme } from '../context/ThemeProvider';
import { TrendingUp, Zap } from 'lucide-react';

export default function ResultSection() {
  const { isWireframe } = useTheme();

  return (
    <section
      id="results"
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
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
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
                <Zap size={14} />
                <span>Phase 03 — Results</span>
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
                Unmatched Scale
              </h2>
              
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: isWireframe ? '#555' : 'rgba(245, 245, 245, 0.7)',
                  marginBottom: '1.5rem',
                }}
              >
                When advanced conversion architecture meets high-precision engineering, the numbers speak for themselves. Our clients experience paradigm shifts in performance metrics.
              </p>
              
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: isWireframe ? '#666' : 'rgba(245, 245, 245, 0.5)',
                }}
              >
                The asset we deploy continues working relentlessly around the clock—systematically capturing attention and driving long-term ROI.
              </p>
            </div>

            {/* Right Interactive Card Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <AccordionCard
                title="Metric Dominance"
                description="Watch engagement rates multiply and bounce rates drop as performance optimization takes full effect across all channels."
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                imageAlt="Growth performance dashboard"
                icon={<TrendingUp size={24} />}
                expandedContent={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1.5rem',
                        padding: '0.5rem 0',
                      }}
                    >
                      <div>
                        <p style={{ fontSize: '2rem', fontWeight: 900, color: isWireframe ? '#111' : 'var(--color-accent)' }}>340%</p>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem', opacity: 0.65 }}>Conversion Lift</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '2rem', fontWeight: 900, color: isWireframe ? '#111' : 'var(--color-accent)' }}>0.8s</p>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem', opacity: 0.65 }}>Avg. Load Time</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '2rem', fontWeight: 900, color: isWireframe ? '#111' : 'var(--color-accent)' }}>12x</p>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem', opacity: 0.65 }}>Ad Spend ROI</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '2rem', fontWeight: 900, color: isWireframe ? '#111' : 'var(--color-accent)' }}>97%</p>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem', opacity: 0.65 }}>Client Retention</p>
                      </div>
                    </div>
                    
                    <p style={{ borderTop: isWireframe ? '1px dashed #ddd' : '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', marginTop: '-0.25rem' }}>
                      These outcomes represent the tangible benefit of engineering every screen with intent, transforming digital funnels into reliable revenue catalysts.
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
