const siteData = {
    author: "yuanli", //网站作者
    title: "Aurora Blog", //网站的标题
    description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css", //网站的描述
    favicon: "/next.svg", //网站的图标
    language: "zh-CN", //网站默认的语言 zh-CN | en-US
    theme: "system", //网站的主题 light | dark | system
    siteUrl: "https://shadcn-blog.vercel.app", //网站的地址
    repo: ' https://github.com/timlrx/tailwind-nextjs-starter-blog', //github仓库地址

    //nav config
    navTitle: "Aurora Blog",
    navDescribe: "Front-end Engineer",
    navItems: [
        {
            name: '博客',
            value: '/blog'
        },
        {
            name: '项目',
            value: '/projects'
        }
    ],

    //home 社交链接
    socials: {
        email: "2865437316@qq.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        youtube: "",
        linkedin: "",
        instagram: "",
        weibo: "",
        zhihu: "",
        qq: "",
        wechat: "/9475164768e3659a328c4852f29f06d.jpg", //填入二维码图片地址
    },

    //blog config
    projects: [
        {
            name: "Next.js",
            url: "https://nextjs.org",
            description: "The React Framework for Production",
            status: ""
        },
        {
            name: "Tailwind CSS",
            url: "https://tailwindcss.com",
            description: "A utility-first CSS framework for rapid UI development.",
        },
        {
            name: "Shadcn-ui",
            url: "https://shadcn-ui.vercel.app",
            description: "A React UI library",
        }
    ] //项目展示
}

export default siteData