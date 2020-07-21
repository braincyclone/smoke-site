import React from "react"
import ScrollableSection from "react-update-url-on-scroll/lib/ScrollableSection"
import "./styles.css"

export default function Apply() {
  if (typeof window !== 'undefined') {
    return (
      <ScrollableSection hash={'apply'}>
        <section id="apply" className="apply-section">
          <div className="apply-container">
            <div class="form-wrap">
                <h3>Smoke Application Form</h3>
                <input maxlength="20" type="text" placeholder="Ingame Name"/>
                <input maxlength="50" type="text" placeholder="Class & Spec"/>
                <input maxlength="125" type="text" placeholder="Availability (What days do you play, how many hrs / week?)"/>
                <input maxlength="50" type="email" placeholder="Email"/>
                <textarea maxlength="1500" placeholder="Why do you want to join? What sort of experience do you have?"></textarea>
                <input type="submit"/>
              </div>
          </div>
        </section>
      </ScrollableSection>
    )
  }
}
