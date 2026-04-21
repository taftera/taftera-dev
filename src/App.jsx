import { useState } from 'react';
import './App.css';

// ------- App -------
export default function App() {
  return (
    <div className="page">
      <div className="pill">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

// ------- Collapsible wrapper -------
function Collapsible({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="section-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="section-label">{label}</span>
        <Chevron open={open} />
      </button>
      <div className={`collapsible${open ? '' : ' collapsible--closed'}`}>
        <div className="collapsible-inner">{children}</div>
      </div>
    </>
  );
}

function Chevron({ open }) {
  return (
    <svg
      className={`chevron${open ? ' chevron--open' : ''}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ------- Sections -------

function Hero() {
  return (
    <section className="section" id="hero">
      <img src="/profile_650.jpg" alt="Alex Turati" className="hero-avatar" />
      <p className="eyebrow">taftera.dev</p>
      <h1 className="hero-name">
        Alex
        <br />
        Turati
      </h1>
      <p className="hero-title">
        Senior Developer <span className="dot">·</span> Shopify Expert
      </p>
      <p className="hero-bio">
        10+ years building pixel-perfect, conversion-optimized storefronts for
        global brands. Trusted by MrBeast and Team Liquid.
      </p>
      <div className="hero-links">
        <a href="mailto:a.turati@gmail.com" className="btn">
          Email me
        </a>
        <a
          href="https://github.com/taftera"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          GitHub
        </a>
      </div>
      <span className="scroll-hint">scroll</span>
    </section>
  );
}

function About() {
  const clients = [
    'Beast Industries',
    'ADD PB+J',
    'Team Liquid',
    'Graybox',
    'Grand Vision NV',
  ];

  return (
    <section className="section" id="about">
      <Collapsible label="About">
        <div className="about-grid">
          <div className="about-clients">
            <p className="clients-heading">Worked with</p>
            <ul className="client-list">
              {clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="about-bio">
            <p className="body-text">
              Senior Shopify Developer and Technical Lead with a decade of
              experience building and scaling high-performance e-commerce for
              global brands across fashion, entertainment, and DTC.
            </p>
            <p className="body-text">
              Known for leading cross-functional teams, shaping technical
              strategy, and delivering experiences that fuel growth — from
              custom Shopify apps to conversion-optimized storefronts.
            </p>
          </div>
        </div>
      </Collapsible>
    </section>
  );
}

function Experience() {
  const jobs = [
    {
      period: 'Jun 2023 — Present',
      role: 'Shopify Senior Developer',
      company: 'Beast Industries',
      location: 'Greenville, NC · External Contractor',
      bullets: [
        "Digital solutions for MrBeast's e-commerce ecosystem",
        'Custom Shopify App development',
        'Multi-client Shopify Admin across high-profile brands',
      ],
    },
    {
      period: 'Dec 2024 — Mar 2026',
      role: 'Shopify Lead Developer',
      company: 'ADD PB+J',
      location: 'Canada · Full time',
      bullets: [
        'Lead dev for top Canadian agency with 20+ patrons',
        'Built and maintained custom Shopify apps per client needs',
        'Managed multiple high-traffic accounts simultaneously',
      ],
    },
    {
      period: 'Mar 2022 — Oct 2024',
      role: 'Shopify Senior Developer',
      company: 'Team Liquid',
      location: 'Los Angeles, CA · External Contractor',
      bullets: [
        'Led TeamLiquid Store across 3 regions: NA / EU / BR',
        'Shopify Markets management',
        'Landing pages for Klaviyo email campaigns',
      ],
    },
    {
      period: 'Oct 2020 — Mar 2022',
      role: 'Junior Front End Developer',
      company: 'Graybox',
      location: 'Portland, OR',
      bullets: [
        'Translated Figma designs into pixel-perfect code',
        'Built Shopify, BigCommerce, and WordPress sites from scratch',
      ],
    },
    {
      period: 'Jun 2020 — Oct 2020',
      role: 'Junior Shopify Developer',
      company: 'Grand Vision NV',
      location: 'Mexico City, Mexico',
      bullets: [
        'New features using SASS, CSS, and JavaScript',
        'Subscription payment gateway implementation',
      ],
    },
  ];

  return (
    <section className="section" id="experience">
      <Collapsible label="Experience">
        <div className="timeline">
          {jobs.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className="tl-dot" />
              <div className="tl-body">
                <p className="tl-period">{job.period}</p>
                <h3 className="tl-role">{job.role}</h3>
                <p className="tl-company">{job.company}</p>
                <p className="tl-location">{job.location}</p>
                <ul className="tl-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Collapsible>
    </section>
  );
}

function Skills() {
  const groups = [
    { label: 'Languages', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SASS'] },
    {
      label: 'Frameworks',
      tags: ['React', 'Remix', 'Next.js', 'Tailwind CSS', 'Shopify'],
    },
    {
      label: 'Tooling & Other',
      tags: ['Git', 'UI / UX', 'Figma', 'Klaviyo', 'Shopify Markets'],
    },
  ];

  return (
    <section className="section" id="skills">
      <Collapsible label="Skills">
        {groups.map((g) => (
          <div className="skill-group" key={g.label}>
            <p className="skill-category">{g.label}</p>
            <div className="tags">
              {g.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Collapsible>

      {/* <div className="section-divider" /> */}

      <Collapsible label="Education">
        <div className="edu-block">
          <p className="edu-degree">
            Information Design — Web Design & Development
          </p>
          <p className="edu-school">
            Universidad de las Américas, Puebla, México
          </p>
        </div>
      </Collapsible>
    </section>
  );
}

function Contact() {
  const links = [
    {
      label: 'Email',
      value: 'a.turati@gmail.com',
      href: 'mailto:a.turati@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/taftera',
      href: 'https://github.com/taftera',
    },
    { label: 'Web', value: 'taftera.dev', href: 'https://taftera.dev' },
  ];

  return (
    <section className="section" id="contact">
      <p className="section-label">Contact</p>
      <h2 className="contact-heading">
        Let's work
        <br />
        together.
      </h2>
      <div className="contact-list">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="contact-row"
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span className="contact-type">{l.label}</span>
            <span className="contact-value">{l.value}</span>
          </a>
        ))}
      </div>
      <div className="built-with">
        <ClaudeLogo />
        <div className="footer-container">
          <span className="built-with-text">
            Developed with love and Claude-Code
          </span>
          <span className="footer">© 2026 Alejandro Turati Schnaider</span>
        </div>
      </div>
    </section>
  );
}

function ClaudeLogo() {
  const S = 4;
  // Eye positions to punch out (transparent = background shows through)
  const eyeSet = new Set([
    ...[1, 2].flatMap((r) => [3, 4].map((c) => `${c},${r}`)),
    ...[1, 2].flatMap((r) => [7, 8].map((c) => `${c},${r}`)),
  ]);

  const body = [
    ...[0, 1, 2, 3].flatMap((r) => range(2, 9).map((c) => [c, r])),
    ...[4, 5].flatMap((r) => range(0, 11).map((c) => [c, r])),
    ...[6, 7].flatMap((r) => range(2, 9).map((c) => [c, r])),
    ...[8, 9, 10].flatMap((r) =>
      [...range(2, 3), ...range(5, 6), ...range(8, 9)].map((c) => [c, r]),
    ),
  ].filter(([c, r]) => !eyeSet.has(`${c},${r}`));

  return (
    <svg
      viewBox={`0 0 ${12 * S} ${11 * S}`}
      xmlns="http://www.w3.org/2000/svg"
      className="claude-logo"
      aria-label="Pixel crab"
    >
      {body.map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x * S}
          y={y * S}
          width={S}
          height={S}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

function range(a, b) {
  const out = [];
  for (let i = a; i <= b; i++) out.push(i);
  return out;
}
