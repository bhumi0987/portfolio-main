"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "AI and ML Intern",
    company: "Earth 5R",
    period: "May 2024 — August 2024",
    description:
      "Worked on developing and optimizing machine learning models to support data-driven solutions at Earth 5R. Collaborated with cross-functional teams to preprocess datasets, train predictive models, and analyze results for real-world impact. Focused on applying AI and ML techniques to solve practical problems, improve accuracy, and deliver insights that support sustainable initiatives.",
    tags: ["Machine Learning", "Python", "Data Analysis", "AI"],
  },
  {
    title: "Social Media Manager",
    company: "Kshitiksha Foundation",
    period: "June 2024 — Feb 2025",
    description:
      "Managed and grew the foundation's social media presence across multiple platforms. Created and executed content strategies to engage audiences, raise awareness about initiatives, and boost community outreach. Collaborated with team members to design impactful campaigns, monitor analytics, and ensure consistent branding and messaging.",
    tags: ["Social Media", "Content Strategy", "Analytics", "Branding"],
  },
  {
    title: "Sub Editor",
    company: "ITS-Management and IT Institute",
    period: "April 2024 — March 2025",
    description:
      "Edited, proofread, and structured academic and creative content for publications. Collaborated with writers and faculty to ensure accuracy, clarity, and consistency in articles and reports. Contributed to improving the overall quality of written material and maintaining the institute's editorial standards.",
    tags: ["Content Editing", "Proofreading", "Academic Writing", "Quality Assurance"],
  },
]

export default function ExperiencePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through various roles that have shaped my skills and perspective in technology and communication.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-lg transition-all duration-300 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0">
                  {exp.period}
                </Badge>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
