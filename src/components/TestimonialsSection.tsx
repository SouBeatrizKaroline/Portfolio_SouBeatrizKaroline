import { TESTIMONIALS } from '@/data/portfolio-data'
import { useInView } from '@/hooks/use-in-view'
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6 bg-[#121218] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#ffd54f] mb-2">
            Recomendações
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
            O que colegas, mentores e pessoas com quem trabalhei dizem
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Recomendações públicas recebidas ao longo da minha trajetória em hackathons, projetos,
            comunidades e iniciativas de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.id}
              className={`p-6 rounded-2xl bg-[#1e1e2d] border border-white/10 hover:border-[#ffd54f]/40 transition-all duration-500 flex flex-col justify-between group shadow-lg hover:shadow-xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <Quote className="w-8 h-8 text-[#7b1fa2] mb-4 opacity-80" />
                <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-sm font-bold text-white group-hover:text-[#ffd54f] transition-colors">
                  {t.name}
                </div>
                <div className="text-xs text-slate-400 font-light mt-0.5">{t.role}</div>
                <div className="text-xs text-[#ff8a65] font-medium mt-1">{t.context}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
