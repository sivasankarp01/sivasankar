import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, Palette } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "5+", label: "Mobile Apps" },
  { number: "10+", label: "Projects Delivered" },
  { number: "100%", label: "Client Satisfaction" },
];

const highlights = [
  {
    icon: Code2,
    title: "Scalable UI Development",
    description: "Building component-based architectures that scale with your business needs",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing load times and ensuring smooth 60fps animations across devices",
  },
  {
    icon: Palette,
    title: "Pixel-Perfect Design",
    description: "Translating Figma designs into flawless, responsive implementations",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Apps",
    description: "Delivering native-quality experiences on iOS, Android, and web",
  },
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-secondary/30">
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
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Passionate Developer, <span className="text-gradient">Problem Solver</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a Frontend & Mobile Application Developer based in Abu Dhabi, UAE, 
              with a passion for creating exceptional digital experiences.
            </p>
          </motion.div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over <span className="text-foreground font-medium">3 years of professional experience</span>, 
                I specialize in building high-performance web applications and mobile apps that users love. 
                My expertise spans the full frontend ecosystem, from React.js and Next.js to Flutter for 
                cross-platform mobile development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe in writing <span className="text-foreground font-medium">clean, maintainable code</span> and 
                following best practices for scalable architecture. Whether it's implementing complex UI interactions, 
                optimizing performance, or translating Figma designs into pixel-perfect interfaces, I'm committed 
                to delivering excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at <span className="text-primary font-medium">Saadah Investment LLC</span> in Abu Dhabi, 
                where I build modern web applications with React.js, Next.js, and Flutter while collaborating 
                with cross-functional teams to deliver impactful solutions.
              </p>
            </motion.div>

            {/* Right - Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center hover-lift"
                >
                  <span className="text-4xl md:text-5xl font-bold text-gradient">
                    {stat.number}
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
