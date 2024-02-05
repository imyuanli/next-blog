// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.

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
                name: 'Tags',
                value: '/tags'
            },
            {
                name: 'Projects',
                value: '/projects'
            },
            {
                name: 'About',
                value: '/about'
            }
        ]
    },

    socials: {
        email: "286547316@qq.com",
        github: "https://github.com/imyuanli",
        twitter: "https://twitter.com",
        linkedin: "",
        facebook: "",
        instagram: "",
        youtube: "",
    }

}

export default siteData