import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {Suspense} from "react";
import {getPostsData} from "@/app/blog/components/blog-section";
import DrawBack from "@/app/blog/components/draw-back";
import Time from "@/app/blog/components/time";

export async function generateStaticParams() {
    const posts = getPostsData()
    return posts.map((post) => ({
        slug: post.id
    }))
}

const getPost = (slug: string) => {
    const posts = getPostsData()
    return posts.find((post: any) => post.id === slug)
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
            <DrawBack/>
            <article>
                <div className={'mb-3 text-base text-zinc-400'}>
                    <Time date={post.date}/> · {post.stats.words} words · {post.stats.text}
                </div>
                <Suspense fallback={<>Loading...</>}>
                    <MDXRemote source={post.content}/>
                </Suspense>
            </article>
        </div>
    )
}

