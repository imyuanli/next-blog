import {useMDXComponent} from 'next-contentlayer/hooks'
import {allPosts} from 'contentlayer/generated'
import {getPost} from "@/lib/utils";
import {notFound} from "next/navigation";
import Time from "@/components/time";
import React from "react";
import DrawBack from "@/components/draw-back";

export const generateMetadata = ({params}: any) => {
    const {title, description}: any = getPost(params?.slug)
    return {
        title,
        description,
    }
}

export const generateStaticParams = async () => allPosts.map((post) => ({slug: post.slug}))

export default function Post({params}: any) {
    const post = getPost(params?.slug)

    if (!post) notFound()

    const {title, date, body, readingTime}: any = post
    const MDXContent = useMDXComponent(body.code)
    return (
        <div className={'relative'}>
            <DrawBack/>
            <article className={'prose prose-slate dark:prose-invert max-w-none'}>
                <div className={'mb-2 text-sm text-zinc-400'}>
                    <Time date={date}/> · {readingTime.words} words · {readingTime.text}
                </div>
                <h1>{title}</h1>
                <MDXContent/>
            </article>
        </div>
    )
}

