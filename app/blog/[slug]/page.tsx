import {useMDXComponent} from 'next-contentlayer/hooks'
import {allPosts} from 'contentlayer/generated'
import {getPost} from "@/lib/utils";
import {notFound} from "next/navigation";

export const generateMetadata = ({params}) => {
    const {title, summary} = getPost(params)
    return {
        title,
        description: summary,
    }
}

export const generateStaticParams = async () => allPosts.map((post) => ({slug: post.slug}))

export default function DocPage({params}: { params: { slug: string } }) {
    const post = getPost(params)
    if (!post) notFound()

    const MDXContent = useMDXComponent(post.body.code)

    return (
        <article className={'prose'}>
            <MDXContent/>
        </article>
    )
}

