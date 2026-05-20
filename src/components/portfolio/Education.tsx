import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const certs = [
  "JavaScript Programming",
  "React Basics",
  "Advanced React",
  "Frontend Developer",
  "Version Control with Git",
];

export function Education() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Credentials" title="Educated. Certified. Always learning." />

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl glass flex items-center justify-center text-gold">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Education</span>
            </div>
            <h3 className="font-display font-semibold text-2xl md:text-3xl">
              B.Tech - Information Technology
            </h3>
            <p className="mt-2 text-foreground/80">
              Vels Institute of Science, Technology and Advanced Studies
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Chennai, Tamil Nadu · 2019 – 2023
            </p>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <div className="px-4 py-2 rounded-xl bg-gold/10 border border-gold/30 text-gold font-display font-semibold">
                CGPA 8.74 / 10.0 ⭐
              </div>
              <span className="text-sm text-muted-foreground">
                Specialization: IT - Cloud and Mobile-Based Application Development
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl glass flex items-center justify-center text-gold">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Certifications · Meta + Coursera
              </span>
            </div>
            <ul className="divide-y divide-white/5">
              {certs.map((c) => (
                <li key={c} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-7 w-7 rounded-md bg-[#0866FF]/15 border border-[#0866FF]/30 flex items-center justify-center font-display font-bold text-xs text-[#4F94FF]">
                      M
                    </span>
                    <span className="text-foreground/90">{c}</span>
                  </div>
                  <span className="font-mono text-[11px] text-gold inline-flex items-center gap-1">
                    Verified <BadgeCheck className="h-3.5 w-3.5" />
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
