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
              ["About", "/?page=about"],
              ["Services", "/#services"],
              ["Future Tech", "/#future"],
              ["Our Work", "/#work"],
              ["Contact", "/?page=contact"],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="header-cta" href="/?page=contact" onClick={() => setMenuOpen(false)}>
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

const servicePages = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    label: "Websites and web platforms",
    icon: "browser",
    short: "Fast, scalable websites and web platforms that explain, perform, and convert.",
    hero: "Build a professional digital home that earns trust, explains your value, and helps visitors take the next step.",
    simple: "Web development turns your business goals and information into a website or browser-based platform that people can use on phones, tablets, and computers. It includes structure, design, coding, performance, security, testing, and launch.",
    analogy: "Think of a website as your worldwide office, showroom, salesperson, and help desk combined. Unlike a physical location, it can welcome people and answer important questions at any time.",
    image: "/concept-commerce.png",
    outcomes: [
      ["Create a stronger first impression", "Present your business clearly and professionally so potential customers understand why they should trust you."],
      ["Generate enquiries or sales", "Guide visitors toward useful actions such as calling, booking, buying, requesting a quote, or visiting a location."],
      ["Work well on every device", "Give customers a fast, accessible experience whether they arrive from a phone, laptop, tablet, or search engine."],
      ["Make future growth easier", "Use a maintainable foundation that can expand with new pages, languages, integrations, products, or customer tools."],
    ],
    deliverables: ["Business and audience discovery", "Content structure and page planning", "Responsive visual design", "Front-end and back-end development", "Forms, analytics, SEO, and integrations", "Testing, launch, training, and support"],
    bestFor: ["Company websites", "E-commerce", "Booking platforms", "Customer portals", "Membership sites", "Custom web applications"],
    firstStep: "Clarify who the website must serve, what visitors need to understand, and the most valuable action they should take.",
  },
  {
    slug: "app-development",
    number: "02",
    title: "App Development",
    label: "Mobile and cross-platform products",
    icon: "mobile",
    short: "Intuitive mobile and cross-platform products built around real customer journeys.",
    hero: "Put a useful service directly into your customer’s or employee’s pocket with an app designed around real needs.",
    simple: "App development creates software for phones, tablets, and sometimes desktops. An app can help people order, book, communicate, pay, learn, track activity, manage work, or use a connected service.",
    analogy: "A good app is like giving each user a small, personalised branch of your business that travels with them and remembers what they need.",
    image: "/concept-mobile.png",
    outcomes: [
      ["Stay closer to customers", "Offer convenient access, personalised information, updates, and services without asking people to visit a website repeatedly."],
      ["Simplify employee work", "Give teams one focused tool for field activity, delivery, approvals, reporting, communication, or customer service."],
      ["Create repeat engagement", "Use useful features, saved preferences, notifications, and progress tracking to give people a reason to return."],
      ["Connect digital and physical services", "Bring together payments, maps, cameras, sensors, QR codes, wearables, or business systems in one experience."],
    ],
    deliverables: ["User and market research", "Feature planning and prototype", "Android and iOS experience design", "App and API development", "Payments, notifications, maps, or device features", "Store launch, monitoring, and improvement"],
    bestFor: ["Customer service apps", "Delivery and logistics", "Bookings and marketplaces", "Internal workforce tools", "Health and education", "Connected products"],
    firstStep: "Identify the one repeated customer or employee task that becomes noticeably easier when it is available on a phone.",
  },
  {
    slug: "custom-software",
    number: "03",
    title: "Custom Software",
    label: "Systems built around your operation",
    icon: "code",
    short: "Connected systems and automation shaped around the way your business actually works.",
    hero: "Replace scattered spreadsheets, repeated manual work, and disconnected tools with software designed for your operation.",
    simple: "Custom software is built specifically for the way your organisation works. It can manage customers, orders, inventory, staff, approvals, reporting, finance, production, or any process that normal ready-made software cannot handle well.",
    analogy: "Off-the-shelf software is like buying a standard uniform. Custom software is tailored to fit your workflow, connect the tools you already use, and leave room for growth.",
    image: "/concept-dashboard.png",
    outcomes: [
      ["Reduce repeated manual work", "Automate calculations, data entry, document creation, notifications, assignments, and routine process steps."],
      ["See the whole operation", "Bring important information into dashboards and reports instead of searching across chats, files, and spreadsheets."],
      ["Improve consistency and control", "Use clear permissions, validation, status tracking, and audit history so work follows agreed rules."],
      ["Connect existing systems", "Allow websites, apps, accounting, inventory, payments, customer tools, and external services to exchange information."],
    ],
    deliverables: ["Workflow and requirements analysis", "System architecture and database design", "Dashboard and interface design", "Secure application development", "Integrations and data migration", "Testing, training, support, and improvements"],
    bestFor: ["Operations management", "Inventory and order systems", "CRM and customer portals", "Workflow automation", "Reporting platforms", "Industry-specific systems"],
    firstStep: "Map the current process, identify where time or information is lost, and choose one workflow where improvement will create clear value.",
  },
  {
    slug: "ui-ux-design",
    number: "04",
    title: "UI/UX Design",
    label: "Clear and useful digital experiences",
    icon: "design",
    short: "Research, prototypes, interfaces, and design systems that make complexity feel simple.",
    hero: "Make websites, apps, and software easier to understand, more pleasant to use, and better aligned with real people.",
    simple: "User experience (UX) design decides how a digital product should work and feel. User interface (UI) design shapes what people see and interact with—such as screens, buttons, forms, navigation, colour, type, and visual feedback.",
    analogy: "UX is the floor plan and journey through a building; UI is the signs, lighting, furniture, and controls that help people move through it confidently.",
    image: "/pathivara-ar-studio.png",
    outcomes: [
      ["Make products easier to use", "Organise information and actions around how people naturally think instead of how the internal system is organised."],
      ["Reduce confusion and support requests", "Use clear language, predictable interaction, and helpful feedback so users can complete tasks confidently."],
      ["Increase conversion and adoption", "Remove unnecessary steps and hesitation from purchasing, registering, booking, enquiring, or completing work."],
      ["Create a consistent brand experience", "Build reusable design rules and components so every screen feels connected and professional."],
    ],
    deliverables: ["User interviews and journey mapping", "Information architecture", "Wireframes and interactive prototypes", "Visual interface design", "Usability testing", "Design systems and developer handoff"],
    bestFor: ["New digital products", "Website redesigns", "Complex business software", "Mobile applications", "E-commerce journeys", "Design system creation"],
    firstStep: "Choose an important user journey, observe where people hesitate or fail, and redesign that experience before expanding to every screen.",
  },
  {
    slug: "digital-marketing",
    number: "05",
    title: "Digital Marketing",
    label: "Attention that turns into growth",
    icon: "growth",
    short: "Search, content, social, and campaigns designed to turn attention into growth.",
    hero: "Reach the right audience with a clear message, then guide attention toward measurable enquiries, sales, and relationships.",
    simple: "Digital marketing uses search engines, social media, content, email, advertising, websites, and data to help people discover and choose a business. Effective marketing connects the audience, message, offer, and customer journey.",
    analogy: "It is not simply shouting louder online. It is choosing the right street, placing the right sign, speaking to the right person, and making the next step easy.",
    image: "/concept-commerce.png",
    outcomes: [
      ["Reach relevant people", "Focus content and campaigns on audiences who are more likely to need, value, and purchase your offer."],
      ["Build trust before the sale", "Use helpful content, proof, stories, and consistent communication to make the business easier to understand."],
      ["Generate measurable demand", "Connect ads, search, social content, landing pages, and follow-up so attention can become enquiries or revenue."],
      ["Learn what works", "Track meaningful results and improve messages, audiences, pages, and spending instead of relying only on assumptions."],
    ],
    deliverables: ["Market and competitor review", "Brand message and campaign strategy", "SEO and content planning", "Social media and creative campaigns", "Paid advertising and landing pages", "Analytics, reporting, and optimisation"],
    bestFor: ["Brand launches", "Local and international growth", "Lead generation", "E-commerce sales", "Community building", "Customer retention"],
    firstStep: "Define the most valuable audience, the problem you solve for them, and the action that represents real business success.",
  },
  {
    slug: "it-consulting-iot",
    number: "06",
    title: "IT Consulting & IoT",
    label: "Practical technology direction",
    icon: "network",
    short: "Practical technology strategy, connected devices, cloud systems, and long-term support.",
    hero: "Make confident technology decisions and connect physical operations to useful, secure digital information.",
    simple: "IT consulting helps a business choose, improve, secure, and organise its technology. IoT connects physical devices such as sensors, machines, vehicles, meters, or appliances to software so they can report information or respond to approved commands.",
    analogy: "Consulting creates the map and priorities. IoT gives physical operations eyes and ears. Cloud systems act as the control room where information becomes alerts, dashboards, and decisions.",
    image: "/pathivara-future-stack.png",
    outcomes: [
      ["Choose technology with confidence", "Compare options, risks, costs, and long-term impact before investing in systems or infrastructure."],
      ["Improve reliability and security", "Review architecture, access, backups, cloud services, integrations, and operational risks."],
      ["Monitor physical operations remotely", "Use connected devices to understand location, energy, temperature, equipment, stock, or environmental conditions."],
      ["Create a realistic technology roadmap", "Prioritise improvements in stages so the organisation gains value without unnecessary disruption."],
    ],
    deliverables: ["Technology audit and roadmap", "Architecture and vendor guidance", "Cloud and security planning", "IoT feasibility and sensor selection", "Dashboards, alerts, and integrations", "Implementation oversight and ongoing support"],
    bestFor: ["Growing organisations", "System modernisation", "Manufacturing and logistics", "Agriculture and cold chains", "Smart buildings", "Connected products"],
    firstStep: "Begin with the business risk or opportunity, review the current environment, and prioritise the smallest improvement that produces useful evidence.",
  },
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

