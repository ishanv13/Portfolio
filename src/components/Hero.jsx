import { motion } from 'framer-motion'
import { BlurText, FadeInText } from './AnimatedText'

const socials = [
  { label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/ishanv13/' },
  { label: 'Twitter', icon: '🐦', url: 'https://twitter.com/ishanv_' },
  { label: 'GitHub', icon: '💻', url: 'https://github.com/ishanv13' },
]

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary-lighter/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-5 mb-8">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-3xl hover:scale-110 transition-transform"
                  whileHover={{ y: -5 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            <BlurText
              text="Hi, I'm Ishan"
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            />

            <FadeInText
              text="Developer & Analyst"
              className="text-2xl md:text-3xl text-primary font-semibold mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              CS graduate diving into analytics and business intelligence.
            </motion.p>

            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="https://drive.google.com/drive/folders/1fteZukmG1h_oufHR58HN9ERpC8JC2s01?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-alt text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Documents 📄
              </motion.a>

              <motion.a
                href="#about"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                About Me
              </motion.a>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-alt/20 rounded-full blur-3xl"
            />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-alt/30 rounded-full" />
              <img
                src="/images/ishanprofile.png"
                alt="Ishan Verma"
                className="relative rounded-full w-72 h-72 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white dark:border-gray-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <span className="text-xl">↓</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
