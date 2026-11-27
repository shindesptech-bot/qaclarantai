import { Check } from './HomeHero'
import { CALENDLY_URL, LOGIN_URL } from './links'

/* Pricing section recreated from the design reference (pricing.html): three fixed plans, with the
   recommended plan carrying the `pick` treatment. Buttons use the project's existing destinations. */
export default function HomePricing() {
  return (
    <div className="cells c3 plans">
      <div>
        <div>
          <h3 className="h3">Free <span className="tag tag-mute">14-day trial</span></h3>
          <p className="small">Try everything with your own inbox and calendar.</p>
        </div>
        <div className="price">$0 <small>for 14 days</small><span className="per">Every app and every feature below</span></div>
        <ul>
          <li><Check /><span>One to-do list that updates itself</span></li>
          <li><Check /><span>Reminders before anyone has to chase you</span></li>
          <li><Check /><span>Meeting prep and follow-ups, written for you</span></li>
          <li><Check /><span>Works in Slack, Teams, and the iOS and Android apps</span></li>
          <li><Check /><span>Every app included</span></li>
        </ul>
        <a className="btn btn-line" href={LOGIN_URL}>Start free trial</a>
        <p className="fine">Card required to start. Continues as Pro on day 15. <span className="tbd">[Cancel any time.]</span></p>
      </div>

      <div className="pick">
        <div>
          <h3 className="h3">Pro <span className="tag tag-ok">Recommended</span></h3>
          <p className="small">For leaders who run most of their week through Clarant.</p>
        </div>
        <div className="price">$99 <small>per month</small><span className="per">After your 14-day free trial, for 40,000 credits a month</span></div>
        <ul>
          <li><Check /><span>Everything in Free</span></li>
          <li><Check /><span><b>40,000 new credits</b> every month</span></li>
          <li><Check /><span>Top up whenever you need more</span></li>
        </ul>
        <a className="btn btn-primary" href={LOGIN_URL}>Start free trial</a>
        <p className="fine">First 14 days free. <a href="#credits">How credits work</a></p>
      </div>

      <div>
        <div>
          <h3 className="h3">Enterprise</h3>
          <p className="small">For the leadership team.</p>
        </div>
        <div className="price">Custom<span className="per">For your leadership team or the whole company</span></div>
        <ul>
          <li><Check /><span>Everything in Pro, for everyone</span></li>
          <li><Check /><span>Leaders see what’s slipping across teams</span></li>
          <li><Check /><span>SOC 2 Type II, SSO, SCIM and audit logs</span></li>
          <li><Check /><span>Initial setup included</span></li>
        </ul>
        <a className="btn btn-line" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
        <p className="fine">A 20-minute call with <span className="tbd">[our team]</span>.</p>
      </div>
    </div>
  )
}
