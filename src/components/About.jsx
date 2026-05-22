import { motion } from 'framer-motion'

const stats = [
  { value: '9.20', label: 'CGPA B.Tech' },
  { value: '70.2%', label: '12th Score' },
  { value: '82%', label: '10th Score' },
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-2">Who I Am</p>
          <h2 className="text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-alt/10 rounded-3xl" />
              <img
                src="/images/ishanimg1.jpg"
                alt="Ishan Verma"
                className="relative rounded-2xl shadow-xl w-full max-w-sm object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
              I am a Computer Science Engineering graduate currently pursuing an MSc in Business
              Analytics at Warwick Business School. My academic journey has equipped me with a
              strong foundation in programming, data structures, and system design, while also
              developing advanced skills in data analysis, statistical modelling, and business
              strategy. Through coursework in areas such as optimisation models, forecasting, and
              generative AI, I've built the ability to derive actionable insights and support
              data-driven decision-making.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-2xl font-bold text-primary mb-1">{stat.value}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/pdf/Ishan's CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-alt text-white px-7 py-3.5 rounded-xl font-medium transition-all shadow-md shadow-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV ⬇️
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
