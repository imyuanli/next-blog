import {Analytics as VercelAnalytics} from "@vercel/analytics/react"
import blogConfig from "@/blog.config";


const Analytics = () => {
    const {enabled, engine} = blogConfig.analytics
    if (!enabled) return null

    return (
        <>
            {engine === "vercel" && <VercelAnalytics/>}
        </>
    )
}

export default Analytics