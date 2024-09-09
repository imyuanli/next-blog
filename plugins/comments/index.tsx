'use client'

import siteData from "@/blog.config";
import {useEffect, useRef, useState} from "react";
import Utterances from "@/plugins/comments/utterances";
import Giscus from "@/plugins/comments/giscus";
import {useInViewport} from "ahooks";

const Comments = () => {
    const {blog: {comment}} = siteData
    if (!comment?.enabled) return null
    const engine = comment?.engine
    const ref = useRef(null);
    const [show, setShow] = useState(false)
    const [inViewport] = useInViewport(ref);
    useEffect(() => {
        if (inViewport) {
            setShow(true)
        }
    }, [inViewport])

    return (
        <div ref={ref} id={"comment"}>
            {show &&
                <>
                    {engine === "giscus" && <Giscus config={comment[engine]}/>}
                    {engine === "utterances" && <Utterances config={comment[engine]}/>}
                </>
            }
        </div>
    )

};

export default Comments;