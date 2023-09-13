import React from 'react'
import Title from "@/components/title";
import SocialList from "@/components/social-list";
import siteData from "@/blog.config";

export default function Home() {
    const {home: {title, description, intro}} = siteData
    return (
        <>
            <Title title={title} description={description}/>
            <div className={'space-y-1.5 text-zinc-600'}>
                {React.createElement(intro)}
            </div>
            <SocialList/>
        </>
    )
}
