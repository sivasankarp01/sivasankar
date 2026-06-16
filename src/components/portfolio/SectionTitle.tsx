import { motion } from "framer-motion";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-4xl"}
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] gold-shimmer">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
