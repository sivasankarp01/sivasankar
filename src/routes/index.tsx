import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // Basic SEO
      {
        title:
          "Sivasankar P | Software Developer | React, Next.js, Flutter Developer UAE",
      },
      {
        name: "description",
        content:
          "Software Developer based in Abu Dhabi, UAE with 3+ years of experience building scalable web and mobile applications using React.js, Next.js, Flutter, TypeScript, Node.js, AWS, and modern frontend technologies.",
      },
      {
        name: "keywords",
        content:
          "Sivasankar P, Frontend Developer UAE, React Developer Dubai, Next.js Developer UAE, Flutter Developer Abu Dhabi, Software Developer UAE, TypeScript Developer, Node.js Developer, React.js, Next.js, Flutter, AWS, Mobile App Developer, Web Developer",
      },
      {
        name: "author",
        content: "Sivasankar P",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
      },

      // Theme
      {
        name: "theme-color",
        content: "#0A1128",
      },

      // Open Graph
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content:
          "Sivasankar P | Software Developer | React, Next.js & Flutter",
      },
      {
        property: "og:description",
        content:
          "Experienced Software Developer specializing in React.js, Next.js, Flutter, TypeScript, AWS, and scalable application development.",
      },
      {
        property: "og:url",
        content: "https://sivasankar.vercel.app/",
      },
      {
        property: "og:site_name",
        content: "Sivasankar Portfolio",
      },
      {
        property: "og:image",
        content: "https://sivasankar.vercel.app/",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:locale",
        content: "en_US",
      },

      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Sivasankar P | Software Developer | React, Next.js & Flutter",
      },
      {
        name: "twitter:description",
        content:
          "3+ years building scalable web and mobile applications using React.js, Next.js, Flutter, TypeScript, AWS and Node.js.",
      },
      {
        name: "twitter:image",
        content: "https://yourdomain.com/og-image.jpg",
      },

      // Geo SEO
      {
        name: "geo.region",
        content: "AE-AZ",
      },
      {
        name: "geo.placename",
        content: "Abu Dhabi",
      },
      {
        name: "ICBM",
        content: "24.4539,54.3773",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://sivasankar.vercel.app/",
      },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
