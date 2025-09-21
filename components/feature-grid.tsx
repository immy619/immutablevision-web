import { Card, CardContent } from "@/components/ui/card"
import {
  Layers,
  GraduationCap,
  Shield,
  Eye,
  TrendingUp,
  Coins,
  Settings,
  Users,
  DollarSign,
  CheckCircle,
  Target,
  Lightbulb,
  Brain,
  BarChart3,
  Globe,
} from "lucide-react"

const features = [
  { name: "Diversified", icon: Layers, description: "Spread risk across multiple assets" },
  { name: "Onboarding", icon: GraduationCap, description: "Easy setup for new investors" },
  { name: "Secure", icon: Shield, description: "Bank-grade security protocols" },
  { name: "Transparent", icon: Eye, description: "Full visibility into fund operations" },
  { name: "Performance", icon: TrendingUp, description: "Consistent market outperformance" },
  { name: "DeFi", icon: Coins, description: "Decentralized finance integration" },
  { name: "Managed", icon: Settings, description: "Professional fund management" },
  { name: "Unmanaged", icon: Users, description: "Self-directed investment options" },
  { name: "Smart Money", icon: DollarSign, description: "Institutional-grade strategies" },
  { name: "Proven", icon: CheckCircle, description: "Track record of success" },
  { name: "Strategies", icon: Target, description: "Multiple investment approaches" },
  { name: "Innovations", icon: Lightbulb, description: "Cutting-edge financial tech" },
  { name: "AI", icon: Brain, description: "Artificial intelligence powered" },
  { name: "Algorithms", icon: BarChart3, description: "Advanced trading algorithms" },
  { name: "Web3", icon: Globe, description: "Next-generation web technology" },
]

export function FeatureGrid() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Immutable Vision</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of features ensures your investments are managed with the highest standards of
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border hover:border-primary/20"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{feature.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
