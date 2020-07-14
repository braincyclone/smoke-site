import React from "react"
import { withPrefix } from "gatsby"

export default ({ src }) => {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: "100%",
        width: '100%',
        zIndex: '-1',
        objectFit: 'fill',
        objectPosition: 'center',
        opacity: 0.3,
      }}
      src={withPrefix(src)}
    >
      <source src={withPrefix(src)} type="video/mp4" />
      Your device does not support 'video/mp4' videos.
    </video>
  )
}