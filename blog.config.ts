import HomeDescription from "@/components/home-description";

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

    //home config
    home: {
        title: "你好，我是 Next.js ShadcnUI Blog",
        description: "这是一个基于 Next.js 和 Shadcn-ui 的博客模板，你可以在这里快速搭建一个博客，然后部署到 Vercel 上。",
        intro: HomeDescription,  // 你的个人介绍，支持 HTML 标签，由于可能需要写一些样式，所以这里抽离成了一个组件
        //社交账号，如果不需要某个社交账号，直接删除即可或留空
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
            wechat: "/wechat.jpg", //填入二维码图片地址
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