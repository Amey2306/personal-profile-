import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone, Download, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { name: 'Home', href: '#about' },
    { name: 'Summary', href: '#approach' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#projects' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark pt-20 pb-32">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-futuristic-gradient opacity-40"></div>
      
      {/* Interactive Glow */}
      <motion.div 
        className="absolute w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 40 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.6)]"></span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-emerald-500 font-bold">Open to work</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gold text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-6 glow-text-gold"
            >
              UX/UI Designer & Strategist
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-7xl md:text-[10rem] font-bold text-white mb-16 leading-[0.85] tracking-tighter"
            >
              Amey <br />
              <span className="text-white/10 select-none">Shinde</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 max-w-xl"
            >
              <div className="flex items-center gap-4 text-accent/50 hover:text-white transition-all group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail size={14} className="text-gold" />
                </div>
                <span className="text-xs tracking-widest">amey.shinde@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-accent/50 hover:text-white transition-all group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Linkedin size={14} className="text-gold" />
                </div>
                <span className="text-xs tracking-widest">linkedin.com/in/ameyshinde</span>
              </div>
              <div className="flex items-center gap-4 text-accent/50 hover:text-white transition-all group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone size={14} className="text-gold" />
                </div>
                <span className="text-xs tracking-widest">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-accent/50 hover:text-white transition-all group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MapPin size={14} className="text-gold" />
                </div>
                <span className="text-xs tracking-widest">Mumbai, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              <button className="group relative px-12 py-5 bg-gold text-dark font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 neon-glow-gold overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Download CV <Download size={14} />
                </span>
              </button>
              <button className="group px-12 py-5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/5 transition-all duration-500 backdrop-blur-md flex items-center gap-3">
                View Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] max-w-[500px] ml-auto">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gold/10 rounded-[60px] blur-[100px] animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-[60px] overflow-hidden border border-white/10 glass-card p-4">
                <div className="w-full h-full rounded-[45px] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                    alt="Amey Shinde"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Futuristic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
                  
                  {/* Decorative Scanline */}
                  <motion.div 
                    animate={{ y: ['0%', '100%', '0%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-gold/30 z-10 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 glass-pill py-2 px-4 border-white/5 shadow-2xl"
              >
                <span className="text-[8px] uppercase tracking-widest text-gold font-bold">Framer Expert</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -right-8 glass-pill py-2 px-4 border-white/5 shadow-2xl"
              >
                <span className="text-[8px] uppercase tracking-widest text-neon-blue font-bold">Strategy Lead</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Navigation Pill (Bottom) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="glass-pill flex items-center gap-10 border-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] px-10 py-4">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-[9px] uppercase tracking-[0.3em] text-accent/40 hover:text-gold transition-all font-bold relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};