import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle starry dots */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.10),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.10),transparent_40%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <section id="about" className="relative py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-8 backdrop-blur-md">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
              <p className="text-slate-300 mt-4 leading-relaxed">
                I’m a third‑year IT student based in Greece, focused on building modern web experiences
                that are fast, accessible, and a little bit playful. I love working across the stack —
                designing clean UIs, crafting reliable APIs, and shipping features that feel great to use.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-slate-200">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-slate-400">Currently learning</p>
                  <p className="font-medium mt-1">TypeScript, CI/CD</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-slate-400">Interests</p>
                  <p className="font-medium mt-1">APIs, Cloud, DX</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-slate-400">Languages</p>
                  <p className="font-medium mt-1">English, Greek</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10 text-center text-slate-400">
        <p>
          © {new Date().getFullYear()} Stavros • Built with love in Greece
        </p>
      </footer>
    </div>
  )
}

export default App
