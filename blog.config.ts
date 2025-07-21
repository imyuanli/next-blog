// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.

import Intro from "./components/intro.mdx" // introduction or about me

// Page Config
// The following is the configuration of the blog, including the author, title, description, and other settings.
const blogConfig: any = {
    // author name
    author: "xqijy_pvuza",

    // Logo
    logo: {
        // how to change the favicon of the website?
        // change the app/favicon.ico file directly，or refer to the document below
        // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

        // you can use image or text as the logo, you can choose both, but the image will be displayed first
        image: "/logo.png", //  the file path of the logo in the public directory
        text: "NextBlog", // null || text

        // whether the logo is a link to the home page
        isHomeLink: true, // true | false
    },

    // website title
    title: "nextblog",

    // website description
    description: "a minimalist blog created with next.js ,shadcn-ui and tailwind.css",

    // light | dark
    theme: "light",

    // your blog repo || your github repo || null
    githubRepo: "https://github.com/zawa8/hblog1",

    // routes
    routes: [ { name: 'blog', value: '/blog' }, { name: 'tags', value: '/tags' }, { name: 'prozects', value: '/project' }, ],

    // socials links
    socials: {
        email: "heksadesiml@gmail.com",
        github: "https://github.com/zawa8",
        twitter: "https://twitter.com",
        linkedin: "",
        facebook: "https://fb.com/ztrabc",
        instagram: "",
        youtube: "",
    },

    // home page config
    home: {
        title: "welcome to nextblog",
        description: "a minimalist blog created with next.js ,shadcn-ui and tailwind.css",

        // introduction or about me
        // Why use components instead of configurations? Because this makes the homepage more customizable instead of a hard-coded template.
        intro: Intro, // file path of the introduction
    },

    // blog page config
    blog: {
        title: 'changelog & blogs',
        description: 'regarding the update logs of nextblog, blogs, and others, etc.',

        // pinnedSort is used to sort the pinned articles, the default is "desc" (descending), you can also set it to "asc" (ascending)
        pinnedSort: "desc", // "asc" | "desc"
    },

    // tags page config
    tags: {
        title: 'tags',
        description: 'all of my tags, collected in alphabetical order.',
    },

    // project page config
    project: {
        title: "look what i've done",
        description: "some small tools made by oneself",

        // status color and text
        getStatus: (status: string) => {
            // you can customize the status color and text！

            // dev: Under development or planning.
            // active: Currently focused on this project.
            // filed: Not upgrading will only fix bugs.
            // offline: Going offline soon.
            // none: Keep running.
            if (!status) return {}

            switch (status) {
                case "active":
                    return {
                        variant: "default",
                        text: "ACTIVE",
                    }
                case "dev":
                    return {
                        variant: "secondary",
                        text: "DEV",
                    }
                case "filed":
                    return {
                        variant: "outline",
                        text: "FILED",
                    }
                case "offline":
                    return {
                        variant: "destructive",
                        text: "OFFLINE",
                    }
            }
        },

        // name, description, href are required
        // github: username/repo
        // status: getStatus return value
        // and so on
        // you can add more fields according to your needs ,but you need to modify the code in the project/page.tsx file
        projects: [
            {
                name: "NextBlog",
                description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css",
                href: "https://next-blog.imyuanli.cn",
                github: "imyuanli/next-blog",
                status: "active",
            },
            {
                name: "AllDone",
                description: "One stop project management platform",
                status: "dev",
            },
            {
                name: "Slash Editor",
                description: "A simple rich text editor",
                href: "https://slash.imyuanli.cn",
                github: "imyuanli/slash-editor",
            },
            {
                name: "RMX",
                description: "Readme is an online editor that can help developers quickly create README.md for their projects, while also meeting some templates for Github personal pages",
                href: "https://readme.imyuanli.cn/",
                github: "imyuanli/readme",
                status: "filed",
            },
            {
                name: "Resume",
                description: "A simple resume template",
                href: "https://resume.imyuanli.cn/",
                github: "imyuanli/resume",
                status: "offline",
            },
        ],
    },

    // Footer
    footer: {
        isShow: true,
        // whether to display the "Powered by NextBlog" in the footer，you can set it to false，but I hope you can keep it，thank you！
        isShowPoweredBy: true,
    },
}

// Plugins Config
// Why define the following as plugins? Because these are some dispensable functions that can be added or removed at will.
const pluginConfig = {
    // Comment
    comment: {
        engine: "giscus", // "" | giscus | utterances

        // giscus doc: https://giscus.app
        giscus: {
            repo: "zawa8/hblog1",
            repoId: "R_kgDOPFocuQ",
            category: "Ideas",
            categoryId: "DIC_kwDOPFocuc4Csdhf",
            mapping: "pathname",
            reactionsEnabled: "1",
            emitMetadata: "0",
            inputPosition: "bottom",
            theme: "light",
            lang: "en",
            loading: "lazy",
        },

        // utterances doc: https://utteranc.es
        utterances: {
            src: "https://utteranc.es/client.js",
            repo: "imyuanli/next-blog",
            "issue-term": "pathname",
            theme: "github-light",
            crossorigin: "anonymous",
            label: "",
            async: true
        }
    },

    // Pagination
    pagination: {
        engine: "default", // "" | default:pagination button | loadMore:loading more button
        pageSize: 5,
    },

    // Search
    search: {
        engine: "cmdk", //  "" | "cmdk"
    },

    //   Analytics
    analytics: {
        engine: "vercel", // "" | "vercel"
        // vercel doc: https://vercel.com/docs/analytics
    },

    // newsletter
    newsletter: {
        engine: "buttondown", // "" | "buttondown"

        title: "subscribe to qhe newsletter", // required
        description: "stay updated on new releases and features, guides, and case studies.",

        position: {
            footer: true, // in the footer
            blog: true, // on the blog list page
        },

        // buttondown doc: https://buttondown.com
        buttondown: {
            username: "xqijy_pvuza", //  your buttondown username
        },
    },
}

export {
    blogConfig,
    pluginConfig
}