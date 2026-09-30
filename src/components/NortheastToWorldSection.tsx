import { Globe, Compass, PawPrint } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'
import { scrollToSection } from '@/lib/scroll-utils'

export function NortheastToWorldSection() {
  const { ref, isInView } = useInView()

  const flags = [
    {
      country: 'Canadá',
      flag: '🇨🇦',
      note: 'Hack Frost NL 2.0',
      desc: '1º Lugar em competição internacional de inovação com foco em sustentabilidade, UX/UI e gamificação.',
    },
    {
      country: 'Estados Unidos',
      flag: '🇺🇸',
      note: 'NASA Space Apps Challenge 2024',
      desc: 'Global Nominee e Finalista Regional Barueri/SP, desenvolvendo soluções inspiradas em ciência e dados da NASA.',
    },
    {
      country: 'Inglaterra',
      flag: '🇬🇧',
      note: 'Competição Internacional',
      desc: 'Participação em competição internacional de tecnologia e inovação, colaborando em desafios globais de desenvolvimento de soluções digitais.',
    },
    {
      country: 'Índia',
      flag: '🇮🇳',
      note: 'Hackathon Internacional',
      desc: 'Participação em hackathon internacional de tecnologia e inovação, com desenvolvimento de soluções digitais e prototipação.',
    },
  ]

  return (
    <section id="nordeste" className="py-24 px-4 sm:px-6 bg-[#121218] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7b1fa2]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff8a65]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10" ref={ref}>
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff8a65]/10 text-[#ff8a65] text-xs font-bold mb-4 border border-[#ff8a65]/30 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Origem & Conexão Global</span>
        </div>

        <h2
          className={`text-3xl sm:text-4xl font-display font-extrabold text-white mb-4 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Do Nordeste para o Mundo ☀️
        </h2>

        <p
          className={`text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-12 font-light leading-relaxed transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          "Minha origem em Pernambuco, no Nordeste brasileiro, influenciou diretamente minha
          resiliência, criatividade e capacidade de transformar desafios complexos em soluções
          digitais com impacto."
        </p>

        {/* Stylized Globe SVG */}
        <div
          className={`relative mx-auto mb-12 transition-all duration-1000 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <svg
            viewBox="0 0 400 120"
            className="w-full max-w-2xl mx-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="60" r="50" stroke="rgba(255,213,79,0.2)" strokeWidth="1" />
            <circle cx="200" cy="60" r="38" stroke="rgba(123,31,162,0.15)" strokeWidth="1" />
            <ellipse
              cx="200"
              cy="60"
              rx="50"
              ry="18"
              stroke="rgba(255,138,101,0.12)"
              strokeWidth="1"
            />
            <ellipse
              cx="200"
              cy="60"
              rx="18"
              ry="50"
              stroke="rgba(63,81,181,0.12)"
              strokeWidth="1"
            />

            {/* Connecting dots */}
            {[
              { x: 80, y: 40 },
              { x: 160, y: 95 },
              { x: 240, y: 30 },
              { x: 320, y: 70 },
            ].map((dot, i) => (
              <g key={i}>
                <circle cx={dot.x} cy={dot.y} r="4" fill="#ffd54f" opacity="0.6" />
                <circle
                  cx={dot.x}
                  cy={dot.y}
                  r="8"
                  fill="none"
                  stroke="#ffd54f"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <line
                  x1={dot.x}
                  y1={dot.y}
                  x2="200"
                  y2="60"
                  stroke="rgba(255,213,79,0.15)"
                  strokeWidth="0.8"
                  strokeDasharray="3 3"
                />
              </g>
            ))}

            <circle cx="200" cy="60" r="3" fill="#ff8a65" />
            <text
              x="200"
              y="78"
              textAnchor="middle"
              fill="rgba(255,138,101,0.5)"
              fontSize="8"
              fontFamily="monospace"
            >
              PERNAMBUCO
            </text>
          </svg>
        </div>

        {/* Global Connection Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {flags.map((f, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-[#1e1e2d] border border-white/10 hover:border-[#ffd54f]/40 transition-all duration-500 text-center group hover:-translate-y-1 hover:shadow-xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 120 + 200}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {f.flag}
              </div>
              <div className="text-sm font-bold text-white mb-1">{f.country}</div>
              <div className="text-[10px] text-[#ff8a65] font-mono mb-2">{f.note}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed font-light">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Stylized Connection Block */}
        <div
          className={`p-6 rounded-2xl bg-gradient-to-r from-[#1e1e2d] via-[#7b1fa2]/20 to-[#1e1e2d] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Globe className="w-8 h-8 text-[#ffd54f]" />
              <PawPrint className="w-3 h-3 text-[#ff8a65] absolute -bottom-1 -right-1 opacity-60" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Ecossistema Sem Fronteiras</div>
              <div className="text-xs text-slate-300 font-light leading-relaxed">
                Da tecnologia desenvolvida em Pernambuco para desafios globais de inovação,
                conectando criatividade, impacto social e colaboração internacional.
              </div>
            </div>
          </div>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contato')
            }}
            className="px-5 py-2.5 rounded-xl bg-[#ffd54f] text-[#121218] font-bold text-xs hover:bg-[#ffd54f]/90 hover:scale-105 transition-all shrink-0 shadow-lg"
          >
            Conectar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
