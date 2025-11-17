import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">
          <span className="text-blue-400">Stavros</span> • IT Student
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors">
            Get in touch
          </a>
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden text-slate-200 hover:text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 grid gap-2 text-slate-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex justify-center px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
