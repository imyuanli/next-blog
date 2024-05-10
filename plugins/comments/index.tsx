'use client'

import siteData from "@/blog.config";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import Utterances from "@/plugins/comments/utterances";
import Giscus from "@/plugins/comments/giscus";

const Comments = () => {
    const {comment: {enabled, used, config}} = siteData
    if (!enabled) return null
    const [show, setShow] = useState(false)

    return (
        <>
            {!show &&
              <Button className={'w-full'} variant={'outline'} onClick={() => setShow(true)}>
                Show Comments
              </Button>
            }
            {show &&
              <>
                  {used === "giscus" && <Giscus id="comments" config={config[used]}/>}
                  {used === "utterances" && <Utterances config={config[used]}/>}
              </>
            }
        </>
    )

};


export default Comments;