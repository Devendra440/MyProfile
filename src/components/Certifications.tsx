import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiAward, FiDatabase } from 'react-icons/fi';
import { FaJava, FaPython } from 'react-icons/fa';

const certifications = [
  {
    title: 'Comprehensive Java Programming Course',
    issuer: 'Scaler Academy',
    icon: FaJava,
    link: 'https://moonshot.scaler.com/s/li/rNyQMIOkuz',
    color: '#ED8B00',
  },
  {
    title: 'Python Programming Fundamentals',
    issuer: 'Infosys Wingspan',
    icon: FaPython,
    link: '#',
    color: '#3776AB',
  },
  {
    title: 'SQL and Relational Databases 101',
    issuer: 'IBM',
    icon: FiDatabase,
    link: '#',
    color: '#0F62FE',
  },
  {
    title: 'Frontend Web Development',
    issuer: 'Pirple',
    icon: FiAward,
    description: 'HTML5, CSS3, JavaScript — Building Scalable Web Pages',
    link: '#',
    color: '#00f5ff',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Credentials
          </span>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-6 rounded-xl block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${cert.color}15` }}
              >
                <cert.icon className="w-6 h-6" style={{ color: cert.color }} />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              {cert.description && (
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              )}

              {/* Link indicator */}
              <div className="flex items-center gap-1 text-primary text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <FiExternalLink className="w-4 h-4" />
                <span>View Certificate</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
