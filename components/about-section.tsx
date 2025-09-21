import { Card, CardContent } from "@/components/ui/card"
import { User, Smartphone, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Immutable Vision</h2>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8 sm:p-12">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center">
                Immutable Vision brings the simplicity and diversification of traditional index funds to the crypto
                world. Our funds operate on Velvet's cutting-edge platform, backed by industry leaders, ensuring secure,
                on-chain asset management. Next year, we plan to launch an app providing seamless access to our funds.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <User className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Led by Expert Strategist</h3>
              <p className="text-muted-foreground">
                DeFimmy, founder of Immutable Vision, brings decades of cryptocurrency expertise with a proven onchain track
                record as a successful DeFi fund manager.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure Platform</h3>
              <p className="text-muted-foreground">
                Built on Velvet's cutting-edge technology with institutional-grade security.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Web App Coming</h3>
              <p className="text-muted-foreground">
                Seamless access to our funds through our upcoming web application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
