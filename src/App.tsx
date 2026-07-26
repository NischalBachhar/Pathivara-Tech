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
  <a className={`brand ${compact ? "brand-compact" : ""}`} href="/#top" aria-label="Pathivara Tech home">
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
              ["Home", "/#top"],
              ["About", "/#about"],
              ["Services", "/#services"],
              ["Future Tech", "/#future"],
              ["Our Work", "/#work"],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="header-cta" href="/#contact" onClick={() => setMenuOpen(false)}>
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

const technologyPages = [
  {
    slug: "ar-vr",
    number: "01",
    title: "AR & VR",
    label: "Immersive experiences",
    short: "Immersive training, product experiences, virtual tours, and spatial interfaces.",
    hero: "Let people understand, practise, and explore something before it is physically in front of them.",
    simple: "Augmented reality (AR) adds useful digital information to the real world through a phone, tablet, or smart glasses. Virtual reality (VR) places a person inside a computer-made environment using a headset or screen.",
    analogy: "AR is like looking through a smart window that adds instructions or objects to what you already see. VR is like stepping inside a realistic digital room.",
    image: "/pathivara-ar-studio.png",
    businessBenefits: [
      ["Show products before purchase", "Customers can view furniture in their room, explore a property, or try a product virtually before deciding."],
      ["Train people safely", "Employees can practise difficult, expensive, or risky tasks without stopping real operations or damaging equipment."],
      ["Explain complex ideas clearly", "Interactive 3D demonstrations make machinery, buildings, medical concepts, and processes easier to understand."],
      ["Reach people anywhere", "Virtual tours and showrooms give distant customers a richer experience without requiring physical travel."],
    ],
    everyday: [
      "Preview furniture, colours, or equipment inside a real space.",
      "Visit a museum, property, classroom, or destination remotely.",
      "Follow visual repair, assembly, or navigation instructions over the real world.",
    ],
    bestFor: ["Real estate and construction", "Education and training", "Retail and e-commerce", "Tourism and events", "Manufacturing and healthcare"],
    firstStep: "Start with one moment that is hard to explain, expensive to demonstrate, or easier to understand in 3D.",
  },
  {
    slug: "ai-automation",
    number: "02",
    title: "AI & Automation",
    label: "Smarter operations",
    short: "Smarter workflows, intelligent support, insight, and repetitive-task automation.",
    hero: "Give your team more time for judgement, relationships, and growth by reducing repetitive digital work.",
    simple: "Artificial intelligence helps software recognise patterns, understand information, produce useful suggestions, and assist with decisions. Automation connects steps so routine work can happen consistently without someone repeating every click.",
    analogy: "Think of AI as a fast assistant that can read, sort, draft, and suggest. Automation is the checklist that moves work to the next step. People still set the rules and remain responsible for important decisions.",
    image: "/pathivara-future-stack.png",
    businessBenefits: [
      ["Respond faster", "Answer common questions, organise enquiries, and direct customers or staff to the right information at any hour."],
      ["Reduce repetitive work", "Move data between systems, prepare routine reports, send reminders, and process standard documents automatically."],
      ["Find useful patterns", "Turn sales, service, inventory, and operational data into understandable summaries and early warnings."],
      ["Support better decisions", "Give teams relevant information and recommendations while keeping people in control of final choices."],
    ],
    everyday: [
      "Search large amounts of information using normal questions.",
      "Receive helpful reminders, summaries, translations, and accessibility support.",
      "Automate repeated personal tasks such as sorting, scheduling, or organising information.",
    ],
    bestFor: ["Customer service", "Sales and marketing", "Finance and administration", "Operations and logistics", "Knowledge-heavy teams"],
    firstStep: "Choose one frequent task that is slow, repetitive, and easy to check. Improve that workflow before attempting a large AI transformation.",
  },
  {
    slug: "blockchain",
    number: "03",
    title: "Blockchain",
    label: "Shared digital trust",
    short: "Transparent, secure digital records and decentralised application possibilities.",
    hero: "Create records that several organisations can verify without depending on one party to secretly control or change the history.",
    simple: "A blockchain is a shared digital record book. Approved activity is added in order, copied across a network, and made difficult to alter quietly. It is useful when several parties need to trust the same history.",
    analogy: "Imagine several businesses keeping matching copies of the same numbered receipt book. When a valid new entry is added, everyone receives it. Changing an old entry without the others noticing becomes extremely difficult.",
    image: "/pathivara-future-stack.png",
    businessBenefits: [
      ["Trace products and assets", "Follow an item from origin to customer and give authorised parties a dependable shared history."],
      ["Verify certificates", "Make qualifications, warranties, tickets, and ownership records easier to check and harder to counterfeit."],
      ["Coordinate across organisations", "Reduce reconciliation work when suppliers, partners, regulators, and customers need the same records."],
      ["Automate agreed rules", "Smart contracts can carry out clearly defined digital actions when agreed conditions are met."],
    ],
    everyday: [
      "Check where a product came from and whether its history is genuine.",
      "Verify a certificate, membership, warranty, or event ticket.",
      "Transfer certain digital assets or rights without repeatedly reconciling separate records.",
    ],
    bestFor: ["Supply chains", "Certificates and credentials", "Multi-party finance", "Digital ownership", "Transparent record systems"],
    firstStep: "First ask whether several independent parties truly need one shared, tamper-evident record. A normal database is often better when one trusted organisation controls everything.",
  },
  {
    slug: "metaverse",
    number: "04",
    title: "Metaverse",
    label: "Shared virtual spaces",
    short: "Shared virtual spaces, branded worlds, and interactive digital communities.",
    hero: "Bring people together inside interactive digital spaces for learning, events, collaboration, shopping, and community.",
    simple: "The metaverse describes shared digital spaces where people can enter as themselves or an avatar, move around, interact with content, and meet others. It can work through a browser, phone, computer, or VR headset.",
    analogy: "Think of it as a website you can walk through together instead of pages you only scroll through. It does not replace the real world; it gives remote people a more spatial and social way to participate.",
    image: "/pathivara-vr-hero.png",
    businessBenefits: [
      ["Create memorable events", "Host launches, exhibitions, conferences, and community experiences that people can join from anywhere."],
      ["Build virtual showrooms", "Let customers explore products, spaces, and brand stories in an interactive environment."],
      ["Collaborate remotely", "Give distributed teams a shared visual space for workshops, training, planning, and simulation."],
      ["Grow digital communities", "Create places where members can meet, participate, unlock content, and return for new experiences."],
    ],
    everyday: [
      "Attend remote events with a stronger feeling of presence.",
      "Learn and practise with other people inside interactive environments.",
      "Meet communities, play, create, and explore shared digital spaces.",
    ],
    bestFor: ["Events and entertainment", "Brands and retail", "Education and training", "Remote collaboration", "Communities and tourism"],
    firstStep: "Define why people should enter the space and what useful action they can take there. A meaningful experience matters more than simply creating a 3D world.",
  },
  {
    slug: "iot-cloud",
    number: "05",
    title: "IoT & Cloud",
    label: "Connected intelligence",
    short: "Connected devices, real-time data, and scalable infrastructure that works together.",
    hero: "Know what is happening across equipment, buildings, vehicles, products, or environments—even when nobody is standing beside them.",
    simple: "The Internet of Things (IoT) connects physical objects such as sensors, machines, vehicles, meters, and appliances to software. Cloud technology securely stores and processes their information so it can be viewed and used from anywhere.",
    analogy: "A sensor is like the eyes and ears, the internet is the messenger, and the cloud is the control room. Together they can notice a change, record it, alert someone, or trigger an approved action.",
    image: "/concept-mobile.png",
    businessBenefits: [
      ["See operations in real time", "Monitor temperature, location, energy, equipment, stock, or environmental conditions from one dashboard."],
      ["Prevent costly problems", "Receive early warnings when a machine, cold room, vehicle, or building moves outside safe conditions."],
      ["Use resources efficiently", "Understand energy, water, fuel, and equipment usage so waste can be reduced."],
      ["Deliver connected services", "Offer customers remote control, automatic updates, usage insights, and faster support for connected products."],
    ],
    everyday: [
      "Control lights, security, temperature, and appliances remotely.",
      "Use wearables to understand activity, location, or health-related measurements.",
      "Receive alerts about vehicles, deliveries, air quality, leaks, or equipment.",
    ],
    bestFor: ["Manufacturing and maintenance", "Agriculture and cold chains", "Logistics and fleets", "Smart buildings and energy", "Connected consumer products"],
    firstStep: "Choose one physical condition you need to see or control remotely. Test a few devices, prove the value, and then expand securely.",
  },
];

