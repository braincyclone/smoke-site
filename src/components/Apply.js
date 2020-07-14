import React from "react"
import ScrollableSection from "react-update-url-on-scroll/lib/ScrollableSection"
import "./styles.css"

export default function Apply() {
  if (typeof window !== 'undefined') {
    return (
      <ScrollableSection hash={'apply'}>
        <section id="apply" className="apply-section">
          <div className="apply-container">
          </div>
        </section>
      </ScrollableSection>
    )
  }
}
