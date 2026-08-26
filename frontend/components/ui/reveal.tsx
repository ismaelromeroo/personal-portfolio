"use client"

import { useEffect, useState, type ReactNode } from "react"

interface RevealProps {
  /** Milliseconds after mount before the fade-up starts. */
  delay: number
  children: ReactNode
}

/** Fades its children up into place once, `delay` ms after mount. */
export function Reveal({ delay, children }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`reveal transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}