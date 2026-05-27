// @ts-ignore
import Intro from "@/components/intro.mdx"
import SocialList from "@/components/social-list"

import type { Metadata } from "next"
import { getMetadata } from "@/lib/utils"

export const metadata: Metadata = getMetadata("home")

const Home = () => {
  return (
    <div className={"w-full mx-auto max-w-7xl"}>
      <Intro />
      <SocialList />
    </div>
  )
}

export default Home
