import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaAws 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiSelenium } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL', icon: FaDatabase, color: '#00758F' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
      { name: 'Selenium', icon: SiSelenium, color: '#43B02A' },
    ],
  },
  {
    title: 'Cloud Services',
    skills: [
      { name: 'AWS S3', icon: FaAws, color: '#FF9900' },
      { name: 'AWS EC2', icon: FaAws, color: '#FF9900' },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Technical Skills
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6 md:p-8 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]">
                      <skill.icon 
                        className="w-5 h-5 transition-transform group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-md bg-foreground text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Animation */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            {/* Center circle */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <span className="text-primary-foreground font-heading font-bold text-xl">MERN</span>
            </div>
            
            {/* Orbiting icons */}
            {[FaReact, SiMongodb, FaNodeJs, SiExpress].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center"
                style={{
                  transformOrigin: 'center',
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 5,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 5,
                  }}
                  style={{
                    transform: `translateX(${60 + i * 10}px)`,
                  }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
