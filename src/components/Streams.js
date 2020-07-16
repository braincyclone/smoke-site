import React from "react"
import ScrollableSection from "react-update-url-on-scroll/lib/ScrollableSection"

export default function Streams() {
  if (typeof window !== 'undefined') {
    return (
      <ScrollableSection hash={'streams'}>
        <section id ="streams" className="streams-section">
          <div className="streams-container">
            
          </div>
        </section>
      </ScrollableSection>
    )
  }
}
