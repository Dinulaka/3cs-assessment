import ScrollReveal from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeProvider';

export default function Intro() {
  const { isWireframe } = useTheme();

  return (
    <section
      id="intro"
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        background: isWireframe ? 'transparent' : 'var(--color-charcoal)',
      }}
    >
      <div
        style={{
          maxWidth: '64rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <ScrollReveal>
          <p
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '2rem',
              fontWeight: 500,
              color: isWireframe ? '#999' : 'var(--color-accent)',
            }}
          >
            What We Do
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: isWireframe ? '#1a1a1a' : 'var(--color-offwhite)',
            }}
          >
            We build digital funnels{' '}
            <span className="gradient-text">that dominate</span>{' '}
            markets.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              maxWidth: '48rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '2.5rem',
              lineHeight: 1.7,
              color: isWireframe ? '#666' : 'rgba(245,245,245,0.5)',
            }}
          >
            Every pixel is a strategic decision. Every animation is a psychological trigger.
            We don't design websites — we engineer conversion architectures that
            transform visitors into evangelists.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div
            className="accent-line"
            style={{ width: '120px', marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
