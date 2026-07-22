# Pagora

[English](README.md) | [简体中文](README.zh-CN.md)

> **NextBlog 正在升级为 Pagora。**
>
> 一个基于 Next.js 与 Markdown/MDX，为博客、产品文档和 API Reference 打造的
> 可组合内容站点基础。

Pagora 是这个仓库的新篇章。它最初只是一个个人 Next.js 博客，现在正被重新构建为
配置驱动的内容站点基础，用来创建结构丰富、可以持续扩展的网站。

`Pagora` 由 **Page** 与 **Agora** 组合而来：让文章、产品文档和 API Reference 汇聚在
同一个空间里，同时不强迫所有网站使用相同的形态。

## 这次升级

这不只是一次仓库改名。Pagora 正在转向模块化架构，Blog、Docs 与 API Reference
将成为可以同时启用、独立组合的功能模块：

| 模块 | 路由 | 状态 |
| --- | --- | --- |
| Blog | `/blog` | 当前可用 |
| Docs | `/docs` | 规划中 |
| API Reference | `/api-reference` | 规划中 |

在新架构按里程碑逐步落地的过程中，现有 Blog 仍然可以正常使用。我们会尽可能保护
已有内容和 URL 的兼容性。

### 接下来会有什么

- 基于 `meta.json` 的嵌套内容与有序合集
- 带结构化导航的 Docs 模块
- 基于 OpenAPI 的 API Reference 页面
- 多主题与本地化内容
- 提供个人站点和开发者门户初始化配方的 `pagora` CLI

Pagora 正在积极开发中。欢迎 Star 或 Watch 本仓库，关注每一个新里程碑的进展。

## Pagora 如何工作

Pagora 不会要求网站永久选择 `blog`、`docs` 或 `api` 中的某一种模式。它们是拥有各自
路由和布局的可组合模块。

首页仍然是普通的应用代码，由 `app/page.tsx` 完全控制。个人站点可以让首页以博客为主，
产品站点也可以把它设计为 Landing Page，并导航到任意已经启用的模块。

## 快速开始

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

npm 包名 `pagora` 已经为未来的 CLI 预留，但当前里程碑尚未包含 CLI。在 CLI 正式实现前，
请直接使用本仓库。

## 配置

编辑 `pagora.config.ts`，配置站点全局信息、导航、Blog 模块和可选 integrations：

```ts
import { defineConfig } from "./lib/pagora-config"

export default defineConfig({
  site: {
    // 品牌、metadata、主题、社交链接和页脚。
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
    // 设置为 false 可以关闭对应 integration。
  },
})
```

首页内容不属于这份配置，请直接编辑 `app/page.tsx`。自定义页面的数据应放在对应页面附近；
例如，项目展示数据位于 `app/project/_data/projects.ts`。

## 撰写文章

在 `content/posts` 中创建 Markdown 或 MDX 文件：

```yaml
---
title: "Article title"
summary: "Article summary"
date: 2026-07-22
tags: ["Pagora"]
draft: false
pinned: 1
---
```

Content Collections 负责生成内容数据。Pagora 页面通过 `lib/content` 中的内容契约和适配器
读取数据，使 UI 不与底层内容引擎直接耦合。

嵌套目录和基于 `meta.json` 的合集目前尚未支持；它们是配置基础之后的下一个内容里程碑。

## 验证

```bash
npx tsc --noEmit --incremental false
npx eslint .
npm run build
```

## 许可证

Pagora 使用 [MIT License](LICENSE)。
