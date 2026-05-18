import "./styles.css";

type Product = {
  slug: string;
  eyebrow: string;
  metric: string;
  name: string;
  copy: string;
  className: string;
};

type ProductPage = {
  tagline: string;
  stats: Array<[string, string]>;
  features: Array<{ title: string; copy: string }>;
  capabilities: string[];
  useCases: Array<{ title: string; copy: string }>;
};

type Industry = {
  number: string;
  metric: string;
  name: string;
  className: string;
};

const navItems = ["Platforms", "Infrastructure", "Industries", "Customers", "Company"];

const products: Product[] = [
  {
    slug: "nexshop",
    eyebrow: "Commerce",
    metric: "70 merchants",
    name: "NexShop",
    copy:
      "Launch a fast, mobile-first store with checkout, inventory and shipping wired to the rails your customers already use - SnapScan, Capitec Pay and local couriers, out of the box.",
    className: "commerce",
  },
  {
    slug: "nexpay",
    eyebrow: "Payments",
    metric: "R1.5M / year",
    name: "NexPay",
    copy:
      "NexPay is the payments engine behind every Nexora product - accept cards, EFT, SnapScan, Capitec Pay and instant clearing, all settled the same day in ZAR with no FX surprises.",
    className: "payments",
  },
  {
    slug: "nexchurch",
    eyebrow: "Faith",
    metric: "47 churches",
    name: "NexChurch",
    copy:
      "Member directories, livestreaming, tithing and pastoral care in one place - built with pastors and admins from 47 South African churches, not borrowed from a US megachurch playbook.",
    className: "faith",
  },
  {
    slug: "nexsport",
    eyebrow: "Sport",
    metric: "Local leagues",
    name: "NexSport",
    copy:
      "Fixtures, registrations, ticketing and statistics for the clubs, schools and community leagues that make up grassroots South African sport.",
    className: "sport",
  },
  {
    slug: "nexhost",
    eyebrow: "Hosting",
    metric: "99.9% uptime",
    name: "NexHost",
    copy:
      "The hosting layer underneath every Nexora product - and available on its own. Fast in Johannesburg, fast in Mthatha, resilient when the grid blinks.",
    className: "hosting",
  },
  {
    slug: "nexads",
    eyebrow: "Growth",
    metric: "3.2x median ROAS",
    name: "NexAds",
    copy:
      "Stop guessing which Meta ad worked. NexAds plugs straight into your storefront and CRM so you can see what's actually driving revenue - and run smarter campaigns next month.",
    className: "growth",
  },
];

