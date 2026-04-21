import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900 z-0">
      
      {/* --- Ambient Motion & Texture --- */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.4] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* --- Expanded Left Side Accent (Socials) --- */}
      <div className="hidden xl:flex fixed left-12 bottom-0 flex-col items-center gap-6 z-20">
        <a href="https://github.com/hemanth70-hash" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300">
          <Github size={22} strokeWidth={1.5} />
        </a>
        <a href="www.linkedin.com/in/hemanth-elipe-353879291" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300">
          <Linkedin size={22} strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/mr_silentgenius?igsh=eTF6d2w1YzNtb2Zh" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300">
          <Instagram size={22} strokeWidth={1.5} />
        </a>
        <a href="https://www.facebook.com/share/1DpkC9GZ9e/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300">
          <Facebook size={22} strokeWidth={1.5} />
        </a>
        {/* The descending line */}
        <div className="w-[1px] h-32 bg-slate-300 mt-2"></div>
      </div>

      {/* --- Right Side Accent (Email) --- */}
      <div className="hidden xl:flex fixed right-12 bottom-0 flex-col items-center gap-6 z-20">
        <a 
          href="mailto: ehemanth709@gmail.com" 
          className="text-slate-400 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 font-mono text-sm tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          ehemanth709@gmail.com
        </a>
        <div className="w-[1px] h-32 bg-slate-300 mt-2"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-5xl mx-auto pt-16 px-4 md:px-8 pb-32">
        {children}
      </div>
      
    </div>
  );
}