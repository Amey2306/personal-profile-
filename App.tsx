import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Approach } from './components/Approach';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Reporting } from './components/Reporting';
import { AILab } from './components/AILab';
import { Contact } from './components/Contact';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <div className="bg-paper min-h-screen text-dark selection:bg-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Reporting />
        <AILab />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
}

export default App;