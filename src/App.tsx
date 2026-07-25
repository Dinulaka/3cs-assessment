import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import ProblemSection from './sections/ProblemSection';
import MethodologySection from './sections/MethodologySection';
import ResultSection from './sections/ResultSection';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Enable native smooth scrolling without third-party wheel hijacking
    document.documentElement.style.scrollBehavior = 'smooth';

    // Keep GSAP ScrollTrigger synchronized on scroll and resize
    const handleUpdate = () => {
      ScrollTrigger.update();
    };
    
    window.addEventListener('scroll', handleUpdate, { passive: true });
    window.addEventListener('resize', handleUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleUpdate);
      window.removeEventListener('resize', handleUpdate);
    };
  }, []);

  return (
    <>
      <Navbar />
      <ThemeToggle />
      <main style={{ overflowX: 'hidden' }}>
        <Hero />
        <Intro />
        <ProblemSection />
        <MethodologySection />
        <ResultSection />
      </main>
      <Footer />
    </>
  );
}