const productPages: Record<string, ProductPage> = {
  nexshop: {
    tagline: "Commerce software for retailers who sell across storefront, WhatsApp and mobile.",
    stats: [
      ["70+", "merchant stores"],
      ["3", "payment rails"],
      ["1", "mobile-first checkout"],
    ],
    features: [
      { title: "Mobile storefront", copy: "Launch fast product pages, collections and checkout flows that feel native on low-bandwidth mobile connections." },
      { title: "Inventory & fulfilment", copy: "Track stock, pickup, courier delivery and local shipping rules from one operating screen." },
      { title: "Payments included", copy: "Cards, EFT, SnapScan and Capitec Pay connect directly through NexPay without extra vendor sprawl." },
      { title: "Customer records", copy: "Keep orders, returns, contact history and repeat-purchase signals tied to one customer profile." },
    ],
    capabilities: ["Product catalogue management", "Courier and pickup rules", "Discounts and bundles", "Abandoned cart recovery", "WhatsApp order notifications"],
    useCases: [
      { title: "Fashion boutiques", copy: "Sell collections online without losing the curated feel of an in-store brand." },
      { title: "Local grocers", copy: "Manage fast-changing inventory, pickup slots and community delivery zones." },
      { title: "Independent makers", copy: "Turn social demand into paid orders with checkout and fulfilment handled cleanly." },
    ],
  },
  nexpay: {
    tagline: "The payments engine for South African businesses that need local rails and clean settlement.",
    stats: [
      ["R1.5M", "annual GMV"],
      ["100%", "ZAR settlement"],
      ["0", "FX surprises"],
    ],
    features: [
      { title: "Local payment methods", copy: "Accept cards, EFT, SnapScan, PayFast, Ozow and Capitec Pay from one integration." },
      { title: "Same-day reconciliation", copy: "Match payments back to orders, invoices and customer records without spreadsheet cleanup." },
      { title: "Receipts & audit trails", copy: "Generate proof of payment, refunds and settlement records with POPIA-conscious logging." },
      { title: "Platform-native checkout", copy: "Use NexPay inside NexShop, NexChurch, NexSport and custom business workflows." },
    ],
    capabilities: ["Card and EFT acceptance", "Instant payment links", "Refund tracking", "Settlement reporting", "Fraud and duplicate checks"],
    useCases: [
      { title: "Retail operators", copy: "Keep checkout, payment status and fulfilment in one workflow." },
      { title: "Service businesses", copy: "Collect deposits, balances and recurring fees without chasing screenshots." },
      { title: "Community organisations", copy: "Handle membership fees, donations and event payments with clean records." },
    ],
  },
  nexchurch: {
    tagline: "Software for the way local congregations actually run.",
    stats: [
      ["47", "congregations"],
      ["100%", "POPIA-aligned"],
      ["1", "place for everything"],
    ],
    features: [
      { title: "Member directory", copy: "Households, ministries and small groups with privacy controls deacons can actually understand." },
      { title: "Tithing & giving", copy: "Recurring giving, once-off offerings and Section 18A receipts generated automatically." },
      { title: "Livestream & sermons", copy: "Stream Sunday service, archive sermons and let members catch up during the week." },
      { title: "Pastoral care log", copy: "Track visits, prayer requests and follow-ups privately, with role-based access." },
    ],
    capabilities: ["Event RSVPs and rosters", "Children's church check-in & safeguarding", "WhatsApp broadcast to ministries", "Volunteer scheduling", "Multi-campus support"],
    useCases: [
      { title: "Independent churches", copy: "Replace the patchwork of WhatsApp groups, Excel sheets and giving links." },
      { title: "Multi-campus ministries", copy: "Shared directory with per-campus rosters and finances." },
      { title: "Denominations", copy: "Roll up reporting across affiliate churches without forcing a single brand." },
    ],
  },
  nexsport: {
    tagline: "League, club and school sport operations without the admin pile-up.",
    stats: [
      ["40+", "clubs & leagues"],
      ["1", "fixture source"],
      ["24/7", "team access"],
    ],
    features: [
      { title: "Fixtures & standings", copy: "Build schedules, publish results and keep tables current for players, parents and sponsors." },
      { title: "Registrations", copy: "Collect player details, waivers, fees and team placement information in one flow." },
      { title: "Ticketing & events", copy: "Sell match-day tickets, tournament passes and club events with local payment rails." },
      { title: "Statistics hub", copy: "Track performance, attendance and season records for community-level sport." },
    ],
    capabilities: ["League fixture builder", "Player registration forms", "Team and club portals", "Digital ticketing", "Sponsor reporting"],
    useCases: [
      { title: "School leagues", copy: "Coordinate fixtures, permissions and match results across campuses." },
      { title: "Community clubs", copy: "Replace WhatsApp admin with one source for teams, payments and updates." },
      { title: "Tournament organisers", copy: "Run brackets, ticketing and live updates without extra tools." },
    ],
  },
  nexhost: {
    tagline: "Hosting and uptime infrastructure built for local traffic, local constraints and serious businesses.",
    stats: [
      ["99.9%", "uptime"],
      ["7", "regional edges"],
      ["11ms", "JNB latency"],
    ],
    features: [
      { title: "Managed web hosting", copy: "Fast static and app hosting for Nexora sites, storefronts and business systems." },
      { title: "Regional resilience", copy: "Multi-region routing keeps customer-facing tools reachable when one route degrades." },
      { title: "Monitoring included", copy: "Health checks, alerts and uptime reporting are built into every hosted product." },
      { title: "Security baseline", copy: "TLS, backups, access controls and deployment history ship as standard." },
    ],
    capabilities: ["Managed deployments", "SSL and DNS support", "Backups and rollback", "Uptime monitoring", "Regional CDN"],
    useCases: [
      { title: "Business websites", copy: "Host fast marketing sites with monitoring and maintenance handled." },
      { title: "Commerce platforms", copy: "Serve storefronts quickly in Johannesburg, Cape Town, Durban and beyond." },
      { title: "Operational tools", copy: "Keep dashboards and portals online for teams who cannot afford downtime." },
    ],
  },
  nexads: {
    tagline: "Growth analytics and campaign operations for businesses that need revenue clarity.",
    stats: [
      ["3.2x", "median ROAS"],
      ["1", "revenue dashboard"],
      ["30", "day learning loop"],
    ],
    features: [
      { title: "Campaign tracking", copy: "Connect ad spend, creative, audiences and storefront revenue in one reporting view." },
      { title: "Audience aggregation", copy: "Build usable segments from customers, purchases, enquiries and repeat behaviour." },
      { title: "Revenue attribution", copy: "See which ads create actual sales instead of only clicks and impressions." },
      { title: "Monthly optimisation", copy: "Turn performance data into focused next-month tests, budgets and creative decisions." },
    ],
    capabilities: ["Meta campaign reporting", "ROAS dashboards", "Customer segments", "Creative performance notes", "CRM and storefront signals"],
    useCases: [
      { title: "Retail brands", copy: "Connect campaign spend directly to product and collection revenue." },
      { title: "Service businesses", copy: "Track enquiries, bookings and qualified leads from paid campaigns." },
      { title: "Multi-location operators", copy: "Compare markets, offers and creative performance by region." },
    ],
  },
};

