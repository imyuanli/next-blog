'use client';

import {Separator} from "@/components/ui/separator";
import {usePathname, useSearchParams} from "next/navigation";
import siteData from "@/blog.config";


const Title = () => {
    const pathname = usePathname()
    const nameArr = pathname.split('/')
    const name = nameArr[nameArr.length - 1]

    // 如果是博客页面并带有tag参数
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')
    if (name === 'blog' && tag) {
        return <div className={'container pt-8'}>
            <h1>{tag}</h1>
            <p className={'text-zinc-600'}>
                This is a list of all posts with the tag {tag}.
            </p>
            <Separator/>
        </div>
    }

    const data = name ? siteData[name] : siteData.home

    return (
        data && <div className={'container pt-8'}>
            <h1>{data?.title}</h1>
            {data?.description && <p className={'text-zinc-600'}>{data?.description}</p>}
            <Separator/>
        </div>
    );
}


export default Title