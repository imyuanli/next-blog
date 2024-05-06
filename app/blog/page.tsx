import {getPostsData} from "@/app/server-utils";
import BlogContent from "@/components/blog-content";

const Blog = () => {

    return (
        <BlogContent posts={getPostsData()}/>
    )
}

export default Blog