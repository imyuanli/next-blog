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
        description: 'All of my long-fesign, and more, collected in chronological order.'
    },

    project: {
        title: "Look what I've done",
        description: "Some small tools made by oneself",

        // name, description, link are required
        // github: the address of the project's github repo
        // status: active | inactive
        // and so on
        // you can add more fields according to your needs ,but you need to modify the code in the projects/page.tsx file
        projects: [
            {
                name: "NextBlog",
                description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css",
                link: "https://imyuanli.vercel.app/",
                status: "active",
            },
            {
                name: "NextBlog",
                description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css",
                link: "https://next-blog-imyuanli.vercel.app/",
                github: "https://github.com/imyuanli/next-blog",
                status: "bug",
            },
            {
                name: "NextBlog",
                description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css",
                link: "https://next-blog-imyuanli.vercel.app/",
                status: "inactive",
            },
            {
                name: "NextBlog",
                description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css",
                link: "https://next-blog-imyuanli.vercel.app/",
                status: "dev",
            },
        ],
        // status color and text
        getStatus: (status: string) => {
            switch (status) {
                case "active":
                    return {
                        variant: "default",
                        text: "ACTIVE",
                    }
                case "inactive":
                    return {
                        variant: "secondary",
                        text: "INACTIVE",
                    }
                case "bug":
                    return {
                        variant: "destructive",
                        text: "BUG",
                    }
                case "dev":
                    return {
                        variant: "outline",
                        text: "DEV",
                    }
                default:
                    return {
                        variant: "default",
                        text: "ACTIVE",
                    }
            }
        },

        view: "list", // grid | list

        target: "_blank", // _blank | _self | _parent | _top


    }
}

export default siteData