import {getTagsData} from "@/app/server-utils";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import siteData from "@/blog.config";
import PageContainer from "@/components/page-container";

export async function generateMetadata() {
    const {title, tags} = siteData
    return {
        title: `${tags?.title} - ${title}`,
        description: `${tags.description} ${Object.keys(getTagsData()).join(", ")}`,
    }
}


const Tags = () => {
    const tags = getTagsData()

    return (
        <PageContainer>
            <div className={'flex'}>
                {Object.keys(tags).map((tag: string) => (
                    <Link href={`/blog?tag=${tag}`}>
                        <Button className={'text-lg px-4 underline-offset-8'} size={'lg'} variant={'link'} key={tag}>
                            <span className={'font-bold'}>{tag}</span>
                            <span className={'text-gray-500'}>({tags[tag]})</span>
                        </Button>
                    </Link>
                ))}
            </div>
        </PageContainer>
    )
}

export default Tags