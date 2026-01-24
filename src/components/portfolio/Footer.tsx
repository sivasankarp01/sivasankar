import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and name */}
            <div className="text-center md:text-left">
              <a href="#" className="text-2xl font-bold text-gradient">
                SP
              </a>
              <p className="text-muted-foreground text-sm mt-2">
                Frontend & Mobile Application Developer
              </p>
            </div>

            {/* Quick links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            {/* <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sivasankar P. All rights reserved.
            </p> */}
            <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />  by Sivasankar P
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