function Services({ onSelect }: { onSelect: (slug: string) => void }) {
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
          {servicePages.map((service, index) => (
            <article className="service-card reveal reveal-up" style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} key={service.slug}>
              <div className="service-icon"><LineIcon type={service.icon} /></div>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <a
                href={`/?service=${service.slug}`}
                onClick={(event) => {
                  event.preventDefault();
                  onSelect(service.slug);
                }}
              >
                Explore service <Arrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Service = (typeof servicePages)[number];

function ServicePage({
  service,
  onBack,
}: {
  service: Service;
  onBack: () => void;
}) {
  return (
    <>
      <Header />
      <section className="technology-hero service-detail-hero" id="top">
        <div className="technology-grid-bg" aria-hidden="true" />
        <div className="shell technology-hero-layout">
          <div className="technology-hero-copy">
            <a
              className="technology-back"
              href="/#services"
              onClick={(event) => {
                event.preventDefault();
                onBack();
              }}
            >
              <span>←</span> All IT services
            </a>
            <p className="section-label section-label-light">
              <span /> Service {service.number} · {service.label}
            </p>
            <h1>{service.title}</h1>
            <p className="technology-hero-lede">{service.hero}</p>
            <div className="technology-hero-actions">
              <a className="button button-coral" href="/#contact">
                Discuss your project <Arrow />
              </a>
              <a className="technology-jump" href="#service-explanation">
                See what is included <span>↓</span>
              </a>
            </div>
          </div>
          <div className="technology-hero-visual">
            <img src={service.image} alt={`${service.title} service concept`} />
            <span className="technology-visual-grid" aria-hidden="true" />
            <div className="technology-signal signal-a"><i /> STRATEGY</div>
            <div className="technology-signal signal-b"><i /> EXPERIENCE</div>
            <div className="technology-signal signal-c"><i /> DELIVERY</div>
          </div>
        </div>
      </section>

      <section className="section technology-simple" id="service-explanation">
        <div className="shell technology-simple-grid">
          <div>
            <p className="section-label"><span /> Clear explanation</p>
            <h2>What does {service.title} include?</h2>
          </div>
          <div className="technology-explanation">
            <p>{service.simple}</p>
            <aside>
              <span>Think of it like this</span>
              <p>{service.analogy}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section technology-benefits">
        <div className="shell">
          <div className="technology-section-heading">
            <div>
              <p className="section-label"><span /> Business outcomes</p>
              <h2>What this service can improve.</h2>
            </div>
            <p>
              We connect the technical work to customer experience, operational
              improvement, and the result your organisation actually needs.
            </p>
          </div>
          <div className="technology-benefit-grid">
            {service.outcomes.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section technology-life service-deliverables">
        <div className="shell technology-life-grid">
          <div className="technology-life-copy">
            <p className="section-label section-label-light"><span /> Typical deliverables</p>
            <h2>What we can plan and deliver together.</h2>
            <p>
              The exact scope depends on your organisation, audience, existing
              systems, budget, and priorities. We define it clearly before
              development begins.
            </p>
          </div>
          <div className="technology-life-list">
            {service.deliverables.map((item, index) => (
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
            <p className="section-label"><span /> A good fit for</p>
            <h2>Projects and organisations we can support.</h2>
            <div className="technology-tags">
              {service.bestFor.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <aside className="technology-first-step">
            <span>THE PRACTICAL FIRST STEP</span>
            <h3>Understand the goal before choosing features.</h3>
            <p>{service.firstStep}</p>
            <a href="/#contact">Plan the first step <Arrow /></a>
          </aside>
        </div>
      </section>

      <section className="technology-page-cta">
        <div className="shell">
          <p>Considering {service.title}?</p>
          <h2>Let&apos;s define the right scope for your business.</h2>
          <a className="button button-coral" href="/#contact">Start a conversation <Arrow /></a>
        </div>
      </section>
      <Footer />
    </>
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

const teamMembers = [
  {
    name: "Nischal Bachhar",
    role: "CEO",
    image: "/team-nischal-bachhar.jpg",
    position: "team-position-nischal",
    bio: "Guides company direction, client partnerships, and accountable delivery from idea to launch.",
  },
  {
    name: "Gaurab Neupane",
    role: "Full-stack Developer",
    image: "/team-gaurab-neupane.png",
    position: "team-position-gaurab",
    bio: "Builds dependable front-end and back-end systems that connect product experience, data, and business workflows.",
  },
  {
    name: "Sujana Shrestha",
    role: "UI/UX Designer",
    image: "/team-sujana-shrestha.jpg",
    position: "team-position-sujana",
    bio: "Shapes clear, accessible user journeys and interfaces that make complex products feel simple.",
  },
  {
    name: "Sofiya Gajurel",
    role: "Marketing Director",
    image: "/team-sofiya-gajurel.jpg",
    position: "team-position-sofiya",
    bio: "Connects brand strategy, audience insight, content, and campaigns to meaningful business growth.",
  },
  {
    name: "Sushmita Shrestha",
    role: "Quality Assurance",
    image: "/team-sushmita-shrestha.png",
    position: "team-position-sushmita",
    bio: "Protects product quality through careful testing, edge-case thinking, and continuous feedback throughout delivery.",
  },
];

const agileSteps = [
  ["01", "Discover", "We listen first—clarifying the business goal, audience, users, priorities, and technical context."],
  ["02", "Plan together", "We agree on a useful first release, transparent priorities, and a practical roadmap."],
  ["03", "Build in short sprints", "Design, development, and testing move in focused one-to-two-week cycles with visible progress."],
  ["04", "Demo and improve", "You review working results regularly, share feedback, and help shape the next sprint."],
  ["05", "Launch with confidence", "Continuous quality checks, a careful release, and ongoing Kanban support keep the product improving."],
];

function ContactIcon({ type }: { type: "whatsapp" | "phone" | "email" | "address" }) {
  const icons: Record<string, React.ReactNode> = {
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 19.7l1.2-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.2 8.2c.4 3.2 2.2 5 5.5 5.6l1.3-1.4 2.1 1c-.2 1.4-1.2 2.5-2.7 2.6-4.5-.3-8-3.8-8.3-8.3.1-1.5 1.2-2.5 2.6-2.7l1 2.1-1.5 1.1Z" />
      </>
    ),
    phone: (
      <path d="M7.2 3.7 10 7.1 8.6 9.3c1.2 2.5 3.1 4.4 5.6 5.6l2.2-1.4 3.4 2.8-.8 3c-.3 1-1.2 1.7-2.2 1.7C9.2 20.4 3.6 14.8 3 7.2c0-1 .7-1.9 1.7-2.2l2.5-1.3Z" />
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    address: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55">
      {icons[type]}
    </svg>
  );
}

function CompanyDetails() {
  return (
    <div className="company-detail-grid">
      <a href="https://wa.me/9779827717843" target="_blank" rel="noreferrer">
        <div className="company-detail-top"><i><ContactIcon type="whatsapp" /></i><span>WhatsApp</span></div>
        <strong>+977 9827717843</strong>
        <small>Message our team ↗</small>
      </a>
      <a href="tel:+9779827717843">
        <div className="company-detail-top"><i><ContactIcon type="phone" /></i><span>Phone</span></div>
        <strong>+977 9827717843</strong>
        <small>Call Pathivara Tech</small>
      </a>
      <a href="mailto:Techpathivara@gmail.com">
        <div className="company-detail-top"><i><ContactIcon type="email" /></i><span>Email</span></div>
        <strong>Techpathivara@gmail.com</strong>
        <small>Tell us about your project ↗</small>
      </a>
      <div>
        <div className="company-detail-top"><i><ContactIcon type="address" /></i><span>Address</span></div>
        <strong>Mandikhatar, Kathmandu, Nepal</strong>
        <small>Serving clients worldwide</small>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <Header />
      <section className="about-page-hero" id="top">
        <div className="about-page-grid-bg" aria-hidden="true" />
        <div className="shell about-page-hero-grid">
          <div className="about-page-hero-copy">
            <a className="page-back-link" href="/#about"><span>←</span> Back to home</a>
            <p className="section-label"><span /> About Pathivara Tech</p>
            <h1>Built precisely.<br /><em>Evolved together.</em></h1>
            <p>
              We are a Kathmandu-based technology startup building websites,
              apps, custom software, digital experiences, and emerging-technology
              solutions for organisations worldwide.
            </p>
            <div className="about-page-actions">
              <a className="button button-primary" href="/?page=contact">Start a project <Arrow /></a>
              <a className="about-page-text-link" href="#our-team">Meet the team <span>↓</span></a>
            </div>
          </div>
          <div className="startup-tech-visual" aria-label="Pathivara Tech innovation system">
            <div className="tech-system-panel">
              <div className="tech-system-head">
                <span>PATHIVARA / BUILD SYSTEM</span>
                <i><b /></i>
              </div>
              <div className="tech-system-stage">
                <span className="tech-system-grid" aria-hidden="true" />
                <span className="tech-ring tech-ring-outer" aria-hidden="true" />
                <span className="tech-ring tech-ring-inner" aria-hidden="true" />
                <div className="tech-core">
                  <span className="tech-core-logo" aria-hidden="true" />
                  <small>Human-led</small>
                  <strong>Innovation</strong>
                </div>
                <span className="tech-node tech-node-ai"><i />AI</span>
                <span className="tech-node tech-node-spatial"><i />AR / VR</span>
                <span className="tech-node tech-node-cloud"><i />CLOUD</span>
                <span className="tech-node tech-node-chain"><i />BLOCKCHAIN</span>
                <span className="tech-node tech-node-product"><i />PRODUCT</span>
                <span className="tech-scan-line" aria-hidden="true" />
              </div>
              <div className="tech-system-footer">
                <span><i /> Strategy connected</span>
                <span><i /> Quality active</span>
                <strong>GLOBAL / READY</strong>
              </div>
            </div>
            <div className="startup-flow-card">
              <span>STARTUP DELIVERY</span>
              <div><strong>Idea</strong><i>→</i><strong>Build</strong><i>→</i><strong>Launch</strong></div>
              <small>Short sprints · Clear feedback · Continuous improvement</small>
            </div>
            <div className="innovation-stat-card">
              <span>ONE CONNECTED TEAM</span>
              <strong>Strategy + Design + Engineering</strong>
              <i><b /><b /><b /><b /></i>
            </div>
          </div>
        </div>
      </section>

      <section className="section startup-story">
        <div className="shell startup-story-grid">
          <div>
            <p className="section-label"><span /> Our company</p>
            <h2>A startup mindset with disciplined delivery.</h2>
          </div>
          <div className="startup-story-copy">
            <p>
              Pathivara Tech was created to make professional technology work
              more precise, more transparent, and easier for customers to
              understand. We combine startup speed with a smooth, structured
              way of working so good ideas can become dependable products.
            </p>
            <p>
              Customer interaction is part of the work—not an update saved for
              the end. We share progress, explain decisions in plain language,
              listen carefully to feedback, and adjust priorities while the
              product is being built.
            </p>
          </div>
        </div>
        <div className="shell company-values-grid">
          {[
            ["Precision", "Careful thinking, clear requirements, thoughtful design, clean engineering, and dependable quality.", "/value-precision.webp"],
            ["Partnership", "Open communication and shared decisions keep the product aligned with the people it must serve.", "/value-partnership.webp"],
            ["Useful innovation", "We adopt modern technology when it creates a practical advantage—not simply because it is new.", "/value-innovation.webp"],
            ["Continuous improvement", "Launch is a beginning. We learn from real use and improve the product in sensible stages.", "/value-improvement.webp"],
          ].map(([title, copy, image]) => (
            <article key={title}>
              <div className="value-card-image">
                <img src={image} alt={`${title} illustrated with a modern technology concept`} />
              </div>
              <div className="value-card-copy">
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section agile-section">
        <div className="shell agile-grid">
          <div className="agile-intro">
            <p className="section-label section-label-light"><span /> How we deliver</p>
            <h2>Practical Agile, shaped around your project.</h2>
            <p>
              We use short Agile sprints for planned product delivery and a
              Kanban approach for support and continuous improvements. This
              keeps progress visible, feedback timely, and priorities flexible
              without losing quality or direction.
            </p>
            <div className="agile-note">
              <strong>Why it works</strong>
              <span>You see working progress early and can guide the product before assumptions become expensive.</span>
            </div>
          </div>
          <div className="agile-steps">
            {agileSteps.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section" id="our-team">
        <div className="shell">
          <div className="team-heading">
            <div>
              <p className="section-label"><span /> Our team</p>
              <h2>The people behind Pathivara Tech.</h2>
            </div>
            <p>
              Strategy, design, engineering, marketing, and quality stay
              connected so customers work with one accountable team.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-photo">
                  <img className={member.position} src={member.image} alt={`${member.name}, ${member.role} at Pathivara Tech`} />
                </div>
                <div className="team-card-copy">
                  <small>{member.role}</small>
                  <h3>{member.name}</h3>
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-details-section">
        <div className="shell">
          <div className="company-details-heading">
            <p className="section-label"><span /> Company details</p>
            <h2>Close communication.<br />Worldwide ambition.</h2>
          </div>
          <CompanyDetails />
        </div>
      </section>

      <section className="about-page-cta">
        <div className="shell">
          <p>Have an idea, challenge, or process to improve?</p>
          <h2>Let&apos;s build the next useful version together.</h2>
          <a className="button button-coral" href="/?page=contact">Contact Pathivara Tech <Arrow /></a>
        </div>
      </section>
      <Footer />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Header />
      <section className="contact-page-hero" id="top">
        <div className="contact-page-grid-bg" aria-hidden="true" />
        <div className="shell contact-page-hero-grid">
          <div>
            <a className="page-back-link page-back-link-light" href="/#top"><span>←</span> Back to home</a>
            <p className="section-label section-label-light"><span /> Contact Pathivara Tech</p>
            <h1>Let&apos;s build something useful together.</h1>
          </div>
          <p>
            Whether you need a website, app, custom system, digital strategy,
            or an emerging-technology prototype, tell us what you want to make
            better. We&apos;ll help define a practical first step.
          </p>
        </div>
      </section>
      <section className="contact-page-details">
        <div className="shell">
          <CompanyDetails />
        </div>
      </section>
      <div className="contact-page-content">
        <Contact />
      </div>
      <Footer />
    </>
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
          <a href="/?page=about">About</a>
          <a href="/#services">Services</a>
          <a href="/#future">Future Tech</a>
          <a href="/#work">Our Work</a>
          <a href="/?page=contact">Contact</a>
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
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<"about" | "contact" | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePageFromUrl = () => {
      const parameters = new URLSearchParams(window.location.search);
      const technologySlug = parameters.get("technology");
      const serviceSlug = parameters.get("service");
      const page = parameters.get("page");
      const validTechnology = technologyPages.some(
        (technology) => technology.slug === technologySlug,
      );
      const validService = servicePages.some((service) => service.slug === serviceSlug);
      const validPage = page === "about" || page === "contact";

      setActivePage(validPage ? page : null);
      setActiveTechnology(!validPage && validTechnology ? technologySlug : null);
      setActiveService(!validPage && !validTechnology && validService ? serviceSlug : null);
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    updatePageFromUrl();
    window.addEventListener("popstate", updatePageFromUrl);

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
      window.removeEventListener("popstate", updatePageFromUrl);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      document.body.classList.remove("site-loading");
    };
  }, []);

  const openTechnology = (slug: string) => {
    window.history.pushState({}, "", `/?technology=${slug}`);
    setActiveService(null);
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

  const openService = (slug: string) => {
    window.history.pushState({}, "", `/?service=${slug}`);
    setActiveTechnology(null);
    setActiveService(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeService = () => {
    window.history.pushState({}, "", "/#services");
    setActiveService(null);
    window.setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const selectedService = servicePages.find((service) => service.slug === activeService);

  return (
    <main>
      <Preloader loading={loading} />
      <div className="scroll-progress" ref={progressRef} />
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true"><span /></div>
      {activePage === "about" ? (
        <AboutPage />
      ) : activePage === "contact" ? (
        <ContactPage />
      ) : selectedService ? (
        <ServicePage service={selectedService} onBack={closeService} />
      ) : selectedTechnology ? (
        <TechnologyPage technology={selectedTechnology} onBack={closeTechnology} />
      ) : (
        <>
          <Header />
          <Hero />
          <Marquee />
          <About />
          <Services onSelect={openService} />
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
