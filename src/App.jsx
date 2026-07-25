import { useState } from "react";

const Arrow = ({ diagonal = false }) => (
  <svg
    aria-hidden="true"
    className="arrow-icon"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d={diagonal ? "M5 19 19 5M9 5h10v10" : "M5 12h14m-5-5 5 5-5 5"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const Brand = () => (
  <a className="brand" href="#top" aria-label="Pathivara Tech home">
    <span className="brand-mark" aria-hidden="true" />
    <span className="brand-name">Pathivara Tech</span>
  </a>
);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Brand />
        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav aria-label="Main navigation" className={menuOpen ? "nav open" : "nav"}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu} aria-label="Start a project">
            <Arrow />
          </a>
        </nav>
      </div>
    </header>
  );
}

function ProductVisual() {
  return (
    <div className="product-visual" aria-label="Illustration of connected digital products">
      <div className="browser-card">
        <div className="browser-dots"><i /><i /><i /></div>
        <div className="browser-grid">
          <div className="browser-image">
            <span className="sun" />
            <span className="mountain mountain-one" />
            <span className="mountain mountain-two" />
          </div>
          <div className="browser-copy">
            <span /><span /><span />
            <b />
          </div>
        </div>
      </div>

      <div className="analytics-card">
        <div className="analytics-tabs">
          <i className="teal-dot" /><i className="coral-triangle" /><i className="navy-square" />
        </div>
        <div className="analytics-content">
          <div className="donut" />
          <div className="chart">
            <span style={{ height: "22%" }} />
            <span style={{ height: "32%" }} />
            <span style={{ height: "48%" }} />
            <span style={{ height: "64%" }} />
            <span style={{ height: "82%" }} />
            <span style={{ height: "100%" }} />
          </div>
        </div>
      </div>

      <div className="mobile-card">
        <div className="mobile-image">
          <span className="sun" />
          <span className="mountain mountain-one" />
          <span className="mountain mountain-two" />
        </div>
        <i /><i />
        <b />
      </div>

      <div className="signal-card">
        <svg aria-hidden="true" viewBox="0 0 170 150" fill="none">
          <path d="M22 116C61 80 91 104 114 61" stroke="white" strokeWidth="2" />
          <circle cx="22" cy="116" r="8" stroke="white" strokeWidth="2" />
          <circle cx="76" cy="93" r="8" stroke="white" strokeWidth="2" />
          <circle cx="115" cy="61" r="8" stroke="white" strokeWidth="2" />
          <path d="M115 42c12 0 21 9 21 21M115 31c18 0 32 14 32 32" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Digital product studio</p>
        <h1>
          We build digital products that move businesses forward.
        </h1>
        <p className="hero-lede">
          Websites, web apps, mobile apps, and digital marketing—designed,
          built, and grown by one technology partner.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Start a project <Arrow />
          </a>
          <a className="text-link" href="#services">
            Explore services <Arrow />
          </a>
        </div>
      </div>
      <ProductVisual />
      <div className="capability-strip" aria-label="Core capabilities">
        <span>Web &amp; Mobile</span>
        <i />
        <span>Software</span>
        <i />
        <span>UI/UX</span>
        <i />
        <span>IT Consulting</span>
        <i />
        <span>IoT</span>
      </div>
      <ol className="hero-steps">
        <li><b>01</b> Build</li>
        <li><b>02</b> Launch</li>
        <li><b>03</b> Grow</li>
      </ol>
    </section>
  );
}

