import Link from "next/link";
import React from "react";
import siteData from "@/blog.config";
import Title from "@/components/title";

const Projects = () => {
    return (
        <div className={'space-y-4'}>
            <Title value={`项目`} />
            {siteData.projects.map((item, index) => {
                    return (
                        <Link className={'block space-y-1.5'} key={index} href={item.url}>
                            <div className={'font-medium underline underline-offset-4'}>
                                {item.name}
                            </div>
                            <div className={'text-muted-foreground'}>{item.description}</div>
                        </Link>
                    )
                })}
        </div>
    );
}


export default Projects