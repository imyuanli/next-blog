'use client';

import siteData from "@/blog.config";
import QrWechat from "@/components/qr-wechat";
import Icon from "@/components/icon";
import React from "react";

import {
    AiOutlineFacebook,
    AiOutlineGithub, AiOutlineInstagram,
    AiOutlineLinkedin, AiOutlineMail, AiOutlineQq,
    AiOutlineTwitter, AiOutlineWeibo,
    AiOutlineYoutube, AiOutlineZhihu
} from "react-icons/ai";

const iconList: any = {
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

const SocialList = () => {
    const {home: {socials}} = siteData
    const getHref = (item: string) => {
        const social = socials[item]
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
        <div className={'flex items-center space-x-4'}>
            {Object.keys(socials).map((item) => {
                const social = socials[item]
                if (social) {
                    return (
                        <>
                            {item == 'wechat' ?
                                <QrWechat href={social}/>
                                :
                                <a href={getHref(item)} target={'_blank'}>
                                    <Icon icon={iconList[item]} size={20}/>
                                </a>
                            }
                        </>
                    )
                }
            })}
        </div>
    )
}

export default SocialList