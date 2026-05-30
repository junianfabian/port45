import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Award, FlaskConical, Wrench } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Education", body: "Currently pursuing a degree in Data Science at Eastern Statistical Training Centre (EASTC), with interests in machine learning, statistical analysis and transforming data into meaningful insights for solving real-world problems." },
  { icon: Award, title: "Certifications", body: "Ongoing certifications in Machine Learning, Data Analysis, and modern web development." },
  { icon: FlaskConical, title: "Research", body: "Applied research in NLP for low-resource languages and predictive analytics on real-world datasets." },
  { icon: Wrench, title: "Technical Training", body: "Workshops on Python, SQL, deployment with Docker, and modern frontend architectures." },
];

export function Qualifications() {
  return (
    <Section
      id="qualifications"
      eyebrow="// CREDENTIALS"
      title="Qualifications & growth"
      subtitle="Continuous learning is part of the build."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass neon-border rounded-2xl p-6 flex gap-4"
          >
            <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--cyan)]/30 to-[var(--violet-accent)]/30 flex items-center justify-center border border-white/10">
              <it.icon className="h-5 w-5 text-[var(--cyan)]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{it.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
