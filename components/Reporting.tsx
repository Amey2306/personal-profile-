import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, ChevronRight, Database, Target, TrendingUp, Users, Activity, PieChart as PieIcon, BarChart as BarIcon } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';

const REPORT_DATA = {
  overview: {
    totalSpend: "₹ 3.02 Cr",
    leadsGenerated: "13,900+",
    totalBookings: "453",
    campaignROI: "450%"
  },
  projects: [
    { name: "Godrej Horizon", leads: 1524, bookings: 22, cpl: 4247, budget: 64.7 },
    { name: "Godrej Reserve", leads: 2778, bookings: 36, cpl: 5686, budget: 157 },
    { name: "Godrej City", leads: 1299, bookings: 96, cpl: 2359, budget: 30.6 },
    { name: "Godrej Woodside", leads: 1850, bookings: 42, cpl: 3800, budget: 70.3 },
  ],
  channels: [
    { name: "Google Search", value: 45, color: "#f59e0b", estimatedLeads: 6255 },
    { name: "Meta (FB/IG)", value: 35, color: "#00d2ff", estimatedLeads: 4865 },
    { name: "Prop. Portals", value: 15, color: "#9d50bb", estimatedLeads: 2085 },
    { name: "Native/Other", value: 5, color: "#a1a1aa", estimatedLeads: 695 }
  ],
  trend: [
    { month: 'Oct', leads: 2100, spend: 45 },
    { month: 'Nov', leads: 2400, spend: 52 },
    { month: 'Dec', leads: 2800, spend: 61 },
    { month: 'Jan', leads: 3200, spend: 68 },
    { month: 'Feb', leads: 3400, spend: 76 },
  ]
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 border-white/10 shadow-2xl">
        <p className="text-[10px] font-bold text-accent/60 uppercase tracking-widest mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm font-bold text-white">
            <span className="text-gold mr-2">{entry.name}:</span>
            {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const Reporting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'channels'>('overview');

  return (
    <section id="reports" className="py-32 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

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
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">Analytics</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter"
            >
              Performance <span className="text-white/20">Metrics</span>
            </motion.h2>
          </div>
          
          <div className="flex p-1 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10">
            {[
              { id: 'overview', icon: Activity },
              { id: 'projects', icon: BarIcon },
              { id: 'channels', icon: PieIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-8 py-3 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 flex items-center gap-3 ${
                  activeTab === tab.id 
                    ? 'bg-gold text-dark shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                <tab.icon size={14} />
                {tab.id}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="h-[500px] w-full glass-card p-10 rounded-[40px] border-white/5">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div 
                    key="overview"
                    initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                    className="h-full w-full"
                  >
                    <div className="flex justify-between items-center mb-12">
                      <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Lead Acquisition Trend</h3>
                      <div className="flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></div>
                        <span className="text-[8px] text-gold uppercase tracking-widest font-bold">Live Data</span>
                      </div>
                    </div>
                    <ResponsiveContainer width="100%" height="80%">
                      <AreaChart data={REPORT_DATA.trend}>
                        <defs>
                          <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fill: '#a1a1aa', fontWeight: 600 }} 
                        />
                        <YAxis hide />
                        <Tooltip content={<CustomTooltip />} />
                        <Area 
                          type="monotone" 
                          dataKey="leads" 
                          stroke="#f59e0b" 
                          fillOpacity={1} 
                          fill="url(#colorLeads)" 
                          strokeWidth={3}
                          animationDuration={2000}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </motion.div>
                )}

                {activeTab === 'projects' && (
                  <motion.div 
                    key="projects"
                    initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                    className="h-full w-full"
                  >
                    <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-12">Lead Volume by Project</h3>
                    <ResponsiveContainer width="100%" height="80%">
                      <BarChart data={REPORT_DATA.projects}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 9, fill: '#a1a1aa', fontWeight: 600 }} 
                        />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#a1a1aa' }} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar 
                          dataKey="leads" 
                          fill="#f59e0b" 
                          radius={[10, 10, 0, 0]} 
                          barSize={50}
                          className="neon-glow-gold"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                )}

                {activeTab === 'channels' && (
                  <motion.div 
                    key="channels"
                    initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                    className="h-full w-full flex flex-col md:flex-row items-center"
                  >
                    <div className="w-full md:w-1/2 h-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={REPORT_DATA.channels}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={8}
                            dataKey="value"
                            stroke="none"
                          >
                            {REPORT_DATA.channels.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 p-8">
                      {REPORT_DATA.channels.map((channel) => (
                        <div key={channel.name} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color, boxShadow: `0 0 10px ${channel.color}` }}></div>
                            <span className="text-[10px] text-white uppercase tracking-widest font-bold">{channel.name}</span>
                          </div>
                          <span className="text-xs font-mono text-white/40">{channel.value}%</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {[
                { label: 'Total Spend', value: REPORT_DATA.overview.totalSpend, icon: Database },
                { label: 'Leads Generated', value: REPORT_DATA.overview.leadsGenerated, icon: Users },
                { label: 'Total Bookings', value: REPORT_DATA.overview.totalBookings, icon: Target },
                { label: 'Campaign ROI', value: REPORT_DATA.overview.campaignROI, icon: TrendingUp }
              ].map((stat) => (
                <div key={stat.label} className="group p-6 glass-card rounded-3xl border-white/5 hover:border-gold/20 transition-all">
                  <div className="text-[9px] font-bold text-accent/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <stat.icon size={12} className="text-gold/40" />
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-500 tracking-tight">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="p-10 glass-card rounded-[40px] border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold">
                  <FileText size={20} />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Dossier Access</h3>
              </div>
              
              <p className="text-xs text-accent/50 mb-10 leading-relaxed font-light">
                Secure access to comprehensive campaign reports, budgeting sheets, and raw data exports.
              </p>
              
              <div className="space-y-4">
                {[
                  { name: 'Q3_Performance.pdf', size: '4.2 MB' },
                  { name: 'Budget_Allocation.xlsx', size: '1.8 MB' }
                ].map((file) => (
                  <button key={file.name} className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/5 transition-all group">
                    <div className="flex items-center gap-4">
                      <FileText size={16} className="text-accent/40 group-hover:text-gold transition-colors" />
                      <div>
                        <p className="text-[10px] text-white uppercase tracking-widest font-bold text-left">{file.name}</p>
                        <p className="text-[8px] text-accent/30 uppercase tracking-widest text-left mt-1">{file.size}</p>
                      </div>
                    </div>
                    <Download size={16} className="text-accent/20 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-3 text-[10px] font-bold text-gold uppercase tracking-[0.3em] mt-12 hover:gap-5 transition-all group">
                Full Archive <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
