'use client';

import {CardDescription, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Time from "@/components/time";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {useSearchParams} from "next/navigation";
import {pluginConfig} from "@/blog.config";
import {
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import dayjs from "dayjs";

const getHref = (tag: string | null, page: number) => {
    if (tag) {
        return `/blog?tag=${tag}&page=${page}`
    } else {
        return `/blog?page=${page}`
    }
}

const BlogContent = ({posts}: any) => {
    // 过滤掉未来的文章
    posts = posts.filter((post: any) => dayjs(post.date).isBefore(dayjs()))

    // 查询参数
    const pagination = pluginConfig.pagination
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
    if (pagination?.engine) {
        if (pagination?.engine === 'default') {
            posts = posts.slice((page - 1) * pagination.pageSize, page * pagination.pageSize)
        }

        if (pagination?.engine === 'loadMore') {
            posts = posts.slice(0, page * pagination.pageSize)
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
                                    <Link href={getHref(tag, 1)}>
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
            {(
                pagination?.engine &&
                <div className={"pt-8"}>
                    {pagination?.engine === 'default' && (
                        <div className={'w-full grid grid-cols-3 justify-items-center items-center'}>
                            <div className={'w-full flex justify-start'}>
                                {page > 1 && (
                                    <PaginationPrevious href={getHref(currentTag, page - 1)}/>
                                )}
                            </div>
                            <div>
                                {page} of {Math.ceil(allPostCount / pagination.pageSize)}
                            </div>
                            <div className={'w-full flex justify-end'}>
                                {Math.ceil(allPostCount / pagination.pageSize) > page && (
                                    <PaginationNext href={getHref(currentTag, page + 1)}/>
                                )}
                            </div>
                        </div>
                    )}
                    {pagination?.engine === 'loadMore' && (
                        (allPostCount > page * pagination.pageSize) &&
                        <Link href={getHref(currentTag, page + 1)}>
                            <Button variant={"outline"} className={'w-full'}>
                                Load More ···
                            </Button>
                        </Link>
                    )}
                </div>
            )}
        </>
    );
}


export default BlogContent