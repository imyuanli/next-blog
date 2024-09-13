import {pluginConfig} from "@/blog.config";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {PaginationNext, PaginationPrevious} from "@/components/ui/pagination";

const Pagination = ({allCount, generateHref}: any) => {
    const {engine, pageSize} = pluginConfig.pagination
    if (!engine) return null
    const searchParams = useSearchParams()
    const page: any = Number(searchParams.get('page')) || 1

    return (
        <>
            {engine === "default" &&
                <div className={'w-full grid grid-cols-3 justify-items-center items-center'}>
                    <div className={'w-full flex justify-start'}>
                        {page > 1 && (
                            <PaginationPrevious href={generateHref(page - 1)}/>
                        )}
                    </div>
                    <div>
                        {page} of {Math.ceil(allCount / pageSize)}
                    </div>
                    <div className={'w-full flex justify-end'}>
                        {Math.ceil(allCount / pageSize) > page && (
                            <PaginationNext href={generateHref(page + 1)}/>
                        )}
                    </div>
                </div>
            }
            {engine === "loadMore" &&
                <Link href={generateHref(page + 1)}>
                    <Button variant={"outline"} className={'w-full'}>
                        Load More ···
                    </Button>
                </Link>
            }
        </>
    )
}

export default Pagination