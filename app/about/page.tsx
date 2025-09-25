"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const skills = [
  {
    category: "Programming Languages",
    items: ["c++", "JavaScript (ES6+)", "Python", "java"],
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS3", "React.js", "Talwind"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Others",
    items: ["Git & GitHub", "VS Code" ],
  },
  {
    category: "Soft Skills",
    items: ["Strong Communication and interperosnal skills", "Public Speaking"],
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative rounded-2xl overflow-hidden">
                <Image src="/WhatsApp Image 2025-09-20 at 16.35.49_b699cd8c.jpg" alt="Bhumi Bhardwaj" fill className="object-cover" />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="text-gradient">Bhumi</span>
              </h1>
              <p className="text-xl text-accent font-medium mb-6">Software Developer & MCA Student</p>
              <p className="text-muted-foreground leading-relaxed">
                I'm an aspiring Software Developer passionate about building reliable, user-friendly applications that
                combine clean design with solid engineering. I enjoy solving problems through code and creating
                solutions that are not only functional but also efficient and easy to use.
              </p>
            </div>
          </div>

          <div className={`space-y-8 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Currently, I'm pursuing my{" "}
                  <strong className="text-foreground">MCA (Master of Computer Applications)</strong> and actively
                  learning modern technologies to strengthen my skills in{" "}
                  <strong className="text-foreground">full-stack development</strong>. My focus is on writing clean,
                  maintainable code and continuously improving my problem-solving abilities to grow into a professional
                  developer.
                </p>
                <p>
                  In the past, I've worked on academic and personal projects ranging from{" "}
                  <strong className="text-foreground">web applications</strong>
                  These experiences have helped me
                  build a strong foundation in programming, database management, and application development.
                </p>
                <p>
                  I also have knowledge of Python’s Pandas and Matplotlib libraries for data analysis and visualization.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
              <div className="grid gap-4">
                {skills.map((skillGroup, index) => (
                  <Card key={skillGroup.category} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-accent mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
