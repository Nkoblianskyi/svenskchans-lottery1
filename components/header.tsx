"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">SvenskLycka</h1>
              <p className="text-xs text-gray-500">Lotterianalys & Information</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Integritetspolicy
            </Link>
            <Link href="/cookie-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Cookie Policy
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Logga in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Registrera</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
                Integritetspolicy
              </Link>
              <Link href="/cookie-policy" className="text-gray-600 hover:text-blue-600">
                Cookie Policy
              </Link>
              <div className="flex flex-col space-y-2">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full bg-transparent"
                  >
                    Logga in
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Registrera</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
