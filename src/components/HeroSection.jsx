import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import Magnet from './Magnet'

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col pt-24 relative overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Hero Heading */}
      <div className="overflow-hidden flex-1 flex flex-col justify-center">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
              text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
              -mt-10 sm:-mt-16"
          >
            Hi, i&apos;m ishan
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Analyst, Entrepreneur & Builder | turning data into decisions and ideas into ventures
          </p>
        </FadeIn>
      </div>

      {/* Portrait centered absolutely */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-[55%] -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0
          w-[220px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="/images/ishanprofile.png"
            alt="Ishan Verma Portrait"
            className="w-full h-auto rounded-full border-4 border-white/10"
            loading="eager"
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
