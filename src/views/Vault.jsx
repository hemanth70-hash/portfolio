import { useState, useEffect } from 'react';
import { FolderGit2, Github, ExternalLink, Award, CheckCircle, ChevronLeft, ChevronRight, FileText, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Vault() {
  // --- Hardcoded Projects Array ---
  const projects = [
    {
      id: 1,
      title: "Mediscan AI Assistant",
      description: "An intelligent medical chatbot designed to diagnose medicines by name and provide symptom-based medical suggestions. It delivers clear, actionable information including dosage guidelines, precautions, and associated risks.",
      tech_stack: ["HTML5", "CSS3", "JavaScript", "Vercel Deployment"],
      live_link: "https://mediscan-ivory.vercel.app/",
      github_link: null
    },
    {
      id: 2,
      title: "The Brain: Advanced Study App",
      description: "A personalized learning platform featuring mock examinations, typing practice, and gamified learning with advanced progress tracking. \n(Guest Access — Username: Hemanth709 | Password: GrindIt)",
      tech_stack: ["Frontend Architecture", "State Management", "Gamification Logic", "Vercel"],
      live_link: "https://study-app-thebrain-zrim.vercel.app",
      github_link: null
    },
    {
      id: 3,
      title: "Heart Disease Prediction System",
      description: "A Machine Learning predictive model utilizing SVC, XGBoost, and Random Forest algorithms. Trained on comprehensive datasets, it provides fast and reliable patient diagnostics based on metrics like BP, ECG, age, and lifestyle factors.",
      tech_stack: ["Python", "Machine Learning", "XGBoost", "Random Forest", "SVC"],
      live_link: null,
      github_link: "https://github.com/hemanth70-hash/Prediction-using-ML"
    }
  ];

  // --- Hardcoded Certifications Array ---
  const certifications = [
    {
      id: 1,
      name: "Web Development Internship",
      issuer: "SkillDzire Technologies Pvt. Ltd.",
      year: "Jan 2025",
      pdf_link: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/certifcates/skill%20dezire%20web%20development.png"
    },
    {
      id: 2,
      name: "JobReady Employability Skills",
      issuer: "Wadhwani Foundation & APSSDC",
      year: "Aug 2024",
      pdf_link: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/certifcates/emplyabality%20skills%20wadhwani.pdf"
    },
    {
      id: 3,
      name: "Android Developer Virtual Internship",
      issuer: "Google for Developers & AICTE",
      year: "June 2024",
      pdf_link: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/certifcates/android%20development.jpg"
    },
    {
      id: 4,
      name: "Blue Prism Foundation Training (RPA)",
      issuer: "SS&C Blue Prism University",
      year: "July 2023",
      pdf_link: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/certifcates/RPA%20blueprism.pdf"
    },
    {
      id: 5,
      name: "Java Programming",
      issuer: "Great Learning Academy",
      year: "Jan 2023",
      pdf_link: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/certifcates/Elipe%20Hemanth%20java.pdf"
    },
    {
      id: 6,
      name: "Python Programming Course",
      issuer: "LearnVern (NSDC)",
      year: "Nov 2022",
      pdf_link: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/certifcates/Certificate_Python%20Programming%20Course.pdf"
    }
  ];

  // --- Carousel State & Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll effect for the Carousel
  useEffect(() => {
    let timer;
    if (!isHovering && certifications.length > 0) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certifications.length);
      }, 3500); 
    }
    return () => clearInterval(timer);
  }, [isHovering, certifications.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % certifications.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);

  // Animation settings for the staggered grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="pb-10 overflow-hidden">
      
      {/* --- RESUME BANNER SECTION --- */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm"
      >
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">Looking for my full academic and professional timeline?</h3>
          <p className="text-slate-600 text-sm">Download my comprehensive B.Tech and Engineering resume.</p>
        </div>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          <FileDown size={20} /> Latest Resume
        </a>
      </motion.section>

      {/* --- PROJECTS HEADER --- */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <FolderGit2 className="text-blue-600" size={36} strokeWidth={2} />
          Technical Projects
        </h2>
        <p className="mt-4 text-slate-600 text-lg border-l-4 border-blue-500 pl-4 max-w-2xl">
          A selection of full-stack applications, interactive study platforms, and Python-based machine learning predictive models.
        </p>

        {/* --- PROJECTS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group p-6"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech_stack.map((tech, index) => (
                    <span key={index} className="text-xs font-semibold tracking-wide text-blue-700 bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                {project.github_link && (
                  <a href={project.github_link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                    <Github size={16} /> Repository
                  </a>
                )}
                {project.live_link && (
                  <a href={project.live_link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- INTERACTIVE CERTIFICATIONS CAROUSEL --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8 mt-12">
          <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-900">
            <Award className="text-blue-600" size={28} />
            Certifications Dashboard
          </h3>
          
          {certifications.length > 0 && (
            <div className="flex gap-2">
              <button onClick={prevSlide} className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
        
        <div 
          className="relative h-[250px] md:h-[300px] w-full flex justify-center items-center perspective-1000 overflow-hidden py-4"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {certifications.map((cert, index) => {
            let position = index - currentIndex;
            const total = certifications.length;
            
            if (position < -1) position += total;
            if (position > 1) position -= total;

            const isVisible = Math.abs(position) <= 1;
            const zIndex = position === 0 ? 30 : 10;
            const scale = position === 0 ? 'scale-100' : 'scale-90';
            const opacity = position === 0 ? 'opacity-100' : 'opacity-50 blur-[1px]';
            const translateX = position === 0 ? 'translate-x-0' : position < 0 ? '-translate-x-[60%] md:-translate-x-[90%]' : 'translate-x-[60%] md:translate-x-[90%]';

            return (
              <div 
                key={cert.id} 
                className={`absolute w-[280px] md:w-[350px] transition-all duration-700 ease-in-out origin-center ${scale} ${opacity} ${translateX}`}
                style={{ zIndex, visibility: isVisible ? 'visible' : 'hidden' }}
              >
                <div className={`bg-white rounded-xl border p-6 flex flex-col h-[200px] md:h-[220px] ${position === 0 ? 'border-blue-400 shadow-[0_10px_40px_rgba(37,99,235,0.15)] shadow-blue-500/20' : 'border-slate-200 shadow-md'}`}>
                  
                  <div className="flex items-start gap-4 flex-grow">
                    <CheckCircle className={`flex-shrink-0 mt-1 transition-colors duration-300 ${position === 0 ? 'text-blue-600' : 'text-slate-400'}`} size={24} />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug">{cert.name}</h4>
                      <p className="text-sm text-slate-500 mt-2">{cert.issuer}</p>
                      <p className="text-xs font-mono text-slate-400 mt-1">Acquired: {cert.year}</p>
                    </div>
                  </div>

                  <div className={`transition-opacity duration-500 mt-4 ${position === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <a 
                      href={cert.pdf_link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 transition-all py-2 rounded-lg text-sm font-semibold"
                    >
                      <FileText size={16} /> View Document
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

    </div>
  );
}