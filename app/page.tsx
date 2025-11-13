import Link from "next/link"
import { Logo } from "../components/logo"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <Logo size={80} className="mb-6 text-purple-500" />
        
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          Zen LM
        </h1>
        
        <p className="mb-2 text-xl text-muted-foreground max-w-2xl">
          Democratizing AI while protecting our planet
        </p>
        
        <p className="mb-8 text-lg text-muted-foreground max-w-3xl">
          Open-source, efficient, and privacy-first language models from 0.6B to 480B parameters.
          Run entirely on your device — no cloud, no subscriptions, no surveillance.
        </p>
        
        <div className="flex gap-4">
          <Link
            href="/docs"
            className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
          >
            Get Started
          </Link>
          <Link
            href="/docs/models"
            className="rounded-lg border border-purple-600 px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950"
          >
            View Models
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        <div className="rounded-lg border p-6">
          <h3 className="mb-2 text-lg font-semibold">🚀 Ultra-Efficient</h3>
          <p className="text-sm text-muted-foreground">
            From 0.6B to 480B parameters. Runs on phones, laptops, and AI supercomputers.
          </p>
        </div>
        
        <div className="rounded-lg border p-6">
          <h3 className="mb-2 text-lg font-semibold">🔒 Truly Private</h3>
          <p className="text-sm text-muted-foreground">
            100% local processing. No accounts, no telemetry, no tracking.
          </p>
        </div>
        
        <div className="rounded-lg border p-6">
          <h3 className="mb-2 text-lg font-semibold">🌱 Eco-Friendly</h3>
          <p className="text-sm text-muted-foreground">
            95% less energy than cloud AI. Carbon-negative operations.
          </p>
        </div>
        
        <div className="rounded-lg border p-6">
          <h3 className="mb-2 text-lg font-semibold">💚 Free Forever</h3>
          <p className="text-sm text-muted-foreground">
            Apache 2.0 licensed. No premium tiers or API fees.
          </p>
        </div>
      </div>

      {/* Model Families */}
      <div className="px-6 py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Model Families</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/docs/models/zen-nano" className="rounded-lg border bg-card p-6 hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold">zen-nano</h3>
              <p className="text-sm text-muted-foreground mb-2">0.6B parameters</p>
              <p className="text-sm">Ultra-lightweight edge model for on-device AI</p>
            </Link>
            
            <Link href="/docs/models/zen-eco" className="rounded-lg border bg-card p-6 hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold">zen-eco</h3>
              <p className="text-sm text-muted-foreground mb-2">4B parameters</p>
              <p className="text-sm">Efficient instruction-following and reasoning</p>
            </Link>
            
            <Link href="/docs/models/zen-omni" className="rounded-lg border bg-card p-6 hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold">zen-omni</h3>
              <p className="text-sm text-muted-foreground mb-2">7B multimodal</p>
              <p className="text-sm">Text + Vision + Audio understanding</p>
            </Link>
            
            <Link href="/docs/models/zen-coder" className="rounded-lg border bg-card p-6 hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold">zen-coder</h3>
              <p className="text-sm text-muted-foreground mb-2">4B-480B parameters</p>
              <p className="text-sm">Code generation and analysis</p>
            </Link>
            
            <Link href="/docs/models/zen-director" className="rounded-lg border bg-card p-6 hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold">zen-director</h3>
              <p className="text-sm text-muted-foreground mb-2">5B parameters</p>
              <p className="text-sm">Text/image-to-video generation</p>
            </Link>
            
            <Link href="/docs/models/zen-guard" className="rounded-lg border bg-card p-6 hover:shadow-lg transition">
              <h3 className="mb-2 text-xl font-semibold">zen-guard</h3>
              <p className="text-sm text-muted-foreground mb-2">4B-8B parameters</p>
              <p className="text-sm">Content safety and moderation</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">
            Built by <a href="https://hanzo.ai" className="font-semibold hover:text-foreground">Hanzo AI</a> (Techstars '17) 
            {" "}and{" "}
            <a href="https://zoolabs.io" className="font-semibold hover:text-foreground">Zoo Labs Foundation</a> (501c3)
          </p>
          <p>Apache 2.0 Licensed • Privacy-First • No Data Collection</p>
        </div>
      </footer>
    </main>
  )
}