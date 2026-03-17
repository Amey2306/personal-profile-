import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full bg-[#030014] overflow-hidden">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#030014] via-[#050505] to-[#1a0b2e]"></div>

      {/* Energetic Orbs - The "Cooking" Heat */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] animate-blob mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-red-600/10 blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

      {/* Cyber Perspective Grid */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Rising Energy Particles */}
      <div className="absolute inset-0 z-[2] opacity-30">
         <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse-slow opacity-50"></div>
         <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse-slow delay-1000 opacity-50"></div>
         <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse-slow delay-700 opacity-30"></div>
      </div>

      {/* Vignette for Focus */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#030014]/90 z-[3]"></div>
    </div>
  );
};