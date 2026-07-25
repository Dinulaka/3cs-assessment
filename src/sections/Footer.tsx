import { useTheme } from '../context/ThemeProvider';
import { Globe, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { isWireframe } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 px-6"
      style={{
        borderTop: isWireframe ? '2px dashed #333' : '1px solid rgba(255,255,255,0.05)',
        background: isWireframe ? 'transparent' : 'var(--color-charcoal)',
      }}
    >
      <div style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }} className="md:flex-row">
        <div>
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

        <div className="flex items-center gap-6">
          {[
            { icon: <Globe size={18} />, label: 'Website' },
            { icon: <Mail size={18} />, label: 'Email' },
            { icon: <ExternalLink size={18} />, label: 'Portfolio' },
          ].map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="transition-colors duration-300"
              style={{
                color: isWireframe ? '#999' : 'rgba(245,245,245,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = isWireframe
                  ? '#333'
                  : 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = isWireframe
                  ? '#999'
                  : 'rgba(245,245,245,0.3)';
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
