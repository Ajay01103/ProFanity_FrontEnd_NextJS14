import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"

import Providers from "@/components/providers"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(dmSans.variable, "subpixel-antialiased font-sans")}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
