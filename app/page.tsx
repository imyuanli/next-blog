import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Title from "@/components/title";
import SocialList from "@/components/social-list";
import {Badge} from "@/components/ui/badge";

export default function Home() {

    return (
        <div className={'space-y-4'}>
            <Title value={'Next.js ShadcnUI Blog'}/>
            <div className={'space-y-1'}>
                <div>一个拥有极简 UI 的 BLOG 框架。</div>
                <div className={'flex items-center space-x-2'}>
                    <div>就像它的名字一样，它是基于</div>
                    <div className={'space-x-2'}>
                        <Link href={'https://nextjs.org/'}>
                            <Badge>NEXT.js</Badge>
                        </Link>
                        <Link href={'https://www.tailwindcss.cn/'}>
                            <Badge>Tailwindcss</Badge>
                        </Link>
                        <Link href={'https://ui.shadcn.com/'}>
                            <Badge>shadcn-ui</Badge>
                        </Link>
                    </div>
                    <div>设计及实现出来的。</div>
                </div>
                <div>并且它完全使用 TypeScript。</div>
            </div>
            <div className={'flex justify-start items-center space-x-2'}>
                <Link href={'/blog'}>
                    <Button>
                        阅读我的博客
                    </Button>
                </Link>
                <Link href={'/projects'}>
                    <Button>
                        查看我的项目
                    </Button>
                </Link>
            </div>
            <SocialList/>
        </div>
    )
}
