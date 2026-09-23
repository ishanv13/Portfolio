import { useEffect, useRef, useState } from 'react'

const ROW1_SOURCE = [
  { src: '/images/saravana-screenshot.jpg', href: '#' },
  { src: '/images/krate-screenshot.jpg', href: 'https://krate.shop' },
  { src: '/images/ovationx-screenshot.jpg', href: 'https://ovationx.co.uk' },
  { src: '/images/jsb-screenshot.jpg', href: '#' },
  { src: '/images/ishanbody.jpeg', href: '#about' },
]

const ROW2_SOURCE = [
  { src: '/images/Screenshot%202026-07-11%20235305.png', href: 'https://ovationx.co.uk' },
  { src: '/images/krate-screenshot.jpg', href: 'https://krate.shop' },
  { src: '/images/Screenshot%202026-06-12%20031909.png', href: 'https://ovationx.co.uk' },
  { src: '/images/saravana-screenshot.jpg', href: '#' },
  { src: '/images/ovationx-screenshot.jpg', href: 'https://ovationx.co.uk' },
]

const ROW1 = [...ROW1_SOURCE, ...ROW1_SOURCE]
const ROW2 = [...ROW2_SOURCE, ...ROW2_SOURCE]

// Triple for seamless looping
const ROW1_ITEMS = [...ROW1, ...ROW1, ...ROW1]
const ROW2_ITEMS = [...ROW2, ...ROW2, ...ROW2]

export default function MarqueeSection() {
  const sectionRef = useRef(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(raw)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 scrolls right */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {ROW1_ITEMS.map((item, i) => (
            <a
              key={`r1-${i}`}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] hover:z-10 focus:outline-none"
            >
              <img
                src={item.src}
                alt="Project Preview"
                loading="lazy"
                className="rounded-xl sm:rounded-2xl object-cover shadow-lg"
                style={{ width: 'clamp(260px, 40vw, 420px)', height: 'clamp(170px, 26vw, 270px)' }}
              />
            </a>
          ))}
        </div>

        {/* Row 2 scrolls left */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW2_ITEMS.map((item, i) => (
            <a
              key={`r2-${i}`}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] hover:z-10 focus:outline-none"
            >
              <img
                src={item.src}
                alt="Project Preview"
                loading="lazy"
                className="rounded-xl sm:rounded-2xl object-cover shadow-lg"
                style={{ width: 'clamp(260px, 40vw, 420px)', height: 'clamp(170px, 26vw, 270px)' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
