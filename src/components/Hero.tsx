import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';
import Resume from './Resume';

const titles = [
  'Software Engineer',
  'MERN Stack Developer',
  'Problem Solver',
  'Full Stack Developer',
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        <motion.div
          className="relative z-10 text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Devendra Gupta</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="h-12 md:h-16 mb-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-heading text-muted-foreground">
              <span className="neon-text">{displayText}</span>
              <span className="typing-cursor text-primary">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building scalable web applications and data-driven solutions. 
            Passionate about creating impactful digital experiences with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="#projects"
              className="btn-gradient flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
            </motion.a>
            <motion.button
              onClick={() => setIsResumeOpen(true)}
              className="btn-outline-neon flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/Devendra440"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pinnam-devendra-gupta-b3b306291"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <FiArrowDown size={20} />
          </motion.a>
        </motion.div>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