const services = [
  {
    number: "01",
    title: "Websites & Web Apps",
    description:
      "Fast, accessible websites and powerful web applications built to turn ideas into useful digital experiences.",
    tags: ["Corporate websites", "E-commerce", "SaaS platforms"],
    tone: "blue",
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Intuitive mobile products for iOS and Android, shaped around real users and reliable performance.",
    tags: ["iOS & Android", "Cross-platform", "App strategy"],
    tone: "teal",
  },
  {
    number: "03",
    title: "Custom Software",
    description:
      "Purpose-built systems that simplify operations, connect teams, and automate repetitive work.",
    tags: ["Business systems", "API integrations", "Automation"],
    tone: "coral",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Clear product strategy, thoughtful interfaces, and design systems that make every interaction feel effortless.",
    tags: ["Product design", "Prototyping", "Design systems"],
    tone: "navy",
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Content, campaigns, search, and performance marketing designed to turn attention into measurable growth.",
    tags: ["Social media", "SEO & content", "Paid campaigns"],
    tone: "mint",
  },
  {
    number: "06",
    title: "IT Consulting & IoT",
    description:
      "Practical technology guidance and connected solutions that help your business choose and use the right tools.",
    tags: ["Tech strategy", "Smart applications", "Cloud guidance"],
    tone: "sun",
  },
];

