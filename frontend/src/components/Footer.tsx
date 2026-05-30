import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-16">
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--cyan) 1px, transparent 1px), linear-gradient(90deg, var(--cyan) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display text-xl font-bold text-gradient">Junian Fabian Nchanila</div>
          <p className="text-sm text-muted-foreground mt-1 font-mono">Intelligent Systems For benefit.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:Junianfabian@gmail.com" className="glass neon-border h-10 w-10 grid place-items-center rounded-xl hover:bg-white/5 transition">
            <Mail className="h-4 w-4 text-[var(--cyan)]" />
          </a>
          <a href="https://github.com/junianfabian" target="_blank" rel="noreferrer" className="glass neon-border h-10 w-10 grid place-items-center rounded-xl hover:bg-white/5 transition">
            <Github className="h-4 w-4 text-[var(--cyan)]" />
          </a>
          <a href="https://www.linkedin.com/in/junian-fabian-b3b067359" target="_blank" rel="noreferrer" className="glass neon-border h-10 w-10 grid place-items-center rounded-xl hover:bg-white/5 transition">
            <Linkedin className="h-4 w-4 text-[var(--cyan)]" />
          </a>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} JUNIAN.AI
        </div>
      </div>
    </footer>
  );
}
