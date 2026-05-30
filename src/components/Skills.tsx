import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { title: "AI & Machine Learning", items: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI APIs", "Scikit-learn"] },
  { title: "Frontend Development", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML/CSS", "JavaScript"] },
  { title: "Backend & Databases", items: ["FastAPI", "Flask", "Node.js", "PostgreSQL", "MongoDB", "Redis"] },
  { title: "Data Science", items: ["Pandas", "NumPy", "Matplotlib", "Excel", "Power BI", "Jupyter"] },
  { title: "DevOps & Cloud", items: ["Docker", "AWS", "Linux", "GitHub", "CI/CD", "Render"] },
  { title: "AI Agents & Automation", items: ["Agent Workflows", "RAG", "Vector DBs", "Prompt Engineering", "Webhooks", "n8n"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// CAPABILITIES"
      title="Technologies I command"
      subtitle="A curated stack for building intelligent, production-ready systems."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass neon-border rounded-2xl p-6 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--cyan)]/10 blur-2xl group-hover:bg-[var(--cyan)]/25 transition-all" />
            <h3 className="font-display text-lg font-semibold mb-4 text-gradient">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map(item => (
                <span
                  key={item}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80 hover:border-[var(--cyan)]/40 hover:text-[var(--cyan)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
