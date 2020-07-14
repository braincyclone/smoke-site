import React from "react"
import "./styles.css"
import { Link } from "gatsby"
import ScrollableSection from "react-update-url-on-scroll/lib/ScrollableSection"

export default function Main() {
  if (typeof window !== 'undefined') {
    return (
      <ScrollableSection hash={'home'}>
        <section id ="home" className="main-section">
          <div className="main-container">
            <div className="logo">
              <a href="/">
                <h6 data-text="smoke">
                  <span>
                    SMOKE
                  </span>
                </h6>
              </a>
            </div>
            <div className="main-links">
              <p>
              <a href="https://discord.com/" target="_blank" rel="noreferrer"> Discord </a>| <a href="https://classic.warcraftlogs.com/guild/rankings/481971/latest/" target="_blank" rel="noreferrer">Warcraftlogs</a> | <Link to="streams">Streams</Link>
              </p>
            </div>
            <div className="main-btn">
              <Link to="/#apply">
              <div className="btn btn-one">
                <span>APPLY NOW</span>
              </div>
              </Link>
            </div>
          </div>
        </section>
      </ScrollableSection>
    )
  }
}
