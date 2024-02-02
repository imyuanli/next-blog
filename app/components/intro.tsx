'use client'

import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import siteData from "@/blog.config";
import {Button} from "@/components/ui/button";

const Intro = () => {
    const {header: {githubRepo}} = siteData

    return (
        <>
            <div>
                I'm a BLOG template with minimal UI 🥰. <span className={'font-bold'}>
                    Simple, but better ! 🤩
                </span>
            </div>
            <div>
                Powered by <Link href={'https://nextjs.org/'} className={'cursor-alias'}>
                <Badge>NEXT.js</Badge>
            </Link> , <Link href={'https://ui.shadcn.com/'} className={'cursor-alias'}>
                <Badge>shadcn-ui</Badge>
            </Link> as the theme , <Link href={'https://www.tailwindcss.cn/'} className={'cursor-alias'}>
                <Badge>Tailwindcss</Badge>
            </Link> as an auxiliary development of a minimalist blog template.
            </div>
            <div>
                No need to use a database, just simple configuration to use. One minute is enough to have your blog! 😊
            </div>
            <div>
                On the basis of the original, I have made some improvements and adjustments, and I hope you like it. 🥳
                <Button>
                    查看配置文件
                </Button>
            </div>
            <div>
                You can use vercel or netlify to deploy your blog, and you can also use the GitHub action to deploy your blog. 🚀

                <Button>

                </Button>
            </div>
            <div>
                If you like it, please give me a 🌟 on <Link href={githubRepo} className={'border-b-4 border-dashed'}>GitHub</Link> !
            </div>

        </>
    );
}

export default Intro