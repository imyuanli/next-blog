import {defineDocumentType, ComputedFields, makeSource} from 'contentlayer/source-files'
import readingTime from 'reading-time'

const computedFields: ComputedFields = {
    href: {type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}`},
    readingTime: {type: 'json', resolve: (post) => readingTime(post.body.raw)},
    slug: {type: 'string', resolve: (post) => post._raw.flattenedPath.replace(/^.+?(\/)/, '')}
}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        tags: { type: 'list', of: { type: 'string' }, default: [] },
        lastmod: { type: 'date' },
        draft: { type: 'boolean' },
        summary: { type: 'string' },
        images: { type: 'list', of: { type: 'string' } },
        authors: { type: 'list', of: { type: 'string' } },
        layout: { type: 'string' },
        bibliography: { type: 'string' },
        canonicalUrl: { type: 'string' },
    },
    computedFields
}))


export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post]
})