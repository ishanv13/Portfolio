import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SkillBar = ({ name, percentage }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
      <span className="text-sm text-primary font-semibold">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-primary to-primary-alt rounded-full"
      />
    </div>
  </div>
)

const SkillCategory = ({ icon, title, skills }) => {
  const [open, setOpen] = useState(true)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-2 group"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary text-lg"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pt-4"
          >
            {skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const categories = [
  {
    icon: '💻',
    title: 'Development',
    skills: [
      { name: 'Python', percentage: 80 },
      { name: 'SQL', percentage: 80 },
      { name: 'HTML / CSS', percentage: 70 },
      { name: 'C / C++', percentage: 65 },
      { name: 'Data Structures & Algorithms', percentage: 65 },
      { name: 'JavaScript', percentage: 45 },
    ],
  },
  {
    icon: '📊',
    title: 'Analytics',
    skills: [
      { name: 'R Language', percentage: 90 },
      { name: 'Prompt Engineering', percentage: 75 },
      { name: 'Power BI', percentage: 55 },
      { name: 'Excel', percentage: 40 },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-2">What I Know</p>
          <h2 className="text-4xl font-bold">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SkillCategory {...cat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
