import { motion } from 'framer-motion'

const education = [
  {
    title: 'Secondary School',
    institution: 'Kendriya Vidyalaya Aliganj, Lucknow',
    period: '2013 – 2018',
    icon: '🏫',
  },
  {
    title: 'High School',
    institution: 'Stepping Stones Senior Sec. School, Chandigarh',
    period: '2018 – 2020',
    icon: '📖',
  },
  {
    title: "Bachelor's Degree",
    institution: 'B.Tech CSE (IT) · SRM Institute of Science & Technology',
    period: '2020 – 2024',
    icon: '🎓',
  },
  {
    title: "Master's Degree",
    institution: 'MSc Business Analytics · Warwick Business School',
    period: '2024 – 2025',
    icon: '🏛️',
  },
]

const Qualification = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-2">My Journey</p>
          <h2 className="text-4xl font-bold">Qualification</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/25 -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {education.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-center gap-6 md:gap-0"
                >
                  {/* Left card (even) or spacer (odd) */}
                  <div className={`flex-1 ${isLeft ? 'md:pr-10' : 'hidden md:block'}`}>
                    {isLeft && (
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 md:text-right hover:border-primary/30 transition-colors">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                          {item.institution}
                        </p>
                        <span className="inline-block text-primary text-sm mt-2 font-medium">
                          📅 {item.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Centre icon */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl shadow-md shadow-primary/30 flex-shrink-0">
                    {item.icon}
                  </div>

                  {/* Right card (odd) or spacer (even) */}
                  <div className={`flex-1 ${!isLeft ? 'md:pl-10' : 'hidden md:block'}`}>
                    {!isLeft && (
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-colors">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                          {item.institution}
                        </p>
                        <span className="inline-block text-primary text-sm mt-2 font-medium">
                          📅 {item.period}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Mobile: full-width card */}
                  <div className="flex-1 md:hidden">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        {item.institution}
                      </p>
                      <span className="inline-block text-primary text-sm mt-2 font-medium">
                        📅 {item.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
