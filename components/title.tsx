'use client';

import {Separator} from "@/components/ui/separator";
import {usePathname} from "next/navigation";
import siteData from "@/blog.config";
import {useEffect, useState} from "react";


const Title = () => {
    const pathname = usePathname()
    let name = pathname.split('/')[1]
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        if (name) {
            setState(siteData[name])
        } else {
            setState(siteData.home)
        }
    }, [name]);

    return (
        <div>
            <h1>{state?.title}</h1>
            {state?.description && <p className={'text-zinc-600'}>{state?.description}</p>}
            <Separator/>
        </div>
    );
}


export default Title