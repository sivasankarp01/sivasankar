import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import profileImage from "/src/assets/profile.png";

const ROTATING = [
  "Scalable Apps",
  "Pixel-Perfect UI",
  "AWS Deployments",
  "20+ Products",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % ROTATING.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center pt-28 px-6 pb-6"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Work • Dubai, UAE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                mt-6
                font-bold
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                leading-none
                lg:whitespace-nowrap
              "
            >
              SIVASANKAR{" "}
              <span className="text-gold">
               {" "} PAZHANI
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-xl md:text-2xl font-semibold"
            >
              Software Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-sm uppercase tracking-[0.25em] text-muted-foreground"
            >
              React.js · Next.js · Flutter · Node.js · Python
            </motion.p>

            {/* Rotating Text */}
            <div className="mt-8 flex justify-center lg:justify-start items-center gap-2 text-lg">
              <span>Crafting</span>

              <div className="relative w-[220px] h-8">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING[idx]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 absolute inset-0 text-gold font-semibold"
                  >
                    {ROTATING[idx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Software Developer specializing in React.js,
              Next.js, Flutter, AWS, and scalable web & mobile
              applications with a focus on performance,
              accessibility, and user experience.
            </motion.p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gold text-gold hover:bg-gold hover:text-black transition"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="/Sivasankar_Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-black font-medium"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-110" />

              <img
                src={profileImage}
                alt="Sivasankar P"
                className="
                  relative
                  w-64
                  h-64
                  sm:w-80
                  sm:h-80
                  md:w-[420px]
                  md:h-[420px]
                  rounded-full
                  object-cover
                  border-4
                  border-gold
                  shadow-2xl
                "
              />

              <div className="absolute -bottom-4 -left-4 bg-background border border-white/10 rounded-2xl px-5 py-3">
                <h4 className="text-gold font-bold text-lg">
                  3+
                </h4>
                <p className="text-xs text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div className="absolute top-10 -right-6 bg-background border border-white/10 rounded-2xl px-5 py-3">
                <h4 className="text-gold font-bold text-lg">
                  20+
                </h4>
                <p className="text-xs text-muted-foreground">
                  Projects Built
                </p>
              </div>
            </div>
          </motion.div>
        </div>



      </section>
    </>
  );
}