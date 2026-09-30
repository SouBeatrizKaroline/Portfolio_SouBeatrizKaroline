import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll-utils'

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'hero', label: 'Início' },
    { id: 'historia', label: 'Minha História' },
    { id: 'sete-vidas', label: 'Sete Vidas' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'conquistas', label: 'Conquistas' },
    { id: 'mulher-tech', label: 'Mulher em Tech' },
    { id: 'nordeste', label: 'Global' },
    { id: 'tecnologias', label: 'Tecnologias' },
    { id: 'depoimentos', label: 'Recomendações' },
    { id: 'contato', label: 'Contato' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121218]/90 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-between gap-3 xl:gap-5">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 group text-left lg:flex-none shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1a237e] via-[#7b1fa2] to-[#ff8a65] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#121218] rounded-[10px] flex items-center justify-center text-lg">
              🐾
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-white text-base tracking-tight block group-hover:text-[#ffd54f] transition-colors">
              Beatriz Karoline
            </span>
            <span className="text-[10px] text-[#ff8a65] font-medium tracking-widest uppercase flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Multidisciplinar
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav aria-label="Navegação principal" className="hidden lg:flex flex-1 min-w-0 items-center justify-between gap-0.5 xl:gap-1 bg-[#1e1e2d]/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-1.5 xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7b1fa2] to-[#3f51b5] text-white shadow-md font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-[#1e1e2d] text-white border border-white/10 hover:bg-white/10 transition-colors shrink-0"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden max-h-[calc(100dvh-90px)] overflow-y-auto bg-[#121218]/95 backdrop-blur-xl border-b border-white/10 px-8 py-6 animate-fade-in-down">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#7b1fa2] to-[#3f51b5] text-white font-semibold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

