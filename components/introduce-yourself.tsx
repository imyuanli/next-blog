'use client'

import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import siteData from "@/blog.config";


const IntroduceYourself = () => {
    const {header:{githubRepo}} = siteData
    return (
        <>
            <div>
                我是一个拥有极简 UI 的 BLOG 模板 🥰。
                <span className={'font-bold'}>
                    Simple, but better! 🤩
                </span>
            </div>
            <div>
                由<Link href={'https://nextjs.org/'} className={'cursor-alias mx-1'}>
                <Badge>NEXT.js</Badge>
            </Link>驱动，
                <Link href={'https://ui.shadcn.com/'} className={'cursor-alias mx-1'}>
                    <Badge>shadcn-ui</Badge>
                </Link>作为主题，
                <Link href={'https://www.tailwindcss.cn/'} className={'cursor-alias mx-1'}>
                    <Badge>Tailwindcss</Badge>
                </Link>为辅助开发的一个极简的博客模板。
            </div>
            <div>
                无需使用数据库，只需要简单配置即可使用。一分钟就足够拥有你的博客！😊
            </div>
            <div>
                如果你喜欢这个模板，可以给我一个⭐哦！<Link href={githubRepo} className={'border-b-4 border-dashed'}>GitHub</Link>
            </div>
            <div className={'flex flex-wrap space-x-2'}>
                <div>
                    如果你想了解更多👉
                </div>
                <Link href={'imyuanli.cn'} className={'border-b-2 border-dashed'}>
                    鸢离
                </Link>
            </div>
        </>
    );
}

export default IntroduceYourself