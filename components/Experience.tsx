import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Calendar, Building2, Briefcase, ChevronRight, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gold"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">Career Path</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter"
          >
            Professional <span className="text-white/20">Journey</span>
          </motion.h2>
          
          <p className="text-accent/50 max-w-2xl text-lg font-light leading-relaxed">
            A chronological evolution of strategic impact and technical mastery 
            within the digital marketing landscape.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-neon-blue/50 to-transparent hidden lg:block -translate-x-1/2"></div>

          <div className="space-y-32">
             {EXPERIENCE.map((exp, index) => (
               <motion.div 
                 key={exp.id}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1, ease: "circOut" }}
                 className={`group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
               >
                  {/* Timeline Node */}
                  <div className="absolute left-0 lg:left-1/2 top-0 lg:top-1/2 w-4 h-4 rounded-full bg-dark border-2 border-gold shadow-[0_0_15px_rgba(245,158,11,0.5)] z-20 -translate-x-1/2 -translate-y-1/2 hidden lg:block group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Date/Company Side */}
                  <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 === 0 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                    <div className="flex items-center gap-4 text-gold mb-4">
                      <Calendar size={14} className="opacity-50" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{exp.period}</span>
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-gold transition-colors">{exp.company}</h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent/40 font-bold">{exp.role}</p>
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="glass-card p-10 rounded-[40px] border-white/5 group-hover:border-gold/20 transition-all duration-700 relative">
                      <div className="absolute top-10 -left-2 w-4 h-4 bg-gold rotate-45 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block"></div>
                      
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold">
                          <Briefcase size={18} />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-accent/60 leading-relaxed font-light mb-10">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {['Strategy', 'Growth', 'MarTech'].map(tag => (
                          <div key={tag} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <Zap size={10} className="text-gold/40" />
                            <span className="text-[9px] uppercase tracking-widest text-accent/40 font-bold">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};