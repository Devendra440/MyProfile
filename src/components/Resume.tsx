import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiExternalLink, FiX } from 'react-icons/fi';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const Resume = ({ isOpen, onClose }: ResumeProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    
    setIsDownloading(true);
    
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      
      const opt = {
        margin: 0,
        filename: 'Pinnam_Devendra_Gupta_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
      };
      
      await html2pdf().set(opt).from(resumeRef.current).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <div className="flex justify-between items-center mb-4 px-2">
          <motion.button
            onClick={handleDownload}
            disabled={isDownloading}
            className="btn-gradient flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className={isDownloading ? 'animate-bounce' : ''} />
            {isDownloading ? 'Generating PDF...' : 'Download PDF'}
          </motion.button>
          <motion.button
            onClick={onClose}
            className="p-2 glass-card rounded-full text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiX size={24} />
          </motion.button>
        </div>

        {/* Resume Content */}
        <div
          ref={resumeRef}
          className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-2xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              PINNAM DEVENDRA GUPTA
            </h1>
            <p className="text-center text-cyan-100 mb-4">
              AI & Full Stack Developer | MERN Stack | Machine Learning
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="mailto:pinnamguptha1234@gmail.com" className="flex items-center gap-1 hover:text-cyan-200 transition-colors">
                <FiMail size={14} /> pinnamguptha1234@gmail.com
              </a>
              <span className="flex items-center gap-1">
                <FiPhone size={14} /> +91 9347940680
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin size={14} /> Hyderabad, India
              </span>
              <a href="https://github.com/Devendra440" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-200 transition-colors">
                <FiGithub size={14} /> Devendra440
              </a>
              <a href="https://linkedin.com/in/pinnam-devendra-gupta-b3b306291" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-200 transition-colors">
                <FiLinkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Summary
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                AI & Full Stack Developer with strong expertise in <strong>MERN Stack, Machine Learning, Data Analysis, LLMs, and Agentic AI workflows</strong>. 
                Skilled in React.js, Node.js, Express.js, MongoDB, JavaScript, Python, Java, SQL, RESTful APIs, AWS. 
                Delivered 3+ real-time client projects improving outreach by 15%, built ML classifiers achieving 95% accuracy, 
                and developed AI-driven analytical and automation solutions using modern AI tools and prompt engineering.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Experience
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">Full Stack Developer</h3>
                    <span className="text-sm text-gray-600">Jan – June 2025</span>
                  </div>
                  <a href="https://student-tech-genesis.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm flex items-center gap-1 mb-2">
                    Student-Tech-Genesis (Student Group) <FiExternalLink size={12} />
                  </a>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Collaborated in a team to develop 3 real-time projects for businesses in Hyderabad</li>
                    <li>Increased client marketing growth and customer outreach by 15% through new online solutions</li>
                    <li>Personally contributed to full-stack development using React.js and MongoDB</li>
                    <li>The team's overall tech stack included React.js, Node.js, and Python for backend services</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">Research & Development (R&D)</h3>
                    <span className="text-sm text-gray-600">Sep 2025</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm mb-2">
                    <a href="https://drive.google.com/file/d/1lEBZw_Z46ez9NfGqyMiivFLEWaalgjdS/view" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline flex items-center gap-1">
                      CodeAurora (Remote) <FiExternalLink size={12} />
                    </a>
                    <a href="https://drive.google.com/file/d/1qHhaHMSd9wNkrQE233SStm00-IJy6ZpJ/view" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline flex items-center gap-1">
                      Research Report <FiExternalLink size={12} />
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Researched emerging technologies and industry trends to improve product capabilities</li>
                    <li>Conducted experiments, feasibility studies, and PoC implementations with cross-functional teams</li>
                    <li>Created research reports, whitepapers, and process documentation while managing daily deliverables in Notion</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Technical Skills
              </h2>
              <div className="grid gap-2 text-sm">
                <div><strong className="text-gray-900">Languages:</strong> <span className="text-gray-700">Java, Python, JavaScript, SQL</span></div>
                <div><strong className="text-gray-900">Web & Backend:</strong> <span className="text-gray-700">React.js, Node.js, Express.js, HTML, CSS, REST APIs</span></div>
                <div><strong className="text-gray-900">AI / ML / Data:</strong> <span className="text-gray-700">Machine Learning, Deep Learning, Data Analysis, LLMs, Prompt Engineering, Agentic AI Workflows, Scikit-learn</span></div>
                <div><strong className="text-gray-900">Databases & Tools:</strong> <span className="text-gray-700">MongoDB, Git, GitHub, Selenium, Excel, Networking</span></div>
                <div><strong className="text-gray-900">Operating Systems:</strong> <span className="text-gray-700">Windows, Linux, Ubuntu, Virtual Machines (VMs)</span></div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Projects
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">Fake News Detection System — ML App</h3>
                    <span className="text-sm text-gray-600">Feb – April 2025</span>
                  </div>
                  <a href="https://fakenewsdetectionsystem-bvgp9ms2nlbshdqnlsjzky.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm flex items-center gap-1 mb-2">
                    Live Demo <FiExternalLink size={12} />
                  </a>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Created a machine learning application using Python and scikit-learn to classify news content</li>
                    <li>Trained a classifier on a dataset containing title, text, subject, and date fields to identify fake news</li>
                    <li>Increased model accuracy by 32% compared to earlier versions, detecting fraudulent news within 60 seconds</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">Sleeping Disorder Analysis — Data Analytics</h3>
                    <span className="text-sm text-gray-600">July – Sep 2024</span>
                  </div>
                  <a href="https://github.com/Devendra440/Sleeping-Disorder-Analysis-Data-Analytics-Project/tree/main/sleeping_disorder_prediction" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm flex items-center gap-1 mb-2">
                    GitHub Repository <FiExternalLink size={12} />
                  </a>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Performed data preprocessing, feature extraction, and correlation analysis using Python, Excel, and visualization libraries</li>
                    <li>Achieved 95% prediction accuracy, enabling users to understand sleep issues and improve sleep structure by 60–70%</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Achievements
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>
                  <a href="https://github.com/Devendra440/Java-100DCodesChallenge" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                    Completed 100 Java coding problems
                  </a> in one month, advancing from basic to complex challenges and improving proficiency in algorithms, data structures, and logical problem-solving
                </li>
                <li>Collaborated in a team to develop 3 real-time projects, spearheading development of client-facing web applications that increased client marketing growth and customer outreach by 15%</li>
              </ul>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Certifications
              </h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <a href="https://moonshot.scaler.com/s/li/rNyQMIOkuz" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                    Scaler Academy: Comprehensive Java Programming Course
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1UshaeIBxko_5G-Vjkk3oDSHcUktANKBR/view" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                    Infosys Wingspan: Python Programming Fundamentals
                  </a>
                </li>
                <li>
                  <a href="https://courses.cognitiveclass.ai/certificates/3134d03d58f943ea8b85203e1ea26d07" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                    IBM: SQL and Relational Databases 101
                  </a>
                </li>
                <li>
                  <a href="https://www.pirple.com/certificates/pbdjhcyxqk" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                    Pirple: Frontend Web Development — HTML5, CSS3, JavaScript
                  </a>
                </li>
              </ul>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex flex-wrap justify-between">
                  <div>
                    <strong className="text-gray-900">B.Tech in CSE</strong> — Malla Reddy University, Hyderabad
                    <span className="text-gray-600 ml-2">CGPA: 8.63/10 (Pursuing)</span>
                  </div>
                  <span className="text-gray-600">2022 – 2026</span>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <strong className="text-gray-900">Intermediate in MPC</strong> — Sri Chaitanya Junior College, Khammam
                    <span className="text-gray-600 ml-2">84%</span>
                  </div>
                  <span className="text-gray-600">2020 – 2022</span>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <strong className="text-gray-900">SSC</strong> — Century Techno School, Kalluru
                    <span className="text-gray-600 ml-2">CGPA: 10/10</span>
                  </div>
                  <span className="text-gray-600">2019 – 2020</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
