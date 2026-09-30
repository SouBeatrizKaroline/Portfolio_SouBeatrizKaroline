import { Project } from '@/data/portfolio-data'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { ExternalLink, Award, Tag } from 'lucide-react'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a1a24] text-white border border-white/10 max-w-2xl rounded-2xl p-6 overflow-y-auto max-h-[90vh]">
        {project && (
          <>
            <DialogHeader>
              <div className="inline-block px-3 py-1 rounded-full bg-[#7b1fa2]/30 text-[#ffd54f] text-xs font-bold mb-2 border border-[#7b1fa2]/40 w-fit">
                {project.category}
              </div>
              <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
              <DialogDescription className="text-slate-300 text-sm mt-1">
                {project.shortDesc}
              </DialogDescription>
            </DialogHeader>

            <div className="relative rounded-xl overflow-hidden my-4 border border-white/10 aspect-video">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = `${import.meta.env.BASE_URL}project-placeholder.svg` }} />
            </div>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#ffd54f]/10 border border-[#ffd54f]/30 text-[#ffd54f] text-xs font-bold mb-4">
              <Award className="w-4 h-4 shrink-0" />
              <span>{project.impact}</span>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Sobre o Projeto
              </h4>
              <p className="text-slate-200 text-sm leading-relaxed font-light">
                {project.fullDesc}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>Tecnologias Utilizadas</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#121218] text-[#ff8a65] text-xs font-mono font-medium border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.links.length > 0 && (
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Links do Projeto
                </h4>
                <div className="flex items-center flex-wrap gap-3">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd54f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a24] ${
                        idx === 0
                          ? 'bg-gradient-to-r from-[#7b1fa2] to-[#3f51b5] text-white shadow-lg'
                          : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
