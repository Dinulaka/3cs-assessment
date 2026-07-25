import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeProvider';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#intro' },
  { label: 'Problem', href: '#problem' },
  { label: 'Method', href: '#methodology' },
  { label: 'Results', href: '#results' },
];

export default function Navbar() {
  const { isWireframe } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: isWireframe
          ? 'transparent'
          : isScrolled
            ? 'rgba(10, 10, 10, 0.9)'
            : 'transparent',
        backdropFilter: isWireframe ? 'none' : isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isWireframe
          ? '2px dashed #333'
          : isScrolled
            ? '1px solid rgba(255,255,255,0.05)'
            : 'none',
        padding: isScrolled ? '12px 0' : '24px 0',
      }}
    >
      <div style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight"
          style={{
            color: isWireframe ? '#1a1a1a' : 'var(--color-offwhite)',
            textDecoration: 'none',
          }}
        >
          3CS<span style={{ color: isWireframe ? '#666' : 'var(--color-accent)' }}>.</span>agency
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm uppercase tracking-widest font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer"
              style={{
                color: isWireframe ? '#555' : 'rgba(245,245,245,0.6)',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = isWireframe ? '#1a1a1a' : '#dc2626';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = isWireframe
                  ? '#555'
                  : 'rgba(245,245,245,0.6)';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ color: isWireframe ? '#333' : 'var(--color-offwhite)' }}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-4"
          style={{
            background: isWireframe ? '#fff' : 'rgba(10,10,10,0.95)',
            borderBottom: isWireframe ? '2px dashed #333' : '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm uppercase tracking-widest font-medium text-left bg-transparent border-none cursor-pointer"
              style={{
                color: isWireframe ? '#555' : 'rgba(245,245,245,0.7)',
                padding: '8px 0',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
