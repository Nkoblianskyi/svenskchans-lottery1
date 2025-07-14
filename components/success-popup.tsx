"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  redirectPath?: string
}

export function SuccessPopup({ isOpen, onClose, title, message, redirectPath }: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen && redirectPath) {
      const timer = setTimeout(() => {
        window.location.href = redirectPath
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, redirectPath])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <Link href={redirectPath || "/"}>
          <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
            OK
          </Button>
        </Link>
      </div>
    </div>
  )
}
