import React from 'react';
import { Server, Lock, Globe2 } from 'lucide-react';

const data = [
  {
    title: 'Data Center Network Refresh',
    desc: 'Designed and rolled out a high-availability L3 fabric with VRRP, VLAN segmentation, and centralized logging.',
    tags: ['BGP', 'VLAN', 'HA', 'Syslog'],
  },
  {
    title: 'Hybrid Cloud Migration',
    desc: 'Automated VM provisioning and backups, built secure site-to-site tunnels, and optimized routing policies.',
    tags: ['IPSec', 'Ansible', 'AWS', 'Zabbix'],
  },
  {
    title: 'Endpoint Hardening Program',
    desc: 'Implemented CIS benchmarks, central patching, and role-based access controls across servers and endpoints.',
    tags: ['CIS', 'RBAC', 'Patching', 'SIEM'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-['Manrope'] text-3xl font-bold md:text-4xl">Highlighted Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Real-world outcomes across networking, systems, and security.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => (
            <div key={p.title} className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:bg-slate-900">
              <div className="mb-3 flex items-center gap-2 text-cyan-300">
                <Server className="h-4 w-4" />
                <Globe2 className="h-4 w-4" />
                <Lock className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-700/80 bg-slate-800/60 px-2 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
