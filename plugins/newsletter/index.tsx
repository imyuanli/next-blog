'use client'

import ButtonDown from "@/plugins/newsletter/buttondown";
import blogConfig from "@/blog.config";

const Newsletter = () => {
    const {engine} = blogConfig.newsletter
    if (!engine) return null

    return (
        <>
            {engine === "buttondown" && <ButtonDown/>}
        </>
    )
}

export default Newsletter