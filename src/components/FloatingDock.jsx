import { User, Users, FolderGit2 } from 'lucide-react';

export default function FloatingDock({ activeTab, setActiveTab }) {
  // Removed the 'uplink' (Contact) tab from this array
  const navItems = [
    { id: 'core', label: 'Profile', icon: User },
    { id: 'network', label: 'Network', icon: Users },
    { id: 'vault', label: 'Projects', icon: FolderGit2 },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 px-4 py-3 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
              }`}
            >
              <Icon size={18} />
              <span className={`${isActive ? 'block' : 'hidden md:block'} text-sm font-semibold tracking-wide`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}