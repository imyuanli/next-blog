'use client'

import siteData from "@/blog.config";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import Utterances from "@/plugins/comments/utterances";
import Giscus from "@/plugins/comments/giscus";

const Comments = () => {
    const {blog: {comment}} = siteData
    if (!comment?.enabled) return null
    const engine = comment?.engine
    const [show, setShow] = useState(false)

    return (
        <div id={"comment"}>
            {!show &&
                <Button className={'w-full'} variant={'outline'} onClick={() => setShow(true)}>
                    Show Comments
                </Button>
            }
            {show &&
                <>
                    {engine === "giscus" && <Giscus id="comments" config={comment[engine]}/>}
                    {engine === "utterances" && <Utterances config={comment[engine]}/>}
                </>
            }
        </div>
    )

};

export default Comments;