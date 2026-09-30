# zen-docs — AI Knowledge Base

**Project**: zen-docs
**Organization**: zenlm
**Repository**: https://github.com/zenlm/zen-docs
**HuggingFace**: https://huggingface.co/zenlm/zen-docs
**Last Updated**: 2026-02-27

## Overview

zen-docs is a fumadocs site about the Zen LM models. Zen LM is the open model
family of Zoo Labs Foundation, a 501(c)(3) non-profit; Zen 6 and Zen 6 Flash are
available now and Zen 7 is a research preview (request access at
https://hanzo.ai/research-access). The current documentation site is
docs.zenlm.org (github.com/zenlm/docs).

## Serving

Nothing serves this repository. GitHub Pages is set to deploy from
`.github/workflows/deploy.yml` with no custom domain, and every run fails at
pnpm setup (the workflow's `version: 10` conflicts with `packageManager`), so
https://zenlm.github.io/zen-docs/ answers "Site not found". No DNS name points
here.

## Build

```bash
npx pnpm@10.12.4 install --frozen-lockfile
npm run build   # fumadocs-mdx → next build → scripts/check-zen.mjs out
```

`scripts/check-zen.mjs` reads every built page and fails on a name from
`zen.upstream` outside a `data-upstream` element.

## Rules for AI Assistants

1. **ALWAYS** update LLM.md with significant discoveries
2. **NEVER** commit model weights (*.safetensors, *.bin, *.gguf, *.pt)
3. **NEVER** commit symlinked files (CLAUDE.md, AGENTS.md, GEMINI.md, QWEN.md)
4. **NEVER** create random summary files — update THIS file only

## Context

This file (`LLM.md`) is symlinked as CLAUDE.md, AGENTS.md, GEMINI.md, QWEN.md.

---

*Part of the Zen AI family — Clarity Through Intelligence*
