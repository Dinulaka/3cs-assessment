import ScrollReveal from '../components/ScrollReveal';
import AccordionCard from '../components/AccordionCard';
import { useTheme } from '../context/ThemeProvider';
import { AlertTriangle, Layout } from 'lucide-react';

export default function ProblemSection() {
  const { isWireframe } = useTheme();

  return (
    <section
      id="problem"
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
                <Layout size={14} />
                <span>Phase 01 — Problem</span>
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
                The Market Noise
              </h2>
              
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: isWireframe ? '#555' : 'rgba(245, 245, 245, 0.7)',
                  marginBottom: '1.5rem',
                }}
              >
                Your competitors are drowning in a sea of templated websites and forgettable brands. They copy each other's playbooks, recycle standard stock layouts, and wonder why their conversion rates flatline.
              </p>
              
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: isWireframe ? '#666' : 'rgba(245, 245, 245, 0.5)',
                }}
              >
                The average web visitor makes a subconscious evaluation in 0.05 seconds. Most infrastructures treat digital experience as a simple checklist, leaking capital and sacrificing engagement at every touchpoint.
              </p>
            </div>

            {/* Right Interactive Card Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <AccordionCard
                title="Identifying the Leak"
                description="Our initial diagnostic scans your entire digital infrastructure for conversion bottlenecks, UX friction, and performance degradation."
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                imageAlt="Digital diagnostic visualization"
                icon={<AlertTriangle size={24} />}
                expandedContent={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>
                      By combining behavioral analytics with architectural deep-dives, we pinpoint precisely where visitor attention drops off and why leads evaporate before converting.
                    </p>
                    <p>
                      We then restructure these critical touchpoints using engineered psychological triggers and high-velocity micro-interactions, turning passive observers into high-ticket brand advocates.
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
