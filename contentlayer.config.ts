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
        title: {type: 'string', required: true},
        summary: {type: 'string'},
        date: {type: 'date', required: true},
        tags: {type: 'list', of: {type: 'string'}, default: []},
    },
    computedFields
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post]
})