'use client';

import siteData from "@/blog.config";
import {useEffect, useRef} from "react";
import {getScriptData} from "@/lib/utils";

const Comments = () => {
    const {blog: {comment: {enabled, used, config}}} = siteData
    const ref: any = useRef(null)

    useEffect(() => {
        const data = getScriptData(config[used])
        const script = document.createElement('script');
        Object.keys(data).forEach((item: any) => {
            script.setAttribute(item, data[item])
        })
        script.setAttribute('async', 'true')
        ref?.current.appendChild(script);
        return () => {
            if (ref.current) {
                ref.current.removeChild(script);
            }
        }
    }, [])

    return (
        enabled && <div ref={ref}/>
    )
};


export default Comments;