import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const ROTATING = [
  "Statistical Analysis",
  "Machine Learning",
  "Web Development",
  "Excel & BI",
  "Computer Vision",
  "Data Intelligence",
  "Database Systems",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(var(--cyan) 1px, transparent 1px), linear-gradient(90deg, var(--cyan) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[var(--cyan)]/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-[var(--violet-accent)]/20 blur-[120px] animate-pulse-glow" />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass neon-border rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-[var(--cyan)] mb-8"
        >
          <Sparkles className="h-3 w-3" />
          AI ENGINEER · DATA SCIENTIST · BUILDER
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
        >
          <span className="text-gradient">JUNIAN FABIAN</span>
          <br />
          <span className="text-foreground">NCHANILA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Database Management · Machine Learning · Intelligent Systems Builder
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 inline-flex items-center gap-3 font-mono text-sm md:text-base"
        >
          <span className="text-muted-foreground">{">"}</span>
          <span className="text-[var(--cyan)]">building</span>
          <span className="text-foreground">_</span>
          <motion.span
            key={idx}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gradient font-semibold"
          >
            {ROTATING[idx]}
          </motion.span>
          <span className="inline-block h-5 w-2 bg-[var(--cyan)] animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan)] to-[var(--electric)] px-6 py-3 font-semibold text-[var(--primary-foreground)] glow-cyan hover:scale-105 transition-transform"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass-strong neon-border rounded-xl px-6 py-3 font-semibold hover:bg-white/5 transition"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Floating stat chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
        >
          {[
            { k: "20+", v: "Projects" },
            { k: "8", v: "AI Systems" },
            { k: "25+", v: "Technologies" },
            { k: "5", v: "Research Areas" },
          ].map((s) => (
            <div key={s.v} className="glass neon-border rounded-xl p-4">
              <div className="text-2xl font-display font-bold text-gradient">{s.k}</div>
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground mt-1">
                {s.v.toUpperCase()}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
