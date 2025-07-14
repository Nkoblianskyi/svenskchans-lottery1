"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [nextDrawDate, setNextDrawDate] = useState<Date>(new Date())

  const getNextSaturday = useCallback(() => {
    const now = new Date()
    const nextSaturday = new Date(now)

    // Find next Saturday at 20:00
    const daysUntilSaturday = (6 - now.getDay()) % 7

    if (daysUntilSaturday === 0) {
      // Today is Saturday
      const todayAt8PM = new Date(now)
      todayAt8PM.setHours(20, 0, 0, 0)

      if (now < todayAt8PM) {
        // Draw hasn't happened yet today
        nextSaturday.setHours(20, 0, 0, 0)
      } else {
        // Draw already happened, move to next Saturday
        nextSaturday.setDate(now.getDate() + 7)
        nextSaturday.setHours(20, 0, 0, 0)
      }
    } else {
      // Move to next Saturday
      nextSaturday.setDate(now.getDate() + daysUntilSaturday)
      nextSaturday.setHours(20, 0, 0, 0)
    }

    return nextSaturday
  }, [])

  const calculateTimeLeft = useCallback(() => {
    const targetDate = getNextSaturday()
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        targetDate: targetDate,
      }
    }

    // If time has passed, recalculate for next Saturday
    const newTargetDate = getNextSaturday()
    const newDifference = newTargetDate.getTime() - now.getTime()

    return {
      days: Math.floor(newDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((newDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((newDifference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((newDifference % (1000 * 60)) / 1000),
      targetDate: newTargetDate,
    }
  }, [getNextSaturday])

  const formatDate = (date: Date) => {
    const months = [
      "januari",
      "februari",
      "mars",
      "april",
      "maj",
      "juni",
      "juli",
      "augusti",
      "september",
      "oktober",
      "november",
      "december",
    ]

    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `lördag ${day} ${month} ${year}`
  }

  useEffect(() => {
    const updateTimer = () => {
      const result = calculateTimeLeft()
      setTimeLeft({
        days: result.days,
        hours: result.hours,
        minutes: result.minutes,
        seconds: result.seconds,
      })

      if (result.targetDate) {
        setNextDrawDate(result.targetDate)
      }
    }

    // Initial update
    updateTimer()

    // Update every second
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  return (
    <section className="p-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-4 text-white leading-tight md:text-5xl">
            Lotterianalys &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Information
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Professionell analys och strategier för svenska lotterier
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-lg mx-auto shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h2 className="text-lg font-bold text-white">Svenska PostKodLotteriet</h2>
          </div>

          <p className="text-gray-300 text-sm mb-6">Nästa dragning</p>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { value: timeLeft.days.toString().padStart(2, "0"), label: "Dagar" },
              { value: timeLeft.hours.toString().padStart(2, "0"), label: "Timmar" },
              { value: timeLeft.minutes.toString().padStart(2, "0"), label: "Minuter" },
              { value: timeLeft.seconds.toString().padStart(2, "0"), label: "Sekunder" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
              >
                <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-xs text-gray-300 font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-white font-medium mb-2">{formatDate(nextDrawDate)}</p>
            <p className="text-gray-300 text-sm">Klockan 20:00</p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-green-400 font-semibold text-sm">Öppet för deltagande</span>
          </div>

          <Link href="/login">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl w-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Delta Nu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
