import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github, ShoppingCart, LineChart, Users, Fingerprint, Globe, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bazaario.io",
    subtitle: "E-Commerce Platform",
    description:
      "A production-ready e-commerce platform with automated CI/CD deployments, featuring modern UX patterns, payment integration, and scalable architecture.",
    icon: ShoppingCart,
    technologies: ["Next.js", "AWS EC2", "GitHub Actions", "Nginx", "PM2"],
    features: [
      "Automated CI/CD pipeline with GitHub Actions",
      "Deployed on AWS EC2 with Nginx reverse proxy",
      "Process management with PM2 for zero-downtime",
      "Responsive design with optimized performance",
    ],
    demoUrl: "https://bazaario.io",
    codeUrl: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tezcai",
    subtitle: "Crypto Analytics Dashboard",
    description:
      "Real-time cryptocurrency analytics dashboard with interactive charts, live price updates, and comprehensive market analysis tools.",
    icon: LineChart,
    technologies: ["Next.js", "REST APIs", "Recharts", "SEO Optimized"],
    features: [
      "Real-time cryptocurrency price tracking",
      "Interactive data visualization with charts",
      "SEO-optimized for search visibility",
      "Responsive dashboard interface",
    ],
    demoUrl: "https://tezcai.com",
    codeUrl: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "ManPower",
    subtitle: "Employee Booking App",
    description:
      "Full-featured mobile application for employee booking and management with real-time messaging, push notifications, and seamless scheduling.",
    icon: Users,
    technologies: ["Flutter", "Firebase", "Push Notifications", "Real-time Chat"],
    features: [
      "Real-time booking management system",
      "Integrated chat with Firebase messaging",
      "Push notification for instant updates",
      "Cross-platform iOS and Android support",
    ],
    demoUrl: "https://app.deoltechnify.com/",
    codeUrl: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "HR & Attendance System",
    subtitle: "Enterprise App with Face Recognition",
    description:
      "Advanced HR management system featuring biometric attendance tracking with face recognition powered by Google ML Kit.",
    icon: Fingerprint,
    technologies: ["Flutter", "Google ML Kit", "Face Recognition", "Firebase"],
    features: [
      "Face recognition for secure attendance",
      "Powered by Google ML Kit for accuracy",
      "Employee management dashboard",
      "Detailed attendance reporting",
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.redruby.zigmaworkpro",
    codeUrl: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Kalaimagalsabha Portal",
    subtitle: "Tamil Nadu Government Public Services Platform",
    description:
      "Responsive web portal developed for the Tamil Nadu Government Registration Department to manage documents, citizen service requests, and public announcements.",
    icon: Globe,
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    features: [
      "Citizen service request and form submission system",
      "Government document management portal",
      "Event and public announcement management",
      "Optimized UI improving accessibility and engagement",
      "Digital workflow for document submission and services",
    ],
    demoUrl: "https://kalaimagalsabha.in",
    codeUrl: "#",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Redruby VMS",
    subtitle: "Venue Management & Booking System",
    description:
      "Flutter-based mobile application designed to streamline venue booking, event scheduling, and facility management for organizations.",
    icon: CalendarCheck,
    technologies: ["Flutter", "Dart", "REST API", "Mobile App"],
    features: [
      "Multi-role authentication (Admin, Auditor, Staff)",
      "Venue booking and scheduling management",
      "Center auditing and report submission modules",
      "Real-time booking updates and scheduling",
      "REST API integration for data management",
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.vms.vmsapp&hl=en_IN",
    codeUrl: "#",
    color: "from-purple-500 to-pink-500",
  }
];

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="projects" className="py-24">
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
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in web and mobile development
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group glass-card rounded-2xl overflow-hidden hover-lift"
              >
                {/* Project header with gradient */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-end relative overflow-hidden`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />

                  {/* Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80">{project.subtitle}</p>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    {/* <Button asChild variant="outline" size="sm">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
