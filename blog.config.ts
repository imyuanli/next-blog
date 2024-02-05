// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.
import Intro from "./app/intro.mdx"

const siteData: any = {
    author: "yuanli",  // author name
    title: "NextBlog", // website title
    description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css", // website description
    theme: "light", // light | dark
    language: "zh-CN", // zh-CN | en
    githubRepo: "https://github.com/imyuanli/next-blog", // your blog's github repo

    // how to change the favicon of the website?
    // change the app/favicon.ico file directly，or refer to the document below
    // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

    //header config
    header: {
        logo: "/logo.png",  //  /public/logo.png
        title: "NextBlog", // header title

        // navigation bar
        routes: [
            {
                name: 'Blog',
                value: '/blog'
            },
            {
                name: 'Projects',
                value: '/projects'
            }
        ]
    },

    home: {
        title: "Welcome to NextBlog",

        // introduction or about me
        intro: Intro, // file path of the introduction
        socials: {
            email: "286547316@qq.com",
            github: "https://github.com/imyuanli",
            twitter: "https://twitter.com",
            linkedin: "",
            facebook: "",
            instagram: "",
            youtube: "",
        },
    },

    blog: {
        title: 'My Blog',
        description: 'All of my long-form thoughts on programming, product design, and more, collected in chronological order.'
    },

    projects: [
        {
            name: "NextBlog",
            description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css",
            link: "https://next-blog-imyuanli.vercel.app/",
            status: "active",
        },
        {
            name: "NextBlog",
            description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css",
            link: "https://next-blog-imyuanli.vercel.app/",
            status: "active",
        },
    ],
    // status color and text
    getStatus: (status: string) => {
        switch (status) {
            case 'bug':
                return {
                    variant: 'destructive',
                    text: '维护中'
                }
            case 'dev':
                return {
                    variant: 'default',
                    text: '开发中'
                }
            case 'offline':
                return {
                    variant: 'secondary',
                    text: '不再维护'
                }
            default:
                return {
                    variant: 'default',
                    text: '开发中'
                }
        }
    },
}

export default siteData