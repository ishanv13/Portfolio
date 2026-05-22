import { motion } from 'framer-motion'

const jobs = [
  {
    role: 'Front of House',
    company: 'Subway',
    location: 'Liverpool, UK',
    period: 'Apr 2026 – Present',
    icon: '🥖',
    bullets: [
      'Prepared and served food to customers in a fast-paced environment, maintaining quality and hygiene standards',
      'Delivered efficient customer service at the counter — taking orders, handling POS payments, managing queue flow',
      'Collaborated with team members across multiple stations, adapting to varying demand levels',
    ],
  },
  {
    role: 'Parcel Sorter',
    company: 'Royal Mail Warehouse',
    location: 'Atherstone, UK',
    period: 'Nov 2025 – Dec 2025',
    icon: '📦',
    bullets: [
      'Accurately sorted and processed high volumes of parcels in a fast-paced warehouse, ensuring timely dispatch',
      'Maintained strict health and safety compliance while collaborating with the team to meet daily productivity targets',
    ],
  },
  {
    role: 'Event Steward',
    company: 'Notting Hill Carnival 2025',
    location: 'London, UK',
    period: 'August 2025',
    icon: '🎪',
    bullets: [
      'Supported event safety and smooth operations, facilitating crowd management and providing information to attendees',
      'Collaborated with the stewarding team to ensure a welcoming and secure environment for all participants',
    ],
  },
  {
    role: 'Conference Assistant',
    company: 'Warwick Conferences',
    location: 'Coventry, UK',
    period: 'Jul 2025 – Dec 2025',
    icon: '🎙️',
    bullets: [
      'Supported conference operations across multiple venues — room setups, AV equipment handling, on-site client assistance',
      'Delivered high-quality customer service managing delegate arrivals and adapting to varied operational tasks',
    ],
  },
  {
    role: 'Business Development Associate',
    company: 'TechLearn India',
    location: 'New Delhi, India',
    period: 'Jun 2024 – Sep 2024',
    icon: '📈',
    bullets: [
      'Designed and executed lead analysis pipelines using Python and Excel, increasing qualified lead conversion by ~60%',
      'Worked with senior stakeholders to interpret data trends and align product positioning with market demand',
    ],
  },
  {
    role: 'Committee Head',
    company: 'Aaruush — SRM Institute',
    location: 'Chennai, India',
    period: 'May 2022 – Jan 2023',
    icon: '🏆',
    bullets: [
      'Led organisation and execution of events at South Asia\'s largest techno-management fest, managing diverse teams',
      'Delivered results that enhanced overall fest success — project management, technical coordination, and leadership',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-2">Where I've Worked</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/25 md:left-8" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-0 top-1 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-xl md:text-2xl shadow-sm flex-shrink-0">
                  {job.icon}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {job.role}
                    </h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {job.company} · {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm">
                        <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
