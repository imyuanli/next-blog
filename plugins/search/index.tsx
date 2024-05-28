'use client';

import siteData from "@/blog.config";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import Cmdk from "@/plugins/search/Cmdk";
import {Command, Search as SearchIcon} from "lucide-react";

const Search = () => {
    const {search} = siteData;
    if (!search?.enabled) return null;
    const [open, setOpen] = useState(false)
    const engines = search?.engine

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open: boolean) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <div className={'hidden md:block'}>
                <Button className={'w-48 justify-between mr-2'} size={'sm'}
                        variant={'outline'}
                        onClick={() => {
                            setOpen(true)
                        }}>
                    Search Blog...
                    <div className={'p-1 flex justify-center items-center'}>
                        <Command size={16}/>
                        <span className={'text-base'}>K</span>
                    </div>
                </Button>
            </div>
            <div className={'block md:hidden'}>
                <Button size={'icon'} variant={'ghost'} onClick={() => {
                    setOpen(true)
                }}>
                    <SearchIcon size={20}/>
                </Button>
            </div>
            {open &&
                engines === "cmdk" && <Cmdk open={open} setOpen={setOpen}/>
            }
        </>
    );
}


export default Search