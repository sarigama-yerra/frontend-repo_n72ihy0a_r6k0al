import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Network, Shield, Server } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-slate-200">
          <div className="flex items-center gap-2 font-semibold">
            <Network className="h-4 w-4 text-cyan-400" />
            <span>NetOps Portfolio</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-violet-400" />
            <Server className="h-4 w-4 text-cyan-400" />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-slate-400">
        <p>© {new Date().getFullYear()} NetOps Portfolio • Built with care and security in mind.</p>
      </footer>
    </div>
  );
}

export default App;
