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
          Open models for agentic coding that runs on your own machine, and for marketing work
        </p>

        <p className="mb-8 text-lg text-muted-foreground max-w-3xl">
          Zen LM is the open model family of Zoo Labs Foundation, a 501(c)(3) non-profit. Zen 6 and Zen 6 Flash
          are available now; Zen 7 is in research preview.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs"
            className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
          >
            Get Started
          </Link>
          <Link
            href="/docs#earlier-models"
            className="rounded-lg border border-purple-600 px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950"
          >
            View Models
          </Link>
        </div>
      </div>

      {/* The current generation */}
      <div className="grid gap-8 px-6 py-16 md:grid-cols-3 max-w-7xl mx-auto">
        <a href="https://huggingface.co/zenlm/zen6" className="rounded-lg border p-6 hover:shadow-lg transition">
          <h3 className="mb-2 text-lg font-semibold">Zen 6</h3>
          <p className="text-sm text-muted-foreground">
            Available now. 27B dense; reads text, images and video; 1,048,576 tokens with YaRN. Hosted as zen6.
          </p>
        </a>

        <a href="https://huggingface.co/zenlm/zen6-flash" className="rounded-lg border p-6 hover:shadow-lg transition">
          <h3 className="mb-2 text-lg font-semibold">Zen 6 Flash</h3>
          <p className="text-sm text-muted-foreground">
            Available now. The ternary build of Zen 6: 5.95 GB, reads images, runs on an Apple Silicon laptop.
            Hosted as zen6-flash.
          </p>
        </a>

        <div className="rounded-lg border p-6">
          <h3 className="mb-2 text-lg font-semibold">Zen 7</h3>
          <p className="text-sm text-muted-foreground">
            Research preview. No weights yet, and it cannot be called.{" "}
            <a href="https://hanzo.ai/research-access" className="font-semibold text-purple-600 hover:underline">
              Request access
            </a>
          </p>
        </div>
      </div>

      {/* Model Families */}
      <div className="px-6 py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Earlier Models</h2>
          
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
            Zen LM is from <a href="https://zoo.ngo" className="font-semibold hover:text-foreground">Zoo Labs Foundation</a>,
            a 501(c)(3) non-profit. Served on <a href="https://api.hanzo.ai" className="font-semibold hover:text-foreground">api.hanzo.ai</a>.
          </p>
          <p>Apache 2.0 licensed open weights</p>
        </div>
      </footer>
    </main>
  )
}