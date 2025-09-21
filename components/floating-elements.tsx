"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [elements, setElements] = useState<Array<{ id: number; delay: number }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 0.5,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full blur-xl" />
        </div>
      ))}
    </div>
  )
}
