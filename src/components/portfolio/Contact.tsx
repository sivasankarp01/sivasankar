import { motion } from "framer-motion";
import { Phone, Mail, Globe, Linkedin, Github, Send } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const contacts = [
  { icon: Phone, label: "+971 55 639 8251", href: "tel:+971556398251" },
  { icon: Phone, label: "+91 9159032689", href: "tel:+919159032689" },
  { icon: Mail, label: "sivasankar001.dev@gmail.com", href: "mailto:sivasankar001.dev@gmail.com" },
  { icon: Globe, label: "sivasankar.vercel.app", href: "#about" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-gold"
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 font-display font-bold text-5xl md:text-7xl gold-shimmer leading-[1.05]"
        >
          Let's Build Something
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg text-muted-foreground"
        >
          Available for immediate joining across UAE.
        </motion.p>

        <div className="mt-14 grid sm:grid-cols-4 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 flex items-center gap-3 text-left hover:border-gold/30 hover:-translate-y-1 transition-all"
            >
              <div className="h-10 w-10 rounded-xl glass flex items-center justify-center text-gold shrink-0">
                <c.icon className="h-4 w-4" />
              </div>
              <span className="text-sm md:text-[13px] truncate text-foreground/90">{c.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/sivasankarp001/"
            target="_blank"
            rel="noreferrer"
            className="h-20 w-20 rounded-full glass flex items-center justify-center hover:text-gold hover:border-gold/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/sivasankarp01/"
            target="_blank"
            rel="noreferrer"
            className="h-20 w-20 rounded-full glass flex items-center justify-center hover:text-gold hover:border-gold/40 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        {/* <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-14 glass rounded-3xl p-6 md:p-10 text-left"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" type="email" placeholder="you@company.com" />
          </div>
          <div className="mt-4">
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project…"
              className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
            />
          </div>
          <div className="mt-6 flex justify-end">
            <MagneticButton variant="gold">
              Send Message <Send className="h-4 w-4" />
            </MagneticButton>
          </div>
        </motion.form> */}
      </div>

      <footer className="mt-24 pt-10 border-t border-white/5 max-w-6xl mx-auto text-center">
        <p className="text-sm text-foreground/80">
          Designed & Built by <span className="text-gold">Sivasankar P</span> · Dubai, UAE ·  {new Date().getFullYear()}
        </p>
       
      </footer>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors"
      />
    </div>
  );
}
