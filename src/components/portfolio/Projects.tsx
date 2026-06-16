import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { SectionTitle } from "./SectionTitle";

const projects = [
  {
    tag: "E-Commerce",
    title: "Bazaario",
    desc: "Multi-tenant e-commerce platform enabling Shopify-style store creation, custom domains, affiliate marketing, and AWS-powered scalable deployments.",
    stack: ["Next.js", "Node.js", "AWS", "REST APIs", "CI/CD"],
    live: "https://bazaario.io",
  },
  {
    tag: "FinTech",
    title: "Tezcai",
    desc: "Crypto trading and analytics platform with live market data, TradingView integration, automated trading bots, and real-time portfolio tracking.",
    stack: ["Next.js", "WebSockets", "Binance API", "OKX API", "TradingView"],
    live: "https://tezcai.com",
  },
  {
    tag: "HRMS",
    title: "Zigma Work Pro",
    desc: "Mobile workforce management system with face recognition, geo-fenced attendance, leave management, payroll, and Odoo integration.",
    stack: ["Flutter", "Firebase", "ML Kit", "Odoo API"],
    live: "https://play.google.com/store/apps/details?id=com.redruby.zigmaworkpro",
  },
  {
    tag: "Marketplace",
    title: "Manpower",
    desc: "Location-based worker booking platform with real-time chat, booking management, push notifications, and geolocation services.",
    stack: ["Flutter", "Firebase", "FCM", "Geolocation"],
    live: "https://play.google.com/store/apps/details?id=com.manpower.manpower2024",
  },
  {
    tag: "Government",
    title: "Kalaimagalsabha",
    desc: "Government public services portal featuring document management, citizen workflows, authentication, verification processes, and digital record access.",
    stack: ["React.js", "Python", "REST APIs", "PDF Viewer"],
    live: "https://kalaimagalsabha.in",
  },
  {
    tag: "Venue Management",
    title: "Redruby VMS",
    desc: "Venue booking and facility management platform supporting event scheduling, audit workflows, PDF reporting, and e-signature approvals.",
    stack: ["Flutter", "REST APIs", "PDF Generation", "FCM"],
    live: "https://play.google.com/store/apps/details?id=com.vms.vmsapp&hl=en_IN",
  },
  {
    tag: "AI Platform",
    title: "Auvira Assistant",
    desc: "Built an AI-driven operations platform integrating calls, WhatsApp, SMS, email, scheduling, payments, analytics, and enterprise workflows into a unified automation system.",
    stack: ["Next.js", "AI", "REST APIs", "Automation", "Analytics"],
    live: "https://auvira.io",
  },
  {
    tag: "Trading Automation",
    title: "Namaio",
    desc: "Smart Forex trading assistant enabling automated trade execution, broker integration, risk-controlled strategies, and real-time portfolio monitoring.",
    stack: ["Next.js", "REST APIs", "Trading APIs", "Automation", "Analytics"],
    live: "https://namaio.com",
  },
  {
    tag: "HRMS",
    title: "Face Tag AMS",
    desc: "Face recognition-based attendance management system for students, employees, and workforce tracking with real-time attendance validation and reporting.",
    stack: ["Flutter", "Firebase", "ML Kit", "Face Recognition", "REST APIs"],
    live: "https://play.google.com/store/apps/details?id=com.redruby.facetag",
  },
  {
    tag: "Business Website",
    title: "Kalixi",
    desc: "Modern digital agency website showcasing mobile app development, web solutions, and digital marketing services with a responsive and conversion-focused user experience.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    live: "https://kalixi.lovable.app",
  }
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
            <span className="font-mono text-xs text-muted-foreground">{index+1 !==10 ? 0 :""}{index + 1}</span>
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
