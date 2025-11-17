import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center py-28">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-slate-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships • Greece
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Stavros — Third‑year IT Student
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg leading-relaxed max-w-xl">
            I build clean, accessible web apps and playful interfaces. Passionate about
            backend APIs, modern frontends, and cloud.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors">
              See projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium rounded-md border border-white/10 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-fuchsia-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />
          <div className="relative p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <dl className="grid grid-cols-2 gap-6 text-slate-200 text-sm">
              <div>
                <dt className="text-slate-400">Focus</dt>
                <dd className="font-medium">Web Dev, APIs</dd>
              </div>
              <div>
                <dt className="text-slate-400">Location</dt>
                <dd className="font-medium">Athens, GR</dd>
              </div>
              <div>
                <dt className="text-slate-400">Stack</dt>
                <dd className="font-medium">React, FastAPI, Mongo</dd>
              </div>
              <div>
                <dt className="text-slate-400">Hobbies</dt>
                <dd className="font-medium">Cycling, chess</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
