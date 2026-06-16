import { motion } from "framer-motion";
import { Counter } from "./Counter";

const stats = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 100, suffix: "%", label: "User Satisfaction" },
];

export function Stats() {
  return (
    <section className="relative py-24 px-6 border-y border-white/5">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`text-center px-4 ${i !== 0 ? "md:border-l border-gold/20" : ""}`}
          >
            <div className="font-display font-bold text-5xl md:text-6xl gold-shimmer">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
