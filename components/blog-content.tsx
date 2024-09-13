'use client';

import {CardDescription, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Time from "@/components/time";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {useSearchParams} from "next/navigation";
import {pluginConfig} from "@/blog.config";
import dayjs from "dayjs";
import Pagination from "@/plugins/pagination";

const BlogContent = ({posts}: any) => {
    // 过滤掉未来的文章
    posts = posts.filter((post: any) => dayjs(post.date).isBefore(dayjs()))

    // 查询参数
    const searchParams = useSearchParams()

    // 如果有标签 过滤出当前标签的文章
    const currentTag = searchParams.get('tag')
    if (currentTag) {
        posts = [...posts.filter((post: any) => post.tags.includes(currentTag))]
    }

    // 当前显示的文章数量
    const allPostCount = posts.length || 0

    // 如果分页开启
    const page: any = Number(searchParams.get('page')) || 1
    const {engine, pageSize} = pluginConfig.pagination
    if (engine) {
        if (engine === 'default') {
            posts = posts.slice((page - 1) * pageSize, page * pageSize)
        }
        if (engine === 'loadMore') {
            posts = posts.slice(0, page * pageSize)
        }
    }

    // 生成分页链接
    const generateHref = (page: number) => {
        if (currentTag) {
            return `/blog?tag=${currentTag}&page=${page}`
        } else {
            return `/blog?page=${page}`
        }
    }

    return (
        <>
            {posts.map((post: any, index: number) => (
                <div className={'space-y-4'} key={index}>
                    <div className={'space-y-4'}>
                        <div className={'block md:hidden'}>
                            <Time date={post.date}/>
                        </div>
                        <CardTitle className={'not-prose space-x-4 flex justify-start items-center'}>
                            <Link className={'hover:underline hover:underline-offset-8'} href={`/blog/${post.id}`}>
                                {post.title}
                            </Link>
                            {post.pinned && (
                                <Badge className={'li'}>
                                    Pinned
                                </Badge>
                            )}
                        </CardTitle>
                        <div className={'flex flex-col md:flex-row md:space-x-4'}>
                            <div className={'hidden md:block'}>
                                <Time date={post.date}/>
                            </div>
                            <div className={'space-x-2'}>
                                {post?.tags?.map((tag: string, index: number) => (
                                    <Link href={`/blog?tag=${tag}`}>
                                        <Badge key={index} variant={currentTag == tag ? "secondary" : "outline"}>
                                            #{tag}
                                        </Badge>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <CardDescription className={'text-base'}>
                        {post.summary}
                    </CardDescription>
                    <div className={'flex justify-end'}>
                        <Link href={`/blog/${post.id}`}>
                            <Button>
                                Read More <ArrowRight size={16} className={'ml-2'}/>
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
            <Pagination allCount={allPostCount} generateHref={generateHref}/>
        </>
    );
}


export default BlogContent