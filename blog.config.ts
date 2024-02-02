// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.

const siteData: any = {
    author: "yuanli", //作者
    title: "Next Blog", //会显示在浏览器的标题栏
    description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css", //网站的描述
    theme: "light", // light | dark
    language: "zh-CN", //网站的语言，这个会影响到一些 SEO 的配置，具体请参考 https://nextjs.org/docs/advanced-features/i18n-routing

    // how to change the favicon of the website?
    // change the app/favicon.ico file directly，or refer to the document below
    // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

    //header config
    header: {
        logo: "/logo.png",  //  /public/logo.png
        title: "Next Blog", // header title

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
        ],
        githubRepo: ''
    },


    // //全局配置
    // author: "yuanli", //作者
    //
    // //如何更换网站的favicon呢？
    // //https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
    // // favicon: "/favicon.ico", 这个配置是不生效的，最简单的办法是替换 app/favicon.ico 文件即可，其余方式请参考上面的文档
    //
    // title: "Next Blog", //会显示在浏览器的标题栏
    // description: "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css", //网站的描述
    // theme: "light", //网站的主题 light | dark | system
    // language: "zh-CN", //网站的语言，这个会影响到一些 SEO 的配置，具体请参考 https://nextjs.org/docs/advanced-features/i18n-routing
    //
    // //以下配置有个共同点就是 description 字段，这个字段可以为空
    // //header config
    // header: {
    //     logo: "/logo.png", //图标在public文件夹里
    //     title: "Next Blog", // header部分的标题
    //     navList: [
    //         {
    //             name: '项目',
    //             value: '/projects'
    //         },
    //         {
    //             name: '博客',
    //             value: '/blog'
    //         }
    //     ], // 导航栏的链接
    //     githubRepo: 'https://github.com/imyuanli/next-blog', // 你当前这个博客项目的仓库地址
    // },
    //
    // //home config
    // home: {
    //     title: "你好，我是 Next Blog", //首页的标题
    //     description: "这是一个基于 Next.js 和 Shadcn-ui 的博客模板，你可以在这里快速搭建一个博客，然后部署到 Vercel 上。",
    //     intro: Intro,  // 你的个人介绍，支持 HTML 标签，由于可能需要写一些样式，所以这里抽离成了一个组件
    //     //社交账号，如果不需要某个社交账号，直接删除即可或留空
    //     socials: {
    //         email: "2865437316@qq.com",
    //         github: "https://github.com/imyuanli",
    //         twitter: "https://twitter.com",
    //         facebook: "https://facebook.com",
    //         youtube: "",
    //         linkedin: "",
    //         instagram: "",
    //         weibo: "",
    //         zhihu: "",
    //         qq: "",
    //         wechat: "/wechat.jpg", //微信公众号图片地址，public文件夹
    //     },
    // },
    //
    // //projects config
    // projects: {
    //     title: "作品",
    //     description: "下面展示的项目仅供参考，并非真实的状态",// || null
    //     //有多种状态 稳定运行 running | 维护中 bug | 开发中 dev | 不再维护 offline
    //     // running状态可以不填写status
    //     //当然 你也可以不填写status字段，这样就不会显示状态了
    //     list: [
    //         {
    //             name: "Next.js",
    //             url: "https://nextjs.org",
    //             description: "The React Framework for Production",
    //         },
    //         {
    //             name: "Tailwind CSS",
    //             url: "https://tailwindcss.com",
    //             description: "A utility-first CSS framework for rapid UI development.",
    //             status: "bug"
    //         },
    //         {
    //             name: "Shadcn-ui",
    //             url: "https://shadcn-ui.vercel.app",
    //             description: "A React UI library",
    //             status: "dev"
    //         },
    //         {
    //             name: "Contentlayer",
    //             url: "https://contentlayer.dev/",
    //             description: "A Next.js plugin for creating and rendering MDX-based content in a fully typed, customizable way",
    //             status: "offline"
    //         }
    //     ]
    // },
    //
    // //blog config
    // blog: {
    //     title: "博客",
    //     description: "这里是博客的描述，你可以在这里写一些博客的简介",
    // }
}

export default siteData