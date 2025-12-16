import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-xl font-heading font-bold gradient-text">DG</span>
            <span className="text-sm">
              © {currentYear} Devendra Gupta. Built with{' '}
              <FiHeart className="inline-block w-4 h-4 text-red-500 animate-pulse" />
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/Devendra440"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pinnam-devendra-gupta-b3b306291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:pinnamguptha1234@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              <FiMail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
