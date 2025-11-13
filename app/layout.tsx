import "./global.css"
import { RootProvider } from "fumadocs-ui/provider/next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const interMono = Inter({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata = {
  title: {
    default: "Zen LM Documentation",
    template: "%s | Zen LM",
  },
  description:
    "Democratizing AI while protecting our planet. Open-source, efficient, and privacy-first language models from Zen LM.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-svh bg-background font-sans antialiased">
        <RootProvider
          search={{
            enabled: true,
          }}
          theme={{
            enabled: true,
            defaultTheme: "dark",
          }}
        >
          <div className="relative flex min-h-svh flex-col bg-background">
            {children}
          </div>
        </RootProvider>
      </body>
    </html>
  )
}