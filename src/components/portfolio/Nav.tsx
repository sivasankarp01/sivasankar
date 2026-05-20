import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4">
      <nav
        className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong shadow-2xl" : "glass"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 px-3 py-1.5 rounded-full">
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="font-display font-bold text-sm tracking-wide">SP</span>
        </a>
        <span className="h-5 w-px bg-white/10 mx-1" />
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="hidden sm:inline-block px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 px-4 py-1.5 rounded-full bg-gold text-[#050A18] text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
