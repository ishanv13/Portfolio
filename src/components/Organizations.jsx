import { motion } from 'framer-motion'

const orgs = [
  { src: '/images/kvs.png', alt: 'Kendriya Vidyalaya' },
  { src: '/images/hschool.png', alt: 'Stepping Stones' },
  { src: '/images/aaruush.png', alt: 'Aaruush' },
  { src: '/images/Srmseal.png', alt: 'SRM University' },
  { src: '/images/856px-Warwick_Business_School_logo.svg.png', alt: 'Warwick Business School' },
]

const Organizations = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-2">My Associations</p>
          <h2 className="text-4xl font-bold">Organisations</h2>
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-20 items-center w-max">
          {[...orgs, ...orgs].map((org, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-28 w-44 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={org.src}
                alt={org.alt}
                className="max-h-24 max-w-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Organizations
