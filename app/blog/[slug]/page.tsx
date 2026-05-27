import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Suspense } from "react"
import Time from "@/components/time"
import { getPostsData } from "@/app/server-utils"
import SideNav from "@/components/side-nav"
import Comments from "@/plugins/comments"
import shiki from "rehype-shiki"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"
import { remark } from "remark"
import remarkFlexibleToc from "remark-flexible-toc"
import readingTime from "reading-time"
import remarkNormalizeHeadings from "remark-normalize-headings"
import Toc from "@/components/toc"
import { Button } from "@/components/ui/button"
import { TableProperties } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Metadata } from "next"

const getPost = async (slug: string) => {
  const res = getPostsData()
  console.log("res", res)
  console.log("slug", slug)
  const post: any = getPostsData().find((post) => post.id === slug)
  console.log("post123123123", post)
  if (!post) return null
  // 获取目录数据
  const file = await remark()
    .use(remarkNormalizeHeadings)
    .use(remarkFlexibleToc)
    .process(post.content)
  return {
    ...post,
    toc: file.data.toc,
    stats: readingTime(post.content),
  }
}

export async function generateStaticParams() {
  return getPostsData().map((post) => ({
    slug: post.id,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = await params
  const post: any = await getPost(slug)
  if (!post) return notFound()
  return {
    title: post.title,
    description: post.summary,
  }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: any = await getPost(slug)
  console.log("post", post)
  if (!post || post?.draft) notFound()

  return (
    <div className={"w-full flex flex-col gap-4"}>
      {/*mobile*/}
      <div
        className={
          "block lg:hidden sticky top-20 p-2 bg-white/80 backdrop-blur-md z-10 w-full shadow-sm"
        }
      >
        <div className={"flex justify-between"}>
          <div className={"space-x-4"}>
            <SideNav />
          </div>
          <Drawer>
            <DrawerTrigger>
              <Button size={"icon"} variant={"ghost"}>
                <TableProperties size={20} />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Table of contents</DrawerTitle>
              </DrawerHeader>
              <Toc toc={post.toc} />
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/*pc*/}
      <div className={"h-full relative pt-8 flex gap-4"}>
        <div className={"h-full sticky top-28"}>
          <SideNav />
        </div>
        <article className={"w-full"}>
          <div className={"mb-3 text-base text-zinc-400"}>
            <Time date={post.date} /> · {post.stats.words} words · {post.stats.text}
          </div>
          <Suspense fallback={<>Loading...</>}>
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkNormalizeHeadings, remarkGfm],
                  rehypePlugins: [shiki, rehypeSlug, rehypeStringify, rehypeAutolinkHeadings],
                  remarkRehypeOptions: {
                    allowDangerousHtml: true,
                  },
                },
              }}
            />
          </Suspense>
        </article>
        <div className={"w-full h-full max-h-[80vh] sticky top-28"}>
          <div className={"text-base font-bold mb-2"}>Table of contents</div>
          <Toc toc={post.toc} />
        </div>
      </div>
      <Comments />
    </div>
  )
}
