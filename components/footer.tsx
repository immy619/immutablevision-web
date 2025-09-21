import { X, FileText, Instagram, MessageCircle, BookOpen } from "lucide-react"

const socialLinks = [
  { name: "X", icon: X, href: "https://twitter.com/immutablevision" },
  { name: "Blog", icon: FileText, href: "https://medium.com/@immutablevision" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/immutable_vision" },
  { name: "Telegram", icon: MessageCircle, href: "https://t.me/+STBdRmOzUdJkYjlk" },
  { name: "Docs", icon: BookOpen, href: "https://docs.immutablevision.com/" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Immutable Vision</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Building the future of crypto fund management with transparency, security, and performance.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                  aria-label={link.name}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              )
            })}
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2024 Immutable Vision. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
