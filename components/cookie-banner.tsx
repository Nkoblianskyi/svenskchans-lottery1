"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-white">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats.
              <Link href="/cookie-policy" className="underline hover:no-underline ml-1">
                Läs mer om cookies
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={declineCookies}
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Avböj
            </Button>
            <Button onClick={acceptCookies} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              Acceptera
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
