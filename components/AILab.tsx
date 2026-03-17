import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Cpu, Globe, Zap, Terminal, Box, Layers, Command, ChevronRight, Monitor } from 'lucide-react';

const AI_APPS = [
  { id: 'app-1', name: 'Strategic Intelligence', url: 'https://aistudio.google.com/apps/3abb3440-d623-4420-95d6-506ffa4b52f2?showPreview=true&showAssistant=true', icon: Cpu, description: 'Core strategic analysis and decision support module.' },
  { id: 'app-2', name: 'Market Predictor', url: 'https://aistudio.google.com/apps/f37acaad-3d9a-4a34-9830-d55a8b84844d?showPreview=true&showAssistant=true', icon: Zap, description: 'Predictive modeling for digital market trends.' },
  { id: 'app-3', name: 'Data Synthesizer', url: 'https://aistudio.google.com/apps/drive/1cEi7vKfAWeVAU4WbApP1PchiFI5kTHob?showPreview=true&showAssistant=true', icon: Layers, description: 'Automated data synthesis and reporting engine.' },
  { id: 'app-4', name: 'Growth Optimizer', url: 'https://aistudio.google.com/apps/drive/1-HF5UBypCGwi1Yta34CgraBHFzd_HKIf?showPreview=true&showAssistant=true', icon: Sparkles, description: 'Campaign performance optimization assistant.' },
  { id: 'app-5', name: 'Content Strategist', url: 'https://aistudio.google.com/apps/drive/1T-X-eBnxHAu4LTZClUB3ey9kyi573Ipt?showPreview=true&showAssistant=true', icon: Box, description: 'AI-driven content planning and creative strategy.' },
  { id: 'app-6', name: 'CRM Integrator', url: 'https://aistudio.google.com/apps/drive/1-j2Gm-vCYHS415KBzOTs14KRt0rV7QMe?showPreview=true&showAssistant=true', icon: Terminal, description: 'Intelligent CRM automation and lead management.' },
  { id: 'app-7', name: 'Brand Architect', url: 'https://aistudio.google.com/apps/drive/1Qg8sC9XytOMuh1S0ToIqZMwq5WvUmRxZ?showPreview=true&showAssistant=true', icon: Command, description: 'Brand identity and narrative development tool.' },
  { id: 'app-8', name: 'Analytics Hub', url: 'https://aistudio.google.com/apps/9feb8891-576d-4396-9856-d9271a1389ce?showPreview=true&showAssistant=true', icon: Monitor, description: 'Advanced analytics and visualization dashboard.' },
  { id: 'app-9', name: 'MarTech Automator', url: 'https://aistudio.google.com/apps/drive/1HT8CyWWsjN1Bu_a8joQdBvL-Hdh5N9d5?showPreview=true&showAssistant=true', icon: Globe, description: 'End-to-end marketing technology automation.' },
];

export const AILab: React.FC = () => {
  const [activeApp, setActiveApp] = useState(AI_APPS[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <section id="ailab" className="py-32 relative overflow-hidden bg-dark">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Terminal size={20} />
              </div>
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.4em]">Experimental Command Center</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6"
            >
              AI <span className="text-white/20">LABORATORY</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-accent/60 text-lg max-w-xl leading-relaxed"
            >
              A multi-module environment showcasing custom AI solutions for complex business challenges. Select a module to initialize the interface.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href={activeApp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-dark text-xs font-bold uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-dark transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Full Screen <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Main Lab Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col lg:flex-row gap-6 h-[850px]"
        >
          {/* Module Sidebar */}
          <div className={`glass-card rounded-[2.5rem] border-white/5 flex flex-col transition-all duration-500 overflow-hidden ${isSidebarOpen ? 'w-full lg:w-[350px]' : 'w-full lg:w-[80px]'}`}>
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              {isSidebarOpen && <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Modules</span>}
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent/40 hover:text-white transition-colors"
              >
                <Command size={14} className={isSidebarOpen ? 'rotate-0' : 'rotate-180'} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
              {AI_APPS.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setActiveApp(app)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 group ${
                    activeApp.id === app.id 
                      ? 'bg-gold text-dark shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                      : 'bg-white/5 text-accent/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    activeApp.id === app.id ? 'bg-dark/20' : 'bg-white/5 group-hover:bg-gold/20 group-hover:text-gold'
                  }`}>
                    <app.icon size={18} />
                  </div>
                  {isSidebarOpen && (
                    <div className="text-left overflow-hidden">
                      <p className="text-[10px] font-bold uppercase tracking-widest truncate">{app.name}</p>
                      <p className={`text-[8px] uppercase tracking-widest mt-1 truncate ${activeApp.id === app.id ? 'text-dark/60' : 'text-accent/30'}`}>
                        {app.id.replace('-', ' ')}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {isSidebarOpen && (
              <div className="p-6 bg-white/5 border-t border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">System Operational</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gold/50"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Display Area */}
          <div className="flex-1 glass-card rounded-[2.5rem] border-white/5 overflow-hidden relative">
            {/* Browser-like Header */}
            <div className="h-14 bg-white/5 border-b border-white/10 flex items-center justify-between px-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="flex items-center gap-3 bg-dark/50 px-6 py-1.5 rounded-xl border border-white/5 max-w-md w-full">
                <Globe size={12} className="text-gold/50" />
                <span className="text-[10px] text-accent/40 font-mono truncate">{activeApp.url}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                  <Zap size={10} className="text-gold" />
                  <span className="text-[8px] text-white/40 font-bold uppercase tracking-widest">v1.2.4</span>
                </div>
              </div>
            </div>

            {/* The App Iframe */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApp.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[calc(100%-56px)] bg-dark"
              >
                <iframe
                  src={activeApp.url}
                  className="w-full h-full border-none"
                  title={activeApp.name}
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"
                ></iframe>
              </motion.div>
            </AnimatePresence>

            {/* Module Info Overlay */}
            <div className="absolute bottom-8 left-8 right-8 pointer-events-none flex justify-between items-end">
              <motion.div 
                key={activeApp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-dark/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl max-w-sm shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                    <activeApp.icon size={16} />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest">{activeApp.name}</h4>
                </div>
                <p className="text-[10px] text-accent/60 leading-relaxed uppercase tracking-widest">
                  {activeApp.description}
                </p>
              </motion.div>

              <div className="bg-dark/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl">
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 h-1 bg-gold rounded-full"
                    />
                  ))}
                </div>
                <span className="text-[9px] text-white font-bold uppercase tracking-[0.2em]">Live Interaction Active</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Specs Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Core Engine", value: "Gemini 1.5 Pro", icon: Sparkles },
            { label: "Environment", value: "Google AI Studio", icon: Globe },
            { label: "Interface", value: "Multi-Module Lab", icon: Box },
            { label: "Sync Status", value: "Real-time", icon: Zap },
          ].map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="glass-card p-6 flex items-center gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent/40 group-hover:text-gold transition-colors">
                <spec.icon size={20} />
              </div>
              <div>
                <p className="text-[8px] text-accent/40 uppercase tracking-[0.2em] mb-1">{spec.label}</p>
                <p className="text-sm font-bold text-white tracking-tight">{spec.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

