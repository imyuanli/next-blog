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