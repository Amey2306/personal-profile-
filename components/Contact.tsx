import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-paper border-t border-dark/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl serif font-light mb-10 text-dark">
                Let's <span className="italic text-gold">Connect</span>
              </h2>
              <p className="text-accent mb-16 text-lg font-light leading-relaxed">
                Ready to scale your digital presence? Let's discuss how data-driven 
                marketing and technical excellence can transform your brand.
              </p>
              
              <div className="space-y-12">
                <a href="mailto:contact@ameyshinde.com" className="group flex items-center gap-8 text-accent hover:text-gold transition-colors">
                  <div className="w-14 h-14 border border-dark/10 flex items-center justify-center group-hover:border-gold/50 transition-all">
                    <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                     <div className="text-[10px] text-accent/40 font-medium uppercase tracking-[0.2em] mb-1">Email</div>
                     <div className="text-xl serif font-light text-dark">contact@ameyshinde.com</div>
                  </div>
                </a>
                
                <div className="group flex items-center gap-8 text-accent">
                  <div className="w-14 h-14 border border-dark/10 flex items-center justify-center group-hover:border-gold/50 transition-all">
                    <MapPin size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                     <div className="text-[10px] text-accent/40 font-medium uppercase tracking-[0.2em] mb-1">Location</div>
                     <div className="text-xl serif font-light text-dark">Mumbai, India</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="p-12 bg-white border border-dark/5 group hover:border-gold/20 transition-all duration-700 shadow-sm hover:shadow-xl hover:shadow-gold/5" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-8">
                 <div>
                   <label className="block text-[10px] font-medium text-accent/40 mb-3 uppercase tracking-[0.2em]">Name</label>
                   <input type="text" className="w-full bg-transparent border-b border-dark/10 py-3 text-dark focus:outline-none focus:border-gold transition-colors font-light" placeholder="Your Name" />
                 </div>
                 <div>
                   <label className="block text-[10px] font-medium text-accent/40 mb-3 uppercase tracking-[0.2em]">Email</label>
                   <input type="email" className="w-full bg-transparent border-b border-dark/10 py-3 text-dark focus:outline-none focus:border-gold transition-colors font-light" placeholder="email@example.com" />
                 </div>
                 <div>
                   <label className="block text-[10px] font-medium text-accent/40 mb-3 uppercase tracking-[0.2em]">Message</label>
                   <textarea rows={4} className="w-full bg-transparent border-b border-dark/10 py-3 text-dark focus:outline-none focus:border-gold transition-colors resize-none font-light" placeholder="How can I help you?"></textarea>
                 </div>
                 <button className="w-full py-5 border border-gold/50 text-gold text-[10px] font-medium uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
                   Send Message <Send size={14} />
                 </button>
               </div>
            </form>
        </div>

        <div className="mt-32 pt-12 border-t border-dark/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-medium text-accent tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} AMEY SHINDE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
             <a href="#" className="hover:text-gold transition-colors">LINKEDIN</a>
             <a href="#" className="hover:text-gold transition-colors">TWITTER</a>
             <a href="#" className="hover:text-gold transition-colors">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </section>
  );
};