import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import FadeIn from './FadeIn'

/* Inline SVG brand icons — lucide-react v0.344 ships no brand icons */
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ishanv13/', Icon: LinkedInIcon },
  { label: 'GitHub',   href: 'https://github.com/ishanv13',            Icon: GitHubIcon },
  { label: 'Twitter',  href: 'https://twitter.com/ishanv_',            Icon: TwitterIcon },
  { label: 'Instagram',href: 'https://www.instagram.com/ishanv_/',     Icon: InstagramIcon },
]

const CONTACT_INFO = [
  { label: 'Email',    value: 'ishan.verma.xx@gmail.com', href: 'mailto:ishan.verma.xx@gmail.com', Icon: Mail },
  { label: 'Phone',    value: '+44 7553 780832',          href: 'tel:+447553780832',               Icon: Phone },
  { label: 'Location', value: 'Liverpool, UK · UK Graduate Visa', href: null,                      Icon: MapPin },
]

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-0"
    >
      {/* Big heading */}
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] leading-none"
          style={{ fontSize: 'clamp(3rem, 11vw, 140px)' }}
        >
          Get In Touch
        </h2>
      </FadeIn>

      {/* Tagline */}
      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center text-[#0C0C0C]/60 font-light mt-6 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
        >
          Open to graduate roles in data analytics, business analysis, and dynamic startup environments. 
          Let&apos;s build something great together.
        </p>
      </FadeIn>

      {/* CTA email button */}
      <FadeIn delay={0.25} y={20} className="flex justify-center mt-10 mb-20 sm:mb-24 md:mb-32">
        <a
          href="mailto:ishan.verma.xx@gmail.com"
          className="inline-flex items-center gap-3 rounded-full font-medium uppercase tracking-widest text-white
            px-8 py-4 text-sm md:text-base transition-opacity duration-200 hover:opacity-85"
          style={{
            background:
              'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow:
              '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
            outline: '2px solid white',
            outlineOffset: '-3px',
          }}
        >
          <Mail size={18} />
          Say Hello
        </a>
      </FadeIn>

      {/* Divider */}
      <div className="max-w-5xl mx-auto" style={{ borderTop: '1px solid rgba(12,12,12,0.12)' }} />

      {/* Social links row */}
      <FadeIn delay={0.1} y={20} className="max-w-5xl mx-auto py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-widest text-[#0C0C0C]/40 mb-8 text-center">
          Find me on
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center gap-2.5 rounded-full border-2 border-[#0C0C0C]/15
                px-5 py-2.5 text-[#0C0C0C] font-medium uppercase tracking-wide text-sm
                hover:border-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white
                transition-all duration-200"
            >
              <Icon size={16} />
              {label}
              <ExternalLink size={12} className="opacity-40 group-hover:opacity-80" />
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Divider */}
      <div className="max-w-5xl mx-auto" style={{ borderTop: '1px solid rgba(12,12,12,0.12)' }} />

      {/* Footer grid */}
      <div className="max-w-5xl mx-auto py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
        {/* Identity */}
        <FadeIn delay={0} y={20}>
          <div>
            <h3
              className="font-black uppercase text-[#0C0C0C] leading-none mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              Ishan Verma
            </h3>
            <p className="text-[#0C0C0C]/60 font-light text-sm leading-relaxed">
              Analyst, Entrepreneur &amp; Builder<br />
              MSc Business Analytics · Warwick<br />
              B.Tech CSE First Class · SRM Institute<br />
              Founder @ <a href="https://ovationx.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0C0C] underline decoration-1 decoration-[#0C0C0C]/30 hover:decoration-[#0C0C0C] transition-all">OvationX</a> · Co-Founder @ <a href="https://krate.shop" target="_blank" rel="noopener noreferrer" className="hover:text-[#0C0C0C] underline decoration-1 decoration-[#0C0C0C]/30 hover:decoration-[#0C0C0C] transition-all">KRATE</a>
            </p>
          </div>
        </FadeIn>

        {/* Contact info */}
        <FadeIn delay={0.1} y={20}>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0C0C0C]/40 mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              {CONTACT_INFO.map(({ label, value, href, Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon size={16} className="text-[#0C0C0C]/40 mt-0.5 flex-shrink-0" />
                  {href ? (
                    <a
                      href={href}
                      className="text-[#0C0C0C]/80 hover:text-[#0C0C0C] text-sm font-medium transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-[#0C0C0C]/60 text-sm">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Nav links */}
        <FadeIn delay={0.2} y={20}>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#0C0C0C]/40 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#0C0C0C]/70 hover:text-[#0C0C0C] text-sm font-medium uppercase tracking-wide transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/pdf/Ishan_CV_Analyst.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-[#0C0C0C]/70 hover:text-[#0C0C0C] text-sm font-medium uppercase tracking-wide transition-colors"
                >
                  Download CV
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>

      {/* Copyright bar */}
      <div
        className="max-w-5xl mx-auto py-6"
        style={{ borderTop: '1px solid rgba(12,12,12,0.12)' }}
      >
        <p className="text-xs text-[#0C0C0C]/40 text-center tracking-wide uppercase">
          © {new Date().getFullYear()} Ishan Verma · All rights reserved
        </p>
      </div>
    </section>
  )
}
