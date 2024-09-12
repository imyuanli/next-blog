'use client';

import Link from "next/link";
import {Facebook, Github, Instagram, Linkedin, Mail, Twitter, Youtube} from "lucide-react";
import {blogConfig} from "@/blog.config";
import {cn} from "@/lib/utils";

const icons: any = {
    email: <Mail/>,
    github: <Github/>,
    twitter: <Twitter/>,
    facebook: <Facebook/>,
    youtube: <Youtube/>,
    linkedin: <Linkedin/>,
    instagram: <Instagram/>,
}


const SocialList = ({isFooter}: any) => {
    const socials = blogConfig.socials;

    return (
        <div className={cn("flex items-center space-x-8", {
            "mt-8": !isFooter,
            "scale-75": isFooter,
        })}>
            {Object.keys(socials).map((item) => {
                if (socials[item]) {
                    return (
                        <div className={'hover:scale-110 duration-200'} key={item}>
                            {
                                item == 'email' ?
                                    <Link href={`mailto:${socials[item]}`}>
                                        {icons[item]}
                                    </Link>
                                    :
                                    <Link href={socials[item]}>
                                        {icons[item]}
                                    </Link>
                            }
                        </div>
                    )
                }
            })}
        </div>
    );
}


export default SocialList