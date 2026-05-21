const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "Email", href: "mailto:hello@example.com" },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Landing Pages",
  "Web Apps",
  "AI Agents",
  "Automation",
  "Prompt Workflows",
  "APIs",
  "Responsive UI",
  "Accessibility",
  "Conversion Design",
];

const experience = [
  {
    period: "NOW",
    title: "Website, Landing Page & Web App Builder",
    company: "Independent Digital Builder",
    description:
      "I design and build fast, polished web experiences for founders, creators, and businesses — from sharp marketing pages to interactive product interfaces. My focus is clean UI, responsive implementation, and pages that make the next action obvious.",
    tags: ["Next.js", "React", "TypeScript", "HTML", "CSS", "UX"],
  },
  {
    period: "AI WORKFLOWS",
    title: "AI Agent Automation Specialist",
    company: "Time-saving Systems",
    description:
      "I use AI agents and automation workflows to remove repetitive work, speed up content and development tasks, connect tools, and help teams spend more time on decisions instead of manual execution.",
    tags: ["AI Agents", "Automation", "Workflows", "APIs", "Research", "Operations"],
  },
  {
    period: "DELIVERY",
    title: "Frontend Implementation Partner",
    company: "Build, launch, improve",
    description:
      "I turn ideas, references, and business goals into production-ready interfaces with maintainable components, strong visual hierarchy, accessible markup, and smooth interaction details.",
    tags: ["Frontend", "Design Systems", "Performance", "SEO", "Accessibility"],
  },
];

const projects = [
  {
    title: "Conversion-focused landing pages",
    description:
      "High-trust pages for offers, products, waitlists, and service businesses. Built with clear messaging, strong sections, responsive layouts, and CTAs designed to move visitors forward.",
    tags: ["Landing Pages", "Copy Structure", "Responsive", "CTA"],
  },
  {
    title: "Modern web app interfaces",
    description:
      "Dashboards, portals, SaaS-style flows, and interactive interfaces built with Next.js and reusable components so the product can grow without turning messy.",
    tags: ["Next.js", "React", "TypeScript", "Components"],
  },
  {
    title: "AI agent automation systems",
    description:
      "Practical automations that research, summarize, draft, monitor, organize, or trigger actions across tools — giving back hours normally spent on repetitive work.",
    tags: ["AI Agents", "Automation", "APIs", "Productivity"],
  },
];

const services = [
  "Portfolio and personal brand websites",
  "Business landing pages and launch pages",
  "Frontend web app screens and dashboards",
  "AI-assisted workflows for research, writing, operations, and development",
  "Automation planning, implementation, and optimization",
  "Website refreshes based on references, screenshots, or brand direction",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d="M5 15L15 5M8 5h7v7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="site-shell">
        <header className="sidebar" aria-label="Introductory profile">
          <div>
            <p className="eyebrow">Available for digital builds</p>
            <h1>Vineet Shaw</h1>
            <h2>Web Builder & AI Automation Specialist</h2>
            <p className="intro-copy">
              I build websites, landing pages, and web apps — and use AI agents to automate the busywork that slows teams down.
            </p>

            <nav className="section-nav" aria-label="Page sections">
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>
                      <span />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="sidebar-footer">
            <ul className="social-list" aria-label="Social links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" aria-label={link.label}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <main id="content" className="content">
          <section id="about" className="page-section" aria-labelledby="about-title">
            <h2 id="about-title" className="mobile-section-title">
              About
            </h2>
            <div className="rich-text">
              <p>
                I create modern digital experiences for people who need more than a static online presence. That includes polished landing pages, professional websites, and scalable web app interfaces built with a frontend-first mindset.
              </p>
              <p>
                My work combines design sense, clean implementation, and practical automation. If a task is repetitive, research-heavy, or slows down delivery, I look for ways to use AI agents and connected workflows to make it faster and more reliable.
              </p>
              <p>
                The goal is simple: build useful interfaces that look sharp, load fast, communicate clearly, and save time behind the scenes.
              </p>
            </div>
            <ul className="skill-cloud" aria-label="Core skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section id="experience" className="page-section" aria-labelledby="experience-title">
            <h2 id="experience-title" className="mobile-section-title">
              Experience
            </h2>
            <div className="timeline-list">
              {experience.map((item) => (
                <article className="timeline-card" key={item.title}>
                  <p className="timeline-period">{item.period}</p>
                  <div>
                    <h3>
                      {item.title} <span>· {item.company}</span>
                    </h3>
                    <p>{item.description}</p>
                    <ul className="tag-list" aria-label={`${item.title} technologies`}>
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <a className="text-link" href="#contact">
              Start a project conversation <ArrowIcon />
            </a>
          </section>

          <section id="projects" className="page-section" aria-labelledby="projects-title">
            <h2 id="projects-title" className="mobile-section-title">
              Projects
            </h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <p className="project-number">0{index + 1}</p>
                  <h3>
                    {project.title} <ArrowIcon />
                  </h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.title} tags`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="note">
              Replace these capability cards with your real case studies once you send project names, screenshots, links, or client work.
            </p>
          </section>

          <section id="services" className="page-section" aria-labelledby="services-title">
            <h2 id="services-title" className="mobile-section-title">
              Services
            </h2>
            <div className="service-panel">
              <h3>What I can build for you</h3>
              <ul>
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="contact" className="page-section contact-section" aria-labelledby="contact-title">
            <h2 id="contact-title" className="mobile-section-title">
              Contact
            </h2>
            <p className="eyebrow">Next step</p>
            <h2>Have a website, app idea, or automation workflow in mind?</h2>
            <p>
              Send the goal, reference style, and what you want users or automations to do. I can turn it into a clear build plan and a polished Next.js experience.
            </p>
            <a className="button-link" href="mailto:hello@example.com">
              Email me <ArrowIcon />
            </a>
          </section>

          <footer className="footer">
            <p>
              Built with Next.js. Inspired by the calm, dark, editorial portfolio style in the provided reference — redesigned with original content, layout details, and positioning.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
