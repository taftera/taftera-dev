import { useEffect, useRef } from 'react'
import './App.css'

// ------- Color wave config per section -------
const SECTIONS = [
  { id: 'hero',       bg: '#0d0d1a', accent: '#6c3fff' },
  { id: 'about',      bg: '#071628', accent: '#00d4ff' },
  { id: 'experience', bg: '#081a08', accent: '#39ff14' },
  { id: 'skills',     bg: '#1a0520', accent: '#ff2d78' },
  { id: 'contact',    bg: '#0d0d1a', accent: '#6c3fff' },
]

// ------- Color utilities -------
function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

function lerpRgb(hex1, hex2, t) {
  const a = hexToRgb(hex1)
  const b = hexToRgb(hex2)
  return a.map((v, i) => Math.round(v + (b[i] - v) * t))
}

// ------- App -------
export default function App() {
  const pillRef = useRef(null)

  useEffect(() => {
    const pill = pillRef.current
    if (!pill) return

    const sectionEls = SECTIONS.map(s => document.getElementById(s.id))
    let positions = []

    function cachePositions() {
      positions = sectionEls.map(el => ({
        top: el ? el.getBoundingClientRect().top + window.scrollY : 0,
        height: el ? el.offsetHeight : 0,
      }))
    }

    function update() {
      const mid = window.scrollY + window.innerHeight * 0.5

      for (let i = 0; i < positions.length; i++) {
        const { top } = positions[i]
        const nextTop = positions[i + 1]?.top ?? (top + positions[i].height)

        if (mid >= top && mid < nextTop) {
          const t = Math.max(0, Math.min(1, (mid - top) / (nextTop - top)))
          const curBg     = SECTIONS[i].bg
          const curAccent = SECTIONS[i].accent
          const nextBg     = SECTIONS[i + 1]?.bg     ?? curBg
          const nextAccent = SECTIONS[i + 1]?.accent ?? curAccent

          const bg = lerpRgb(curBg, nextBg, t)
          const ac = lerpRgb(curAccent, nextAccent, t)
          const [ar, ag, ab] = ac

          pill.style.backgroundColor = `rgb(${bg.join(',')})`
          pill.style.boxShadow = `0 0 90px 15px rgba(${ar},${ag},${ab},0.2)`
          document.documentElement.style.setProperty('--accent', `rgb(${ar},${ag},${ab})`)
          document.documentElement.style.setProperty('--accent-rgb', `${ar},${ag},${ab}`)
          break
        }
      }
    }

    cachePositions()
    update()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', () => { cachePositions(); update() })

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', cachePositions)
    }
  }, [])

  return (
    <div className="page">
      <div className="pill" ref={pillRef}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

// ------- Sections -------

function Hero() {
  return (
    <section className="section" id="hero">
      <p className="eyebrow">taftera.dev</p>
      <h1 className="hero-name">
        Alejandro<br />Turati
      </h1>
      <p className="hero-title">
        Senior Developer <span className="dot">·</span> Shopify Expert
      </p>
      <p className="hero-bio">
        10+ years building pixel-perfect, conversion-optimized storefronts for global brands.
        Trusted by MrBeast and Team Liquid.
      </p>
      <div className="hero-links">
        <a href="mailto:a.turati@gmail.com" className="btn">Email me</a>
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
  )
}

function About() {
  return (
    <section className="section" id="about">
      <p className="section-label">About</p>
      <p className="body-text">
        Senior Shopify Developer and Technical Lead with a decade of experience building and
        scaling high-performance e-commerce for global brands across fashion, entertainment,
        and DTC.
      </p>
      <p className="body-text">
        Known for leading cross-functional teams, shaping technical strategy, and delivering
        experiences that fuel growth — from custom Shopify apps to conversion-optimized
        storefronts.
      </p>
      <div className="stats">
        <div className="stat">
          <span className="stat-value">10+</span>
          <span className="stat-label">Years experience</span>
        </div>
        <div className="stat">
          <span className="stat-value">20+</span>
          <span className="stat-label">Clients served</span>
        </div>
        <div className="stat">
          <span className="stat-value">3</span>
          <span className="stat-label">Regions at Team Liquid</span>
        </div>
      </div>
    </section>
  )
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
  ]

  return (
    <section className="section" id="experience">
      <p className="section-label">Experience</p>
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
    </section>
  )
}

function Skills() {
  const groups = [
    { label: 'Languages',       tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SASS'] },
    { label: 'Frameworks',      tags: ['React', 'Remix', 'Next.js', 'Tailwind CSS', 'Shopify'] },
    { label: 'Tooling & Other', tags: ['Git', 'UI / UX', 'Figma', 'Klaviyo', 'Shopify Markets'] },
  ]

  return (
    <section className="section" id="skills">
      <p className="section-label">Skills</p>

      {groups.map(g => (
        <div className="skill-group" key={g.label}>
          <p className="skill-category">{g.label}</p>
          <div className="tags">
            {g.tags.map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}

      <div className="education">
        <p className="skill-category">Education</p>
        <p className="edu-degree">Information Design — Web Design & Development</p>
        <p className="edu-school">Universidad de las Américas, Puebla, México</p>
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    { label: 'Email',  value: 'a.turati@gmail.com',     href: 'mailto:a.turati@gmail.com' },
    { label: 'GitHub', value: 'github.com/taftera',      href: 'https://github.com/taftera' },
    { label: 'Web',    value: 'taftera.dev',             href: 'https://taftera.dev' },
  ]

  return (
    <section className="section" id="contact">
      <p className="section-label">Contact</p>
      <h2 className="contact-heading">
        Let's work<br />together.
      </h2>
      <div className="contact-list">
        {links.map(l => (
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
      <p className="footer">© 2026 Alejandro Turati Schnaider</p>
    </section>
  )
}
