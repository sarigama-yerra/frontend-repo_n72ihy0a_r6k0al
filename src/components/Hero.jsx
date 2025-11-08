import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Shield, Server, Network, Download, Linkedin, Github, Mail } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Parallax gradient layers */}
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.25),transparent_70%)]"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(35%_35%_at_80%_20%,rgba(147,51,234,0.25),transparent_70%)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 md:flex-row md:gap-10">
        <div className="mx-auto w-full max-w-xl py-10 text-center md:mx-0 md:w-1/2 md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300">
            <Shield className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">Networking • SysAdmin • Security</span>
          </div>
          <h1 className="font-['Manrope'] text-4xl font-extrabold leading-tight sm:text-5xl">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">your network & systems pro</span>
          </h1>
          <p className="mt-4 text-slate-300">
            I design secure networks, automate servers, and keep infrastructure fast, reliable, and compliant. Explore my work and see how I can help your stack scale with confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
            >
              <Server className="h-4 w-4" />
              Let’s Work Together
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 font-medium text-slate-200 transition hover:bg-slate-800"
            >
              <Network className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 font-medium text-slate-200 transition hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            <a href="mailto:you@example.com" className="text-slate-400 transition hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* 3D Hero */}
        <div className="relative h-[420px] w-full md:h-[560px] md:w-1/2">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Floating badges */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 w-full -translate-x-1/2 px-6 md:bottom-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { icon: <Shield className="h-4 w-4" />, label: 'Zero-Trust' },
            { icon: <Server className="h-4 w-4" />, label: 'Automation' },
            { icon: <Network className="h-4 w-4" />, label: 'High Availability' },
            { icon: <Shield className="h-4 w-4" />, label: 'Hardening' },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 backdrop-blur"
            >
              {b.icon}
              <span>{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
