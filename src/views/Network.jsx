import { Users, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Network() {
  // Hardcoded network data replacing the API fetch
  const network = [
    {
      id: 1,
      name: "Mahesh",
      designation: "Java Full Stack Developer",
      experience: "Fresher",
      avatar_url: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/mahesh.jpeg",
      description: "Passionate about software development with a strong focus on backend technologies, API development, and database management. Continuously enhancing technical skills and staying updated with modern development practices.",
      hover_details: "B.Tech Computer Science graduate with strong expertise in Java Full Stack Development, including Core Java, JDBC, MySQL, SQL, PL/SQL, Spring Framework, and Spring Boot. Skilled in developing scalable backend applications and RESTful APIs using MVC architecture, with hands-on experience through multiple real-time projects.",
      skills: ["Java", "Spring Boot", "React"]
    },
    {
      id: 2,
      name: "Mani Kumari",
      designation: "Java Full Stack Developer",
      experience: "Fresher",
      avatar_url: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/mani%20kumari.jpeg",
      description: "I am a passionate Java Full Stack Developer with a strong foundation in building end-to-end web applications. I recently completed my B.Tech in Computer Science and Engineering and have hands-on experience through real-world projects and full-stack training.",
      hover_details: "I specialize in developing scalable backend systems using Java, Spring Boot, and REST APIs, along with creating responsive user interfaces using React, HTML, CSS, and JavaScript. I developed a Hostel Management System, implementing features such as user management, booking functionality, and database integration.",
      skills: ["Java", "Frontend", "Backend", "REST APIs"]
    },
    {
      id: 3,
      name: "Abhi",
      designation: "Game Developer and Designer",
      experience: "Fresher",
      avatar_url: "https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/abhi.jpeg",
      description: "I am a passionate and dedicated developer with strong expertise in Android application development and a deep interest in game development. I am proficient in tools and technologies such as Unity, Unreal Engine, and Blender, where I focus on creating realistic 3D models and environments.",
      hover_details: "With a strong foundation in mathematics, I approach problem-solving with logic and precision, which helps me build efficient and optimized solutions. I am also proficient in C#, which I actively use in game development to create interactive and engaging experiences. Designing is one of my core strengths.",
      skills: ["C#", "Python", "2D/3D Game Dev", "3D Modeling"]
    }
  ];

  // Animation settings for the staggered card grid
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
      
      {/* --- HEADER SECTION --- */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-4 mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <Users className="text-blue-600" size={36} strokeWidth={2} />
          Professional Network
        </h2>
        <p className="mt-4 text-slate-600 text-lg border-l-4 border-blue-500 pl-4 max-w-2xl">
          My people who helped me deveoloping some of my projects and helped me through my learning phase.
        </p>
      </motion.section>

      {/* --- NETWORK GRID --- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {network.map((person) => (
          <motion.div 
            key={person.id} 
            variants={cardVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col h-full group cursor-default"
          >
            {/* Profile Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm flex-shrink-0 bg-slate-50 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={person.avatar_url} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="text-blue-700 font-semibold text-sm mb-2">{person.designation}</p>
                
                {/* Experience Badge */}
                <div className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 text-slate-600 px-2 py-1 rounded text-xs font-medium">
                  <Clock size={12} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                  Exp: {person.experience}
                </div>
              </div>
            </div>

            {/* Main Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {person.description}
            </p>

            {/* Skills Row */}
            <div className="pt-4 border-t border-slate-100 mt-auto">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                <CheckCircle2 size={14} className="group-hover:text-blue-500 transition-colors" /> 
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {person.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded-md border border-transparent group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* THE HOVER REVEAL SECTION */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <div className="pt-4 mt-4 border-t border-blue-100 text-blue-700 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {person.hover_details}
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}