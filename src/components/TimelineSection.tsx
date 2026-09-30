import { TIMELINE_EVENTS, TIMELINE_HIGHLIGHT } from '@/data/portfolio-data'
import { useInView } from '@/hooks/use-in-view'
import { Activity, Code, Gamepad, Sparkles, Building2, Plane, Rocket } from 'lucide-react'

export function TimelineSection() {
  const { ref, isInView } = useInView()

  const getIcon = (name: string) => {
    const props = { className: 'w-5 h-5' }
    switch (name) {
      case 'Building2':
        return <Building2 {...props} className="w-5 h-5 text-[#ff8a65]" />
      case 'Activity':
        return <Activity {...props} className="w-5 h-5 text-[#ff8a65]" />
      case 'Code':
        return <Code {...props} className="w-5 h-5 text-[#ffd54f]" />
      case 'Gamepad':
        return <Gamepad {...props} className="w-5 h-5 text-[#7b1fa2]" />
      case 'Plane':
        return <Plane {...props} className="w-5 h-5 text-[#3f51b5]" />
      case 'Rocket':
        return <Rocket {...props} className="w-5 h-5 text-[#ff8a65]" />
      default:
        return <Sparkles {...props} className="w-5 h-5 text-[#3f51b5]" />
    }
  }

  return (
    <section id="historia" className="py-24 px-4 sm:px-6 bg-[#121218] relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#ff8a65] mb-2">
            Evolução Contínua
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
            Minha História
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            "Minha trajetória nunca foi uma linha reta. Cada etapa construiu uma nova perspectiva:
            da engenharia e construção de soluções físicas, passando pelo cuidado humano na saúde,
            até chegar à tecnologia, inovação e criação de produtos digitais com impacto."
          </p>
        </div>

        <div className="relative border-l-2 border-[#7b1fa2]/40 ml-4 sm:mx-auto sm:max-w-3xl space-y-10 pl-6 sm:pl-8">
          {TIMELINE_EVENTS.map((event, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-10 h-10 rounded-full bg-[#1e1e2d] border-2 border-[#ffd54f] flex items-center justify-center shadow-lg shadow-[#ffd54f]/10">
                {getIcon(event.icon)}
              </div>

              <div className="bg-[#1e1e2d]/90 p-6 rounded-2xl border border-white/10 hover:border-[#ffd54f]/40 transition-all hover:shadow-xl group">
                <div className="inline-block px-3 py-1 rounded-full bg-[#7b1fa2]/30 text-[#ffd54f] text-xs font-bold mb-3 border border-[#7b1fa2]/50">
                  {event.year}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#ffd54f] transition-colors">
                  {event.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div
          className={`mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#7b1fa2]/20 via-[#1e1e2d] to-[#3f51b5]/20 border border-[#ffd54f]/20 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed italic">
            "{TIMELINE_HIGHLIGHT}"
          </p>
        </div>
      </div>
    </section>
  )
}
