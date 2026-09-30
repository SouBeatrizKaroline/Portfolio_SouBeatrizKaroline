import { useEffect, useState } from 'react'
import { Sparkles, X } from 'lucide-react'

interface EasterEggCatProps {
  active: boolean
  onClose: () => void
}

export function EasterEggCat({ active, onClose }: EasterEggCatProps) {
  const [walk, setWalk] = useState(false)

  useEffect(() => {
    if (active) {
      setWalk(true)
      const timer = setTimeout(() => {
        setWalk(false)
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [active, onClose])

  if (!active && !walk) return null

  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate-bounce-in">
      <div className="relative bg-gradient-to-r from-[#1a237e] to-[#7b1fa2] text-white p-4 rounded-2xl shadow-2xl border border-[#ffd54f]/40 flex items-center gap-3 max-w-xs backdrop-blur-md">
        <div className="text-3xl animate-pulse">🐱</div>
        <div>
          <div className="flex items-center gap-1 text-[#ffd54f] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Você encontrou o gato!</span>
          </div>
          <p className="text-xs text-slate-200 mt-1">
            "Miau! Curiosidade e agilidade são o segredo das 7 vidas em tech!"
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
          aria-label="Fechar mensagem do felino"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
