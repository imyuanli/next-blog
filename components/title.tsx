'use client';

import {Separator} from "@/components/ui/separator";
import {usePathname} from "next/navigation";
import siteData from "@/blog.config";


const Title = () => {
    const pathname = usePathname()
    const nameArr = pathname.split('/')
    const name = nameArr[nameArr.length - 1]
    const data = name ? siteData[name] : siteData.home

    return (
        data && <div>
          <h1>{data?.title}</h1>
            {data?.description && <p className={'text-zinc-600'}>{data?.description}</p>}
          <Separator/>
        </div>
    );
}


export default Title