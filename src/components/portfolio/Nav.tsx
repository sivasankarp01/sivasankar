import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const initialTheme: Theme = storedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(nextTheme);
  };

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
        <span className="h-5 w-px bg-foreground/10 mx-1" />
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="hidden sm:inline-block px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          className="ml-1 grid h-8 w-8 place-items-center rounded-full border border-foreground/10 bg-background/40 text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
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
