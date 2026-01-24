import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Saadah Investment LLC",
    location: "Abu Dhabi, UAE",
    period: "06/2025 – Present",
    type: "Full-time",
    description: [
      "Developing and maintaining enterprise web applications using React.js, Next.js, and Flutter",
      "Building modular component libraries for consistent UI across multiple projects",
      "Implementing role-based authentication and advanced access control systems",
      "Collaborating with cross-functional teams to deliver impactful business solutions",
    ],
    technologies: ["React.js", "Next.js", "Flutter", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Engineer",
    company: "The Zigma Technologies",
    location: "Chennai, India",
    period: "07/2023 – 05/2025",
    type: "Full-time",
    description: [
      "Transformed Figma designs into pixel-perfect, responsive UI implementations",
      "Managed 5+ mobile applications through complete release lifecycles",
      "Successfully deployed applications to App Store and Google Play Store",
      "Led development of complex features including real-time data synchronization",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Git"],
  },
  {
    title: "Mobile App Developer Intern",
    company: "CERP Software Solutions",
    location: "Bangalore, India",
    period: "07/2022 – 03/2023",
    type: "Internship",
    description: [
      "Developed mobile application UIs using Flutter framework",
      "Participated in code reviews and quality assurance testing",
      "Fixed critical bugs and improved application performance",
      "Collaborated with senior developers on feature implementations",
    ],
    technologies: ["Flutter", "Dart", "Mobile UI", "QA Testing"],
  },
];

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              My Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building impactful solutions across startups and enterprises
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-1/2"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 ${
                    index % 2 === 0
                      ? "left-0 md:left-auto md:right-0 md:translate-x-1/2 -translate-x-1/2"
                      : "left-0 -translate-x-1/2"
                  } md:left-1/2 md:-translate-x-1/2`}
                />

                {/* Content card */}
                <div
                  className={`glass-card rounded-2xl p-6 ml-8 md:ml-0 hover-lift ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground flex-wrap md:justify-end">
                      {index % 2 !== 0 && <div className="hidden md:block" />}
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-border">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>

                  {/* Description */}
                  <ul
                    className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 ${
                            index % 2 === 0 ? "md:order-2" : ""
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
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
