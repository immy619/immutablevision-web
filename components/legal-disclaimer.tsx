import { AlertTriangle } from "lucide-react"

export function LegalDisclaimer() {
  return (
    <div className="bg-destructive/10 border-b border-destructive/20 py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 text-center">
          <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
          <p className="text-sm text-destructive">
            <span className="font-medium">Risk Warning:</span> Don't invest unless you're prepared to lose all the money
            you invest. This is a high-risk investment and you should not expect to be protected if something goes
            wrong.
          </p>
        </div>
      </div>
    </div>
  )
}
