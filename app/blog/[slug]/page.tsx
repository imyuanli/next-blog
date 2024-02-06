import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {Suspense} from "react";
import DrawBack from "@/app/blog/components/draw-back";
import Time from "@/app/blog/components/time";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

const getPostsData = () => {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName: any) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
            id,
            ...matterResult.data,
            content: matterResult.content,
            stats: readingTime(matterResult.content)
        }
    })
}

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
            <article>
                <DrawBack/>
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

