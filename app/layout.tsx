import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import ScrollProgress from "@/components/scroll-progress"
import PageTransition from "@/components/page-transition"
import AnimatedBackground from "@/components/animated-background"
import FloatingElements from "@/components/floating-elements"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bhumi Bhardwaj - Software Developer",
  description: "MCA student passionate about building reliable, user-friendly applications",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <AnimatedBackground />
        <FloatingElements />
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollProgress />
          <Navigation />
        </Suspense>
        <main className="min-h-screen relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
