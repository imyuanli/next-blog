"use client"

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useState} from "react";

const Toc = ({toc}: any) => {
    const ml: any = {
        2: '',
        3: 'ml-4',
        4: 'ml-8',
        5: 'ml-12',
        6: 'ml-16',
    }
    const [current, setCurrent] = useState<string>("")

    const handleClick = (href: string) => {
        setCurrent(href)
        const id = href.replace('#', '')
        const element: any = document.getElementById(id)
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <div className={'flex flex-col w-full space-y-1'}>
            {toc.length > 0 ?
                toc.map((item: any, index: number) => {
                    return (
                        <Button
                            onClick={() => {
                                handleClick(item.href)
                            }}
                            key={index}
                            size={'sm'}
                            variant={current == item?.href ? "secondary" : "ghost"}
                            className={cn(ml[item.depth], 'text-sm justify-start')}
                        >
                            {item.value}
                        </Button>
                    )
                })
                :
                <div className={'text-sm text-gray-500 p-4'}>
                    No table of contents.
                </div>
            }
        </div>
    )
}

export default Toc;