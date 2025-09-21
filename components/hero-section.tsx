import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10 py-16 sm:py-24 lg:py-32 mobile-safe-area">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)]" />

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="glass-effect flex items-center space-x-3 text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium animate-fade-in-up">
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 bg-transparent">
                <Image
                  src="/immutable-vision-logo.png"
                  alt="Immutable Vision"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <span>Outperforming the Market</span>
            </div>
          </div>

          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 px-6 py-3 rounded-full animate-fade-in-up delay-100">
              <span className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-primary">360%</span>
              <span className="text-sm sm:text-base text-muted-foreground ml-2">Combined Peak Performance in 2024</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 text-balance animate-fade-in-up delay-200">
            We Build Funds that <span className="gradient-text">Outperform</span>{" "}
            <span className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl">🔥</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto text-pretty leading-relaxed animate-fade-in-up delay-300">
            Diversify your crypto portfolio with ease. Our funds offer curated investment strategies for newcomers and
            experienced investors alike.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-500">
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 w-full sm:w-auto min-w-[200px] bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-medium"
              asChild
            >
              <a href="https://docs.immutablevision.com/" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
