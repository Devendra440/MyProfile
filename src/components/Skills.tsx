import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaAws, FaChevronDown 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiSelenium } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { 
        name: 'Java', 
        icon: FaJava, 
        color: '#ED8B00',
        depth: {
          projects: '100+ DSA problems solved',
          usage: 'Object-oriented programming, data structures',
          level: 'Advanced'
        }
      },
      { 
        name: 'Python', 
        icon: FaPython, 
        color: '#3776AB',
        depth: {
          projects: 'ML projects, automation scripts',
          usage: 'Data analysis, machine learning, scripting',
          level: 'Intermediate'
        }
      },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { 
        name: 'HTML5', 
        icon: FaHtml5, 
        color: '#E34F26',
        depth: {
          projects: '10+ web applications',
          usage: 'Semantic markup, accessibility',
          level: 'Advanced'
        }
      },
      { 
        name: 'CSS3', 
        icon: FaCss3Alt, 
        color: '#1572B6',
        depth: {
          projects: 'Responsive designs, animations',
          usage: 'Flexbox, Grid, animations, Tailwind',
          level: 'Advanced'
        }
      },
      { 
        name: 'JavaScript', 
        icon: FaJs, 
        color: '#F7DF1E',
        depth: {
          projects: '15+ projects',
          usage: 'ES6+, async/await, DOM manipulation',
          level: 'Advanced'
        }
      },
      { 
        name: 'React.js', 
        icon: FaReact, 
        color: '#61DAFB',
        depth: {
          projects: '6+ production apps',
          usage: 'Hooks, state management, performance optimization',
          level: 'Advanced'
        }
      },
      { 
        name: 'Node.js', 
        icon: FaNodeJs, 
        color: '#339933',
        depth: {
          projects: '5+ backend services',
          usage: 'REST APIs, middleware, authentication',
          level: 'Intermediate'
        }
      },
      { 
        name: 'Express.js', 
        icon: SiExpress, 
        color: '#FFFFFF',
        depth: {
          projects: 'MERN stack applications',
          usage: 'Routing, middleware, API development',
          level: 'Intermediate'
        }
      },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { 
        name: 'MongoDB', 
        icon: SiMongodb, 
        color: '#47A248',
        depth: {
          projects: '5+ database designs',
          usage: 'Schema design, aggregation, indexing',
          level: 'Intermediate'
        }
      },
      { 
        name: 'SQL', 
        icon: FaDatabase, 
        color: '#00758F',
        depth: {
          projects: 'IBM certified',
          usage: 'Complex queries, joins, optimization',
          level: 'Intermediate'
        }
      },
      { 
        name: 'Git', 
        icon: FaGitAlt, 
        color: '#F05032',
        depth: {
          projects: '500+ commits',
          usage: 'Branching, merging, rebasing',
          level: 'Advanced'
        }
      },
      { 
        name: 'GitHub', 
        icon: FaGithub, 
        color: '#FFFFFF',
        depth: {
          projects: '20+ repositories',
          usage: 'CI/CD, Actions, collaboration',
          level: 'Advanced'
        }
      },
      { 
        name: 'Selenium', 
        icon: SiSelenium, 
        color: '#43B02A',
        depth: {
          projects: 'Automation testing',
          usage: 'Web scraping, test automation',
          level: 'Beginner'
        }
      },
    ],
  },
  {
    title: 'Cloud Services',
    skills: [
      { 
        name: 'AWS S3', 
        icon: FaAws, 
        color: '#FF9900',
        depth: {
          projects: 'File storage solutions',
          usage: 'Object storage, static hosting',
          level: 'Beginner'
        }
      },
      { 
        name: 'AWS EC2', 
        icon: FaAws, 
        color: '#FF9900',
        depth: {
          projects: 'Server deployments',
          usage: 'Instance management, scaling',
          level: 'Beginner'
        }
      },
    ],
  },
];

interface SkillDepth {
  projects: string;
  usage: string;
  level: string;
}

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  depth: SkillDepth;
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

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
            Technologies and tools I work with to bring ideas to life. 
            <span className="text-primary"> Click any skill to see depth!</span>
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
                {category.skills.map((skill: Skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <motion.div
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg bg-muted/50 border cursor-pointer transition-all duration-300 ${
                        expandedSkill === skill.name 
                          ? 'border-primary shadow-[0_0_20px_rgba(0,245,255,0.3)]' 
                          : 'border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]'
                      }`}
                      onClick={() => toggleSkill(skill.name)}
                      whileHover={{ y: -3 }}
                    >
                      <skill.icon 
                        className="w-5 h-5 transition-transform group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <motion.div
                        animate={{ rotate: expandedSkill === skill.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="w-3 h-3 text-muted-foreground" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Expanded Depth View */}
                    <motion.div
                      className="absolute top-full left-0 mt-2 z-20 w-64"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ 
                        opacity: expandedSkill === skill.name ? 1 : 0,
                        y: expandedSkill === skill.name ? 0 : -10,
                        scale: expandedSkill === skill.name ? 1 : 0.95,
                        pointerEvents: expandedSkill === skill.name ? 'auto' : 'none'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="glass-card p-4 rounded-lg border border-primary/30 shadow-lg">
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                          <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                          <span className="font-semibold text-foreground">{skill.name}</span>
                          <span 
                            className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                              skill.depth.level === 'Advanced' 
                                ? 'bg-green-500/20 text-green-400' 
                                : skill.depth.level === 'Intermediate'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-blue-500/20 text-blue-400'
                            }`}
                          >
                            {skill.depth.level}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="text-primary text-xs font-medium">Experience</p>
                            <p className="text-muted-foreground">{skill.depth.projects}</p>
                          </div>
                          <div>
                            <p className="text-primary text-xs font-medium">Usage</p>
                            <p className="text-muted-foreground">{skill.depth.usage}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
