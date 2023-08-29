'use client';
import Link from "next/link";
import {useTheme} from "next-themes";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Separator} from "@/components/ui/separator";
import {AiOutlineGithub} from "react-icons/ai";
import {LuMoon, LuSun} from "react-icons/lu";
import {IoClose} from "react-icons/io5";
import {GiHamburgerMenu} from "react-icons/gi";
import {svgSize} from "@/constant";
import siteData from "@/aurora.config";

const Navbar = () => {
    //切换主题色
    const {theme, setTheme} = useTheme()

    //高亮导航栏
    const pathname = usePathname()
    const active = siteData.navItems.find((item) => item.value == pathname)?.name

    //移动抽屉
    const [open, setOpen] = useState(false)

    // iconStyle
    const iconStyle = {fontSize: svgSize}

    return (
        <nav className={'pt-8 pb-12 w-full flex justify-between items-center'}>
            <Link href={'/'}>
                <div className={'text-xl font-bold font-mono'}>{siteData.author}</div>
            </Link>
            <div className={'sm:block hidden'}>
                <div className={'flex justify-center items-center space-x-4 text-lg'}>
                    {siteData.navItems.map((item) => (
                        <Link href={item.value}>
                            <div
                                className={`text-zinc-800 ${active == item.name ? 'font-semibold' : ''}`}>{item.name}</div>
                        </Link>
                    ))}
                    <Link href={siteData.repo}>
                        <AiOutlineGithub style={iconStyle}/>
                    </Link>
                    <div className={'cursor-pointer'}>
                        {
                            theme === 'light' ?
                                <LuMoon style={iconStyle} onClick={() => setTheme('dark')}/>
                                :
                                <LuSun style={iconStyle} onClick={() => setTheme('light')}/>
                        }
                    </div>
                </div>
            </div>
            <div className={'sm:hidden block'}
                 onClick={() => {
                     setOpen(true)
                 }}
            >
                <GiHamburgerMenu style={iconStyle}/>
            </div>
            <div
                className={`${open ? 'block' : 'hidden'} fixed top-0 right-0 left-0 bottom-0 h-screen bg-white h-screen w-full`}>
                <div className={'absolute z-10 top-8 right-4 cursor-pointer'}
                     onClick={() => {
                         setOpen(false)
                     }}
                >
                    <IoClose style={iconStyle}/>
                </div>
                <div className={'absolute w-full px-10 py-16 space-y-4'}>
                    {siteData.navItems.map((item, index) => {
                        return (
                            <div>
                                <Link href={'/' + item.value}>
                                    <div className={active == item.name ? 'font-semibold' : ''}>{item.name}</div>
                                </Link>
                                <div className={'mt-4'}>
                                    {index < siteData.navItems.length && <Separator/>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
