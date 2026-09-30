import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { CustomCursor } from './CustomCursor'
import { useScrollSpy } from '@/hooks/use-scroll-spy'

export function Layout() {
  const activeSection = useScrollSpy([
    'hero',
    'historia',
    'sete-vidas',
    'projetos',
    'conquistas',
    'mulher-tech',
    'nordeste',
    'tecnologias',
    'depoimentos',
    'contato',
  ])

  return (
    <div className="relative min-h-screen bg-[#121218] text-slate-100 flex flex-col font-sans">
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
