import { ACHIEVEMENT_STATS } from '@/data/portfolio-data'
import { useInView } from '@/hooks/use-in-view'
import { Trophy } from 'lucide-react'

export function AchievementsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="conquistas" className="py-20 px-4 sm:px-6 bg-[#161622] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd54f]/10 text-[#ffd54f] text-xs font-bold mb-3 border border-[#ffd54f]/30">
            <Trophy className="w-3.5 h-3.5" />
            <span>Conquistas em Números</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
            Conquistas em Números
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ACHIEVEMENT_STATS.map((stat, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-[#1e1e2d] border border-white/10 hover:border-[#ffd54f]/50 transition-all duration-500 hover:-translate-y-1 text-center group ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {stat.emoji}
              </div>
              <div className="text-2xl font-bold text-[#ffd54f] mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-white mb-2">{stat.label}</div>
              <p className="text-[10px] text-slate-400 leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
