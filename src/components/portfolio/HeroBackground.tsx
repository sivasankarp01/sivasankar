export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* radial vignettes */}
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.4 0.15 240 / 0.6), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 85 / 0.4), transparent 70%)" }}
      />

      {/* low-poly geometric shapes */}
      <div className="absolute top-[15%] right-[12%] animate-float-slow" style={{ animationDelay: "0s" }}>
        <Icosahedron size={140} />
      </div>
      <div className="absolute bottom-[20%] left-[8%] animate-float-slow" style={{ animationDelay: "-6s" }}>
        <Icosahedron size={90} />
      </div>
      <div className="absolute top-[55%] right-[28%] animate-float-slow" style={{ animationDelay: "-12s" }}>
        <Icosahedron size={60} />
      </div>

      {/* dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="noise" />
    </div>
  );
}

function Icosahedron({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className="animate-spin-slow opacity-60">
      <defs>
        <linearGradient id="ico-g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#ico-g)" strokeWidth="0.8">
        <polygon points="100,20 180,70 150,170 50,170 20,70" />
        <polygon points="100,20 180,70 100,110" />
        <polygon points="100,20 100,110 20,70" />
        <polygon points="180,70 150,170 100,110" />
        <polygon points="20,70 50,170 100,110" />
        <polygon points="50,170 150,170 100,110" />
        <circle cx="100" cy="100" r="80" stroke="#4FC3F7" strokeOpacity="0.15" />
      </g>
    </svg>
  );
}
