declare module "*.mdx" {
  import type { MDXComponents } from "mdx/types"
  const MDXComponent: (props: { components?: MDXComponents }) => JSX.Element
  export default MDXComponent
}
declare module "rehype-shiki"
declare module "remark-hint"
