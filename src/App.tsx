import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 24 24" fill="none">
    <path
      d={diagonal ? "M5 19 19 5M9 5h10v10" : "M5 12h14m-5-5 5 5-5 5"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const Brand = ({ compact = false }: { compact?: boolean }) => (
  <a className={`brand ${compact ? "brand-compact" : ""}`} href="#top" aria-label="Pathivara Tech home">
    <span className="brand-mark" aria-hidden="true" />
    <span className="brand-name">Pathivara Tech</span>
  </a>
);

function Preloader({ loading }: { loading: boolean }) {
  return (
    <div className={`preloader ${loading ? "" : "preloader-hidden"}`} aria-hidden={!loading}>
      <div className="loader-emblem">
        <span className="loader-trident"><i /></span>
      </div>
      <strong>PATHIVARA TECH</strong>
      <span className="loader-caption">LOADING THE FUTURE</span>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Building digital solutions for businesses worldwide</span>
          <div>
            <a href="mailto:Techpathivara@gmail.com">Techpathivara@gmail.com</a>
            <span className="utility-divider" />
            <span>Follow us</span>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
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
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            {[
              ["Home", "#top"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Future Tech", "#future"],
              ["Our Work", "#work"],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="header-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Start your project <Arrow />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

const futureChips = ["AR / VR", "AI", "METAVERSE", "BLOCKCHAIN"];

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid shell">
        <div className="hero-copy hero-intro">
          <p className="eyebrow"><span /> Innovating tech for a smarter future</p>
          <h1>
            Engineering the next <em>digital reality.</em>
          </h1>
          <p className="hero-lede">
            We build business-ready websites, apps, software, and immersive
            experiences—connecting today&apos;s opportunities with tomorrow&apos;s
            technology.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#future">
              Explore the future <Arrow />
            </a>
            <a className="video-link" href="#work">
              <span className="video-button"><i /></span>
              See what we create
            </a>
          </div>
          <div className="hero-mini-metrics">
            <div><strong>06</strong><span>Core digital capabilities</span></div>
            <div><strong>05</strong><span>Emerging technology areas</span></div>
          </div>
        </div>

        <div className="hero-visual hero-intro">
          <span className="hero-beam" />
          <span className="hero-ring ring-a" />
          <span className="hero-ring ring-b" />
          <span className="hero-torus torus-a" />
          <span className="hero-torus torus-b" />
          <span className="hero-spark spark-a">✦</span>
          <span className="hero-spark spark-b">✦</span>
          <div className="hero-person">
            <img src="/pathivara-vr-hero.png" alt="A technology innovator exploring a virtual reality experience" />
          </div>
          <div className="spatial-card spatial-top">
            <span className="live-pulse" />
            <div><small>Spatial computing</small><strong>Reality, upgraded</strong></div>
          </div>
          <div className="spatial-card spatial-bottom">
            <div className="spatial-chart"><i /><i /><i /><i /></div>
            <div><small>Future readiness</small><strong>Built into every layer</strong></div>
          </div>
          <div className="hero-chip-orbit" aria-hidden="true">
            {futureChips.map((chip, index) => (
              <span className={`future-chip chip-${index + 1}`} key={chip}>{chip}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint"><i /> Scroll to discover</div>
    </section>
  );
}

const marqueeItems = [
  "WEB DEVELOPMENT",
  "APP DEVELOPMENT",
  "AI & AUTOMATION",
  "AR / VR",
  "BLOCKCHAIN",
  "METAVERSE",
  "UI / UX DESIGN",
  "IOT SOLUTIONS",
];

function Marquee() {
  return (
    <div className="marquee" aria-label="Pathivara Tech capabilities">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}<i>✦</i></span>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({
  label,
  title,
  copy,
  light = false,
}: {
  label: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-title reveal reveal-up ${light ? "section-title-light" : ""}`}>
      <p className="section-label"><span /> {label}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-description">{copy}</p> : null}
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-pattern" aria-hidden="true" />
      <div className="shell about-grid">
        <div className="about-visual reveal reveal-left">
          <div className="about-image-main">
            <img src="/pathivara-ar-studio.png" alt="Pathivara product engineers working with augmented reality" />
          </div>
          <div className="about-image-small">
            <img src="/pathivara-future-stack.png" alt="Connected emerging technologies visualised together" />
          </div>
          <div className="about-experience">
            <strong>Future-ready</strong>
            <span>by design</span>
          </div>
          <span className="about-orb" />
        </div>

        <div className="about-copy">
          <SectionTitle
            label="Who we are"
            title="Technology should move your business—not slow it down."
          />
          <p className="about-lede reveal reveal-up">
            Pathivara Tech combines strategy, design, engineering, and
            emerging technology to turn complex ideas into clear, useful
            products. We stay curious about what is next and practical about
            what creates value now.
          </p>
          <div className="about-values">
            <article className="reveal reveal-up">
              <span>01</span>
              <div><h3>Innovation with purpose</h3><p>We explore new technology only when it improves the experience, operation, or outcome.</p></div>
            </article>
            <article className="reveal reveal-up">
              <span>02</span>
              <div><h3>One connected team</h3><p>Research, design, development, launch, and growth stay aligned from the beginning.</p></div>
            </article>
          </div>
          <a className="text-link reveal reveal-up" href="#services">
            Discover our capabilities <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  ["01", "Web Development", "Fast, scalable websites and web platforms that explain, perform, and convert.", "browser"],
  ["02", "App Development", "Intuitive mobile and cross-platform products built around real customer journeys.", "mobile"],
  ["03", "Custom Software", "Connected systems and automation shaped around the way your business actually works.", "code"],
  ["04", "UI/UX Design", "Research, prototypes, interfaces, and design systems that make complexity feel simple.", "design"],
  ["05", "Digital Marketing", "Search, content, social, and campaigns designed to turn attention into growth.", "growth"],
  ["06", "IT Consulting & IoT", "Practical technology strategy, connected devices, cloud systems, and long-term support.", "network"],
];

function LineIcon({ type }: { type: string }) {
  const iconPaths: Record<string, React.ReactNode> = {
    browser: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14h8M8 17h5" /></>,
    mobile: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M10 5h4M11 18h2" /></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    design: <><path d="M4 17 14.5 6.5a2.1 2.1 0 0 1 3 3L7 20l-4 1 1-4Z" /><path d="m13 8 3 3M4 16l4 4" /></>,
    growth: <><path d="M4 19V5M4 19h16M8 15l3-4 3 2 5-7" /><path d="M15 6h4v4" /></>,
    network: <><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="m10.7 7.2-4.4 8.6M13.3 7.2l4.4 8.6M7.5 18h9" /></>,
  };
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55">
      {iconPaths[type]}
    </svg>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="services-dots" aria-hidden="true" />
      <div className="shell">
        <div className="services-heading-row">
          <SectionTitle
            label="IT services"
            title="We solve business problems with technology."
            copy="Strong fundamentals come first. Every service connects strategy, experience, engineering, and measurable growth."
          />
          <a className="button button-outline reveal reveal-up" href="#contact">View all services <Arrow /></a>
        </div>
        <div className="services-grid">
          {services.map(([number, title, copy, icon], index) => (
            <article className="service-card reveal reveal-up" style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} key={number}>
              <div className="service-icon"><LineIcon type={icon} /></div>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#contact">Explore service <Arrow /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const futureTech = [
  ["AR & VR", "Immersive training, product experiences, virtual tours, and spatial interfaces."],
  ["AI & Automation", "Smarter workflows, intelligent support, insight, and repetitive-task automation."],
  ["Blockchain", "Transparent, secure digital records and decentralised application possibilities."],
  ["Metaverse", "Shared virtual spaces, branded worlds, and interactive digital communities."],
  ["IoT & Cloud", "Connected devices, real-time data, and scalable infrastructure that works together."],
];

function FutureTech() {
  return (
    <section className="section future-section" id="future">
      <div className="future-grid-shell shell">
        <div className="future-copy">
          <SectionTitle
            label="Beyond conventional"
            title="Ready for the technologies shaping what comes next."
            copy="We help businesses explore emerging technology with a clear use case, thoughtful experience, and a realistic path to launch."
            light
          />
          <div className="future-list">
            {futureTech.map(([title, copy], index) => (
              <article className="future-item reveal reveal-right" style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <Arrow diagonal />
              </article>
            ))}
          </div>
        </div>
        <div className="future-visual reveal reveal-scale">
          <img src="/pathivara-future-stack.png" alt="AI, blockchain, metaverse, and connected technology represented as a future ecosystem" />
          <span className="future-grid-lines" />
          <div className="future-data data-one"><i /> AI CORE <strong>ACTIVE</strong></div>
          <div className="future-data data-two"><i /> NETWORK <strong>CONNECTED</strong></div>
          <div className="future-data data-three"><i /> SPATIAL <strong>READY</strong></div>
          <span className="scanner-line" />
        </div>
      </div>
    </section>
  );
}

const concepts = [
  ["Digital commerce", "A storefront experience designed to turn interest into confident action.", "Strategy · UI/UX · Web", "/concept-commerce.png"],
  ["Intelligent operations", "One calm interface for data, decisions, automation, and everyday work.", "AI · Custom software · Cloud", "/concept-dashboard.png"],
  ["Connected mobile", "A useful mobile product that connects customers, services, and smart devices.", "Mobile · IoT · Product design", "/concept-mobile.png"],
];

function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="shell">
        <div className="work-heading-row">
          <SectionTitle
            label="Solution concepts"
            title="Digital experiences designed for the way people live and work."
            copy="A glimpse of the product directions we can shape around your organisation, users, and growth goals."
          />
          <a className="button button-primary reveal reveal-up" href="#contact">Build yours <Arrow /></a>
        </div>
        <div className="concept-grid">
          {concepts.map(([label, title, detail, image], index) => (
            <article className="concept-card reveal reveal-up" style={{ "--delay": `${index * 100}ms` } as React.CSSProperties} key={label}>
              <div className="concept-image">
                <img src={image} alt={`${label} interface concept`} />
                <span className="concept-scan" />
              </div>
              <div className="concept-caption">
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <a href="#contact" aria-label={`Discuss a ${label} project`}><Arrow diagonal /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const metrics = [
  ["06", "Core digital capabilities"],
  ["05", "Emerging technology areas"],
  ["04", "Clear delivery stages"],
  ["01", "Connected accountable partner"],
];

function Metrics() {
  return (
    <section className="metrics-band">
      <div className="shell metrics-grid">
        {metrics.map(([value, label], index) => (
          <div className="metric reveal reveal-up" style={{ "--delay": `${index * 80}ms` } as React.CSSProperties} key={label}>
            <span className="metric-symbol"><i /><i /></span>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  ["01", "Discover", "Business goals, user needs, technical context, and the right opportunity."],
  ["02", "Imagine", "Experience direction, prototype, technology choices, and a clear roadmap."],
  ["03", "Engineer", "Focused development, visible progress, careful quality, and secure foundations."],
  ["04", "Launch & evolve", "Release, measurement, support, learning, and the next intelligent improvement."],
];

function Process() {
  return (
    <section className="section process-section">
      <div className="process-orbit" aria-hidden="true" />
      <div className="shell process-grid">
        <div className="process-copy">
          <SectionTitle
            label="How we work"
            title="A clear route from ambitious idea to useful reality."
            copy="Innovation feels safer when the path is visible. You always know what is happening, what comes next, and why."
          />
          <a className="text-link reveal reveal-up" href="#contact">Plan your project <Arrow /></a>
        </div>
        <div className="process-steps">
          {steps.map(([number, title, copy]) => (
            <article className="process-step reveal reveal-right" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <i />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Do you build AR, VR, AI, blockchain, and metaverse products?", "Yes. We can help explore, prototype, and build emerging-technology experiences where they solve a clear business or customer problem. The exact approach depends on scope and technical feasibility."],
  ["Can you handle normal websites and apps too?", "Absolutely. Our core work includes websites, e-commerce, web apps, mobile apps, custom software, UI/UX, digital marketing, cloud, IoT, and consulting."],
  ["How do we begin a project?", "Share the idea, challenge, or outcome you want. We will clarify the opportunity and recommend a practical first step, scope, and delivery approach."],
];

function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");

    data.set("_subject", `Future project enquiry from ${name}${company ? ` — ${company}` : ""}`);
    data.set("_replyto", email);
    data.set("_template", "table");
    data.set("_captcha", "false");
    data.set("_url", window.location.href);

    setFormStatus("sending");
    setFormMessage("Sending your project enquiry…");

    try {
      const response = await fetch("https://formsubmit.co/ajax/Techpathivara@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || "The form could not be submitted.");
      }

      form.reset();
      setFormStatus("success");
      setFormMessage("Thank you — your enquiry was sent. We’ll get back to you soon.");
    } catch {
      setFormStatus("error");
      setFormMessage("We couldn’t send the form. Please email Techpathivara@gmail.com instead.");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow glow-one" />
      <div className="contact-glow glow-two" />
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="section-label section-label-light"><span /> Start something ambitious</p>
          <h2 className="reveal reveal-up">Have an idea for what comes next?</h2>
          <p className="reveal reveal-up">
            Tell us what you want to create, improve, automate, or reimagine.
            We&apos;ll help turn it into a clear next move.
          </p>
          <a className="contact-email reveal reveal-up" href="mailto:Techpathivara@gmail.com">
            Techpathivara@gmail.com <Arrow diagonal />
          </a>
        </div>
        <form className="contact-form reveal reveal-right" onSubmit={submitForm}>
          <input aria-hidden="true" className="form-honeypot" name="_honey" tabIndex={-1} type="text" />
          <div className="form-row">
            <label>Your name<input name="name" placeholder="Full name" required /></label>
            <label>Work email<input name="email" placeholder="you@company.com" required type="email" /></label>
          </div>
          <label>Company<input name="company" placeholder="Company or organisation" /></label>
          <label>What should we build?<textarea name="message" placeholder="Tell us about the challenge or idea…" required rows={5} /></label>
          <button className="button button-coral" disabled={formStatus === "sending"} type="submit">
            {formStatus === "sending" ? "Sending enquiry…" : "Send project enquiry"} <Arrow />
          </button>
          {formStatus !== "idle" && (
            <p aria-live="polite" className={`form-status form-status-${formStatus}`} role="status">
              {formMessage}
              {formStatus === "error" && (
                <>{" "}<a href="mailto:Techpathivara@gmail.com">Email us directly</a>.</>
              )}
            </p>
          )}
        </form>
      </div>
      <div className="shell faq-grid">
        <div>
          <p className="section-label section-label-light"><span /> Good to know</p>
          <h2>Common questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
              <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <span>{question}</span><i>{openFaq === index ? "−" : "+"}</i>
              </button>
              <div className="faq-answer"><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <div>
          <Brand compact />
          <p>From digital foundations to immersive futures.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#future">Future Tech</a>
          <a href="#work">Our Work</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Pathivara Tech</span>
        <span>Serving clients worldwide</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("site-loading");
    const loaderTimer = window.setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("site-loading");
    }, 1650);

    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
      document.documentElement.style.setProperty("--page-scroll", `${window.scrollY}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${event.clientX - 10}px, ${event.clientY - 10}px, 0)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(loaderTimer);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.body.classList.remove("site-loading");
    };
  }, []);

  return (
    <main>
      <Preloader loading={loading} />
      <div className="scroll-progress" ref={progressRef} />
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <FutureTech />
      <Work />
      <Metrics />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
