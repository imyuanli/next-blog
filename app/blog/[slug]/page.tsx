import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {Suspense} from "react";
import Time from "@/components/time";
import {getPostsData} from "@/app/server-utils";
import DrawBack from "@/components/draw-back";
import Comments from "@/plugins/comments";
import shiki from 'rehype-shiki'
import {toc} from "@jsdevtools/rehype-toc";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const getPost = (slug: string) => getPostsData().find((post: any) => post.id === slug)

export async function generateStaticParams() {
    return getPostsData().map((post) => ({
        slug: post.id
    }))
}

export async function generateMetadata({params}: any) {
    const post: any = getPost(params.slug)
    return {
        title: post.title,
        description: post.summary,
    }
}

export default function Post({params}: any) {
    const {slug} = params
    const post: any = getPost(slug)
    if (!post || post?.draft) notFound()

    return (
        <div className={'relative'}>
            <article>
                <DrawBack/>
                <div className={'mb-3 text-base text-zinc-400'}>
                    <Time date={post.date}/> · {post.stats.words} words · {post.stats.text}
                </div>
                <Suspense fallback={<>Loading...</>}>
                    <MDXRemote
                        source={post.content}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [
                                    remarkGfm,
                                ],
                                rehypePlugins: [
                                    shiki,
                                    rehypeSlug,
                                    toc,
                                    rehypeStringify,
                                    rehypeAutolinkHeadings,
                                ],
                                remarkRehypeOptions: {
                                    allowDangerousHtml: true
                                }
                            }
                        }}
                    />
                </Suspense>
            </article>
            <Comments/>
        </div>
    )
}

