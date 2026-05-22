import { motion } from 'framer-motion'

const socials = [
  { label: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/ishanv13/' },
  { label: 'GitHub', icon: '💻', href: 'https://github.com/ishanv13' },
  { label: 'Twitter', icon: '🐦', href: 'https://twitter.com/ishanv_' },
  { label: 'Instagram', icon: '📸', href: 'https://www.instagram.com/ishanv_/' },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Ishan Verma</h2>
            <p className="text-gray-400 text-sm mb-1">Data & Business Analyst</p>
            <p className="text-gray-500 text-xs">📍 Liverpool, UK · UK Graduate Visa</p>
          </div>

          <div className="flex gap-8 md:justify-center items-start flex-wrap">
            {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-4 md:justify-end items-start">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-2xl opacity-60 hover:opacity-100 transition-all"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">© ishanv13. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
