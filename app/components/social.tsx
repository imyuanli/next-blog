import {Facebook, Github, Instagram, Linkedin, Mail, Twitter, Youtube} from "lucide-react";
import siteData from "@/blog.config";
import Link from "next/link";

const Social = () => {
    const icons: any = {
        email: <Mail/>,
        github: <Github/>,
        twitter: <Twitter/>,
        facebook: <Facebook/>,
        youtube: <Youtube/>,
        linkedin: <Linkedin/>,
        instagram: <Instagram/>,
    }
    const {socials} = siteData

    return (
        <div className={'mt-8 flex items-center space-x-4'}>
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
    )
}

export default Social