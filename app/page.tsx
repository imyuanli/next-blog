import siteData from '@/sitedata.json'
import React from 'react'
import {
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineQq,
    AiOutlineTwitter,
    AiOutlineWeibo,
    AiOutlineWhatsApp,
    AiOutlineYoutube,
    AiOutlineZhihu
} from "react-icons/ai";

const iconList = {
    github: AiOutlineGithub,
    twitter: AiOutlineTwitter,
    facebook: AiOutlineFacebook,
    youtube: AiOutlineYoutube,
    linkedin: AiOutlineLinkedin,
    instagram: AiOutlineInstagram,
    whatsapp: AiOutlineWhatsApp,
    email: AiOutlineMail,
    qq: AiOutlineQq,
    zhihu: AiOutlineZhihu,
    weibo: AiOutlineWeibo
}

export default function Home() {

    return (
        <div className={'space-y-4'}>
            <div className={'text-2xl  font-semibold'}>你好，我是 {siteData.author} </div>
            <div className={'space-y-2 text-gray-500'}>
                <div>是一名前端开发工程师。</div>
                <div>我是 <span className={'font-semibold'}>React</span> 的狂热爱好者，喜欢极简的ui设计。</div>
                <div>我做了很多开源的项目，虽然 star 很少，但是对我的技术有很多的帮助。</div>
                <div>As you can probably tell, this website is still a work in progress.</div>
            </div>
            <div className={'flex items-center space-x-4'}>
                {Object.keys(siteData.socials).map((item) => {
                    const social = siteData.socials[item]
                    if (social) {
                        return (
                            <a
                                href={
                                    item == 'email' ? `mailto:${social}`
                                        :
                                        item == 'qq' ? `http://wpa.qq.com/msgrd?v=3&uin=${social}&site=qq&menu=yes`
                                            :
                                            social
                                }
                                target={'_blank'}
                            >
                                {React.createElement(iconList[item], {size: 24})}
                            </a>
                        )
                    }
                })}
            </div>
        </div>
    )
}