'use client'

import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

const HomeDescription = () => {
    return (
        <>
            <div>我是一个拥有极简 UI 的 BLOG 框架 🥰。</div>
            <div className={'flex items-center space-x-2'}>
                <div>就像我的名字一样，我是基于</div>
                <div className={'space-x-2'}>
                    <Link href={'https://nextjs.org/'} className={'cursor-alias'}>
                        <Badge>NEXT.js</Badge>
                    </Link>
                    <Link href={'https://www.tailwindcss.cn/'} className={'cursor-alias'}>
                        <Badge>Tailwindcss</Badge>
                    </Link>
                    <Link href={'https://ui.shadcn.com/'} className={'cursor-alias'}>
                        <Badge>shadcn-ui</Badge>
                    </Link>
                </div>
                <div>设计及实现出来的。</div>
            </div>
            <div>无需数据库，无需复杂配置，并且完全使用 TypeScript 😊。</div>
            <div>
                如果你也喜欢我
                <Button variant={'link'}>
                    请给我一个 Star
                </Button>
                这对我很有帮助。
            </div>
            <div className={'flex space-x-2'}>
                <div>
                    想要了解我更多？👉
                </div>
                <div className={'flex justify-start items-center space-x-4'}>
                    <Link href={'/blog'} className={'border-b-4 border-dashed'}>
                        阅读我的博客
                    </Link>
                    <Link href={'/projects'} className={'border-b-4 border-dashed'}>
                        查看我的项目
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HomeDescription