const resilience = [
  {
    title: "Edge resilience",
    copy: "Multi-region failover with offline-first sync. Your storefront keeps selling when the grid blinks.",
  },
  {
    title: "Local rails",
    copy: "Native SnapScan, Ozow, PayFast, Capitec Pay and EFT. No middleware, no FX surprises.",
  },
  {
    title: "Compliance, included",
    copy: "POPIA controls baked in - audit logs and consent flows on by default.",
  },
  {
    title: "Human support",
    copy: "Account managers in Johannesburg, Cape Town and Mbombela. Not a chatbot.",
  },
];

const regions = [
  ["Johannesburg", "JNB1", "11ms"],
  ["Cape Town", "CPT1", "18ms"],
  ["Durban", "DUR1", "21ms"],
  ["Mbombela", "MQP1", "24ms"],
  ["Maseru", "MSU1", "27ms"],
  ["Gaborone", "GBE1", "29ms"],
  ["Mbabane", "MTS1", "31ms"],
  ["Edge", "regional CDN", "-"],
];

const industries: Industry[] = [
  { number: "01", metric: "110 merchants", name: "Retail & Fashion", className: "retail" },
  { number: "02", metric: "70+ organisations", name: "Faith & Community", className: "community" },
  { number: "03", metric: "40+ clubs & leagues", name: "Sport & Leisure", className: "leisure" },
  { number: "04", metric: "40+ operators", name: "Tourism & Hospitality", className: "tourism" },
  { number: "05", metric: "30+ venues & creators", name: "Entertainment", className: "entertainment" },
  { number: "06", metric: "50+ institutions", name: "Education", className: "education" },
];

const footerColumns = [
  ["Platforms", "NexShop", "NexPay", "NexChurch", "NexSport", "NexHost", "NexAds"],
  ["Industries", "Retail", "Faith", "Sport", "Tourism", "Entertainment", "Education"],
  ["Company", "About", "Careers", "Press", "Investors", "Trust & security", "Contact"],
  ["Resources", "Documentation", "API reference", "Status", "Changelog", "Blog", "Partners"],
];

