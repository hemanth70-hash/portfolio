import { GraduationCap, Briefcase, Code, BookOpen } from 'lucide-react';

export default function Core() {
  const achievements = [
    {
      id: 1,
      icon: GraduationCap,
      title: "B.Tech: Computer Science & Engineering",
      desc: "Graduated from Srinivasa Institute of Engineering Technology (SIET) with a 7.69 CGPA. Strong foundation in software architecture and logic."
    },
    {
      id: 2,
      icon: Briefcase,
      title: "Freelance Engineering",
      desc: "Currently engaged in freelance data annotation, QA, and technical projects with platforms like RWS, Viewpoints, and Outlier."
    },
    {
      id: 3,
      icon: Code,
      title: "Interactive Development",
      desc: "Developing independent projects focusing on game logic and web applications using modern frameworks, Godot, and continuous learning."
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Public Sector Preparation",
      desc: "Applying a highly structured, disciplined methodology to prepare for competitive government examinations alongside professional work."
    }
  ];

  return (
    <div className="animate-fadeIn pb-10">
      {/* Hero Section */}
      <section className="mt-8 mb-16">
        
        {/* Professional Image Frame */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
          <img
            src="/hemanth.jpg"
            alt="Elipe Hemanth"
            className="rounded-full object-cover w-full h-full shadow-2xl border-4 border-white ring-4 ring-blue-500/30 transition-transform duration-300 hover:scale-105 bg-slate-100"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
          ELIPE HEMANTH
        </h1>
        <div className="mt-6 inline-block border border-blue-200 bg-blue-50 px-4 py-2 rounded-md">
          <h2 className="text-sm md:text-base text-blue-800 font-semibold tracking-wider uppercase">
            Computer Science Engineer | Freelance Developer
          </h2>
        </div>
        <p className="mt-8 text-slate-600 max-w-2xl text-lg leading-relaxed border-l-4 border-blue-500 pl-5">
          I am a detail-oriented software engineer with a strong academic foundation in Computer Science. I combine freelance technical work with independent development projects, approaching every challenge with structured logic and professional discipline.
        </p>
      </section>

      {/* Experience Grid */}
      <section>
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-800">
          <span className="w-6 h-6 bg-blue-100 text-blue-600 flex items-center justify-center rounded text-sm">/</span>
          Professional Overview
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out group"
              >
                <div className="mb-5 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 origin-left">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}