import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import dayjs from "dayjs";

export const getPostsData = () => {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory)
    const posts: any = fileNames.map((fileName: any) => {
        // 这里匹配 md 或者 mdx
        const id = fileName.replace(/\.mdx?$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        return {
            id,
            ...matterResult.data,
            content: '\r\n' + `# ${matterResult?.data.title}` + matterResult.content,
            stats: readingTime(matterResult.content)
        }
    }).filter((post: any) => !post.draft)
        .filter((post: any) => dayjs(post.date).isBefore(dayjs()))
    const {pinnedPosts, commonPosts} = posts.reduce((acc: any, post: any) => {
        if (post.pinned) {
            acc.pinnedPosts.push(post)
        } else {
            acc.commonPosts.push(post)
        }
        return acc
    }, {pinnedPosts: [], commonPosts: []})

    return [
        ...pinnedPosts.sort((a: any, b: any) => a.pinned - b.pinned),
        ...commonPosts.sort((a: any, b: any) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1)
    ]
}

export const getTagsData = () => {
    return getPostsData().reduce((acc: any, post: any) => {
        post.tags.forEach((tag: any) => {
            if (!acc[tag]) {
                acc[tag] = 0
            }
            acc[tag]++
        })
        return acc
    }, {})
}