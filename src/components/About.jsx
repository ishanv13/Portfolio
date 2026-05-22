import { motion } from 'framer-motion'

const stats = [
  { value: '9.2', label: 'B.Tech CGPA' },
  { value: 'Merit', label: 'MSc Grade' },
  { value: '2025', label: 'WBS Graduate' },
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
              I'm a data analyst based in Liverpool, UK. I hold an MSc in Business Analytics (Merit)
              from Warwick Business School and a First Class B.Tech in Computer Science (9.2 CGPA)
              from SRM Institute. I care about turning messy data into decisions people can act on —
              equally comfortable writing SQL queries and presenting findings to non-technical
              stakeholders. I'm currently on a UK Graduate Visa and seeking graduate roles in
              data analytics and business analysis.
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

            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="/pdf/Ishan's CV.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-alt text-white px-7 py-3.5 rounded-xl font-medium transition-all shadow-md shadow-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV ⬇️
              </motion.a>

              <motion.a
                href="https://drive.google.com/drive/folders/1fteZukmG1h_oufHR58HN9ERpC8JC2s01?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-7 py-3.5 rounded-xl font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Documents 📄
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
