import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {useEffect, useState} from "react";
import Link from "next/link";
import Time from "@/components/time";
import {CommandLoading} from "cmdk";

const Cmdk = ({open, setOpen}: any) => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('/api/get_posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.data)
                setLoading(false)
            })
    }, []);

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..."/>
            <CommandList className={'space-y-4 max-h-[480px]'}>
                {loading && <CommandLoading>Fetching data…</CommandLoading>}
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Blog">
                    <div className={'space-y-4'}>
                        {posts.map((post: any) => (
                            <Link href={`/blog/${post?.id}`}>
                                <CommandItem className={'flex flex-col justify-center items-start'}>
                                    <div>
                                        <Time date={post.date}/>

                                    </div>
                                    <span className={'text-lg'}>{post.title}</span>
                                </CommandItem>
                            </Link>
                        ))}
                    </div>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}


export default Cmdk