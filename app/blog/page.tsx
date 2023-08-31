import {allPosts} from 'contentlayer/generated'
import Title from "@/components/title";
import Link from "next/link";
import React from "react";

export default function Blog() {
    return (
        <div className={'space-y-8'}>
            <Title value={'博客'} />
            {allPosts.map((item,index) => (
                <Link className={'block space-y-2'} key={index} href={item.href}>
                    <div className={'border-l-4  text-zinc-400 pl-4'}>{item.datePublished}</div>
                    <div className={'font-medium underline underline-offset-4'}>
                        {item.title}
                    </div>
                    <div>分类：{item.categorize} 标签：{item.tags.join(',')}</div>
                    <div className={'text-muted-foreground'}>{item.summary}</div>
                </Link>
            ))}
        </div>
    )
}