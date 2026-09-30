import { Code, Dna, Gamepad2, MapPin, Sparkles } from 'lucide-react'

export function GeometricCatHero() {
  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
      {/* Glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3f51b5]/30 via-[#7b1fa2]/20 to-[#ff8a65]/20 blur-3xl animate-pulse" />

      {/* Floating Orbiting Badges */}
      <div className="absolute -top-2 left-6 p-3 rounded-2xl bg-[#121218]/80 border border-[#ffd54f]/30 backdrop-blur-md text-[#ffd54f] animate-float shadow-lg flex items-center gap-2 text-xs font-semibold">
        <Code className="w-4 h-4" />
        <span>Fullstack Tech</span>
      </div>

      <div className="absolute top-12 -right-4 p-3 rounded-2xl bg-[#121218]/80 border border-[#ff8a65]/30 backdrop-blur-md text-[#ff8a65] animate-float shadow-lg flex items-center gap-2 text-xs font-semibold [animation-delay:1.5s]">
        <Dna className="w-4 h-4" />
        <span>Saúde Digital</span>
      </div>

      <div className="absolute bottom-12 -left-6 p-3 rounded-2xl bg-[#121218]/80 border border-[#3f51b5]/30 backdrop-blur-md text-[#3f51b5] animate-float shadow-lg flex items-center gap-2 text-xs font-semibold [animation-delay:2.5s]">
        <Gamepad2 className="w-4 h-4 text-purple-400" />
        <span>Games & Gamificação</span>
      </div>

      <div className="absolute -bottom-2 right-8 p-3 rounded-2xl bg-[#121218]/80 border border-[#ffd54f]/30 backdrop-blur-md text-[#ffd54f] animate-float shadow-lg flex items-center gap-2 text-xs font-semibold [animation-delay:0.8s]">
        <MapPin className="w-4 h-4" />
        <span>Recife → Mundo</span>
      </div>

      {/* Central Geometric Cat SVG */}
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full drop-shadow-[0_0_25px_rgba(255,213,79,0.3)] transition-transform duration-500 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Polygon Face Lines */}
        <polygon
          points="150,50 90,110 150,160"
          stroke="#3f51b5"
          strokeWidth="2"
          fill="url(#catGrad1)"
          opacity="0.8"
        />
        <polygon
          points="150,50 210,110 150,160"
          stroke="#7b1fa2"
          strokeWidth="2"
          fill="url(#catGrad2)"
          opacity="0.8"
        />

        {/* Ears */}
        <polygon
          points="90,110 60,30 110,65"
          stroke="#ff8a65"
          strokeWidth="2"
          fill="#7b1fa2"
          opacity="0.6"
        />
        <polygon
          points="210,110 240,30 190,65"
          stroke="#ff8a65"
          strokeWidth="2"
          fill="#3f51b5"
          opacity="0.6"
        />

        {/* Eyes (Glowing Amber) */}
        <ellipse cx="115" cy="115" rx="10" ry="14" fill="#ffd54f" className="animate-pulse" />
        <ellipse cx="185" cy="115" rx="10" ry="14" fill="#ffd54f" className="animate-pulse" />
        <line
          x1="115"
          y1="105"
          x2="115"
          y2="125"
          stroke="#121218"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="185"
          y1="105"
          x2="185"
          y2="125"
          stroke="#121218"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Muzzle & Nose */}
        <polygon points="150,140 142,130 158,140" fill="#ff8a65" />
        <polygon
          points="150,140 120,175 150,210 180,175"
          stroke="#ffd54f"
          strokeWidth="2"
          fill="url(#catGrad3)"
          opacity="0.7"
        />

        {/* Whiskers */}
        <line x1="110" y1="145" x2="40" y2="135" stroke="#ffd54f" strokeWidth="1.5" opacity="0.7" />
        <line x1="110" y1="155" x2="45" y2="160" stroke="#ffd54f" strokeWidth="1.5" opacity="0.7" />
        <line
          x1="190"
          y1="145"
          x2="260"
          y2="135"
          stroke="#ffd54f"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <line
          x1="190"
          y1="155"
          x2="255"
          y2="160"
          stroke="#ffd54f"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Constellation Dots */}
        <circle cx="150" cy="50" r="4" fill="#ffd54f" />
        <circle cx="60" cy="30" r="4" fill="#ff8a65" />
        <circle cx="240" cy="30" r="4" fill="#ff8a65" />
        <circle cx="150" cy="210" r="4" fill="#3f51b5" />

        {/* Gradients */}
        <defs>
          <linearGradient
            id="catGrad1"
            x1="90"
            y1="50"
            x2="150"
            y2="160"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1a237e" stopOpacity="0.8" />
            <stop offset="1" stopColor="#7b1fa2" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient
            id="catGrad2"
            x1="150"
            y1="50"
            x2="210"
            y2="160"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7b1fa2" stopOpacity="0.8" />
            <stop offset="1" stopColor="#ff8a65" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient
            id="catGrad3"
            x1="120"
            y1="140"
            x2="180"
            y2="210"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff8a65" stopOpacity="0.6" />
            <stop offset="1" stopColor="#ffd54f" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute top-2 right-2 text-[#ffd54f] animate-ping opacity-60">
        <Sparkles className="w-5 h-5" />
      </div>
    </div>
  )
}
