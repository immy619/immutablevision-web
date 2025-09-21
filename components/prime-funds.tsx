"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, TrendingUp, Shield } from "lucide-react"

const funds = [
  {
    title: "Prime Fund I",
    description: "Our flagship diversified crypto fund featuring blue-chip assets and emerging opportunities.",
    link: "https://beta.velvet.capital/#/fund/manage/0x5160d38f362ae7cc6ef06b9a516ae9f4c8d474d4",
    features: ["Diversified Portfolio", "Advanced Strategies", "Expert Analysis"],
    icon: Shield,
  },
  {
    title: "Prime Fund II",
    description: "Advanced strategies for experienced investors seeking higher returns with calculated risks.",
    link: "https://beta.velvet.capital/#/fund/manage/0x05fc3317a28f0228f61891280ea7a7e962fde001",
    features: ["Higher Returns", "Low Risk Profile", "Advanced Strategies", "Expert Analysis"],
    icon: TrendingUp,
  },
]

export function PrimeFunds() {
  return (
    <section id="funds" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Prime Funds</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted investment funds designed to maximize returns while managing risk.
          </p>
          <div className="mt-4">
            <p className="text-lg text-muted-foreground/90 font-medium">
              Powered by{" "}
              <a
                href="https://velvet.capital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                Velvet
              </a>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {funds.map((fund, index) => {
            const IconComponent = fund.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{fund.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{fund.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {fund.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full group" onClick={() => window.open(fund.link, "_blank")}>
                      Enter Fund
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
