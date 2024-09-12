import {blogConfig} from "@/blog.config";
import SocialList from "@/components/social-list";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import Newsletter from "@/plugins/newsletter";
import {Label} from "@/components/ui/label";

const Footer = () => {
    const {
        author,
        footer: {isShow, isShowPoweredBy},
        newsletter: {title, description, position}
    } = blogConfig

    return (
        isShow && <div>
            <Separator/>
            <footer className={'container py-8 space-y-4'}>
                {position.footer &&
                    <>
                        <div
                            className={"flex justify-between items-center flex-col md:flex-row space-y-4 md:space-y-0"}>
                            <div className={"flex justify-center  items-center md:items-start flex-col"}>
                                <Label className={'text-base'}>
                                    {title && "Subscribe to the newsletter"}
                                </Label>
                                {description && <p className={"text-sm text-gray-500 text-center"}>{description}</p>}
                            </div>
                            <Newsletter/>
                        </div>
                        <Separator/>
                    </>
                }
                <div
                    className={'w-full flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0'}>
                    <div className={'md:hidden block'}>
                        <SocialList isFooter={true}/>
                    </div>
                    <div>
                        {`© ${new Date().getFullYear()} ${author}`}
                        {isShowPoweredBy &&
                            <span>,Powered by <Link
                                className={'font-bold hover:underline hover:underline-offset-4 cursor-pointer'}
                                href={'https://github.com/imyuanli/next-blog'}>NextBlog</Link>.
                            </span>
                        }
                    </div>
                    <div className={'md:block hidden'}>
                        <SocialList isFooter={true}/>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer