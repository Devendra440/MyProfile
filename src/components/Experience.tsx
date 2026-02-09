import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCalendar, FiExternalLink, FiMapPin, FiChevronRight } from 'react-icons/fi';

const experiences = [
  {
    title: 'Full Stack Developer & QA Analyst',
    company: 'Student-Tech-Genesis',
    type: 'Student Group',
    location: 'Hyderabad',
    period: 'Jan – June 2025',
    link: 'https://student-tech-genesis.netlify.app/',
    description: [
      'Developed 3 real-time production projects using MERN stack and Java backend services',
      'Increased client marketing growth and customer outreach by 15% through innovative solutions',
      'Performed manual testing, created comprehensive test cases, and identified critical bugs pre-deployment',
      'Managed project tracking using Jira, coordinating with Agile team workflows',
      'Implemented Selenium WebDriver for automated testing of React.js applications',
    ],
    technologies: ['React.js', 'MongoDB', 'Node.js', 'Selenium', 'Jira', 'Agile'],
  },
  {
    title: 'Research & Development (R&D)',
    company: 'CodeAurora',
    type: 'Remote',
    location: 'Remote',
    period: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1qHhaHMSd9wNkrQE233SStm00-IJy6ZpJ/view',
    organizationLink: 'https://drive.google.com/file/d/1lEBZw_Z46ez9NfGqyMiivFLEWaalgjdS/view',
    description: [
      'Researched emerging technologies and industry trends to improve product capabilities',
      'Conducted feasibility studies and proof-of-concept implementations with Agile teams',
      'Created technical documentation and managed deliverables using Jira',
    ],
    technologies: ['AI/ML Research', 'Jira', 'Agile', 'Documentation', 'Notion'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Career Journey
          </span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 top-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.2 }}
                style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)' }}
              />

              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <motion.div
                  className="glass-card p-6 rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-primary font-medium mb-1">
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground">({exp.type})</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <FiMapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <FiChevronRight className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`flex gap-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <motion.a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                        whileHover={{ x: 3 }}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        View Project
                      </motion.a>
                      {exp.organizationLink && (
                        <motion.a
                          href={exp.organizationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-secondary hover:underline"
                          whileHover={{ x: 3 }}
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Organization
                        </motion.a>
                      )}
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

export default Experience;
