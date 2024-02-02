import React from 'react'
import Title from "@/components/title";
import siteData from "@/blog.config";
import SocialList from "@/app/components/social-list";

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
