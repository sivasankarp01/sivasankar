import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { SectionTitle } from "./SectionTitle";

const projects = [
  {
    tag: "E-Commerce",
    title: "Bazaario",
    desc: "Full-featured e-commerce platform with zero-downtime deployments and ironclad auth.",
    stack: ["Next.js", "AWS EC2", "JWT", "Nginx", "CI/CD"],
    live: "https://bazaario.io",
  },
  {
    tag: "Fintech",
    title: "Tezcai",
    desc: "Real-time crypto analytics dashboard with optimized rendering and SEO at the edge.",
    stack: ["Next.js", "React.js", "REST API", "SEO"],
    live: "https://tezcai.com",
  },
  {
    tag: "HR Tech",
    title: "Zigma Work Pro",
    desc: "Face-recognition attendance system that reduced manual errors by 90%.",
    stack: ["Flutter", "Firebase", "ML Kit", "Face Recognition"],
    live: "https://play.google.com/store/apps/details?id=com.redruby.zigmaworkpro",
  },
  {
    tag: "Mobile",
    title: "Manpower",
    desc: "Real-time cross-platform worker booking app with FCM notifications and live chat.",
    stack: ["Flutter", "Firebase", "FCM", "Geolocation"],
    live: "https://play.google.com/store/apps/details?id=com.manpower.manpower2024",
  },
   {
    tag: "Public Portal",
    title: "Kalaimagalsabha.in",
    desc: "Developed a responsive web portal for the Tamil Nadu Government Registration Department, enabling document management, citizen service requests, and public announcements using modern frontend technologies",
    stack: ["Next.js", "React.js", "REST API", "SEO"],
    live: "https://kalaimagalsabha.in",
  },
    {
    tag: "VMS",
    title: "Redruby VMS- Venue Management System",
    desc: "Developed a Flutter-based mobile application for venue booking, event scheduling, and facility management,improving operational efficiency and streamlining administrative workflows.",
     stack: ["Flutter", "Firebase", "REST Api" ,"FCM"],
    live: "https://play.google.com/store/apps/details?id=com.vms.vmsapp&hl=en_IN",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Selected work"
          title="Products people actually use."
          description="A snapshot of recent shipping work — from e-commerce platforms to ML-powered mobile apps."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ tag, title, desc, stack, live, index }: typeof projects[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative glass rounded-3xl p-7 md:p-9 h-full group hover:border-gold/30 transition-colors overflow-hidden"
      >
        <div
          className="absolute -top-32 -right-20 h-60 w-60 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.13 85 / 0.6), transparent 70%)" }}
        />
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] glass border border-electric/30 text-electric">
              {tag}
            </span>
            <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
          </div>

          <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight">{title}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-gold/30 text-gold/90"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors"
              >
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {/* <span className="h-4 w-px bg-white/10" /> */}
            {/* <button className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Case Study <ArrowRight className="h-4 w-4" />
            </button> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
