import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Svenska PostKodLotteriet - Vinn tillsammans med dina grannar",
  description:
    "Delta i Sveriges mest sociala lotteri där hela grannskapet kan vinna tillsammans baserat på postnummer.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
