import {useMDXComponent} from 'next-contentlayer/hooks'
import {allPosts} from 'contentlayer/generated'
import {getPost} from "@/lib/utils";
import {notFound} from "next/navigation";

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

    const MDXContent = useMDXComponent(post.body.code)

    return (
        <article className={'prose prose-Stone dark:prose-invert prose-headings:font-title font-default max-w-full'}>
            <MDXContent/>
        </article>
    )
}

