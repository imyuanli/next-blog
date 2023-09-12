import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {allPosts} from "contentlayer/generated";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getPost = (slug: string) => allPosts.find((post) => post.slug === slug)
