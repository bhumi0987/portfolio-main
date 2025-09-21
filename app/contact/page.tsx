"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Code } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bhumibhardwaj267@gmail.com",
    href: "mailto:bhumibhardwaj267@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/bhumi0987",
    href: "https://github.com/bhumi0987",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bhumi-bhardwaj",
    href: "https://www.linkedin.com/in/bhumi-bhardwaj-619167253/",
  },
  {
    icon: Code,
    label: "LeetCode",
    value: "leetcode.com/u/bhumibhardwaj",
    href: "https://leetcode.com/u/bhumibhardwaj/",
  },
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you would like to discuss a project or just say hi, I'm always down to chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
         
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently looking for new opportunities and interesting projects. Whether you have a question or
                just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Card className={`p-8 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Bhumi" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Bhardwaj" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="bhumi@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="Let's work together" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" rows={5} placeholder="Tell me about your project..." />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
