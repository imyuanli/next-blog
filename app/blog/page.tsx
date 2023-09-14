import {allPosts} from 'contentlayer/generated'
import Title from "@/components/title";
import Link from "next/link";
import React from "react";
import siteData from "@/blog.config";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import dayjs from "dayjs";
import Time from "@/components/time";

export default function Blog() {
    const {blog: {title, description}} = siteData

    const posts = allPosts.sort((a, b) => {
        return new Date(b?.date).getTime() - new Date(a.date).getTime()
    })

    return (
        <>
            <Title title={title} description={description}/>
            <div className={'relative space-y-8'}>
                <Separator className={'w-0.5 absolute sm:block hidden'} orientation={'vertical'}/>
                {posts.map((item: any, index: number) => (
                    <div className={'grid grid-cols-4 sm:gap-4 gap-2'}>
                        <div className={'col-span-1 ml-4 mt-1 sm:block hidden'}>
                            <Time date={item.date} />
                        </div>
                        <Link
                            className={'sm:col-span-3 col-span-4 group relative'}
                            key={index}
                            href={item.href}
                        >
                            <div className={'sm:hidden block mb-2'}>
                                <div className={'flex items-center h-4'}>
                                    <Separator className={'w-0.5 mr-2'} orientation={'vertical'}/>
                                    <Time date={item.date} />
                                </div>
                            </div>
                            <div className={'relative text-lg font-semibold'}>
                                {item.title}
                            </div>
                            <div className={'relative space-x-2'}>
                                {item?.tags.map((item: string, index: number) => (
                                    <Badge>
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                            <div className={'relative text-sm text-zinc-600 mt-2 mb-4'}>{item.summary}</div>
                            <div className={'underline underline-offset-4'}>Read More</div>
                            <div
                                className={'absolute -inset-y-6 -inset-x-6 -z-10 scale-95 bg-zinc-100 sm:rounded-md opacity-0 transition group-hover:scale-100 group-hover:opacity-100'}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}