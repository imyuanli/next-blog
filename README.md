# Pagora

[English](README.md) | [简体中文](README.zh-CN.md)

> **NextBlog is becoming Pagora.**
>
> A composable content site foundation for blogs, documentation, and API references,
> built with Next.js and Markdown/MDX.

Pagora is the next chapter of this repository. What started as a personal Next.js blog is
being rebuilt into a configuration-driven foundation for creating content-rich websites.

The name combines **Page** and **Agora**: a place where articles, documentation, and API
references can live together without forcing every site into the same shape.

## The upgrade

This is more than a repository rename. Pagora is moving toward a modular architecture where
Blog, Docs, and API Reference are independent features that can be enabled together:

| Module        | Route            | Status    |
|---------------|------------------|-----------|
| Blog          | `/blog`          | Available |
| Docs          | `/docs`          | Planned   |
| API Reference | `/api-reference` | Planned   |

The current Blog remains usable while the new foundation is delivered in small, compatible
milestones. Existing content and URLs will be protected wherever possible.

### What is coming

- Nested content and ordered collections powered by `meta.json`
- A first-class Docs module with structured navigation
- OpenAPI-powered API reference pages
- Multiple themes and localized content
- A `pagora` CLI with starter recipes for personal sites and developer portals

Pagora is under active development. Star or watch the repository if you want to follow the
upgrade as each milestone lands.

## How Pagora works

Pagora does not force a site into a permanent `blog`, `docs`, or `api` mode. These are
composable modules with their own routes and layouts.

The homepage is normal application code in `app/page.tsx`. A personal site can make it
blog-focused, while a product site can use it as a landing page that links to any enabled
modules.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The npm name `pagora` has been reserved for the future CLI, but the CLI is not part of this
milestone yet. Until it is implemented, use this repository directly.

## Configuration

Edit `pagora.config.ts` to configure global site information, navigation, the Blog module,
and optional integrations:

```ts
import {defineConfig} from "./lib/pagora-config"

export default defineConfig({
  site: {
    // Branding, metadata, theme, social links, and footer.
  },
  navigation: [],
  modules: {
    blog: {
      path: "/blog",
      title: "Blog",
      description: "Latest articles and updates.",
      pinnedSort: "desc",
      tags: {
        path: "/tags",
        title: "Tags",
        description: "Browse posts by tag.",
      },
    },
  },
  integrations: {
    // Set an integration to false to disable it.
  },
})
```

Homepage content does not belong in this config. Edit `app/page.tsx` directly. Data for
custom pages should stay next to that page; for example, project data lives in
`app/project/_data/projects.ts`.

## Writing posts

Create Markdown or MDX files in `content/posts`:

```yaml
---
title: "Article title"
summary: "Article summary"
date: 2026-07-22
tags: [ "Pagora" ]
draft: false
pinned: 1
---
```

Content Collections generates the source data. Pagora pages access it through the contracts
and adapter in `lib/content`, which keeps the UI independent from the underlying content
engine.

Nested folders and `meta.json` collections are not supported yet; they are the next content
milestone after the configuration foundation.

## Validation

```bash
npx tsc --noEmit --incremental false
npx eslint .
npm run build
```

## License

Pagora is licensed under the [MIT License](LICENSE).
