import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      const target = e.target as HTMLElement | null
      if (target) {
        const computed = window.getComputedStyle(target)
        setIsPointer(
          computed.cursor === 'pointer' ||
            target.tagName === 'BUTTON' ||
            target.tagName === 'A' ||
            target.closest('button') !== null ||
            target.closest('a') !== null,
        )
      }
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`rounded-full border border-[#ffd54f]/80 flex items-center justify-center transition-all duration-200 ${
          isPointer
            ? 'w-10 h-10 bg-[#ffd54f]/20 scale-125 backdrop-blur-[1px]'
            : 'w-6 h-6 bg-[#7b1fa2]/30'
        }`}
      >
        <span className="text-[10px] select-none opacity-80">🐾</span>
      </div>
    </div>
  )
}

