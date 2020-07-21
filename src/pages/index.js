import React from "react"
import Main from "../components/Main"
import Apply from "../components/Apply"
import Video from "../components/Video"
import SmokeVideo from "../assets/Smoke-Video.mp4"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>
      <SEO title="Apply Now!" />
      <Main />
      <Apply/>
      <Video src={SmokeVideo} />
    </>
  )
}
