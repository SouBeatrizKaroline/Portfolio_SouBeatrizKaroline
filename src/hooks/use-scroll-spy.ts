import { useState, useEffect } from 'react'
import { getNavbarHeight } from '@/lib/scroll-utils'

export function useScrollSpy(sectionIds: string[], offset?: number) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = offset ?? getNavbarHeight() + 20
      const scrollPosition = window.scrollY + currentOffset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const top = section.offsetTop
          if (scrollPosition >= top) {
            setActiveId(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [sectionIds, offset])

  return activeId
}
