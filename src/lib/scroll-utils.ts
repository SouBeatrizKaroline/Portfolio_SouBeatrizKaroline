export function getNavbarHeight(): number {
  const navbar = document.querySelector('header')
  if (!navbar) return 80
  return Math.round(navbar.getBoundingClientRect().height)
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (!element) return

  const navbar = document.querySelector('header')
  let navbarHeight = 64

  if (navbar) {
    if (window.scrollY > 40) {
      navbarHeight = Math.round(navbar.getBoundingClientRect().height)
    } else {
      const rect = navbar.getBoundingClientRect()
      const computed = window.getComputedStyle(navbar)
      const paddingTop = parseFloat(computed.paddingTop) || 0
      const paddingBottom = parseFloat(computed.paddingBottom) || 0
      const contentHeight = rect.height - paddingTop - paddingBottom
      navbarHeight = Math.round(contentHeight + 14 + 14 + 1)
    }
  }

  const elementTop = element.getBoundingClientRect().top + window.scrollY
  const extraOffset = id === 'historia' ? 40 : 0
  const targetPosition = Math.max(0, elementTop - navbarHeight - 8 - extraOffset)

  window.scrollTo({
    top: targetPosition,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  })
}

