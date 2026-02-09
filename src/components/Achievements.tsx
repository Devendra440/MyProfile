import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiAward, FiCode, FiUsers, FiTrendingUp, FiExternalLink } from 'react-icons/fi';

const achievements = [
  {
    icon: FiCode,
    title: '100+ Java Coding Challenge',
    description: 'Completed 100+ Java coding problems in 30 days, mastering algorithms and data structures',
    metric: '100+',
    metricLabel: 'Problems',
    link: 'https://github.com/Devendra440/Java-100DCodesChallenge',
    color: 'primary',
  },
  {
    icon: FiUsers,
    title: 'Client Applications with Testing',
    description: 'Developed 3+ client-facing web applications with rigorous manual and automated testing',
    metric: '3+',
    metricLabel: 'Projects',
    color: 'secondary',
  },
  {
    icon: FiTrendingUp,
    title: 'Bug Detection Improvement',
    description: 'Built automated test suites using Selenium WebDriver; improved bug detection accuracy',
    metric: '40%',
    metricLabel: 'Improvement',
    color: 'accent',
  },
  {
    icon: FiAward,
    title: 'Agile/Scrum Management',
    description: 'Managed Agile/Scrum sprints using Jira; delivered projects on schedule and within scope',
    metric: '15%',
    metricLabel: 'Client Growth',
    color: 'primary',
  },
];

const AnimatedCounter = ({ target, duration = 2000 }: { target: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/[0-9]/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * numericTarget));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            <FiAward className="inline-block mr-2" />
            Achievements
          </span>
          <h2 className="section-title">
            Milestones & <span className="gradient-text">Accomplishments</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className="glass-card p-6 md:p-8 rounded-xl h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${achievement.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <achievement.icon className={`w-7 h-7 text-${achievement.color}`} />
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-heading font-bold gradient-text">
                    <AnimatedCounter target={achievement.metric} />
                  </div>
                  <div className="text-sm text-muted-foreground">{achievement.metricLabel}</div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  {achievement.description}
                </p>

                {/* Link */}
                {achievement.link && (
                  <motion.a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm mt-4 hover:underline"
                    whileHover={{ x: 3 }}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    View Challenge
                  </motion.a>
                )}
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl bg-${achievement.color}/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
