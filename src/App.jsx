import { useState } from 'react';
import './App.css';

const LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/taftera/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/taftera',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.803 5.731c.588 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.543.804.924.187.381.28.841.28 1.385 0 .592-.135 1.09-.401 1.492-.269.4-.656.731-1.165.995.704.199 1.232.559 1.587 1.082.355.522.532 1.153.532 1.893 0 .612-.12 1.146-.357 1.6-.239.455-.566.833-.984 1.131-.418.299-.91.524-1.472.671A7.08 7.08 0 018.019 18H2V5.731h5.803zm-.351 4.972c.47 0 .853-.107 1.15-.32.295-.214.443-.558.443-1.031 0-.27-.051-.493-.148-.666-.099-.17-.229-.308-.39-.41-.16-.102-.342-.173-.547-.215-.204-.04-.415-.059-.634-.059H4.819v2.701h2.633zm.162 5.239c.242 0 .471-.024.686-.071.217-.048.408-.126.574-.235.167-.11.301-.261.4-.454.099-.192.148-.438.148-.735 0-.592-.166-1.01-.497-1.254-.332-.245-.77-.367-1.317-.367H4.819v3.116h2.795zM16.372 16.114c.355.338.867.507 1.537.507.479 0 .893-.119 1.241-.358.349-.237.563-.489.643-.755h2.266c-.363 1.13-.916 1.942-1.661 2.432-.744.49-1.643.736-2.694.736-.731 0-1.388-.115-1.974-.343a4.223 4.223 0 01-1.493-.98 4.37 4.37 0 01-.951-1.529c-.223-.59-.334-1.241-.334-1.955 0-.69.113-1.329.342-1.918.228-.589.551-1.099.97-1.529.42-.431.925-.768 1.514-1.01.589-.242 1.237-.363 1.944-.363.797 0 1.5.152 2.11.456a4.14 4.14 0 011.493 1.225c.397.514.682 1.102.853 1.762.172.66.235 1.362.188 2.106h-6.75c.038.799.258 1.383.756 1.716zm2.668-4.622c-.283-.31-.734-.465-1.351-.465-.393 0-.718.065-.977.196-.257.131-.463.294-.617.489a1.793 1.793 0 00-.32.627 3.01 3.01 0 00-.106.653h4.025c-.107-.651-.371-1.19-.654-1.5zM14.734 7.714h4.769v1.159h-4.769V7.714z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    href: 'tel:+5215551044492',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:a.turati@gmail.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/taftera',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.938l4.26 5.632 4.796-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=5215551044492',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const SKILLS = [
  'Shopify',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Remix',
  'GraphQL',
  'Python',
  'Tailwind CSS',
  'Git',
  'Klaviyo',
  'Figma',
];
const CLIENTS = [
  'Beast Industries (USA)',
  'Team Liquid (USA)',
  'ADD PB+J (CA)',
  'Graybox (USA)',
  'Grand Vision NV (BE/MX)',
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="stage">
      <div className="card">
        {/* ── Main face ── */}
        <div className="card-face">
          <div className="card-info">
            <p className="eyebrow">taftera.dev</p>
            <h1 className="name">
              Alex Turati
              <br />
              Schnaider
            </h1>
            <p className="title">Sr. Ecommerce Developer</p>
            <nav className="links" aria-label="Social links">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="link-icon"
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    l.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={l.label}
                >
                  {l.icon}
                </a>
              ))}
            </nav>
          </div>
          <div className="card-photo">
            <img
              src={`${import.meta.env.BASE_URL}alex-turati_profile_700.jpg`}
              alt="Alex Turati Schnaider"
              className="photo"
            />
          </div>
        </div>

        {/* ── Collapsible tab ── */}
        <button
          className="tab-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span className="tab-label">About &amp; Skills</span>
          <svg
            className={`tab-chevron${open ? ' tab-chevron--open' : ''}`}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={`drawer${open ? '' : ' drawer--closed'}`}>
          <div className="drawer-inner">
            <p className="drawer-bio">
              Senior Shopify Developer and Technical Lead with 10+ years
              building high-performance e-commerce for global brands across
              fashion, entertainment, and DTC. Trusted by MrBeast and Team
              Liquid.
            </p>
            <div className="drawer-row">
              <div className="drawer-col">
                <p className="drawer-heading">Clients</p>
                <ul className="drawer-list">
                  {CLIENTS.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="drawer-col">
                <p className="drawer-heading">Skills</p>
                <div className="tags">
                  {SKILLS.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
