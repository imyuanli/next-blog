const siteData: any = {
    //全局配置
    author: "yuanli", //作者

    //如何更换网站的favicon呢？
    //https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
    // favicon: "/favicon.ico", 这个配置是不生效的，最简单的办法是替换 app/favicon.ico 文件即可，其余方式请参考上面的文档

    title: "Next.js ShadcnUI Blog", //网站的标题
    description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css", //网站的描述
    theme: "light", //网站的主题 light | dark | system
    language: "zh-CN", //网站的语言，这个会影响到一些 SEO 的配置，具体请参考 https://nextjs.org/docs/advanced-features/i18n-routing

    //以下配置有个共同点就是 description 字段，这个字段可以为空
    //header config
    header: {
        logo: "/logo.png", //图标在public文件夹里
        title: "Next.js ShadcnUI Blog",
        navList: [
            {
                name: '项目',
                value: '/projects'
            },
            {
                name: '博客',
                value: '/blog'
            },
            {
                name: '标签',
                value: '/tags'
            },
        ],
        githubRepo: 'https://github.com/imyuanli', // 你当前这个博客项目的仓库地址
    },

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