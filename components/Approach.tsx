import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Layers, Activity, PieChart, Search, Target, BarChart3, Rocket } from 'lucide-react';

const PROCESS_STEPS = [
  { icon: Search, title: "Discovery", desc: "Deep dive into market dynamics and competitor landscapes." },
  { icon: Target, title: "Strategy", desc: "Architecting multi-channel narratives that align with growth KPIs." },
  { icon: BarChart3, title: "Execution", desc: "Precision deployment across high-intent digital channels." },
  { icon: Rocket, title: "Scale", desc: "Iterative optimization to drive sustainable revenue growth." }
];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-32 bg-paper relative overflow-hidden border-t border-dark/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gold"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-medium">Our Methodology</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl serif font-light mb-10 text-dark leading-[1.1]"
          >
            Strategic <span className="italic text-gold">Philosophy</span> & <br />
            Digital <span className="italic">Engineering</span>
          </motion.h2>
          
          <p className="text-accent max-w-2xl text-lg font-light leading-relaxed text-balance">
            Engineering digital ecosystems that drive sustainable revenue through 
            a blend of advanced MarTech, data intelligence, and human-centric narratives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div className="space-y-12">
            {[
              { 
                icon: Layers, 
                title: "Scale & Volume", 
                stat: "10+", 
                unit: "Active Threads",
                desc: "Managing high-volume campaign cycles without compromising on precision. My workflow is optimized for concurrent project execution and rapid scaling."
              },
              { 
                icon: Activity, 
                title: "Resilience", 
                stat: "100%", 
                unit: "Commitment",
                desc: "A relentless commitment to finding solutions. When traditional paths are blocked, I leverage data-driven workarounds to ensure targets are met."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-8 p-8 hover:bg-white transition-all duration-500 border border-transparent hover:border-dark/5"
              >
                <div className="flex-shrink-0 w-16 h-16 border border-dark/5 flex items-center justify-center text-gold group-hover:bg-dark group-hover:text-white transition-all duration-500">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">{item.title}</h3>
                  <div className="text-4xl serif font-light text-dark mb-4">
                    {item.stat} <span className="text-sm italic text-gold">{item.unit}</span>
                  </div>
                  <p className="text-sm text-accent leading-relaxed font-light max-w-md">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12">
            {[
              {
                icon: Zap,
                title: "Architecture",
                desc: "Bridging the gap between marketing and technology. Architecting custom stacks that automate growth and provide predictive insights.",
                tags: ['Power Apps', 'Google AI', 'Salesforce', 'HubSpot']
              },
              {
                icon: PieChart,
                title: "Intelligence",
                desc: "Transforming raw data into actionable intelligence. Utilizing BI tools to visualize performance and steer strategic decisions.",
                tags: ['Power BI', 'Looker Studio', 'Media Planning']
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="p-10 bg-white border border-dark/5 shadow-sm hover:shadow-2xl hover:shadow-dark/5 transition-all duration-700"
              >
                <div className="flex items-center gap-4 mb-8">
                  <item.icon size={20} className="text-gold" strokeWidth={1.5} />
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-dark">{item.title}</h3>
                </div>
                <p className="text-sm text-accent mb-8 leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-dark/5 text-[9px] uppercase tracking-widest text-accent font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="border-t border-dark/5 pt-24">
          <div className="grid md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-[10px] font-medium text-gold mb-6 tracking-[0.3em]">0{idx + 1}</div>
                <h4 className="text-lg serif font-light text-dark mb-4">{step.title}</h4>
                <p className="text-xs text-accent leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};