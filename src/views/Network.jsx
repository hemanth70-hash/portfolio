import { useState, useEffect } from 'react';
import { Users, Clock, CheckCircle2, Loader2 } from 'lucide-react';

export default function Network() {
  const [network, setNetwork] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNetworkData = async () => {
      try {
        const res = await fetch('https://portfolio-h7y1.onrender.com/api/network');
        const data = await res.json();
        setNetwork(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch network data:", error);
        setIsLoading(false);
      }
    };

    fetchNetworkData();
  }, []);

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
      
      {/* --- HEADER SECTION --- */}
      <section className="mt-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <Users className="text-blue-600" size={36} strokeWidth={2} />
          Professional Network
        </h2>
        <p className="mt-4 text-slate-600 text-lg border-l-4 border-blue-500 pl-4 max-w-2xl">
          A curated roster of trusted colleagues, collaborators, and industry professionals I actively engage with for technical development and project architecture.
        </p>
      </section>

      {/* --- NETWORK GRID --- */}
      {network.length === 0 ? (
        <div className="p-6 bg-slate-100 border border-slate-200 rounded-xl text-center text-slate-500">
          No network connections found in the database.
        </div>
      ) : (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {network.map((person) => (
            <div 
              key={person.id} 
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col h-full"
            >
              {/* Profile Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm flex-shrink-0 bg-slate-50">
                  <img 
                    src={person.avatar_url || `https://ui-avatars.com/api/?name=${person.name.replace(' ', '+')}&background=eff6ff&color=1d4ed8&font-size=0.35`} 
                    alt={person.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{person.name}</h3>
                  <p className="text-blue-700 font-semibold text-sm mb-2">{person.designation}</p>
                  
                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 text-slate-600 px-2 py-1 rounded text-xs font-medium">
                    <Clock size={12} className="text-slate-400" />
                    Exp: {person.experience}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {person.description}
              </p>

              {/* Skills Row */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Core Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {person.skills && person.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}