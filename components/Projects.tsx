import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowUpRight, Plus, Globe, Github, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Real Estate', 'E-commerce', 'Tech', 'Strategy'];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase())));

  return (
    <section id="projects" className="py-32 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-gold"></div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">Portfolio</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter"
            >
              Selected <span className="text-white/20">Works</span>
            </motion.h2>
          </div>

          {/* Futuristic Tabs */}
          <div className="flex p-1 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${
                  activeCategory === cat 
                    ? 'bg-gold text-dark shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-card rounded-[40px] overflow-hidden border-white/5 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 glass-pill py-2 px-4 border-white/10">
                      <ArrowUpRight size={14} className="text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[8px] uppercase tracking-widest text-gold/60 font-bold px-3 py-1 bg-gold/5 border border-gold/10 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gold transition-colors duration-500 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-accent/50 text-sm leading-relaxed font-light mb-10 flex-1">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent/40 hover:text-gold transition-colors cursor-pointer">
                          <Globe size={14} />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent/40 hover:text-gold transition-colors cursor-pointer">
                          <Github size={14} />
                        </div>
                      </div>
                      <button className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors flex items-center gap-2">
                        Case Study <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
