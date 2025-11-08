import React from 'react';
import { Shield, Server, Network, Cloud, Terminal } from 'lucide-react';

const skills = [
  { icon: Shield, title: 'Security', points: ['Zero-trust networks', 'Firewall & VPN', 'OS hardening'] },
  { icon: Server, title: 'Systems', points: ['Linux & Windows', 'Ansible automation', 'Backup & DR'] },
  { icon: Network, title: 'Networking', points: ['Routing & switching', 'SD-WAN & VLANs', 'Wireless & QoS'] },
  { icon: Cloud, title: 'Cloud', points: ['AWS / Azure basics', 'Containers & Docker', 'Monitoring & logs'] },
  { icon: Terminal, title: 'Scripting', points: ['Bash & PowerShell', 'Python tooling', 'CI/CD basics'] },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-['Manrope'] text-3xl font-bold md:text-4xl">Core Skillset</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          A practical mix of networking, systems, and security—designed to keep your infrastructure resilient and scalable.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:bg-slate-900">
              <div className="mb-4 flex items-center gap-3">
                <s.icon className="h-5 w-5 text-cyan-400" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                {s.points.map((p) => (
                  <li key={p} className="list-disc pl-4 marker:text-cyan-400">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
