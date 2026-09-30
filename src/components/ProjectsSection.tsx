import { useState, useMemo } from 'react'
import { PROJECTS, UNIFIED_FILTERS, Project } from '@/data/portfolio-data'
import { ProjectModal } from './ProjectModal'
import { useInView } from '@/hooks/use-in-view'
import { ExternalLink, Award, MapPin, Calendar } from 'lucide-react'

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('Todos')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { ref, isInView } = useInView()

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'Todos'
        ? PROJECTS
        : activeFilter === 'Internacional'
          ? PROJECTS.filter((p) => p.isInternational)
          : activeFilter === 'Premiados'
            ? PROJECTS.filter((p) => p.medal && p.medal.trim() !== '')
            : PROJECTS.filter((p) => p.filterTags.includes(activeFilter)),
    [activeFilter],
  )

  return (
    <section id="projetos" className="py-24 px-4 sm:px-6 bg-[#121218] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#ffd54f] mb-2">
            Portfólio em Ação
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
            Projetos &amp; Conquistas
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Cada projeto representa um desafio real, desenvolvido em hackathons, pesquisas
            acadêmicas ou iniciativas autorais. Quando reconhecido, o prêmio conquistado aparece
            como parte da própria história do projeto.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {UNIFIED_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd54f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121218] ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#7b1fa2] to-[#ff8a65] text-white shadow-lg scale-105'
                  : 'bg-[#1e1e2d] text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-[#1e1e2d] rounded-2xl border border-white/10 overflow-hidden hover:border-[#ffd54f]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col group will-change-transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-video overflow-hidden bg-[#121218]">
                <img
                  src={project.image}
                  onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = `${import.meta.env.BASE_URL}project-placeholder.svg` }}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2d] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#121218]/80 text-[#ffd54f] text-[10px] font-bold tracking-wide backdrop-blur-md border border-white/10">
                  {project.category}
                </span>
                {project.isInternational && (
                  <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#3f51b5]/80 text-white text-[9px] font-bold backdrop-blur-md border border-white/10">
                    🌍 Internacional
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffd54f] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#ff8a65] mb-3 bg-[#ff8a65]/10 px-2.5 py-1.5 rounded-lg border border-[#ff8a65]/20">
                    <Award className="w-3.5 h-3.5 shrink-0 text-[#ffd54f]" />
                    <span className="truncate">{project.impact}</span>
                  </div>

                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-mono mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#ffd54f]" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#ff8a65]" />
                      {project.isInternational ? 'Internacional' : 'Brasil'}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#121218] text-slate-400 border border-white/5 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] px-2 py-0.5 text-slate-500 font-mono">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#7b1fa2] hover:to-[#3f51b5] text-slate-200 hover:text-white font-bold text-xs transition-all border border-white/10 flex items-center justify-center gap-2 group-hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd54f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1e2d]"
                  >
                    <span>Ver Case Completo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-sm font-light">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
