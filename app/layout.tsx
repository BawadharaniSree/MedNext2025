import type React from "react"
import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "MedNext 2025 - Shaping the Future of Healthcare",
  description: "Two-Day Bilingual Conference on Healthcare and MedTech with AI, Imaging, Devices & Diagnostics",
  keywords: "MedNext, Healthcare, Medical Technology, AI, Conference, SVCE, Tamil, Bilingual",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
