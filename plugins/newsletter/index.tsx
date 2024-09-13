'use client'

import ButtonDown from "@/plugins/newsletter/buttondown";
import {pluginConfig} from "@/blog.config";

const Newsletter = () => {
    const {engine} = pluginConfig.newsletter
    if (!engine) return null

    return (
        <>
            {engine === "buttondown" && <ButtonDown/>}
        </>
    )
}

export default Newsletter