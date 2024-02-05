import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {ArrowRight} from "lucide-react";
import Time from "@/app/blog/components/time";
import readingTime from "reading-time";

export const getPostsData = () => {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName: any) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
            id,
            ...matterResult.data,
            content: matterResult.content,
            stats: readingTime(matterResult.content)
        }
    })
}

const BlogSection = () => {
    const posts = getPostsData()

    return (
        <>
            <Separator/>
            <div className={'space-y-4 relative'}>
                {posts.map((post: any, index: number) => (
                    !post?.draft && <Card className={'col-span-1 border-none'} key={index}>
                      <CardHeader className={'pl-0'}>
                        <Time date={post.time}/>
                        <CardTitle>{post.title}</CardTitle>
                        <div className={'space-x-1'}>
                            {post.tags.map((tag: string, index: number) => (
                                <Badge key={index} variant={'secondary'}>
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                      </CardHeader>
                      <CardContent className={'pl-0'}>
                          {post.summary}
                      </CardContent>
                      <CardFooter className={'flex justify-end pl-0'}>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant={'ghost'}>
                            Read More <ArrowRight size={16} className={'ml-2'}/>
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}


export default BlogSection