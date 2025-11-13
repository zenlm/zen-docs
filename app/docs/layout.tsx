import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import { BookOpen, Brain, Sparkles } from "lucide-react"
import { Logo } from "../../components/logo"

// Page tree for Zen LM models
const pageTree = {
  name: 'Docs',
  children: [
    {
      type: 'page' as const,
      name: 'Introduction',
      url: '/docs',
    },
    {
      type: 'folder' as const,
      name: 'Models',
      children: [
        {
          type: 'page' as const,
          name: 'zen-nano',
          url: '/docs/models/zen-nano',
        },
        {
          type: 'page' as const,
          name: 'zen-eco',
          url: '/docs/models/zen-eco',
        },
        {
          type: 'page' as const,
          name: 'zen-omni',
          url: '/docs/models/zen-omni',
        },
        {
          type: 'page' as const,
          name: 'zen-coder',
          url: '/docs/models/zen-coder',
        },
        {
          type: 'page' as const,
          name: 'zen-next',
          url: '/docs/models/zen-next',
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Papers',
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/docs/papers',
        },
      ],
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <Logo size={24} />
            <span className="font-bold">Zen LM</span>
          </div>
        ),
        transparentMode: "top",
      }}
      sidebar={{
        defaultOpenLevel: 0,
        banner: (
          <div className="rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 p-4 text-white">
            <h3 className="text-sm font-semibold">Zen Models 🌍</h3>
            <p className="mt-1 text-xs opacity-90">
              Democratizing AI while protecting our planet
            </p>
          </div>
        ),
        footer: (
          <div className="flex flex-col gap-2 p-4 text-xs text-muted-foreground">
            <a
              href="https://github.com/zenlm"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a href="https://zenlm.org" className="hover:text-foreground">
              Zen LM
            </a>
            <a href="https://hanzo.ai" className="hover:text-foreground">
              Hanzo AI
            </a>
          </div>
        ),
      }}
      links={[
        {
          text: "Models",
          url: "/docs/models",
          icon: <Brain className="size-4" />,
        },
        {
          text: "Papers",
          url: "/docs/papers",
          icon: <BookOpen className="size-4" />,
        },
        {
          text: "Tutorials",
          url: "/docs/tutorials",
          icon: <Sparkles className="size-4" />,
        },
      ]}
    >
      {children}
    </DocsLayout>
  )
}