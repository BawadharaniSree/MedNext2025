import { Inter } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// For Tamil text, we'll use system fonts that support Tamil script
export const tamilFontClass = "font-tamil"
