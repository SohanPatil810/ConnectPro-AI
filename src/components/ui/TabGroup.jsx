import { motion } from 'framer-motion';

export default function TabGroup({ tabs = [], activeTab, onChange }) {
  return (
    <div className="glass rounded-xl p-1 flex gap-1 overflow-x-auto scrollbar-none">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/25"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {Icon && <Icon className="w-4 h-4" />}
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
