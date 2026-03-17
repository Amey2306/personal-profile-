import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Approach', href: '#approach' },
    { name: 'Reports', href: '#reports' },
    { name: 'AI Lab', href: '#ailab' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Journey', href: '#experience' },
    { name: 'Portfolio', href: '#projects' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-10'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[60] neon-glow-gold"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, '#about')}
          className="relative group z-50"
        >
           <div className="flex items-center gap-4">
             <div className="text-2xl font-bold text-white tracking-tighter group-hover:text-gold transition-colors duration-500">AMEY</div>
             <div className="w-px h-6 bg-white/10"></div>
             <div className="text-[9px] font-bold text-accent/40 tracking-[0.4em] uppercase">Strategist</div>
           </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/60 hover:text-white transition-all relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full neon-glow-gold"></span>
            </a>
          ))}
          <a
             href="#contact"
             onClick={(e) => handleNavClick(e, '#contact')}
             className="group flex items-center gap-3 px-8 py-3 bg-white text-dark text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-dark transition-all duration-500 font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
            Connect <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 z-50 relative group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: 9, width: '100%', backgroundColor: '#f59e0b' } : { rotate: 0, y: 0, width: '100%', backgroundColor: '#ffffff' }}
              className="h-px block transition-all duration-500"
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1, width: '70%', backgroundColor: '#ffffff' }}
              className="h-px block transition-all duration-500"
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: -9, width: '100%', backgroundColor: '#f59e0b' } : { rotate: 0, y: 0, width: '100%', backgroundColor: '#ffffff' }}
              className="h-px block transition-all duration-500"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 bg-dark z-40 flex flex-col justify-center items-center p-6"
          >
            <div className="absolute inset-0 bg-futuristic-gradient opacity-20 pointer-events-none"></div>
            
            <div className="flex flex-col space-y-10 text-center w-full relative z-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-4xl font-bold text-white hover:text-gold transition-colors cursor-pointer uppercase tracking-[0.2em]"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                 href="#contact"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 onClick={(e) => handleNavClick(e, '#contact')}
                 className="mt-12 text-xl font-bold italic text-gold uppercase tracking-widest border-b border-gold/20 pb-2 inline-block mx-auto"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};