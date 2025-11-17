const skills = {
  Languages: ["JavaScript", "Python", "C"],
  Frontend: ["React", "Tailwind CSS", "Vite"],
  Backend: ["FastAPI", "Node.js", "MongoDB"],
  Tools: ["Git", "Docker", "Linux"],
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skills</h2>
        <p className="text-slate-300 mt-2">A snapshot of my current toolkit.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-3">{group}</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
