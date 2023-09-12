'use client';

import {LuGithub, LuMenu, LuMoon, LuSun, LuSunMoon} from "react-icons/lu";
import siteData from "@/blog.config";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import Icon from "@/components/icon";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {useTheme} from "next-themes";

const Header = () => {

    //高亮导航栏
    const pathname = usePathname()
    const active = siteData.navItems.find((item: any) => item.value == pathname)?.name

    return (
        <header className={'flex justify-between items-center py-8 h-24'}>
            {/*logo*/}
            <Link href={'/'}>
                {siteData.title}
            </Link>

            {/*桌面端*/}
            <div className={'h-full sm:block hidden transition duration-200'}>
                <nav className={'space-x-2 flex justify-center items-center h-full'}>
                    <div className={'space-x-4 mr-1'}>
                        {siteData.navItems.map((item: any) => {
                            return (
                                <Link href={item?.value}
                                      className={`whitespace-nowrap text-sm hover:text-slate-400 ${active == item.name ? 'font-bold' : ''}`}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                    <Link href={'/about'}>
                        <Button size={'icon'} variant={'ghost'}>
                            <Icon icon={LuGithub}/>
                        </Button>
                    </Link>
                    <ThemeSwitch/>
                </nav>
            </div>

            {/*移动端*/}
            <div className={'sm:hidden block'}>
                <Sheet>
                    <SheetTrigger>
                        <Button size={'icon'} variant={'ghost'}>
                            <Icon icon={LuMenu}/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'top'} className={'w-full'}>
                        <div className={'space-y-4 px-12 py-8 text-sm'}>
                            {siteData.navItems.map((item: any, index: number) => {
                                return (
                                    <div className={'space-y-4'}>
                                        <Link href={item.value}
                                              className={active == item.name ? 'font-bold' : ''}>
                                            {item.name}
                                        </Link>
                                        {index < siteData.navItems.length && <Separator/>}
                                    </div>
                                )
                            })}
                            <div className={'space-y-4'}>
                                <Link href={'/about'}>
                                    Github
                                </Link>
                                <Separator/>
                            </div>
                            <div className={'flex justify-between items-center'}>
                                <span>Theme</span>
                                <ThemeSwitch className={'w-[60px]'}/>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

export default Header;


//切换主题相关
const ThemeSwitch = ({className}: any) => {
    const {theme, setTheme} = useTheme()
    return (
        <Select value={theme} onValueChange={(value) => setTheme(value)}>
            <SelectTrigger className={className}>
                {theme == 'light' && <Icon icon={LuSun}/>}
                {theme == 'dark' && <Icon icon={LuMoon}/>}
                {theme == 'system' && <Icon icon={LuSunMoon}/>}
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">
                    <div className={'flex items-center justify-center space-x-2'}>
                        <Icon icon={LuSun}/>
                        <span>Light</span>
                    </div>
                </SelectItem>
                <SelectItem value="dark">
                    <div className={'flex items-center justify-center space-x-2'}>
                        <Icon icon={LuMoon}/>
                        <span>Dark</span>
                    </div>
                </SelectItem>
                <SelectItem value="system">
                    <div className={'flex items-center justify-center space-x-2'}>
                        <Icon icon={LuSunMoon}/>
                        <span>System</span>
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}