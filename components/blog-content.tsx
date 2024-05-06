'use client';

import {CardDescription, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Time from "@/components/time";
import Link from "next/link";
import {ArrowRight} from "lucide-react";


const BlogContent = ({posts}: any) => {

    return (
        <div className={'pt-8 space-y-8'}>
            {posts.map((post: any, index: number) => (
                <div className={'space-y-4'} key={index}>
                    <div className={'space-y-4'}>
                        <CardTitle className={'not-prose'}>
                            <Link className={'underline underline-offset-4'} href={`/blog/${post.id}`}>
                                {post.title}
                            </Link>
                        </CardTitle>
                        <div className={'flex items-center space-x-4'}>
                            <Time date={post.time}/>
                            <div className={'space-x-2'}>
                                {post?.tags?.map((tag: string, index: number) => (
                                    <Badge key={index} variant={'secondary'}>
                                        {tag}
                                    </Badge>
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
    );
}


export default BlogContent