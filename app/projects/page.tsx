"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "PRISK – Music Streaming Website",
    description:
      "A music listening platform built with HTML, CSS, and JavaScript. Features include looping songs, automatic random track play, and an interactive user interface for a seamless music experience.",
    image: "/music-streaming-project.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
  },
  {
    title: "Medicine Hub – Donation Platform",
    description:
      "A web platform for donating and requesting medicines, developed using Node.js, Express.js, MongoDB, and JWT authentication. Includes secure user login, profile management, and an admin panel for monitoring activity.",
    image: "/medicine-hub-project.jpg",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "React"],
  },
  {
    title: "Weather Prediction System",
    description:
      "A machine learning–based system that predicts weather conditions using historical data. Implemented with Python and ML libraries, focusing on model accuracy and real-world applicability.",
    image: "/weather-prediction-project.jpg",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills. Features responsive design, smooth animations, and optimized performance for a professional online presence.",
    image: "/portfolio-project.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
]

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, machine learning, and software
            engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
