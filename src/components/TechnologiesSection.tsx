import { TECHNOLOGIES, TECH_INTRO_TEXT } from '@/data/portfolio-data'
import {
  Code2,
  FileCode,
  Braces,
  Palette,
  Zap,
  Server,
  Terminal,
  Network,
  Database,
  Bot,
  Brain,
  BarChart3,
  Layout,
  Layers,
  Component,
  Search,
  GitBranch,
  Table,
  FileText,
  Users,
  ClipboardList,
  Gamepad,
} from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4 text-[#ffd54f]" />,
  FileCode: <FileCode className="w-4 h-4 text-[#ffd54f]" />,
  Braces: <Braces className="w-4 h-4 text-[#ffd54f]" />,
  Palette: <Palette className="w-4 h-4 text-[#ffd54f]" />,
  Zap: <Zap className="w-4 h-4 text-[#ffd54f]" />,
  Server: <Server className="w-4 h-4 text-[#ffd54f]" />,
  Terminal: <Terminal className="w-4 h-4 text-[#ffd54f]" />,
  Network: <Network className="w-4 h-4 text-[#ffd54f]" />,
  Database: <Database className="w-4 h-4 text-[#ffd54f]" />,
  Bot: <Bot className="w-4 h-4 text-[#ffd54f]" />,
  Brain: <Brain className="w-4 h-4 text-[#ffd54f]" />,
  BarChart3: <BarChart3 className="w-4 h-4 text-[#ffd54f]" />,
  Layout: <Layout className="w-4 h-4 text-[#ffd54f]" />,
  Layers: <Layers className="w-4 h-4 text-[#ffd54f]" />,
  Component: <Component className="w-4 h-4 text-[#ffd54f]" />,
  Search: <Search className="w-4 h-4 text-[#ffd54f]" />,
  GitBranch: <GitBranch className="w-4 h-4 text-[#ffd54f]" />,
  Table: <Table className="w-4 h-4 text-[#ffd54f]" />,
  FileText: <FileText className="w-4 h-4 text-[#ffd54f]" />,
  Users: <Users className="w-4 h-4 text-[#ffd54f]" />,
  ClipboardList: <ClipboardList className="w-4 h-4 text-[#ffd54f]" />,
  Gamepad: <Gamepad className="w-4 h-4 text-[#ffd54f]" />,
}

export function TechnologiesSection() {
  return (
    <section id="tecnologias" className="py-24 px-4 sm:px-6 bg-[#161622] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#3f51b5] mb-2">
            Stack & Ferramentas
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
            Tecnologias que Domino
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Tecnologias, ferramentas e conhecimentos aplicados em projetos, hackathons e estudos
            contínuos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-slate-400 text-sm font-light leading-relaxed text-center italic">
            {TECH_INTRO_TEXT}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNOLOGIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1e1e2d] border border-white/10 shadow-lg hover:border-white/20 transition-colors"
            >
              <h4 className="text-lg font-bold text-white mb-5 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-xs font-mono text-[#ff8a65]">{cat.items.length} itens</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#121218] border border-white/5 hover:border-[#ffd54f]/30 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#ffd54f]/10 transition-colors shrink-0">
                      {ICON_MAP[item.iconName] ?? <Code2 className="w-4 h-4 text-[#ffd54f]" />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white group-hover:text-[#ffd54f] transition-colors">
                        {item.name}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] text-slate-400 font-mono">{item.level}</span>
                        {item.level === 'Avançado' && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#ffd54f]/15 text-[#ffd54f] font-bold">
                            ★
                          </span>
                        )}
                      </div>
                      {item.note && (
                        <div className="text-[9px] text-[#ff8a65]/70 italic mt-0.5">
                          {item.note}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
