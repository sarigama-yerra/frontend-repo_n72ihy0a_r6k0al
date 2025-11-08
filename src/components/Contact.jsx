import React, { useState } from 'react';
import { Mail, SendHorizontal } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
            <Mail className="h-5 w-5 text-cyan-300" />
          </div>
          <h2 className="font-['Manrope'] text-3xl font-bold md:text-4xl">Let’s Talk</h2>
          <p className="mt-2 text-slate-300">Have a role or project in mind? I’d love to hear about it.</p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500" placeholder="Your name" required />
          <input type="email" className="rounded-lg border border-slate-800 bg-slate-900 p-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500" placeholder="Email address" required />
          <input className="sm:col-span-2 rounded-lg border border-slate-800 bg-slate-900 p-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500" placeholder="Subject" />
          <textarea rows="5" className="sm:col-span-2 rounded-lg border border-slate-800 bg-slate-900 p-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500" placeholder="Message" required />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:brightness-110">
            <SendHorizontal className="h-4 w-4" /> Send message
          </button>
        </form>

        {status && (
          <p className="mt-4 rounded-md border border-cyan-500/30 bg-cyan-500/10 p-3 text-center text-cyan-200">{status}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
