import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PageAnimations from '@/components/ui/PageAnimations'
import DocsEnhancer from '../DocsEnhancer'
import Figure from '../Figure'

export const metadata: Metadata = {
  title: 'Zendesk Connector Setup Guide | Clarant',
  description:
    'Learn how to connect Zendesk Support to Clarant. Create a one-time OAuth client in Zendesk, then connect from Clara to search tickets, look up customers, and manage support data.',
  alternates: { canonical: '/docs/zendesk-setup-guide' },
}

const IMG = '/images/docs/zendesk'

const TOC: { id: string; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'part1', label: 'Part 1: Create the OAuth client' },
  { id: 'part2', label: 'Part 2: Connect Zendesk from Clara' },
  { id: 'verify', label: 'Verify Connection' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'permissions', label: 'Permissions Requested' },
  { id: 'support', label: 'Support' },
]

const LinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={`${id}-h`} className="doc-h2">
      {children}
      <button className="doc-anchor" type="button" data-anchor={id} aria-label="Copy link to this section">
        <LinkIcon />
      </button>
    </h2>
  )
}

export default function ZendeskSetupGuide() {
  return (
    <div className="doc-page">
      <PageAnimations />
      <Nav basePath="/" />

      <main id="main">
        <div className="doc-wrap">
          {/* ── Breadcrumb ── */}
          <nav className="doc-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">/</span>
            <Link href="/docs">Documentation</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span aria-current="page">Zendesk Setup Guide</span>
          </nav>

          {/* ── Header ── */}
          <header className="doc-header">
            <span className="eyebrow">Connector Guide</span>
            <h1 className="doc-title">Clarant — Zendesk Integration Setup Guide</h1>

            <div className="doc-meta">
              <span>Connector setup</span>
              <span className="dot" aria-hidden="true" />
              <span>~5 minute read</span>
              <span className="dot" aria-hidden="true" />
              <span>Requires Zendesk administrator access</span>
            </div>
          </header>

          {/* ── Layout: article + sticky TOC ── */}
          <div className="doc-layout">
            <article className="doc-article">

              {/* ===== OVERVIEW ===== */}
              <section id="overview" data-doc-section className="doc-section">
                <SectionHeading id="overview">Overview</SectionHeading>
                <p>
                  This guide explains how to connect Zendesk Support to Clara. Zendesk requires an
                  administrator to create a one-time OAuth client for Clara in your Zendesk account.
                  After that, each user connects with their own Zendesk login.
                </p>
                <p>Once connected, users can:</p>
                <ul>
                  <li>Search and read Zendesk tickets and their conversations in natural language.</li>
                  <li>Look up customers and organizations.</li>
                  <li>Create tickets, update status, priority and assignee, and add internal notes or public replies.</li>
                  <li>Ask questions that combine Zendesk with other connected systems, with source citations.</li>
                </ul>
              </section>

              {/* ===== PREREQUISITES ===== */}
              <section id="prerequisites" data-doc-section className="doc-section">
                <SectionHeading id="prerequisites">Prerequisites</SectionHeading>
                <p>Before connecting Zendesk Support to Clara, ensure the following are in place:</p>
                <div className="doc-table-wrap">
                  <table className="doc-table">
                    <thead>
                      <tr>
                        <th scope="col">Requirement</th>
                        <th scope="col">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Clara</td>
                        <td>Active account</td>
                      </tr>
                      <tr>
                        <td>Zendesk</td>
                        <td>Zendesk Support account</td>
                      </tr>
                      <tr>
                        <td>Administrator</td>
                        <td>Zendesk Admin role (needed to create the OAuth client)</td>
                      </tr>
                      <tr>
                        <td>Time</td>
                        <td>~5 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ===== PART 1 ===== */}
              <section id="part1" data-doc-section className="doc-section">
                <SectionHeading id="part1">Part 1: Create the OAuth client (administrator, one time)</SectionHeading>
                <p>A Zendesk administrator completes these steps once for the whole account.</p>

                <div className="doc-steps">
                  {/* Step 1 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">1</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Sign in to Zendesk and open Admin Center</h3>
                      <p>Click the Admin Center icon in the Zendesk product tray.</p>
                      <Figure src={`${IMG}/1.png`} alt="Open Admin Center from the Zendesk product tray" caption="Step 1 — Open Admin Center from the Zendesk product tray." />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">2</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Open the OAuth clients page</h3>
                      <p>Go to <strong>Apps and integrations → APIs → OAuth clients</strong>.</p>
                      <Figure src={`${IMG}/2.png`} alt="Admin Center — Apps and integrations — APIs — OAuth clients" caption="Step 2 — Admin Center → Apps and integrations → APIs → OAuth clients." />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">3</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Click Add OAuth client</h3>
                      <Figure src={`${IMG}/3.png`} alt="Add OAuth client button on the OAuth clients page" caption="Step 3 — Click Add OAuth client." />
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">4</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Fill in the form using the values below</h3>
                      <div className="doc-table-wrap">
                        <table className="doc-table">
                          <thead>
                            <tr>
                              <th scope="col">Field</th>
                              <th scope="col">Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Name</td>
                              <td>Clarant</td>
                            </tr>
                            <tr>
                              <td>Description</td>
                              <td>Clarant connector for Clara</td>
                            </tr>
                            <tr>
                              <td>Company</td>
                              <td>Your company name</td>
                            </tr>
                            <tr>
                              <td>Unique identifier</td>
                              <td><code>clarant</code> (any identifier works, but not one starting with <code>zdg-</code>, which Zendesk reserves)</td>
                            </tr>
                            <tr>
                              <td>Client kind</td>
                              <td>Public (PKCE)</td>
                            </tr>
                            <tr>
                              <td>Redirect URLs</td>
                              <td><code>https://api.clarant.ai/api/v1/mcp-connectors/zendesk/callback</code></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="callout callout--warning">
                        <span className="callout-icon" aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </span>
                        <div className="callout-body">
                          <span className="callout-title">Required</span>
                          The redirect URL must match exactly, with no trailing slash. Zendesk accepts only https URLs, apart from localhost.
                        </div>
                      </div>
                      <Figure src={`${IMG}/4.png`} alt="Completed OAuth client form with Public PKCE selected" caption="Step 4 — Complete the OAuth client form. Select Public (PKCE) as the client kind." />
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">5</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Click Save and copy the Unique identifier</h3>
                      <p>
                        Public clients have no secret, so there is nothing to store securely.
                        Copy the <strong>Unique identifier</strong> — users need it, together with
                        your subdomain, in Part 2.
                      </p>
                      <Figure src={`${IMG}/5.png`} alt="Saved OAuth client showing the Unique identifier" caption="Step 5 — The saved OAuth client and its Unique identifier." />
                    </div>
                  </div>
                </div>
              </section>

              {/* ===== PART 2 ===== */}
              <section id="part2" data-doc-section className="doc-section">
                <SectionHeading id="part2">Part 2: Connect Zendesk from Clara</SectionHeading>
                <p>Each user completes these steps from their own Clara account.</p>

                <div className="doc-steps">
                  {/* Step 6 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">6</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Open the Clara Dashboard and go to Settings → Connectors</h3>
                      <Figure src={`${IMG}/6.png`} alt="The Connectors dashboard in Clara" caption="Step 6 — The Connectors dashboard in Clara." />
                    </div>
                  </div>

                  {/* Step 7 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">7</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Click Connect on the Zendesk card</h3>
                      <Figure src={`${IMG}/7.png`} alt="The Zendesk connector card in Clara" caption="Step 7 — The Zendesk connector card." />
                    </div>
                  </div>

                  {/* Steps 8–9 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">8</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Enter your Zendesk subdomain</h3>
                      <p>
                        This is the <strong>acme</strong> in <code>acme.zendesk.com</code>. Do not
                        include <code>.zendesk.com</code> or <code>https://</code>.
                      </p>
                    </div>
                  </div>

                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">9</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Enter the Client ID</h3>
                      <p>
                        This is the <strong>Unique identifier</strong> from Part 1 (for
                        example <code>clarant</code>).
                      </p>
                      <Figure src={`${IMG}/8.png`} alt="Connect dialog showing subdomain and Client ID fields" caption="Steps 8 and 9 — Enter your subdomain and Client ID." />
                    </div>
                  </div>

                  {/* Step 10 */}
                  <div className="doc-step">
                    <span className="doc-step-num" aria-hidden="true">10</span>
                    <div className="doc-step-body">
                      <h3 className="doc-step-title">Click Connect, then review the permissions and click Allow</h3>
                      <p>Zendesk opens an authorization screen. Review the permissions and click <strong>Allow</strong>.</p>
                      <Figure src={`${IMG}/9.png`} alt="Zendesk authorization screen with Allow button" caption="Step 10 — Review the requested permissions and click Allow." />
                    </div>
                  </div>
                </div>
              </section>

              {/* ===== VERIFY CONNECTION ===== */}
              <section id="verify" data-doc-section className="doc-section">
                <SectionHeading id="verify">Verify Connection</SectionHeading>
                <p>
                  The Zendesk card should show <strong>Connected</strong>. Try asking:
                </p>
                <div className="doc-table-wrap">
                  <table className="doc-table">
                    <tbody>
                      <tr>
                        <td><code>&ldquo;Show my open Zendesk tickets.&rdquo;</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Figure src={`${IMG}/10.png`} alt="Clara Connectors dashboard showing Zendesk with a Connected status" caption="Zendesk now shows as Connected." />
                <Figure src={`${IMG}/11.png`} alt="Clara answering a question about Zendesk tickets" caption="Clara answering a question about Zendesk tickets." />

                <div className="callout callout--success">
                  <span className="callout-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <div className="callout-body">
                    <span className="callout-title">Connected</span>
                    Once Zendesk shows Connected, users can start asking about their Zendesk tickets in Clara.
                  </div>
                </div>
              </section>

              {/* ===== TROUBLESHOOTING ===== */}
              <section id="troubleshooting" data-doc-section className="doc-section">
                <SectionHeading id="troubleshooting">Troubleshooting</SectionHeading>
                <div className="doc-table-wrap">
                  <table className="doc-table">
                    <thead>
                      <tr>
                        <th scope="col">Issue</th>
                        <th scope="col">What to check</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>&ldquo;Enter your Zendesk subdomain&rdquo;</td>
                        <td>Enter only the part before <code>.zendesk.com</code>, using lowercase letters, numbers and hyphens.</td>
                      </tr>
                      <tr>
                        <td>Redirect URL / redirect_uri error</td>
                        <td>The redirect URL in the OAuth client must match Part 1 exactly. Edit the client in Admin Center and save.</td>
                      </tr>
                      <tr>
                        <td>invalid_client</td>
                        <td>The Client ID does not match any client in that subdomain. Re-copy the Unique identifier.</td>
                      </tr>
                      <tr>
                        <td>Authorization page is not shown</td>
                        <td>The user needs an active agent or admin seat in that Zendesk account.</td>
                      </tr>
                      <tr>
                        <td>&ldquo;Reconnect Zendesk&rdquo; appears later</td>
                        <td>The client was deleted or the user&apos;s access was revoked. Reconnect from <strong>Settings → Connectors</strong>.</td>
                      </tr>
                      <tr>
                        <td>User sees only some tickets</td>
                        <td>Clara uses the connecting user&apos;s own Zendesk permissions. Check their role and ticket access.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ===== PERMISSIONS REQUESTED ===== */}
              <section id="permissions" data-doc-section className="doc-section">
                <SectionHeading id="permissions">Permissions Requested</SectionHeading>
                <div className="doc-table-wrap">
                  <table className="doc-table">
                    <thead>
                      <tr>
                        <th scope="col">Permission</th>
                        <th scope="col">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Read</td>
                        <td>View tickets, comments, users and organizations</td>
                      </tr>
                      <tr>
                        <td>Write</td>
                        <td>Create tickets, update status, priority and assignee, and add comments</td>
                      </tr>
                      <tr>
                        <td>User identity</td>
                        <td>Identify which Zendesk user is connecting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Clara never deletes Zendesk data. Zendesk&apos;s consent screen describes the write
                  scope as &ldquo;create, update and delete&rdquo; because it cannot be narrowed further,
                  but Clara has no delete tools.
                </p>
              </section>

              {/* ===== SUPPORT ===== */}
              <section id="support" data-doc-section className="doc-section">
                <SectionHeading id="support">Support</SectionHeading>
                <p>For assistance with installation, configuration or troubleshooting:</p>
                <div className="callout callout--info">
                  <span className="callout-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
                  </span>
                  <div className="callout-body">
                    <span className="callout-title">Email support</span>
                    <a className="doc-inline-link" href="mailto:support@clarant.ai">support@clarant.ai</a>
                  </div>
                </div>
              </section>

              {/* ── Prev / Next ── */}
              <nav className="doc-prevnext" aria-label="Documentation navigation">
                <Link href="/docs" className="doc-nav-card is-prev">
                  <span className="doc-nav-dir">← Previous</span>
                  <span className="doc-nav-label">All documentation</span>
                </Link>
                <div className="doc-nav-card is-next is-disabled" aria-disabled="true">
                  <span className="doc-nav-dir">Next →</span>
                  <span className="doc-nav-label">More guides coming soon</span>
                </div>
              </nav>
            </article>

            {/* ── Sticky TOC ── */}
            <aside className="doc-toc" aria-label="On this page">
              <p className="doc-toc-title">On this page</p>
              <ol>
                {TOC.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`}>{t.label}</a>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <DocsEnhancer />
    </div>
  )
}
