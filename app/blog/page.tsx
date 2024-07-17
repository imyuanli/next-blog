import {getPostsData} from "@/app/server-utils";
import BlogContent from "@/components/blog-content";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/utils";
import PageContainer from "@/components/page-container";

export const metadata: Metadata = getMetadata("blog")

const Blog = () => {

    return (
        <PageContainer>
            <BlogContent posts={getPostsData()}/>
        </PageContainer>
    )
}

export default Blog