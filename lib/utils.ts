import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import siteData from "@/blog.config";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getMetadata = (type: string) => {
    return {
        title: siteData[type].title,
        description: siteData[type].description,
    }
}

export const getScriptData = (scriptString: string) => {
    return scriptString.split('<script')[1].split('\n')
        .reduce((pre: any, cur) => {
            if (cur.includes('=')) {
                const [key, value] = cur.trim().split('=')
                pre[key] = value.replace(/"/g, '')
            }
            return pre
        }, {})
}