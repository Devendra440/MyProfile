import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiGlobe, FiZap } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: FiGlobe,
    title: 'Full Stack',
    description: 'End-to-end development from frontend to backend systems',
  },
  {
    icon: FiDatabase,
    title: 'Data Driven',
    description: 'Building solutions backed by data analysis and insights',
  },
  {
    icon: FiZap,
    title: 'Performance',
    description: 'Optimizing for speed and exceptional user experience',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.span>

            <h2 className="section-title">
              Passionate about building{' '}
              <span className="gradient-text">impactful solutions</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                I am a <span className="text-primary font-semibold">MERN Stack Developer</span> with a 
                strong foundation in Java and Python. My journey in software development is driven by 
                curiosity and a desire to create solutions that make a real difference.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                With proven ability to engineer <span className="text-secondary font-semibold">scalable RESTful APIs</span> and 
                full-stack applications, I have helped increase client outreach by 15%. I'm proficient 
                in React.js, Node.js, MongoDB, and Git/GitHub workflows.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Currently pursuing B.Tech in Computer Science at Malla Reddy University, Hyderabad, 
                I'm constantly learning and exploring new technologies to stay at the cutting edge 
                of development.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">15%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Problems Solved</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 rounded-xl group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
