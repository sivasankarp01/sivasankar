import { motion } from "framer-motion";

import {
  Code2,
  Smartphone,
  Palette,
  Layers,
  Cloud,
  Network,
  Database,
  FlaskConical,
  Workflow,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";

type Cell = { icon: React.ReactNode; title: string; tags: string[]; wide?: boolean };

const cells: Cell[] = [
  {
    icon: <Palette />,
    title: "UI / UX",
    tags: [
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Figma",
      "Photoshop",
      "Adobe XD",
    ],
    wide: true,
  },
  {
    icon: <Code2 />,
    title: "Frontend",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite"
    ],
    wide: true,
  },
  {
    icon: <Smartphone />,
    title: "Mobile",
    tags: [
      "Flutter",
      "React Native",
      "Dart",
      "Firebase",
      "FCM",
      "Expo"
    ],
    wide: true,
  },
  
  {
    icon: <Layers />,
    title: "State Management",
    tags: [
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "BloC",
      "Provider",
      "GetX"
    ],
    wide: true,
  },
  {
    icon: <Cloud />,
    title: "Cloud & DevOps",
    tags: [
      "AWS EC2",
      "Docker",
      "Nginx",
      "PM2",
      "CI/CD",
      "GitHub Actions"
    ],
  },
  {
    icon: <Network />,
    title: "Backend & APIs",
    tags: [
      "Node.js",
      "Django",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "JWT"
    ],
  },
  {
    icon: <Database />,
    title: "Databases",
    tags: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Firestore"
    ],
  },
  {
    icon: <FlaskConical />,
    title: "Testing & QA",
    tags: [
      "Jest",
      "RTL",
      "Widget Testing",
      "API Testing",
      "Debugging"
    ],
  },
  {
    icon: <Workflow />,
    title: "Architecture",
    tags: [
      "Clean Architecture",
      "Agile",
      "Scrum",
      "SDLC",
      "Performance",
      "Code Splitting"
    ],
    wide: true,
  },
  {
    icon: <Sparkles />,
    title: "AI & Productivity",
    tags: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Prompt Engineering",
      "Vibe Coding"
    ],
  },
  {
    icon: <Wrench />,
    title: "Developer Tools",
    tags: [
      "Git",
      "Postman",
      "VS Code",
      "Android Studio",
      "Xcode",
      "TestFlight"
    ],
    // wide: true,
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Toolkit" title="Built for scale, designed for craft." />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">
          {cells.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group glass rounded-2xl p-6 flex flex-col justify-between hover:border-gold/30 hover:-translate-y-1 hover:glow-gold transition-all duration-500 ${c.wide ? "md:col-span-2" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl glass flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{c.icon}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  0{cells.indexOf(c) + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-gold mb-3">{c.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
