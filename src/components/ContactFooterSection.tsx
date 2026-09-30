import { Linkedin, Github, Instagram, Mail, MessageCircle, Sparkles } from 'lucide-react'
import { CONTACT_LINKS } from '@/data/portfolio-data'

interface ContactFooterSectionProps {
  onTriggerCat: () => void
}

export function ContactFooterSection({ onTriggerCat }: ContactFooterSectionProps) {
  return (
    <footer
      id="contato"
      className="bg-[#0b0b10] text-white pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-[#7b1fa2]/20 via-[#3f51b5]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#1e1e2d] to-[#121218] border border-white/10 shadow-2xl mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffd54f]/10 text-[#ffd54f] text-xs font-bold mb-4 border border-[#ffd54f]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vamos Construir Algo Incrível?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-4 text-white">
            Continuo Explorando Novos Territórios
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Seja para desenvolvimento de projetos, consultoria de UX/Saúde Digital, mentoria ou
            palestras, estou sempre aberta a novas conexões.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={CONTACT_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7b1fa2] to-[#3f51b5] text-white font-bold text-sm shadow-lg hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>Conectar no LinkedIn</span>
            </a>

            <a
              href={CONTACT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#121218] hover:bg-white/10 text-slate-200 font-bold text-sm border border-white/10 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={CONTACT_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#121218] hover:bg-white/10 text-slate-200 font-bold text-sm border border-white/10 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#e040fb]" />
              <span>Instagram</span>
            </a>

            <a
              href={`mailto:${CONTACT_LINKS.email}`}
              className="px-6 py-3.5 rounded-xl bg-[#ff8a65] text-[#121218] font-bold text-sm hover:bg-[#ff8a65]/90 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar E-mail</span>
            </a>

            <a
              href={CONTACT_LINKS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#121218] hover:bg-white/10 text-slate-200 font-bold text-sm border border-white/10 hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>© {new Date().getFullYear()} Beatriz Karoline Cordeiro da Silva</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-300">
              Desenvolvido com tecnologia, criatividade e a supervisão do Batman Mister Barbinha 🐈
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onTriggerCat}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#ffd54f]/20 text-[#ffd54f] transition-all flex items-center gap-1.5 text-[11px] font-mono border border-white/10"
              title="Clique para uma surpresa felina!"
            >
              <span>🐾 Surpresa</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

