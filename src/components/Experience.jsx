import { motion } from 'framer-motion'

const jobs = [
  {
    role: 'Founder & Lead Digital Delivery',
    company: 'OvationX',
    location: 'Liverpool, UK',
    period: 'Jun 2024 – Present',
    icon: '🚀',
    bullets: [
      'Led business analysis and data requirements scoping for SME clients, translating operational objectives into structured functional specifications and robust digital platforms',
      'Constructed interactive client reporting dashboards and web analytics pipelines, surfacing traffic acquisition patterns, user engagement metrics, and conversion funnels to executive stakeholders',
      'Managed project delivery metrics across the full software development lifecycle, using data-backed milestones to track velocity, resource allocation, and budget compliance across multiple client accounts',
      'Conducted systematic quality assurance, website performance benchmarking, and SEO audit analytics, delivering structured presentations to executive leadership',
    ],
  },
  {
    role: 'Founder & Analytics Lead',
    company: 'KRATE',
    location: 'Liverpool, UK',
    period: 'Oct 2024 – Present',
    icon: '🛍️',
    bullets: [
      'Founded and scaled a direct-to-consumer e-commerce brand; built quantitative data tracking across customer funnels, browsing telemetry, and checkout transactions to analyse user conversion bottlenecks',
      'Modelled unit economics, product gross margin elasticity, and print-on-demand supplier cost structures, executing data-driven pricing strategies that maintained healthy gross margins with zero inventory risk',
      'Designed and executed continuous A/B testing on kit-builder product layouts and bundles, utilising visitor event data to drive measurable uplifts in average order value (AOV) and customer retention',
    ],
  },
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
      'Led end-to-end data analysis for customer acquisition pipelines, building ETL routines to evaluate lead demographics, conversion rates, and drop-off stages across the sales funnel',
      'Analysed prospective institutional client datasets to identify high-value target segments, developing data-driven outreach strategies that boosted qualified lead volume by ~60%',
      'Partnered with senior leadership to present weekly pipeline performance dashboards, providing actionable recommendations that improved deal qualification and lifted client acquisition by ~20%',
      'Maintained CRM data integrity and activity tracking across 500+ client touchpoints, conducting cohort and trend analyses to refine commercial targeting strategies',
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
