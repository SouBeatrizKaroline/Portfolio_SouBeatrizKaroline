import { useState } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { TimelineSection } from '@/components/TimelineSection'
import { SevenLivesSection } from '@/components/SevenLivesSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AchievementsSection } from '@/components/AchievementsSection'
import { WomenInTechSection } from '@/components/WomenInTechSection'
import { NortheastToWorldSection } from '@/components/NortheastToWorldSection'
import { TechnologiesSection } from '@/components/TechnologiesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactFooterSection } from '@/components/ContactFooterSection'
import { EasterEggCat } from '@/components/EasterEggCat'

export default function Index() {
  const [easterEggActive, setEasterEggActive] = useState(false)

  return (
    <div className="w-full min-h-screen bg-[#121218] text-slate-100 selection:bg-[#7b1fa2] selection:text-white">
      {/* Atalho acessível para os projetos */}
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#ffd54f] focus:text-[#121218] focus:font-bold focus:rounded-lg"
      >
        Pular para os projetos
      </a>

      {/* Main Single Page Sections */}
      <HeroSection />
      <TimelineSection />
      <SevenLivesSection />
      <ProjectsSection />
      <AchievementsSection />
      <WomenInTechSection />
      <NortheastToWorldSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <ContactFooterSection onTriggerCat={() => setEasterEggActive(true)} />

      {/* Secret Floating Cat Easter Egg */}
      <EasterEggCat active={easterEggActive} onClose={() => setEasterEggActive(false)} />
    </div>
  )
}