function FutureTech({ onSelect }: { onSelect: (slug: string) => void }) {
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
            {technologyPages.map((technology, index) => (
              <a
                className="future-item reveal reveal-right"
                href={`/?technology=${technology.slug}`}
                key={technology.slug}
                onClick={(event) => {
                  event.preventDefault();
                  onSelect(technology.slug);
                }}
                style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <span>{technology.number}</span>
                <div><h3>{technology.title}</h3><p>{technology.short}</p></div>
                <Arrow diagonal />
              </a>
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

type Technology = (typeof technologyPages)[number];

function TechnologyPage({
  technology,
  onBack,
}: {
  technology: Technology;
  onBack: () => void;
}) {
  return (
    <>
      <Header />
      <section className="technology-hero" id="top">
        <div className="technology-grid-bg" aria-hidden="true" />
        <div className="shell technology-hero-layout">
          <div className="technology-hero-copy">
            <a
              className="technology-back"
              href="/#future"
              onClick={(event) => {
                event.preventDefault();
                onBack();
              }}
            >
              <span>←</span> All future technologies
            </a>
            <p className="section-label section-label-light">
              <span /> Technology {technology.number} · {technology.label}
            </p>
            <h1>{technology.title}</h1>
            <p className="technology-hero-lede">{technology.hero}</p>
            <div className="technology-hero-actions">
              <a className="button button-coral" href="/#contact">
                Explore a project <Arrow />
              </a>
              <a className="technology-jump" href="#simple-explanation">
                Understand it simply <span>↓</span>
              </a>
            </div>
          </div>
          <div className="technology-hero-visual">
            <img src={technology.image} alt={`${technology.title} technology experience`} />
            <span className="technology-visual-grid" aria-hidden="true" />
            <div className="technology-signal signal-a"><i /> BUSINESS VALUE</div>
            <div className="technology-signal signal-b"><i /> HUMAN FRIENDLY</div>
            <div className="technology-signal signal-c"><i /> FUTURE READY</div>
          </div>
        </div>
      </section>

      <section className="section technology-simple" id="simple-explanation">
        <div className="shell technology-simple-grid">
          <div>
            <p className="section-label"><span /> In simple words</p>
            <h2>What is {technology.title}?</h2>
          </div>
          <div className="technology-explanation">
            <p>{technology.simple}</p>
            <aside>
              <span>Think of it like this</span>
              <p>{technology.analogy}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section technology-benefits">
        <div className="shell">
          <div className="technology-section-heading">
            <div>
              <p className="section-label"><span /> Business value</p>
              <h2>How it can improve a business.</h2>
            </div>
            <p>
              The right technology should remove friction, improve understanding,
              or create measurable value—not exist only because it is new.
            </p>
          </div>
          <div className="technology-benefit-grid">
            {technology.businessBenefits.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section technology-life">
        <div className="shell technology-life-grid">
          <div className="technology-life-copy">
            <p className="section-label section-label-light"><span /> Everyday impact</p>
            <h2>How it can make daily life easier.</h2>
            <p>
              People do not need to understand the technical system behind the
              experience. They should simply feel that something became clearer,
              faster, safer, or more convenient.
            </p>
          </div>
          <div className="technology-life-list">
            {technology.everyday.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section technology-fit">
        <div className="shell technology-fit-grid">
          <div>
            <p className="section-label"><span /> Where it fits</p>
            <h2>Useful industries and situations.</h2>
            <div className="technology-tags">
              {technology.bestFor.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <aside className="technology-first-step">
            <span>THE PRACTICAL FIRST STEP</span>
            <h3>Start with a real problem, then choose the technology.</h3>
            <p>{technology.firstStep}</p>
            <a href="/#contact">Discuss the opportunity <Arrow /></a>
          </aside>
        </div>
      </section>

      <section className="technology-page-cta">
        <div className="shell">
          <p>Have a challenge that {technology.title} might solve?</p>
          <h2>Let&apos;s turn the idea into a useful first step.</h2>
          <a className="button button-coral" href="/#contact">Start a conversation <Arrow /></a>
        </div>
      </section>
      <Footer />
    </>
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
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#future">Future Tech</a>
          <a href="/#work">Our Work</a>
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
  const [activeTechnology, setActiveTechnology] = useState<string | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTechnologyFromUrl = () => {
      const slug = new URLSearchParams(window.location.search).get("technology");
      const isValid = technologyPages.some((technology) => technology.slug === slug);
      setActiveTechnology(isValid ? slug : null);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    updateTechnologyFromUrl();
    window.addEventListener("popstate", updateTechnologyFromUrl);

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
      cursorRef.current.classList.add("cursor-visible");
      cursorRef.current.style.transform = `translate3d(${event.clientX - 17}px, ${event.clientY - 19}px, 0)`;
    };

    const onPointerOver = (event: PointerEvent) => {
      if (!cursorRef.current || !(event.target instanceof Element)) return;
      const interactive = event.target.closest("a, button, input, textarea, select, [role='button']");
      cursorRef.current.classList.toggle("cursor-active", Boolean(interactive));
    };

    const onPointerLeave = () => {
      cursorRef.current?.classList.remove("cursor-visible");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    onScroll();

    return () => {
      window.clearTimeout(loaderTimer);
      observer.disconnect();
      window.removeEventListener("popstate", updateTechnologyFromUrl);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      document.body.classList.remove("site-loading");
    };
  }, []);

  const openTechnology = (slug: string) => {
    window.history.pushState({}, "", `/?technology=${slug}`);
    setActiveTechnology(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeTechnology = () => {
    window.history.pushState({}, "", "/#future");
    setActiveTechnology(null);
    window.setTimeout(() => {
      document.getElementById("future")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const selectedTechnology = technologyPages.find(
    (technology) => technology.slug === activeTechnology,
  );

  return (
    <main>
      <Preloader loading={loading} />
      <div className="scroll-progress" ref={progressRef} />
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true"><span /></div>
      {selectedTechnology ? (
        <TechnologyPage technology={selectedTechnology} onBack={closeTechnology} />
      ) : (
        <>
          <Header />
          <Hero />
          <Marquee />
          <About />
          <Services />
          <FutureTech onSelect={openTechnology} />
          <Work />
          <Metrics />
          <Process />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
