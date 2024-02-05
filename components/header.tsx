'use client';

import siteData from "@/blog.config";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import Image from "next/image";
import {useState} from "react";
import {Separator} from "@/components/ui/separator";
import {Github, Menu, Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

const Header = () => {
    const {githubRepo, header: {logo, title, routes}} = siteData

    //高亮导航栏
    const pathname = usePathname()
    const active = routes.find((item: any) => item.value == '/' + pathname.split('/')[1])?.name

    const {theme, setTheme} = useTheme()
    const [open, setOpen] = useState(false)

    return (
        <header className={'container flex justify-between py-4'}>
            <div className={'flex justify-center items-center'}>
                <Link className={'flex justify-center items-center mr-4'} href={'/'}>
                    <Image
                        src={logo}
                        height={28}
                        width={28}
                        alt={'logo'}
                    />
                    <div className={'ml-1 text-lg font-semibold'}>
                        {title}
                    </div>
                </Link>
                <div className={'hidden md:block space-x-1'}>
                    {routes.map((route: any) => (
                        <Link href={route?.value}>
                            <Button variant={active == route.name ? 'secondary' : 'ghost'} className={'text-base'}>
                                {route.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={'flex justify-center items-center space-x-1'}>
                <div className={'md:hidden block'}>
                    <Sheet open={open} onOpenChange={() => {
                        setOpen(!open)
                    }}>
                        <SheetTrigger>
                            <Button size={'icon'} variant={'ghost'}>
                                <Menu size={20}/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={'top'} className={'w-full space-y-4 p-12 text-sm'}>
                            {routes.map((route: any, index: number) => (
                                <div className={'space-y-4'}>
                                    <Link href={route.value} onClick={() => {
                                        setOpen(false)
                                    }}>
                                        <Button variant={active ? 'secondary' : 'ghost'} className={'text-base w-full'}>
                                            {route.name}
                                        </Button>
                                    </Link>
                                    {index != routes.length - 1 && <Separator/>}
                                </div>
                            ))}
                        </SheetContent>
                    </Sheet>
                </div>
                <Link href={githubRepo}>
                    <Button size={'icon'} variant={'ghost'}>
                        <Github size={20}/>
                    </Button>
                </Link>
                <Button
                    size={'icon'}
                    variant={'ghost'}
                    onClick={() => {
                        setTheme(theme == 'light' ? 'dark' : 'light')
                    }}
                >
                    {theme == 'light' && <Sun size={20}/>}
                    {theme == 'dark' && <Moon size={20}/>}
                </Button>
            </div>
        </header>
    );
}

export default Header;