function SectionHeading({
  kicker,
  title,
  copy,
}) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="shell">
        <SectionHeading
          kicker="What we do"
          title="Everything digital. One focused team."
          copy="From the first sketch to launch and long-term growth, we bring strategy, design, engineering, and marketing together."
        />
        <div className="services-grid">
          {services.map((service) => (
            <article className={`service-card tone-${service.tone}`} key={service.number}>
              <div className="service-topline">
                <span>{service.number}</span>
                <span className="service-arrow"><Arrow diagonal /></span>
              </div>
              <div className="service-symbol" aria-hidden="true">
                <span />
                <i />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="shell">
        <div className="work-heading">
          <SectionHeading
            kicker="Built around your goals"
            title="Digital systems people enjoy using."
            copy="A look at the kinds of outcomes we can create together—from customer-facing products to the systems behind them."
          />
          <a className="text-link" href="#contact">Discuss your idea <Arrow /></a>
        </div>

        <div className="work-grid">
          <article className="work-card work-card-large">
            <div className="work-meta">
              <span>Commerce platform</span>
              <span>Web / UX / Growth</span>
            </div>
            <div className="commerce-scene" aria-hidden="true">
              <div className="commerce-sidebar">
                <i /><i /><i /><i />
              </div>
              <div className="commerce-main">
                <div className="commerce-nav"><i /><i /><i /></div>
                <strong>Everyday essentials,<br />made effortless.</strong>
                <div className="product-row">
                  <span /><span /><span />
                </div>
              </div>
            </div>
            <div className="work-copy">
              <p>Conversion-focused shopping experiences that are fast, clear, and ready to scale.</p>
              <span className="circle-link"><Arrow diagonal /></span>
            </div>
          </article>

          <article className="work-card work-card-dark">
            <div className="work-meta">
              <span>Operations dashboard</span>
              <span>Software / Data</span>
            </div>
            <div className="dashboard-scene" aria-hidden="true">
              <div className="dash-top"><i /><i /></div>
              <div className="dash-number">84.6%</div>
              <div className="dash-bars">
                <span style={{ height: "44%" }} /><span style={{ height: "60%" }} />
                <span style={{ height: "50%" }} /><span style={{ height: "78%" }} />
                <span style={{ height: "68%" }} /><span style={{ height: "92%" }} />
              </div>
            </div>
            <div className="work-copy">
              <p>Useful tools that bring daily work, decisions, and business data into one place.</p>
              <span className="circle-link"><Arrow diagonal /></span>
            </div>
          </article>

          <article className="work-card work-card-coral">
            <div className="work-meta">
              <span>Mobile-first growth</span>
              <span>App / Marketing</span>
            </div>
            <div className="mobile-scene" aria-hidden="true">
              <div className="phone phone-back">
                <span className="phone-pill" />
                <i /><i /><i />
              </div>
              <div className="phone phone-front">
                <span className="phone-pill" />
                <strong>Grow<br />with every<br />tap.</strong>
                <b>Get started</b>
              </div>
            </div>
            <div className="work-copy">
              <p>Connected mobile experiences and campaigns designed to acquire and retain users.</p>
              <span className="circle-link"><Arrow diagonal /></span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  ["Discover", "We learn your business, audience, goals, and what success should look like."],
  ["Design", "We turn strategy into a clear user journey, interface, and build-ready plan."],
  ["Build & launch", "We develop, test, refine, and release a product you can confidently use."],
  ["Grow", "We improve performance, support your team, and help the product keep moving."],
];

function AboutAndProcess() {
  return (
    <>
      <section className="section process-section">
        <div className="shell process-layout">
          <SectionHeading
            kicker="How we work"
            title="Clear process. No unnecessary complexity."
            copy="You always know what is happening, why it matters, and what comes next."
          />
          <ol className="process-list">
            {processSteps.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-layout">
          <div className="about-statement">
            <p className="section-kicker">Why Pathivara Tech</p>
            <h2>Technology should make your business feel simpler—not heavier.</h2>
          </div>
          <div className="about-copy">
            <p>
              Pathivara Tech is an end-to-end digital partner for businesses that
              want thoughtful technology without juggling multiple agencies.
            </p>
            <p>
              We combine business thinking, human-centered design, strong
              engineering, and practical marketing to build solutions that are
              useful today and adaptable tomorrow.
            </p>
            <a className="text-link light-link" href="#contact">
              Work with us <Arrow />
            </a>
          </div>
          <div className="about-principles">
            <div><strong>One partner</strong><span>Strategy to support</span></div>
            <div><strong>Business-first</strong><span>Technology with a purpose</span></div>
            <div><strong>Built to grow</strong><span>Flexible, maintainable systems</span></div>
          </div>
        </div>
      </section>
    </>
  );
}

const faqs = [
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "We can support startups, growing companies, established businesses, and organizations that need a new digital product or want to improve an existing one.",
  },
  {
    question: "Can you handle design, development, and marketing together?",
    answer:
      "Yes. That is one of our biggest strengths. We can take responsibility for the full journey or join your team for a specific stage such as UI/UX, software development, or digital marketing.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on scope, complexity, timeline, and the team required. Share a short project brief and we will recommend a practical approach with a clear estimate.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can provide maintenance, performance improvements, feature development, technical guidance, and ongoing digital marketing after launch.",
  },
];

function FAQ() {
  return (
    <section className="section faq-section">
      <div className="shell faq-layout">
        <SectionHeading
          kicker="FAQs"
          title="A few things you may want to know."
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
                <i aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`New project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested in: ${service}\n\nProject details:\n${message}`,
    );

    setSubmitted(true);
    window.location.href = `mailto:Techpathivara@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="shell contact-layout">
        <div className="contact-intro">
          <p className="section-kicker">Start a conversation</p>
          <h2>Have an idea?<br />Let&apos;s make it real.</h2>
          <p>
            Tell us what you are trying to build or improve. We&apos;ll help you
            find the clearest next step.
          </p>
          <a className="contact-email" href="mailto:Techpathivara@gmail.com">
            Techpathivara@gmail.com <Arrow diagonal />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Your name</span>
              <input name="name" placeholder="Enter your name" required />
            </label>
            <label>
              <span>Email address</span>
              <input name="email" placeholder="you@company.com" required type="email" />
            </label>
          </div>
          <label>
            <span>What can we help with?</span>
            <select defaultValue="" name="service" required>
              <option disabled value="">Choose a service</option>
              <option>Website or web app</option>
              <option>Mobile app</option>
              <option>Custom software</option>
              <option>UI/UX design</option>
              <option>Digital marketing</option>
              <option>IT consulting or IoT</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            <span>Tell us about your project</span>
            <textarea
              name="message"
              placeholder="What are you hoping to build, who is it for, and when would you like to begin?"
              required
              rows={5}
            />
          </label>
          <button className="button button-primary form-submit" type="submit">
            Send enquiry <Arrow />
          </button>
          <p aria-live="polite" className="form-note">
            {submitted
              ? "Your email app is opening with the project details."
              : "Submitting opens your email app. No details are stored on this website."}
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <Brand />
        <p>We design, build, and grow useful digital products.</p>
        <a className="footer-email" href="mailto:Techpathivara@gmail.com">
          Techpathivara@gmail.com
        </a>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Pathivara Tech</span>
        <div>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Work />
      <AboutAndProcess />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
