import { useEffect } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import EngineeringFoundations from '@/components/EngineeringFoundations';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Collaboration from '@/components/Collaboration';
import BuildProcess from '@/components/BuildProcess';
import LiveStats from '@/components/LiveStats';
import TechStackMap from '@/components/TechStackMap';
import DevEnvironment from '@/components/DevEnvironment';
import ProblemSolving from '@/components/ProblemSolving';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Easter Eggs
  useEffect(() => {
    // Konami-style code: Shift + D for Dev mode
    const keys: string[] = [];
    const devModeCode = ['Shift', 'D'];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.push(e.key);
      keys.splice(-10, keys.length - 10);
      
      if (keys.slice(-2).join('') === devModeCode.join('')) {
        // Dev mode activated
        console.log('%c🚀 Developer Mode Activated!', 'color: #00F5FF; font-size: 20px; font-weight: bold;');
        console.log('%c$ whoami', 'color: #4ECDC4; font-family: monospace;');
        console.log('%cPinnam Devendra Gupta', 'color: #9D4EDD; font-size: 16px;');
        console.log('%cSoftware Engineer | MERN Stack Developer', 'color: #FF6B6B;');
        console.log('%c$ cat skills.txt', 'color: #4ECDC4; font-family: monospace;');
        console.log('%cReact, Node.js, MongoDB, Python, Java, AWS', 'color: #FFD93D;');
        
        // Visual Easter egg
        document.body.classList.add('dev-mode');
        setTimeout(() => document.body.classList.remove('dev-mode'), 3000);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Particle Background */}
      <ParticleCanvas />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <LiveStats />
        <Skills />
        <EngineeringFoundations />
        <TechStackMap />
        <BuildProcess />
        <Experience />
        <Projects />
        <Collaboration />
        <Achievements />
        <Certifications />
        <Education />
        <DevEnvironment />
        <ProblemSolving />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
