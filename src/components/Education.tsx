import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiMapPin, FiCalendar } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Malla Reddy University',
    location: 'Hyderabad',
    period: 'Expected 2026',
    grade: 'CGPA: 8.58/10',
    icon: '🎓',
  },
  {
    degree: 'Intermediate in MPC',
    institution: 'Sri Chaitanya Junior College',
    location: 'Khammam',
    period: '2020 – 2022',
    grade: 'Percentage: 84%',
    icon: '📚',
  },
  {
    degree: 'SSC',
    institution: 'Century Techno School',
    location: 'Kalluru',
    period: '2019 – 2020',
    grade: 'CGPA: 10/10',
    icon: '🏆',
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            <FiBook className="inline-block mr-2" />
            Education
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 md:-translate-x-px" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full glass-card flex items-center justify-center -translate-x-1/2 text-lg"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                {edu.icon}
              </motion.div>

              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <motion.div
                  className="glass-card p-6 rounded-xl"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : ''}`}>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {edu.grade}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
