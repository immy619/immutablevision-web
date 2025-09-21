import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PrimeFunds } from "@/components/prime-funds"
import { FeatureGrid } from "@/components/feature-grid"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { LegalDisclaimer } from "@/components/legal-disclaimer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LegalDisclaimer />
      <Header />
      <main>
        <HeroSection />
        <PrimeFunds />
        <FeatureGrid />
        <AboutSection />
      </main>
      <Footer />
      <LegalDisclaimer />
    </div>
  )
}
