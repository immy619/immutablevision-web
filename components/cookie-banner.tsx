'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all')
    setShowBanner(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            This site uses cookies to ensure optimal performance and analyze site usage. 
            Essential cookies are required for basic functionality.{' '}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={acceptEssential}
            className="text-xs"
          >
            Essential Only
          </Button>
          <Button
            size="sm"
            onClick={acceptAll}
            className="text-xs"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}