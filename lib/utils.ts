import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {allPosts} from "contentlayer/generated";
import {Metadata} from "next";
import siteData from "@/aurora.config";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getPost = (params) => allPosts.find((post) => post.slug === params.slug)


export const genPageSeo = ({title, description, image, ...rest}: PageSEOProps): Metadata => {
    return {
        title,
        openGraph: {
            title: `${title} | ${siteData.title}`,
            description: description || siteData.description,
            url: './',
            siteName: siteData.title,
            images: image ? [image] : [siteData.socialBanner],
            locale: siteData.language,
            type: 'website',
        },

        ...rest,
    }
}

