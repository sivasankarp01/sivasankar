import { motion } from "framer-motion";
import { MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start">
        <div className="hidden md:flex items-start">
          <h2 className="font-display font-bold text-7xl gold-shimmer [writing-mode:vertical-rl] rotate-180 tracking-widest">
            ABOUT
          </h2>
        </div>

        <div>
          <p className="md:hidden font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">About</p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xl md:text-3xl font-display leading-snug text-foreground/90"
          >
            Software Developer with <span className="text-gold">3+ years</span> of
            experience delivering enterprise applications, e-commerce platforms, and
            cloud solutions. Specializing in React, Next.js, Flutter, Node.js, Python,
            and AWS, with a focus on performance, scalability, and exceptional user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-10 grid sm:grid-cols-2 gap-4"
          >
            <Card icon={<Briefcase className="h-4 w-4" />} label="Currently at">
              Saadah Investment LLC
              <span className="block text-muted-foreground font-sans font-normal text-sm mt-1">
                Abu Dhabi · Sakab Group
              </span>
            </Card>
            <Card icon={<MapPin className="h-4 w-4" />} label="Based in">
              Deira, Dubai
              <span className="block text-muted-foreground font-sans font-normal text-sm mt-1">
                UAE Employment Visa ✓
              </span>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 ring-gold border border-gold/30 text-gold font-medium text-sm glow-gold"
          >
            <CheckCircle2 className="h-4 w-4" />
            Available for Immediate Joining
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6 hover:border-gold/30 transition-colors">
      <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-[0.2em] mb-3">
        {icon} {label}
      </div>
      <div className="font-display text-lg font-medium">{children}</div>
    </div>
  );
}
