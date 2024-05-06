import {getPostsData} from "@/app/server-utils";
import BlogContent from "@/components/blog-content";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/utils";

export const metadata: Metadata = getMetadata("home")

const Blog = () => {

    return (
        <BlogContent posts={getPostsData()}/>
    )
}

export default Blog