const serviceOptions = [
  "NexShop - commerce website",
  "NexPay - payments",
  "NexChurch - church platform",
  "NexSport - sport platform",
  "NexHost - hosting",
  "NexAds - growth marketing",
  "Full Nexora stack",
  "Not sure yet",
];

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Nexora home">
        <img src="/assets/nexora-logo.png" alt="Nexora Digital Systems" />
      </a>
      <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation" data-menu-toggle>
        <span></span>
        <span></span>
      </button>
      <nav id="primary-navigation" aria-label="Primary navigation">
        ${navItems.map((item) => `<a href="#${item.toLowerCase()}">${item}</a>`).join("")}
      </nav>
      <a class="button button-primary button-small" href="#contact">Talk to sales <span>-></span></a>
    </header>
  `;
}

function contactForm(selectedService = "") {
  return `
    <form class="contact-form" id="contact" data-contact-form>
      <div class="form-head">
        <p class="section-code">// Tell us what you need</p>
        <h3>Start the conversation.</h3>
        <p>Send the same brief by email or WhatsApp. We will use it to route you to the right Nexora specialist.</p>
      </div>
      <div class="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autocomplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autocomplete="email" placeholder="you@business.co.za" required />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input name="phone" type="tel" autocomplete="tel" placeholder="+27 ..." />
        </label>
        <label>
          <span>Service needed</span>
          <select name="service" required>
            <option value="" ${selectedService ? "" : "selected"} disabled>Select a service</option>
            ${serviceOptions
              .map((option) => `<option value="${option}" ${selectedService && option.startsWith(selectedService) ? "selected" : ""}>${option}</option>`)
              .join("")}
          </select>
        </label>
        <label class="form-full">
          <span>What should we help you build?</span>
          <textarea name="message" rows="5" placeholder="Tell us about your business, timeline, and what you need the platform to do." required></textarea>
        </label>
      </div>
      <div class="form-actions">
        <button class="button button-primary" type="submit" data-channel="email">Send by email <span>-></span></button>
        <button class="button button-secondary" type="submit" data-channel="whatsapp">Send by WhatsApp</button>
      </div>
      <p class="form-note">No backend required: your device opens a prefilled email or WhatsApp message before sending.</p>
    </form>
  `;
}

function productCard(product: Product) {
  return `
    <article class="product-card ${product.className}">
      <div class="card-meta">
        <span>${product.eyebrow}</span>
        <span>${product.metric}</span>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.copy}</p>
      </div>
      <a href="#platform/${product.slug}">Explore ${product.name} <span>-></span></a>
    </article>
  `;
}

function industryCard(industry: Industry) {
  return `
    <article class="industry-card ${industry.className}">
      <div class="card-meta">
        <span>${industry.number}</span>
        <span>${industry.metric}</span>
      </div>
      <h3>${industry.name}</h3>
    </article>
  `;
}

function siteFooter() {
  return `
    <footer class="site-footer">
      <div class="section-inner footer-grid">
        <div class="footer-brand">
          <img src="/assets/nexora-logo.png" alt="Nexora Digital Systems" />
          <p>Nexora Digital Systems builds the infrastructure that African businesses run on.</p>
          <code>Sandton &middot; Cape Town &middot; Durban</code>
        </div>
        ${footerColumns
          .map(
            ([heading, ...links]) => `
              <div class="footer-col">
                <h3>${heading}</h3>
                ${links.map((link) => `<a href="#top">${link}</a>`).join("")}
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="section-inner legal">
        <span>&copy; 2026 Nexora Digital Holdings (Pty) Ltd. All rights reserved.</span>
        <p><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">POPIA</a><span><i></i>All systems normal</span></p>
      </div>
    </footer>
  `;
}

function renderProductPage(product: Product, details: ProductPage) {
  const related = products.filter((item) => item.slug !== product.slug);

  return `
    ${header()}
    <main id="top" class="product-page">
      <section class="product-hero section-grid">
        <div class="section-inner product-hero-inner">
          <a class="back-link" href="#platforms"><span>&larr;</span> Back to Nexora</a>
          <p class="product-kicker"><span>${product.eyebrow}</span>${product.metric}</p>
          <h1>${product.name}</h1>
          <h2>${details.tagline}</h2>
          <p>${product.copy}</p>
          <div class="actions">
            <a class="button button-primary" href="mailto:sales@nexora.africa?subject=${encodeURIComponent(product.name + " consultation")}">Book a consultation <span>-></span></a>
            <a class="button button-secondary" href="mailto:strategy@nexora.africa?subject=${encodeURIComponent("Talk to " + product.name)}">Talk to ${product.name}</a>
          </div>
        </div>
      </section>
      <dl class="product-stats">
        ${details.stats.map(([value, label]) => `<div><dt>${value}</dt><dd>${label}</dd></div>`).join("")}
      </dl>

      <section class="product-features">
        <div class="section-inner">
          <p class="section-code">// Features</p>
          <h2>What's in <em>${product.name}.</em></h2>
          <div class="feature-grid">
            ${details.features
              .map(
                (feature, index) => `
                  <article>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <h3>${feature.title}</h3>
                    <p>${feature.copy}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="product-capabilities">
        <div class="section-inner product-two-col">
          <div>
            <p class="section-code">// Capabilities</p>
            <h2>Everything that ships in the box.</h2>
            <ul>
              ${details.capabilities.map((item) => `<li><span>-></span>${item}</li>`).join("")}
            </ul>
          </div>
          <div>
            <p class="section-code">// Use cases</p>
            <h2>Who runs on ${product.name}.</h2>
            <div class="use-case-list">
              ${details.useCases.map((item) => `<article><h3>${item.title}</h3><p>${item.copy}</p></article>`).join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="product-talk">
        <div class="section-inner talk-panel">
          <div>
            <p class="section-code">// Let's talk</p>
            <h2>Every ${product.name} build starts with a <em>conversation.</em></h2>
            <p>No off-the-shelf packages. Book a free 30-minute consultation and we'll scope what ${product.name} should look like for your business - features, timelines and a clear quote in ZAR.</p>
          </div>
          <div class="talk-actions">
            <a class="button button-primary" href="mailto:sales@nexora.africa?subject=${encodeURIComponent(product.name + " consultation")}">Book a consultation <span>-></span></a>
            <a class="button button-secondary" href="https://wa.me/" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            <p>Typically reply within one business day.</p>
          </div>
        </div>
      </section>

      <section class="suite-links">
        <div class="section-inner">
          <p class="section-code">// The rest of the suite</p>
          <h2>Pairs natively with the rest of Nexora.</h2>
          <div class="suite-link-grid">
            ${related
              .map(
                (item) => `
                  <a href="#platform/${item.slug}">
                    <span>${item.eyebrow}</span>
                    <strong>${item.name}</strong>
                    <small>Explore -></small>
                  </a>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section id="company" class="cta">
        <div class="section-inner cta-inner">
          <p class="section-code">Exclusively for African operators</p>
          <h2>Your vision deserves the<br /><em>continent's best</em> infrastructure.</h2>
          <p>Nexora isn't just a platform - it's a strategic alliance. We provide the foundation South Africa's most ambitious businesses use to scale without compromise.</p>
          <div class="promise-grid">
            <article><h3>Concierge onboarding</h3><p>90-day white-glove migration</p></article>
            <article><h3>Dedicated strategist</h3><p>Direct line to technical leads</p></article>
            <article><h3>Sovereign security</h3><p>Local compliance & uptime</p></article>
          </div>
          <div class="actions actions-center">
            <a class="button button-primary" href="mailto:sales@nexora.africa">Book a consultation</a>
            <a class="button button-secondary" href="mailto:strategy@nexora.africa">Talk to a strategist</a>
          </div>
          ${contactForm(product.name)}
          <div class="trusted">
            <span>Trusted by leaders across the republic</span>
            <p>NexShop <b>NexPay</b> NexHost <b>NexChurch</b> NexSport</p>
          </div>
        </div>
      </section>
    </main>
    ${siteFooter()}
  `;
}

function setupContactForms() {
  document.querySelectorAll<HTMLFormElement>("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const submitter = (event as SubmitEvent).submitter as HTMLButtonElement | null;
      const channel = submitter?.dataset.channel ?? "email";
      const data = new FormData(form);
      const name = String(data.get("name") ?? "").trim();
      const email = String(data.get("email") ?? "").trim();
      const phone = String(data.get("phone") ?? "").trim();
      const service = String(data.get("service") ?? "").trim();
      const message = String(data.get("message") ?? "").trim();

      const body = [
        "New Nexora service enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone || "Not provided"}`,
        `Service needed: ${service}`,
        "",
        "Brief:",
        message,
      ].join("\n");

      if (channel === "whatsapp") {
        window.open(`https://wa.me/?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
        return;
      }

      const subject = `Nexora enquiry: ${service}`;
      window.location.href = `mailto:sales@nexora.africa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
}

function setupMobileMenu() {
  const header = document.querySelector<HTMLElement>(".site-header");
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const nav = document.querySelector<HTMLElement>("#primary-navigation");
  if (!header || !toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

function render() {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  const match = window.location.hash.match(/^#platform\/([a-z0-9-]+)$/);
  if (match) {
    const product = products.find((item) => item.slug === match[1]);
    const details = product ? productPages[product.slug] : undefined;
    if (product && details) {
      app.innerHTML = renderProductPage(product, details);
      setupMobileMenu();
      setupContactForms();
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
  }

  app.innerHTML = `
    ${header()}
    <main id="top">
      <section class="hero section-grid">
        <div class="hero-network" aria-hidden="true"></div>
        <div class="section-inner hero-inner">
          <p class="kicker"><span class="pulse"></span>Nexora Platform 7.0 - now generally available</p>
          <h1>The operating system for <em>African commerce.</em></h1>
          <p class="hero-copy">
            Nexora powers the websites, payments, logistics and customer systems of 150+ businesses nationwide - with growing exposure across 3 neighbouring countries. One platform. Every layer. Built locally.
          </p>
          <div class="actions">
            <a class="button button-primary" href="#platforms">Start building <span>-></span></a>
            <a class="button button-secondary" href="#contact">Book a demo</a>
          </div>
          <dl class="stats">
            <div><dt>150+</dt><dd>Active businesses</dd></div>
            <div><dt>R1.5M</dt><dd>Annual GMV processed</dd></div>
            <div><dt>99.99%</dt><dd>Platform uptime</dd></div>
            <div><dt>3</dt><dd>Countries</dd></div>
          </dl>
        </div>
      </section>

      <section id="platforms" class="platforms section-warm">
        <div class="section-inner">
          <p class="section-code">// 01 - The platform suite</p>
          <h2>One stack. <em>Every layer</em> of your<br />business.</h2>
          <p class="section-copy">Each Nexora product works on its own - but together, they replace the dozen vendors you don't want to manage.</p>
          <div class="product-grid">${products.map(productCard).join("")}</div>
        </div>
      </section>

      <section id="infrastructure" class="infrastructure section-grid">
        <div class="section-inner split">
          <div>
            <p class="section-code">// 02 - Infrastructure</p>
            <h2>Built for the realities of <em>this</em><br />continent.</h2>
            <p class="section-copy">Load-shedding aware. Mobile-first. Priced in local currency. Nexora was engineered against constraints international platforms have never had to think about.</p>
            <div class="resilience-list">
              ${resilience
                .map(
                  (item) => `
                    <article>
                      <h3><span>-></span>${item.title}</h3>
                      <p>${item.copy}</p>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </div>
          <aside class="status-panel" aria-label="Regional platform status">
            <div class="window-top">
              <span></span><span></span><span></span>
              <code>status.nexora.africa</code>
            </div>
            <div class="region-list">
              ${regions
                .map(
                  ([city, code, latency]) => `
                    <div class="region-row">
                      <strong>${city} &middot; ${code}</strong>
                      <span><i></i>operational</span>
                      <code>${latency}</code>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="uptime"><span>Last 90 days uptime</span><strong>99.994%</strong></div>
          </aside>
        </div>
      </section>

      <section id="industries" class="industries">
        <div class="section-inner">
          <div class="section-head">
            <div>
              <p class="section-code">// 03 - Industries</p>
              <h2>Tailored for the way <em>your</em><br />sector runs.</h2>
            </div>
            <p>We don't do generic templates. Every Nexora vertical is shaped by operators inside that industry.</p>
          </div>
          <div class="industry-grid">${industries.map(industryCard).join("")}</div>
        </div>
      </section>

      <section id="customers" class="customer">
        <div class="section-inner customer-grid">
          <div class="story-left">
            <p class="section-code">// 04 - Customer story</p>
            <h2>Khanyisile Ndlovu launched her psychology practice online in <em>9 days.</em></h2>
            <a href="#contact">Visit kndlovu-psychology.co.za <span>-></span></a>
          </div>
          <div class="quote-block">
            <blockquote>
              "Nexora built me a website that actually feels like my practice - calm, considered and easy for clients to navigate. Bookings now come straight through the site, and I finally have a digital home that reflects the care I offer in the room."
            </blockquote>
            <div class="person">
              <span></span>
              <p><strong>Khanyisile Ndlovu</strong>Psychologist - Mulbarton, Johannesburg</p>
            </div>
            <dl class="story-stats">
              <div><dt>9 days</dt><dd>From brief to launch</dd></div>
              <div><dt>100%</dt><dd>Online bookings</dd></div>
              <div><dt>1</dt><dd>Calm, focused brand</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="company" class="cta">
        <div class="section-inner cta-inner">
          <p class="section-code">Exclusively for African operators</p>
          <h2>Your vision deserves the<br /><em>continent's best</em> infrastructure.</h2>
          <p>Nexora isn't just a platform - it's a strategic alliance. We provide the foundation South Africa's most ambitious businesses use to scale without compromise.</p>
          <div class="promise-grid">
            <article><h3>Concierge onboarding</h3><p>90-day white-glove migration</p></article>
            <article><h3>Dedicated strategist</h3><p>Direct line to technical leads</p></article>
            <article><h3>Sovereign security</h3><p>Local compliance & uptime</p></article>
          </div>
          <div class="actions actions-center">
            <a class="button button-primary" href="mailto:sales@nexora.africa">Book a consultation</a>
            <a class="button button-secondary" href="mailto:strategy@nexora.africa">Talk to a strategist</a>
          </div>
          ${contactForm()}
          <div class="trusted">
            <span>Trusted by leaders across the republic</span>
            <p>NexShop <b>NexPay</b> NexHost <b>NexChurch</b> NexSport</p>
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="section-inner footer-grid">
        <div class="footer-brand">
          <img src="/assets/nexora-logo.png" alt="Nexora Digital Systems" />
          <p>Nexora Digital Systems builds the infrastructure that African businesses run on.</p>
          <code>Sandton &middot; Cape Town &middot; Durban</code>
        </div>
        ${footerColumns
          .map(
            ([heading, ...links]) => `
              <div class="footer-col">
                <h3>${heading}</h3>
                ${links.map((link) => `<a href="#top">${link}</a>`).join("")}
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="section-inner legal">
        <span>&copy; 2026 Nexora Digital Holdings (Pty) Ltd. All rights reserved.</span>
        <p><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">POPIA</a><span><i></i>All systems normal</span></p>
      </div>
    </footer>
  `;
  setupMobileMenu();
  setupContactForms();
}

render();
window.addEventListener("hashchange", render);
