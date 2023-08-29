import React from 'react'
import siteData from "@/aurora.config";
import {
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineQq,
    AiOutlineTwitter,
    AiOutlineWeibo,
    AiOutlineYoutube,
    AiOutlineZhihu
} from "react-icons/ai";
import QrWechat from "@/components/qr-wechat";
import {svgSize} from "@/constant";
import {Button} from "@/components/ui/button";
import {BsArrowRightShort} from "react-icons/bs";
import Link from "next/link";
import Title from "@/components/title";

const iconList = {
    github: AiOutlineGithub,
    twitter: AiOutlineTwitter,
    facebook: AiOutlineFacebook,
    youtube: AiOutlineYoutube,
    linkedin: AiOutlineLinkedin,
    instagram: AiOutlineInstagram,
    email: AiOutlineMail,
    qq: AiOutlineQq,
    zhihu: AiOutlineZhihu,
    weibo: AiOutlineWeibo
}

export default function Home() {

    const getHref = (item) => {
        const social = siteData.socials[item]
        switch (item) {
            case 'email':
                return `mailto:${social}`
            case 'qq':
                return `http://wpa.qq.com/msgrd?v=3&uin=${social}&site=qq&menu=yes`
            default:
                return social
        }
    }

    return (
        <div className={'space-y-4'}>
            <Title value={`你好，我是 ${siteData.author}`} />
            <div className={'space-y-4 text-muted-foreground'}>
                <div>一名前端开发工程师。</div>
                <div>我是 <span className={'font-semibold'}>React</span> 的狂热爱好者，喜欢极简的ui设计。</div>
                <div>我做了很多开源的项目，虽然 star 很少，但是对我的技术有很多的帮助。</div>
                <Link className={'inline-block'} href={'/projects'}>
                    <Button>
                        查看我的作品 <BsArrowRightShort size={svgSize} className={'ml-2'}/>
                    </Button>
                </Link>
            </div>
            <div className={'flex items-center space-x-4'}>
                {Object.keys(siteData.socials).map((item) => {
                    const social = siteData.socials[item]
                    if (social) {
                        return (
                            <>
                                {item == 'wechat' ?
                                    <QrWechat href={social}/>
                                    :
                                    <a href={getHref(item)} target={'_blank'}>
                                        {React.createElement(iconList[item], {size: svgSize})}
                                    </a>
                                }
                            </>
                        )
                    }
                })}
            </div>
        </div>
    )
}