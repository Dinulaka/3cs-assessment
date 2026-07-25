import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

interface ThemeContextType {
  isWireframe: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isWireframe, setIsWireframe] = useState(false);

  useEffect(() => {
    if (isWireframe) {
      document.body.classList.add('wireframe');
    } else {
      document.body.classList.remove('wireframe');
    }
  }, [isWireframe]);

  const toggleTheme = useCallback(() => {
    const update = () => setIsWireframe((prev) => !prev);

    if (document.startViewTransition) {
      document.startViewTransition(update);
    } else {
      update();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isWireframe, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
