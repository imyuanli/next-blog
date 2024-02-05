import siteData from "@/blog.config";
import Title from "@/components/title";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Time from "@/app/blog/components/time";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import {Separator} from "@/components/ui/separator";

const getPostsData = () => {
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

const Blog = () => {
    const {blog: {title, description}} = siteData;
    const posts = getPostsData().filter((post: any) => !post.draft)

    return (
        <>
            <Title title={title} description={description}/>
            <div className={'space-y-4'}>
                {posts.map((post: any, index: number) => (
                    !post?.draft &&
                      <div>
                        <Card className={'col-span-1 border-none shadow-none'} key={index}>
                          <CardHeader className={'pl-0'}>
                            <div className={'flex items-center space-x-4'}>
                              <Time date={post.time}/>
                              <div className={'hidden md:block ml-4 space-x-1'}>
                                  {post.tags.map((tag: string, index: number) => (
                                      <Badge key={index} variant={'secondary'}>
                                          {tag}
                                      </Badge>
                                  ))}
                              </div>
                            </div>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription className={'block md:hidden space-x-1'}>
                                {post.tags.map((tag: string, index: number) => (
                                    <Badge key={index} variant={'secondary'}>
                                        {tag}
                                    </Badge>
                                ))}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className={'pl-0'}>
                              {post.summary}
                          </CardContent>
                          <CardFooter className={'flex justify-start pl-0'}>
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
        </>
    )
}

export default Blog