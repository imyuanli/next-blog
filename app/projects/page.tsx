import Title from "@/components/title";
import siteData from "@/blog.config";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

const getStatus = (status: string) => {
    switch (status) {
        case 'bug':
            return {
                variant: 'destructive',
                text: '维护中'
            }
        case 'dev':
            return {
                variant: 'default',
                text: '开发中'
            }
        case 'offline':
            return {
                variant: 'secondary',
                text: '不再维护'
            }
        default:
            return {
                variant: 'default',
                text: '开发中'
            }
    }
}

const Projects = () => {
    const {projects: {title, description, list}} = siteData
    return (
        <>
            <Title title={title} description={description}/>
            {list.map((item: any, index: number): any => {
                const {variant, text}: any = getStatus(item.status)
                return (
                    <Link
                        className={'block space-y-1 group relative'}
                        key={index}
                        href={item.url}
                    >
                        <div className={'absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-zinc-100 sm:rounded-md opacity-0 transition group-hover:scale-100 group-hover:opacity-100'}></div>
                        <div className={'relative flex items-center space-x-2'}>
                            <div className={'underline underline-offset-4'}>
                                {item.name}
                            </div>
                            {item.status && (
                                <Badge variant={variant}>
                                    {text}
                                </Badge>
                            )}
                        </div>
                        <div className={'relative text-sm text-zinc-600'}>{item.description}</div>
                    </Link>
                )
            })}
        </>
    );
}

export default Projects