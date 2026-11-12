import { useState } from "react"

type IconName = "arrow" | "check" | "close" | "eye" | "flag" | "lock" | "mail" | "message" | "phone" | "shield" | "user"

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    flag: (
      <>
        <path d="M5 21V4m0 1h11l-2 4 2 4H5" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    message: (
      <>
        <path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-3a3 3 0 0 1-2-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z" />
      </>
    ),
    phone: (
      <>
        <path d="M7.5 3h-2A2.5 2.5 0 0 0 3 5.7C3.4 14 10 20.6 18.3 21a2.5 2.5 0 0 0 2.7-2.5v-2l-4.3-1.1-1.1 2.2a14 14 0 0 1-9.2-9.2l2.2-1.1Z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2 4 5v6c0 5.2 3.4 9.2 8 11 4.6-1.8 8-5.8 8-11V5Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const folders = [
  { id: "email", label: "Email", icon: "mail" as IconName },
  { id: "text", label: "Text Message", icon: "message" as IconName },
  { id: "login", label: "Fake Login Page", icon: "lock" as IconName },
  { id: "call", label: "Phone Call", icon: "phone" as IconName },
]

function ExampleBadge() {
  return <span className="example-badge">Example</span>
}

function EmailExample() {
  return (
    <div className="email-window">
      <div className="window-bar">
        <i />
        <i />
        <i />
        <span>Inbox</span>
      </div>
      <div className="email-body">
        <div className="sender-avatar">AB</div>
        <div className="email-copy">
          <span className="email-kicker">Account notice</span>
          <strong>Your account will be suspended today</strong>
          <span>Account Billing &lt;security@account-billing.example&gt;</span>
          <p>
            We detected an issue with your Example Bank account. Verify your
            details immediately to avoid losing access.
          </p>
          <button type="button" className="mock-action">
            Verify Now
          </button>
        </div>
      </div>
    </div>
  )
}

function TextExample() {
  return (
    <div className="phone-shell">
      <div className="phone-top">
        <span>9:41</span>
        <i />
      </div>
      <div className="text-contact">
        <div>?</div>
        <strong>Unknown sender</strong>
      </div>
      <div className="sms-bubble">
        Your package couldn't be delivered. Reschedule now:{" "}
        <u>bit.ly/ex-delivery</u>
      </div>
      <span className="delivered">Text Message • Today 9:38 AM</span>
    </div>
  )
}

function LoginExample() {
  return (
    <div className="browser">
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <div>
          <Icon name="lock" size={14} /> examp1e-bank-login.com
        </div>
      </div>
      <div className="login-page">
        <div className="fake-logo">
          EXAMPLE<span>BANK</span>
        </div>
        <strong>Welcome back</strong>
        <span>Sign in to continue to your account</span>
        <label>
          Email address<div>you@example.com</div>
        </label>
        <label>
          Password<div>••••••••••</div>
        </label>
        <button type="button" className="mock-action">
          Sign in
        </button>
      </div>
    </div>
  )
}

function CallExample() {
  return (
    <div className="call-example">
      <div className="call-screen">
        <span>Incoming call</span>
        <div className="caller-icon">
          <Icon name="user" size={34} />
        </div>
        <strong>Unknown Number</strong>
        <p>+1 (000) 555-0142</p>
        <div className="call-actions">
          <i>
            <Icon name="phone" />
          </i>
          <i>
            <Icon name="close" />
          </i>
        </div>
      </div>
      <div className="script-bubble">
        <span>Caller says:</span>
        “Hi, this is IT support. We need your password and the verification code
        we just sent to secure your account.”
      </div>
    </div>
  )
}

const folderDetails: Record<string, {
  title: string
  text: string
  watch: string
  visual: React.ReactNode
}> = {
  email: {
    title: "Urgent account email",
    text: "The sender address doesn’t match the company name, and the message pressures you to act immediately. Real organizations won’t ask you to confirm sensitive information through an unexpected link.",
    watch: "Watch for: urgency, odd sender addresses, and unexpected buttons.",
    visual: <EmailExample />,
  },
  text: {
    title: "Unexpected delivery text",
    text: "You weren’t expecting this message, and the shortened link hides where it really goes. Delivery companies won’t usually ask for personal or payment information through a surprise text.",
    watch: "Watch for: shortened links, surprise fees, and unknown senders.",
    visual: <TextExample />,
  },
  login: {
    title: "Look-alike login page",
    text: "The page may look polished, but the address uses a “1” instead of an “l” in “example.” Always check the full website address before entering a username, password, or verification code.",
    watch:
      "Watch for: misspelled URLs, unusual domains, and unexpected sign-ins.",
    visual: <LoginExample />,
  },
  call: {
    title: "Fake IT support call",
    text: "Legitimate IT staff will never ask for your password or a one-time verification code. Hang up, then contact your organization using a phone number you already know and trust.",
    watch: "Watch for: requests for passwords, codes, or remote access.",
    visual: <CallExample />,
  },
}

function App() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null)
  const active = activeFolder ? folderDetails[activeFolder] : null

  const scrollToGuide = () =>
    document
      .querySelector("#what-is-phishing")
      ?.scrollIntoView({ behavior: "smooth" })

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>
            Spotting Phishing:
            <br />
            <em>Are You At Risk?</em>
          </h1>
          <p>
            How to spot phishing messages and what to do if you get one.
          </p>
          <button
            type="button"
            className="primary-button"
            onClick={scrollToGuide}
          >
            Get started <Icon name="arrow" size={19} />
          </button>
        </div>
        <div
          className="hero-art"
          aria-label="A friendly illustration of an envelope avoiding a fishing hook"
        >
          <svg viewBox="0 0 520 440" role="img" aria-hidden="true">
            <path
              className="fishing-line"
              d="M365 0v116c0 34 55 30 55 82 0 34-24 55-52 55-21 0-37-13-37-33 0-14 9-25 22-29"
            />
            <path className="hook" d="m354 179 4 21-20-2" />
            <g className="envelope-art">
              <rect x="62" y="175" width="258" height="170" rx="28" />
              <path d="m77 194 114 89 114-89M77 327l77-69M305 327l-77-69" />
              <circle cx="191" cy="258" r="28" />
              <path d="m181 258 7 7 14-16" />
            </g>
            <path className="motion-line" d="M32 229h41M22 259h33M44 289h32" />
          </svg>
        </div>
      </section>

      <section className="intro section" id="what-is-phishing">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div>
            <span className="overline">Fishing?</span>
            <h2>What is phishing?</h2>
          </div>
        </div>
        <div className="intro-grid">
          <div className="intro-copy">
            <p className="lead">
              Phishing is when a scammer pretends to be someone you trust. Could be
              your school, bank, coworker, or a familiar company.
            </p>
            <p>
              Their goal is to get you to click a link, share a password, or send money / personal information. The good news? Most
              phishing messages leave clues.
            </p>
            <div className="tip">
              <Icon name="eye" />
              <span>
                <strong>Stop and check.</strong> Look closely before you click
                or reply.
              </span>
            </div>
          </div>
          <div className="suspicious-card">
            <ExampleBadge />
            <div className="suspicious-sender">
              <span>!</span>
              <div>
                <b>OSU Account Team</b>
                <small>support@osu-security-check.example</small>
              </div>
            </div>
            <strong className="suspicious-subject">
              Your account expires in 2 hours!
            </strong>
            <p>Confirm your password now to keep access to your files.</p>
            <div className="suspicious-link">
              https://osu-login-check.example
            </div>
            <div className="why">
              <Icon name="flag" />
              <span>
                <b>Why it’s suspicious:</b> It creates urgency and asks for a
                password through an unfamiliar website.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="examples section" id="examples">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div>
            <span className="overline">Examples</span>
            <h2>What phishing can look like</h2>
            <p>Open each folder to see a safe, fictional example.</p>
          </div>
        </div>
        <div className={`folder-system ${activeFolder ? "has-active" : ""}`}>
          <div
            className="folder-tabs"
            role="tablist"
            aria-label="Phishing examples"
          >
            {folders.map((folder, index) => (
              <button
                type="button"
                key={folder.id}
                role="tab"
                aria-selected={activeFolder === folder.id}
                aria-controls="folder-panel"
                className={`folder-tab folder-${index + 1} ${
                  activeFolder === folder.id ? "active" : ""
                }`}
                onClick={() =>
                  setActiveFolder(activeFolder === folder.id ? null : folder.id)
                }
              >
                <span className="folder-label">
                  <Icon name={folder.icon} size={19} />
                  {folder.label}
                </span>
                <span className="folder-number">0{index + 1}</span>
                <span className="folder-prompt">
                  {activeFolder === folder.id ? "Close folder" : "Open folder"}{" "}
                  <Icon
                    name={activeFolder === folder.id ? "close" : "arrow"}
                    size={17}
                  />
                </span>
              </button>
            ))}
          </div>
          {active && (
            <div className="folder-panel" id="folder-panel" role="tabpanel">
              <div className="panel-visual">
                <ExampleBadge />
                {active.visual}
              </div>
              <div className="panel-copy">
                <span className="overline">Spot the signs</span>
                <h3>{active.title}</h3>
                <p>{active.text}</p>
                <div className="watch">
                  <Icon name="eye" />
                  <span>
                    <b>{active.watch.split(":")[0]}:</b>
                    {active.watch.split(":")[1]}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="action section" id="action-plan">
        <div className="action-heading">
          <span className="overline">What to do</span>
          <h2>Think you’ve been phished?</h2>
          <p>Stay calm. Here’s what to do next.</p>
        </div>
        <div className="steps">
          {[
            [
              "close",
              "Don’t click anything",
              "Don’t open links, download attachments, or reply.",
            ],
            ["flag", "Report it", "Forward the message to report@example.edu."],
            [
              "lock",
              "Change your password",
              "If you clicked or entered info, change it right away.",
            ],
            [
              "message",
              "When in doubt, ask",
              "It’s always okay to double-check with IT.",
            ],
          ].map(([icon, title, text], index) => (
            <article className="step-card" key={title}>
              <span className="step-number">{index + 1}</span>
              <div className="step-icon">
                <Icon name={icon as IconName} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="reassurance">
          <Icon name="shield" size={28} />
          <p>
            <strong>Getting phished happens to everyone.</strong> Reporting it
            quickly is what matters.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
