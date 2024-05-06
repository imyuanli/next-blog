'use client';

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Time from "@/components/time";
import Link from "next/link";
import {ArrowRight} from "lucide-react";


const BlogContent = ({posts}: any) => {

    return (
        <div className={'md:pt-8 pt-4 space-y-8'}>
            {posts.map((post: any, index: number) => (
                <div>
                    <Card className={'col-span-1 border-none shadow-none'} key={index}>
                        <CardHeader className={'pl-0 space-y-4'}>
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
                        </CardHeader>
                        <CardContent className={'pl-0'}>
                            {post.summary}
                        </CardContent>
                        <CardFooter className={'flex justify-end pl-0'}>
                            <Link href={`/blog/${post.id}`}>
                                <Button>
                                    Read More <ArrowRight size={16} className={'ml-2'}/>
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    {index !== posts.length - 1 && <Separator/>}
                </div>
            ))}
        </div>
    );
}


export default BlogContent