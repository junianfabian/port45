import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    role: "AI Engineer (Independent)",
    org: "Personal Lab",
    period: "2024 — Present",
    desc: "Building ML pipelines, RAG agents, and intelligent web apps end-to-end. Shipping production systems with Python, FastAPI, and React.",
  },
  {
    role: "Full-Stack Web Developer",
    org: "Freelance Projects",
    period: "2023 — Present",
    desc: "Designing and developing responsive web applications with React, Flask, and PostgreSQL. Database modeling and API design.",
  },
  {
    role: "Data Analyst & Researcher",
    org: "Academic Initiatives",
    period: "2022 — 2024",
    desc: "Statistical analysis on real-world datasets including national examination data. Cleaning, modeling, and visualizing insights.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// TRAJECTORY"
      title="Where I've shipped"
      subtitle="A growing track record across AI engineering, software development, and research."
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--cyan)]/40 to-transparent" />
        <div className="space-y-12">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                <div className="glass-strong neon-border rounded-2xl p-6 inline-block text-left">
                  <div className="font-mono text-xs tracking-widest text-[var(--cyan)]">{it.period}</div>
                  <h3 className="font-display text-xl font-semibold mt-2">{it.role}</h3>
                  <div className="text-sm text-muted-foreground">{it.org}</div>
                  <p className="mt-3 text-sm text-foreground/80">{it.desc}</p>
                </div>
              </div>
              <div className="hidden md:block" />
              <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-[var(--cyan)] glow-cyan animate-pulse-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
