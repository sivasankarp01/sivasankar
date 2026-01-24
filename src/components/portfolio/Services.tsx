import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Globe, 
  Smartphone, 
  LayoutDashboard, 
  Link2, 
  Zap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Building modern, responsive web applications with React.js and Next.js. From landing pages to complex SaaS platforms, I deliver scalable solutions.",
    features: ["React.js & Next.js", "TypeScript", "Tailwind CSS", "SEO Optimized"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using Flutter that feel native on both iOS and Android. Beautiful UI, smooth animations, and great performance.",
    features: ["Flutter & Dart", "iOS & Android", "Native Performance", "App Store Ready"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Admin Panels",
    description:
      "Data-rich dashboards and admin interfaces with interactive charts, real-time updates, and intuitive user management features.",
    features: ["Data Visualization", "Real-time Updates", "Role-based Access", "Custom Reports"],
  },
  {
    icon: Link2,
    title: "API Integration",
    description:
      "Seamless integration with third-party APIs and services. REST APIs, WebSockets, and Firebase for real-time data synchronization.",
    features: ["REST APIs", "WebSockets", "Firebase", "Third-party Services"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing existing applications for speed and efficiency. Code splitting, lazy loading, caching strategies, and bundle optimization.",
    features: ["Load Time Optimization", "Code Splitting", "Bundle Analysis", "Core Web Vitals"],
  },
];

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What I Can <span className="text-gradient">Do For You</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your digital vision to life
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-primary hover:gap-3 gap-2 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
