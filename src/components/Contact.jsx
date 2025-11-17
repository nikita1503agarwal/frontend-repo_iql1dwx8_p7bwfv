import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus('Sending...');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back to you soon.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact</h2>
        <p className="text-slate-300 mt-2">Let’s build something great together.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input name="name" required placeholder="Your name" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-400" />
          <input name="email" type="email" required placeholder="Email" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-400" />
          <textarea name="message" required rows="5" placeholder="Message" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-white placeholder-slate-400" />
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-md bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors">Send</button>
            <span className="text-sm text-slate-300">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
