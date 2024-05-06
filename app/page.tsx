import Intro from "@/components/intro.mdx";
import SocialList from "@/components/social-list";

import type { Metadata } from 'next'
import {getMetadata} from "@/lib/utils";

export const metadata: Metadata = getMetadata("home")

const Home = () => {

    return (
        <>
            <Intro/>
            <SocialList/>
        </>
    )
}

export default Home