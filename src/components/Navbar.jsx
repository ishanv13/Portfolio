import { motion } from 'framer-motion'

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 md:px-10 py-4 md:py-6 flex justify-between bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/5 shadow-2xl overflow-x-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex justify-between w-full min-w-max gap-5 sm:gap-8 mx-auto max-w-7xl">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[11px] sm:text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 whitespace-nowrap"
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
