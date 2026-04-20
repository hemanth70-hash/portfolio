import { useState, useEffect } from 'react';
import { FolderGit2, Github, ExternalLink, Award, CheckCircle, ChevronLeft, ChevronRight, FileText, Loader2 } from 'lucide-react';

export default function Vault() {
  // --- Dynamic State ---
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- Carousel State & Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // --- Fetch Data from Backend ---
  useEffect(() => {
    const fetchVaultData = async () => {
      try {
        // Fetch from your local Node.js server
        const [projRes, certRes] = await Promise.all([
  fetch('https://portfolio-h7y1.onrender.com/api/projects'),
  fetch('https://portfolio-h7y1.onrender.com/api/certifications')
]);

        const projData = await projRes.json();
        const certData = await certRes.json();

        setProjects(projData);
        setCertifications(certData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch vault data:", error);
        setIsLoading(false);
      }
    };

    fetchVaultData();
  }, []);

  // Auto-scroll effect (only runs if we have certifications loaded)
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

  // --- Loading State ---
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-blue-600 animate-pulse">
        <Loader2 className="animate-spin mb-4" size={48} />
        <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Connecting to Database...</p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn pb-10">
      
      {/* --- PROJECTS SECTION --- */}
      <section className="mt-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <FolderGit2 className="text-blue-600" size={36} strokeWidth={2} />
          Technical Projects
        </h2>
        <p className="mt-4 text-slate-600 text-lg border-l-4 border-blue-500 pl-4 max-w-2xl">
          A selection of full-stack applications, game logic frameworks, and structural code repositories hosted on GitHub.
        </p>

        {projects.length === 0 ? (
          <div className="mt-8 p-6 bg-slate-100 border border-slate-200 rounded-xl text-center text-slate-500">
            No projects found in the database. (Add some via SQL/pgAdmin later!)
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group p-6"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech_stack && project.tech_stack.map((tech, index) => (
                      <span key={index} className="text-xs font-semibold tracking-wide text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  {project.github_link && (
                    <a href={project.github_link} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                      <Github size={16} /> Repository
                    </a>
                  )}
                  {project.live_link && (
                    <a href={project.live_link} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- INTERACTIVE CERTIFICATIONS CAROUSEL --- */}
      <section>
        <div className="flex items-center justify-between mb-8">
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
        
        {certifications.length === 0 ? (
          <div className="p-6 bg-slate-100 border border-slate-200 rounded-xl text-center text-slate-500">
            No certifications found in the database.
          </div>
        ) : (
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
                      <CheckCircle className={`flex-shrink-0 mt-1 ${position === 0 ? 'text-blue-600' : 'text-slate-400'}`} size={24} />
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
        )}
      </section>

    </div>
  );
}