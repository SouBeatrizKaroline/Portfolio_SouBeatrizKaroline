import { SEVEN_LIVES } from '@/data/portfolio-data'
import { useInView } from '@/hooks/use-in-view'
import { Sparkles } from 'lucide-react'

export function SevenLivesSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="sete-vidas" className="py-24 px-4 sm:px-6 bg-[#161622] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7b1fa2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd54f]/10 text-[#ffd54f] text-xs font-bold mb-3 border border-[#ffd54f]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Versatilidade & Competências</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
            Minhas Sete Vidas
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Como um felino curioso, explorei diferentes áreas do conhecimento para construir um
            perfil verdadeiramente integrador.
          </p>
        </div>

        {/* 7 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SEVEN_LIVES.map((life, index) => (
            <div
              key={life.id}
              className={`p-6 rounded-2xl bg-[#1e1e2d] border border-white/10 hover:border-[#ffd54f]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#7b1fa2]/20 flex flex-col justify-between group ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    {life.emoji}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    0{life.id} / 07
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ffd54f] transition-colors">
                  {life.title}
                </h3>
                <h4 className="text-xs font-medium text-[#ff8a65] mb-3">{life.subtitle}</h4>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {life.description}
                </p>
              </div>

              {/* Tag List */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {life.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#121218] text-slate-300 border border-white/10 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
