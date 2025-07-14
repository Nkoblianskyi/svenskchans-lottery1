import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { PrizesInfo } from "@/components/prizes-info"
import { CommunityImpact } from "@/components/community-impact"
import { SafetySecurity } from "@/components/safety-security"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <PrizesInfo />
      <CommunityImpact />
      <SafetySecurity />
    </main>
  )
}
