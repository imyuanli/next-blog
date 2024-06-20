'use client';

import {CardDescription, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Time from "@/components/time";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {useSearchParams} from "next/navigation";
import {Suspense} from "react";


const BlogContent = ({posts}: any) => {
    const searchParams = useSearchParams()
    const currentTag = searchParams.get('tag')

    if (currentTag) {
        posts = posts.filter((post: any) => post.tags.includes(currentTag))
    }

    return (
        <Suspense>
            <div className={'pt-8 space-y-8'}>
                {posts.map((post: any, index: number) => (
                    <div className={'space-y-4'} key={index}>
                        <div className={'space-y-4'}>
                            <div className={'block md:hidden'}>
                                <Time date={post.time}/>
                            </div>
                            <CardTitle className={'not-prose'}>
                                <Link className={'underline underline-offset-4'} href={`/blog/${post.id}`}>
                                    {post.title}
                                </Link>
                            </CardTitle>
                            <div className={'flex flex-col md:flex-row md:space-x-4'}>
                                <div className={'hidden md:block'}>
                                    <Time date={post.time}/>
                                </div>
                                <div className={'space-x-2'}>
                                    {post?.tags?.map((tag: string, index: number) => (
                                        <Link href={`/blog?tag=${tag}`}>
                                            <Badge key={index} variant={currentTag == tag ? "default" : "secondary"}>
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
            </div>
        </Suspense>
    );
}


export default BlogContent