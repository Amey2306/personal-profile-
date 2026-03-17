import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Megaphone, BarChart3, TrendingUp, Target, ShieldCheck, Cpu, Zap, Globe } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Megaphone: Megaphone,
  BarChart: BarChart3,
  TrendingUp: TrendingUp,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gold"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-white mb-10 leading-[1.1] tracking-tighter"
          >
            Technical <span className="text-white/20">Proficiency</span>
          </motion.h2>
          
          <p className="text-accent/50 max-w-2xl text-lg font-light leading-relaxed">
            A curated selection of digital marketing and technical expertise 
            refined through years of high-impact campaign execution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Categories */}
          <div className="space-y-8">
            {SKILLS.map((category, idx) => {
              const Icon = iconMap[category.icon] || Target;

              return (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 glass-card rounded-[30px] border-white/5 hover:border-gold/20"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-500">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-[0.3em]">
                        {category.title}
                      </h3>
                      <p className="text-[10px] text-accent/40 uppercase tracking-widest mt-1">Core Domain</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <Zap size={10} className="text-gold/50" />
                        <span className="text-[10px] text-accent/80 uppercase tracking-widest font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Visual Progress Bars (Futuristic) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[40px] p-12 border-white/5"
          >
            <div className="flex items-center gap-4 mb-12">
              <Cpu size={20} className="text-neon-blue" />
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.4em]">Performance Metrics</h3>
            </div>

            <div className="space-y-12">
              {[
                { name: 'Performance Marketing', level: 95, color: 'gold' },
                { name: 'MarTech Automation', level: 90, color: 'neon-blue' },
                { name: 'Data Analytics', level: 85, color: 'neon-purple' },
                { name: 'Creative Strategy', level: 88, color: 'gold' },
                { name: 'Project Management', level: 92, color: 'neon-blue' }
              ].map((metric, mIdx) => (
                <div key={metric.name} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">{metric.name}</span>
                    <span className="text-[10px] font-mono text-white/40">{metric.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "circOut", delay: mIdx * 0.1 }}
                      className={`h-full rounded-full relative bg-${metric.color} neon-glow-${metric.color === 'gold' ? 'gold' : 'blue'}`}
                    >
                      <motion.div 
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe size={14} className="text-accent/40" />
                <span className="text-[9px] uppercase tracking-widest text-accent/40 font-bold">Global Standards</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`w-1 h-1 rounded-full ${i <= 4 ? 'bg-gold' : 'bg-white/10'}`}></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};