"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Code } from "lucide-react"
import MagneticButton from "@/components/magnetic-button"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-gradient animated-gradient">Software Developer</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            I'm an MCA student passionate about building reliable, user-friendly applications that combine clean design
            with solid engineering.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <MagneticButton asChild size="lg" className="group animate-pulse-glow">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton
              asChild
              size="lg"
              className=""
            >
              <Link href="/about">About Me</Link>
            </MagneticButton>
          </div>

          <div
            className={`flex items-center justify-center space-x-6 transition-all duration-1000 delay-700 ${isVisible ? "animate-rotate-in" : "opacity-0"}`}
          >
            <Link
              href="https://github.com/bhumi0987"
              target="_blank"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-12 card-hover"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bhumi-bhardwaj-619167253/"
              target="_blank"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-12 card-hover"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://leetcode.com/u/bhumibhardwaj/"
              target="_blank"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-12 card-hover"
            >
              <Code className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:bhumibhardwaj267@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-12 card-hover"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
