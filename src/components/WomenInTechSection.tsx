import { Heart, Users, Sparkles, ShieldCheck } from 'lucide-react'

export function WomenInTechSection() {
  return (
    <section
      id="mulher-tech"
      className="py-24 px-4 sm:px-6 bg-gradient-to-r from-[#7b1fa2] via-[#3f51b5] to-[#1a237e] text-white relative overflow-hidden"
    >
      {/* Glow decorative spheres */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#ff8a65]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#ffd54f]/20 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffd54f] text-xs font-bold mb-4 backdrop-blur-md border border-white/20">
              <Heart className="w-3.5 h-3.5 fill-[#ffd54f]" />
              <span>Representatividade & Inclusão</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-6 leading-tight">
              Construindo tecnologia enquanto abro caminhos para mais mulheres ocuparem esses
              espaços.
            </h2>

            <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed mb-8">
              A presença feminina nos ecossistemas de tecnologia e inovação transforma a qualidade
              das soluções criadas. Como mentora e entusiasta, atuo ativamente incentivando a
              entrada de novas talentos em programação, UX e liderança técnica.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#ffd54f]">15+</div>
                <div className="text-xs text-slate-200 mt-0.5">Mulheres Inspiradas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#ffd54f]">100%</div>
                <div className="text-xs text-slate-200 mt-0.5">Compromisso Social</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#ffd54f]">Recife</div>
                <div className="text-xs text-slate-200 mt-0.5">Ponto de Partida</div>
              </div>
            </div>
          </div>

          {/* Feature Highlight Box */}
          <div className="lg:col-span-5 bg-[#121218]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#ffd54f]/20 text-[#ffd54f] shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Comunidades & Redes</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Participação em comunidades de tecnologia, palestras e grupos de estudo focados no
                  empoderamento feminino.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#ff8a65]/20 text-[#ff8a65] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Ideação Inclusiva</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Garantia de que a diversidade faça parte da concepção dos produtos desde os
                  primeiros protótipos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#3f51b5]/30 text-purple-300 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Liderança Ágil</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Facilitação de times ágeis promovendo ambientes seguros, colaborativos e
                  orientados a resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
