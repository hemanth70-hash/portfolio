import { GraduationCap, Briefcase, Code, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Core() {
  const achievements = [
    {
      id: 1,
      icon: GraduationCap,
      title: "B.Tech: Computer Science & Engineering",
      desc: "Graduated from Srinivasa Institute of Engineering Technology (SIET) with a 7.69 CGPA. Strong foundation in software architecture and logic.",
      hoverDetails: "My academic background instilled a rigorous approach to problem-solving. Beyond core coursework in algorithms and data structures, I focus on applying theoretical logic to practical, full-stack architectural challenges."
    },
    {
      id: 2,
      icon: Briefcase,
      title: "Freelance Engineering",
      desc: "Currently engaged in freelance data annotation, QA, and technical projects with platforms like RWS, Viewpoints, and Outlier.",
      hoverDetails: "I manage complex annotation tasks and technical QA, demanding high precision and attention to detail. I am experienced in navigating systems, prompting, chatbot designing(voiceflow) and optimizing professional workflows within independent contracting environments."
    },
    {
      id: 3,
      icon: Code,
      title: "Interactive Development",
      desc: "Developing independent projects focusing on game logic and web applications using modern frameworks, Godot, and continuous learning.",
      hoverDetails: "I actively build 2D game mechanics using the Godot engine and GDScript, alongside developing dynamic web applications using React and Vite. I am dedicated to continuous technical self-improvement and systems architecture."
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Public Sector Preparation",
      desc: "Applying a highly structured, disciplined methodology to prepare for competitive government examinations alongside professional work.",
      hoverDetails: "I employ a highly organized, 'zero-defect' approach to master comprehensive syllabi, specifically targeting RRB NTPC. This involves rigorous time management, integrating complex study schedules with daily fitness routines, and utilizing systematic review web application developed by me to maintain consistancy."
    }
  ];

  // Animation settings for the staggered card grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="pb-10 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-8 mb-16"
      >
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="relative w-32 h-32 md:w-48 md:h-48 shrink-0"
          >
            <img
              src="/hemanth.jpg"
              alt="Hemanth Elipe"
              className="rounded-full object-cover w-full h-full shadow-2xl border-4 border-white ring-4 ring-blue-500/30 transition-transform duration-300 hover:scale-105 bg-slate-100"
            />
          </motion.div>

          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
              Hello'<br />I'm Hemanth
            </h1>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="mt-8 inline-block border border-blue-200 bg-blue-50 px-4 py-2 rounded-md">
            <h2 className="text-sm md:text-base text-blue-800 font-semibold tracking-wider uppercase">
              Computer Science Engineer | Freelance Developer
            </h2>
          </div>
          <p className="mt-8 text-slate-600 max-w-2xl text-lg leading-relaxed border-l-4 border-blue-500 pl-5">
            I am a detail-oriented software engineer with a strong academic foundation in Computer Science. I combine freelance technical work with independent development projects, approaching every challenge with structured logic and professional discipline.
          </p>
        </motion.div>
      </motion.section>

      {/* Experience Grid with Interactive Hover Reveal */}
      <section>
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-800"
        >
          <span className="w-6 h-6 bg-blue-100 text-blue-600 flex items-center justify-center rounded text-sm">/</span>
          Professional Overview
        </motion.h3>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id} 
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out group flex flex-col cursor-default"
              >
                <div className="mb-5 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 origin-left w-fit">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* THE HOVER REVEAL SECTION */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pt-4 mt-4 border-t border-blue-100 text-blue-700 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {item.hoverDetails}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}