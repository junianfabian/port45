import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const apiBase = (import.meta as any).env?.VITE_API_URL || "";
      if (apiBase) {
        await fetch(`${apiBase}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } else {
        await new Promise(r => setTimeout(r, 700));
      }
      toast.success("Message queued. I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Could not send message. Try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="// CONTACT"
      title="Let's build something intelligent"
      subtitle="Open to collaborations, freelance work, and research conversations."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-3"
        >
          {[
            { icon: Mail, label: "Email", value: "Junianfabian@gmail.com", href: "mailto:Junianfabian@gmail.com" },
            { icon: Phone, label: "Phone", value: "+255 787 442 279", href: "tel:+255787442279" },
            { icon: Linkedin, label: "LinkedIn", value: "junian-fabian", href: "https://www.linkedin.com/in/junian-fabian-b3b067359" },
            { icon: Github, label: "GitHub", value: "@junianfabian", href: "https://github.com/junianfabian" },
            { icon: MapPin, label: "Location", value: "Tanzania · Remote-friendly", href: "#" },
          ].map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 glass neon-border rounded-xl p-4 hover:bg-white/5 transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[var(--cyan)]/30 to-[var(--violet-accent)]/30 flex items-center justify-center border border-white/10 group-hover:scale-110 transition">
                <c.icon className="h-4 w-4 text-[var(--cyan)]" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] tracking-widest text-muted-foreground">{c.label.toUpperCase()}</div>
                <div className="text-sm truncate">{c.value}</div>
              </div>
            </a>
          ))}

          <div className="glass rounded-xl p-4 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-muted-foreground">Currently available for new projects</span>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong neon-border rounded-3xl p-7 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <Field label="Message" name="message" textarea required />

          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[var(--cyan)] to-[var(--electric)] px-6 py-3 font-medium text-[var(--primary-foreground)] glow-cyan transition hover:scale-[1.01] disabled:opacity-60"
          >
            {sending ? "Transmitting..." : (<><Send className="h-4 w-4" /> Send Message</>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls =
    "peer w-full bg-transparent border border-white/10 rounded-xl px-4 pt-6 pb-2 text-sm outline-none focus:border-[var(--cyan)]/60 focus:shadow-[0_0_0_3px_oklch(0.86_0.18_200/0.15)] transition placeholder-transparent";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} required={required} placeholder={label} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 font-mono text-[10px] tracking-widest text-[var(--cyan)]">
        {label.toUpperCase()}
      </span>
    </label>
  );
}
