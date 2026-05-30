import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, ShieldCheck, BarChart3 } from "lucide-react";

const projects = [
  {
    icon: ShieldCheck,
    title: "AI-Powered SMS Spam Filter",
    desc: "End-to-end NLP pipeline that classifies incoming SMS messages with high precision. Built with Python, scikit-learn and FastAPI, deployed as a REST microservice.",
    tags: ["Python", "scikit-learn", "FastAPI", "NLP"],
    highlights: ["TF-IDF + Naive Bayes", "REST API", "Real-time inference"],
  },
  {
    icon: BarChart3,
    title: "NECTA Examination Results Analysis",
    desc: "Data analysis platform exploring trends across NECTA exam results. Cleaning, statistical modeling, interactive dashboards and exportable reports.",
    tags: ["Pandas", "NumPy", "Matplotlib", "SQL"],
    highlights: ["Time-series trends", "Subject performance", "Regional insights"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// LAB"
      title="Selected projects"
      subtitle="A glimpse into systems I've designed, built, and shipped."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative glass-strong neon-border rounded-3xl p-7 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[var(--violet-accent)]/15 blur-3xl group-hover:bg-[var(--cyan)]/25 transition" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent" />

            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--cyan)]/30 to-[var(--violet-accent)]/30 flex items-center justify-center border border-white/10">
                  <p.icon className="h-5 w-5 text-[var(--cyan)]" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">PROJECT · {String(i + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <div className="mt-5 space-y-2">
                {p.highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-xs text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] glow-cyan" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[var(--cyan)]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                <a
                  href="https://github.com/junianfabian"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm glass rounded-lg px-3 py-2 hover:bg-white/5 transition"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm rounded-lg px-3 py-2 bg-gradient-to-r from-[var(--cyan)]/20 to-[var(--electric)]/20 border border-[var(--cyan)]/30 hover:from-[var(--cyan)]/30 hover:to-[var(--electric)]/30 transition"
                >
                  <ExternalLink className="h-4 w-4" /> Discuss
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
