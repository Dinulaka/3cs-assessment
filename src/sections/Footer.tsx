import { useTheme } from '../context/ThemeProvider';
import { Globe, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { isWireframe } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        paddingTop: '5rem',
        paddingBottom: '7rem', // Generous bottom padding prevents icons from ever getting cut off on mobile/safe-areas
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        borderTop: isWireframe ? '2px dashed #333' : '1px solid rgba(255,255,255,0.05)',
        background: isWireframe ? 'transparent' : 'var(--color-charcoal)',
      }}
    >
      <div style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: '2.5rem' }} className="md:flex-row">
        <div style={{ textAlign: 'center' }} className="md:text-left">
          <p
            className="text-xl font-bold tracking-tight"
            style={{ color: isWireframe ? '#1a1a1a' : 'var(--color-offwhite)' }}
          >
            3CS<span style={{ color: isWireframe ? '#666' : 'var(--color-accent)' }}>.</span>agency
          </p>
          <p
            className="text-xs uppercase tracking-widest mt-2"
            style={{ color: isWireframe ? '#999' : 'rgba(245,245,245,0.3)' }}
          >
            &copy; {year} 3CS Assessment — Omindu. All rights reserved.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {[
            { icon: <Globe size={20} />, label: 'Website' },
            { icon: <Mail size={20} />, label: 'Email' },
            { icon: <ExternalLink size={20} />, label: 'Portfolio' },
          ].map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem', // Adds hit area and prevents bounding box clipping
                color: isWireframe ? '#999' : 'rgba(245,245,245,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.color = isWireframe ? '#333' : 'var(--color-accent)';
                target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.color = isWireframe ? '#999' : 'rgba(245,245,245,0.3)';
                target.style.transform = 'translateY(0)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
