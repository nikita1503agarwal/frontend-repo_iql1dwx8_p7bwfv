const projects = [
  {
    title: "Smart Study Planner",
    desc: "A responsive web app that organizes coursework, deadlines, and study sessions with calendar sync.",
    tags: ["React", "Tailwind", "Supabase"],
    link: "#",
  },
  {
    title: "Bus ETA Microservice",
    desc: "FastAPI service that aggregates public transport data in Athens and exposes a clean REST API.",
    tags: ["FastAPI", "Python", "MongoDB"],
    link: "#",
  },
  {
    title: "Campus Clubs Website",
    desc: "Multi‑page static site for a university club with events, gallery and contact form.",
    tags: ["Vite", "Netlify"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projects</h2>
            <p className="text-slate-300 mt-2">Selected work and experiments.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-blue-300 hover:text-blue-200">View CV</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-2xl bg-slate-900/60 border border-white/10 p-5 hover:border-blue-400/40 transition-colors">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-sky-500/10 mb-4" />
              <h3 className="text-white font-semibold tracking-tight group-hover:text-blue-200">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-white/10 text-slate-300">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
