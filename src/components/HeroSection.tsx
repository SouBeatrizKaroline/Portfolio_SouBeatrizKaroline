import { ArrowDown, Award, Sparkles, Send } from 'lucide-react'
import { HERO_STATS } from '@/data/portfolio-data'
import { GeometricCatHero } from './GeometricCatHero'
import { CanvasParticles } from './CanvasParticles'
import { scrollToSection } from '@/lib/scroll-utils'

export function HeroSection() {
  const scrollTo = (id: string) => {
    scrollToSection(id)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-10 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#121218] via-[#1a237e]/40 to-[#121218]"
    >
      <CanvasParticles />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#7b1fa2]/30 to-[#ff8a65]/20 border border-[#ffd54f]/30 text-[#ffd54f] text-xs font-semibold mb-6 backdrop-blur-md animate-fade-in-down">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio Interativo • Recife, PE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.15] tracking-tight mb-6">
            Olá, eu sou
            <br />
            <span className="bg-gradient-to-r from-[#ffd54f] via-[#ff8a65] to-[#7b1fa2] bg-clip-text text-transparent">
              Beatriz Karoline
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
            Sou uma profissional multidisciplinar e conecto{' '}
            <strong className="text-white font-semibold">tecnologia</strong>,{' '}
            <strong className="text-[#ff8a65] font-semibold">saúde</strong> e{' '}
            <strong className="text-[#ffd54f] font-semibold">criatividade</strong> para transformar
            problemas reais em soluções digitais de alto impacto.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={() => scrollTo('projetos')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7b1fa2] via-[#3f51b5] to-[#1a237e] text-white font-bold text-sm shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] transition-all flex items-center gap-2 group border border-white/10"
            >
              <span>Ver meu portfólio</span>
              <Award className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>

            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contato')
              }}
              className="px-6 py-3.5 rounded-xl bg-[#1e1e2d] hover:bg-white/10 text-slate-200 font-semibold text-sm border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#ff8a65]" />
              <span>Entrar em contato</span>
            </a>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {HERO_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#1e1e2d]/80 border border-white/10 backdrop-blur-md hover:border-[#ffd54f]/40 transition-colors group"
              >
                <div className="text-2xl font-display font-extrabold text-[#ffd54f] group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1 leading-tight">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Geometric Cat Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <GeometricCatHero />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollTo('historia')}
        className="relative z-10 mt-12 shrink-0 text-slate-400 hover:text-[#ffd54f] transition-colors p-2 rounded-full animate-bounce flex flex-col items-center gap-1 text-[10px] uppercase font-bold tracking-widest"
        aria-label="Rolar para baixo"
      >
        <span>Minha Trajetória</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  )
}

