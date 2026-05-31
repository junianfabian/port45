import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.querySelector(l.href));
      for (const s of sections) {
        if (!s) continue;
        const r = s.getBoundingClientRect();
        if (r.top <= 120 && r.bottom > 120) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`glass-strong rounded-2xl px-5 py-3 flex items-center justify-between ${scrolled ? "glow-cyan-sm" : ""}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--electric)] grid place-items-center font-mono font-bold text-[var(--primary-foreground)] glow-cyan-sm">
              JF
              <span className="absolute inset-0 rounded-lg ring-1 ring-[var(--cyan)]/50 animate-pulse-glow" />
            </div>
            
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive ? "text-[var(--cyan)]" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[var(--cyan)] to-[var(--electric)] rounded-full"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--cyan)] to-[var(--electric)] text-[var(--primary-foreground)] text-sm font-semibold hover:scale-105 transition-transform glow-cyan-sm"
          >
            Let's Talk
          </a>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-[var(--cyan)] hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
