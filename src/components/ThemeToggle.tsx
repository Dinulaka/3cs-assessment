import { useTheme } from '../context/ThemeProvider';
import { Grid3X3, Paintbrush } from 'lucide-react';

export default function ThemeToggle() {
  const { isWireframe, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 md:top-6 md:bottom-auto z-50 flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg"
      style={{
        border: isWireframe ? '2px dashed #333' : '1px solid rgba(255,255,255,0.15)',
        background: isWireframe ? 'transparent' : 'rgba(10,10,10,0.8)',
        backdropFilter: isWireframe ? 'none' : 'blur(12px)',
        color: isWireframe ? '#333' : '#f5f5f5',
        borderRadius: isWireframe ? '0' : '999px',
      }}
      aria-label={`Switch to ${isWireframe ? 'reality' : 'wireframe'} mode`}
    >
      {isWireframe ? (
        <>
          <Paintbrush size={16} />
          <span>Reality</span>
        </>
      ) : (
        <>
          <Grid3X3 size={16} />
          <span>Wireframe</span>
        </>
      )}
    </button>
  );
}
