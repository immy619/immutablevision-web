import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import CookieBanner from "@/components/cookie-banner" // <CHANGE> Added cookie banner import
import "./globals.css"

export const metadata: Metadata = {
  title: "Immutable Vision - Crypto Funds that Outperform",
  description:
    "Diversify your crypto portfolio with ease. Our funds offer curated investment strategies for newcomers and experienced investors alike.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
          <CookieBanner /> {/* <CHANGE> Added cookie banner component */}
        </Suspense>
      </body>
    </html>
  )
}