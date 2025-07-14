"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { SuccessPopup } from "@/components/success-popup"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    title: "",
    firstName: "",
    lastName: "",
    birthName: "",
    postalCode: "",
    city: "",
    streetAddress: "",
    houseNumber: "",
    birthDate: "",
    birthPlace: "",
    phone: "",
    iban: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Skapa Konto</h1>
            <p className="text-gray-600">Skapa ditt konto för att komma igång</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-postadress *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Lösenord *
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Bekräfta Lösenord *
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Titel *
                </label>
                <select
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Välj titel</option>
                  <option value="herr">Herr</option>
                  <option value="fru">Fru</option>
                  <option value="fröken">Fröken</option>
                </select>
              </div>

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Förnamn *
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Efternamn *
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="birthName" className="block text-sm font-medium text-gray-700 mb-2">
                Födelsenamn (om annorlunda)
              </label>
              <Input
                id="birthName"
                name="birthName"
                type="text"
                value={formData.birthName}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Postnummer *
                </label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  Ort *
                </label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Gatuadress *
                </label>
                <Input
                  id="streetAddress"
                  name="streetAddress"
                  type="text"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Husnummer *
                </label>
                <Input
                  id="houseNumber"
                  name="houseNumber"
                  type="text"
                  value={formData.houseNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Födelsedatum * (ÅÅÅÅ-MM-DD)
                </label>
                <Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="birthPlace" className="block text-sm font-medium text-gray-700 mb-2">
                  Födelseort *
                </label>
                <Input
                  id="birthPlace"
                  name="birthPlace"
                  type="text"
                  value={formData.birthPlace}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefonnummer * (+46 XX XXX XXXX)
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="+46 XX XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="iban" className="block text-sm font-medium text-gray-700 mb-2">
                Bank IBAN *
              </label>
              <Input
                id="iban"
                name="iban"
                type="text"
                value={formData.iban}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="SE00 0000 0000 0000 0000 0000"
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 rounded border-gray-300 text-blue-600"
                />
                <span className="text-sm text-gray-700">
                  Jag godkänner policyer för svenskchans.com och databehandling för min förfrågan *
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToMarketing"
                  checked={formData.agreeToMarketing}
                  onChange={handleInputChange}
                  className="mt-1 rounded border-gray-300 text-blue-600"
                />
                <span className="text-sm text-gray-700">Jag vill få marknadsföringsinformation via e-post</span>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              {isLoading ? "Registrerar..." : "Registrera"}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Har du redan ett konto?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-semibold">
                Logga in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Registrering lyckades!"
        message="Ditt konto har skapats. Du omdirigeras nu till inloggningssidan."
        redirectPath="/login"
      />
    </div>
  )
}
