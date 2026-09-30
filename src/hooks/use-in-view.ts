import { useEffect, useState, useRef } from 'react'

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '50px 0px 50px 0px', ...options },
    )

    const current = ref.current
    if (current) observer.observe(current)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return { ref, isInView }
}
