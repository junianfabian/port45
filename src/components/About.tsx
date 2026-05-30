import { motion } from "framer-motion";
import { Section } from "./Section";
import { Cpu, Database, Code2, BrainCircuit } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "20+" },
  { label: "AI Systems Built", value: "8" },
  { label: "Technologies", value: "25+" },
  { label: "Research Interests", value: "5" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// ABOUT"
      title={<>Turning data into <br />intelligent decisions.</>}
    >
      <div className="grid lg:grid-cols-5 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--cyan)]/30 to-[var(--violet-accent)]/30 blur-2xl" />
            <div className="absolute inset-0 rounded-3xl border border-white/10 animate-spin-slow" style={{ borderTopColor: "var(--cyan)" }} />
            <div className="absolute inset-4 rounded-3xl border border-white/5 animate-spin-slow" style={{ animationDirection: "reverse", borderRightColor: "var(--violet-accent)" }} />
            <div className="absolute inset-8 glass-strong neon-border rounded-2xl overflow-hidden">
              <img
                src="/junian.jpeg"
                alt="Junian Fabian Nchanila"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 space-y-6"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm <span className="text-gradient font-semibold">Junian Fabian Nchanila</span> a passionate Data Science and Analytics enthusiast with skills in machine learning, statistical analysis, SQL databases, Excel, and web development. I enjoy transforming data into meaningful insights and building intelligent solutions that solve real-world problems through data-driven approaches.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From training models in Python and TensorFlow to shipping reactive interfaces with React and Flask APIs in
            production I treat every project like a small product. Clean architecture, measurable outcomes, and
            beautiful UX.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { icon: BrainCircuit, label: "Machine Learning" },
              { icon: Database, label: "SQL · Databases" },
              { icon: Code2, label: "Web Development" },
              { icon: Cpu, label: "MS Office · Excel" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                <Icon className="h-4 w-4 text-[var(--cyan)]" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-strong neon-border rounded-2xl p-6 text-center"
          >
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{s.value}</div>
            <div className="font-mono text-[10px] tracking-widest text-muted-foreground mt-2">{s.label.toUpperCase()}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
