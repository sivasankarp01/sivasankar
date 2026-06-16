import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const items = [
  {
    company: "Saadah Investment LLC (Sakab Group)",
    role: "Frontend Developer",
    location: "Abu Dhabi, UAE",
    period: "June 2025 – Present",
    current: true,
    points: [
      "Led the development of e-commerce platforms and AI-powered trading solutions using Next.js, Node.js, and Django, improving application performance and user engagement by 25%.",
      "Integrated Amazon Seller Central SP-API and automated product listing workflows, reducing manual catalog management effort by 60%.",
      "Built product data extraction pipelines to streamline inventory management and marketplace operations.",
      "Developed AI-powered chatbots, affiliate marketing workflows, and order tracking systems to enhance customer engagement and operational efficiency.",
      "Created Shopify-style storefront experiences, increasing customer interaction efficiency by 35%.",
      "Implemented SEO optimizations and UI/UX enhancements, contributing to a 30% increase in organic traffic.",
      "Managed Meta Ads campaigns and AWS-hosted deployments to improve platform visibility, scalability, and reliability."
    ],
  },
  {
    company: "The Zigma Technologies India Pvt Ltd",
    role: "Project Engineer – Frontend Developer",
    location: "Chennai, India",
    period: "July 2023 – May 2025",
    points: [
      "Delivered 10+ enterprise and client-facing applications across ERP, HRMS, and Document Management Systems using React.js, Next.js, Flutter, and React Native.",
      "Collaborated with stakeholders to gather requirements and translate business needs into scalable technical solutions.",
      "Developed dashboards, data collection workflows, PDF reporting systems, and automated invoice generation modules.",
      "Engineered advanced features including face recognition, bulk data upload, and interactive data visualization.",
      "Leveraged Grafana for server monitoring, performance tracking, and operational insights.",
      "Managed App Store and Google Play Store release processes, including testing, deployment, and production rollouts.",
      "Built and maintained responsive, high-performance applications focused on scalability, usability, and reliability."
    ],
  },
  {
    company: "CERP Software Solutions",
    role: "Mobile App Developer Intern",
    location: "Bengaluru, India",
    period: "July 2022 – March 2023",
    points: [
      "Developed and maintained a Flutter-based School Management Application serving 1,000+ users with attendance tracking, homework management, timetable scheduling, exam schedules, and notifications.",
      "Designed and implemented 15+ responsive Flutter UI screens, ensuring a seamless and consistent experience across Android devices.",
      "Implemented secure user authentication, real-time data management, and notification workflows to support academic and administrative operations.",
      "Managed end-to-end Google Play Store deployment, including Play Console setup, internal testing, app signing, and production releases.",
      "Delivered stable production releases with a 100% successful deployment record and streamlined app distribution process."
    ]
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Journey" title="Experience" />

        <div className="relative mt-20 pl-6 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />

          {items.map((it, i) => (
            <motion.div
              key={it.company}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-10 last:mb-0"
            >
              <span className={`absolute -left-[34px] md:-left-[44px] top-7 h-3 w-3 rounded-full ${it.current ? "bg-gold glow-gold" : "bg-white/30"}`} />
              <div
                className={`glass rounded-2xl p-6 md:p-8 relative ${it.current ? "ring-1 ring-gold/30" : ""}`}
              >
                {it.current && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gold text-[#050A18] font-mono text-[10px] font-bold tracking-widest">
                    CURRENT
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl glass flex items-center justify-center text-gold shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl md:text-2xl">{it.company}</h3>
                    <p className="text-foreground/80 mt-0.5">{it.role}</p>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {it.location} · {it.period}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm md:text-base text-foreground/85">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-gold mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
