import { motion } from 'framer-motion'

const projects = [
  {
    title: 'UK Graduate Job Market Intelligence Platform',
    description:
      'Fully automated end-to-end data pipeline collecting live UK analyst job postings from Adzuna and Reed APIs. Includes linear regression salary prediction, regex-based skill extraction, composite regional opportunity scoring, time series trend analysis, and a four-page interactive Power BI dashboard.',
    tags: ['Python', 'PostgreSQL', 'Power BI', 'scikit-learn', 'REST APIs', 'DAX', 'NLTK'],
    github: 'https://github.com/ishanv13/UK-job-market-analysis',
    live: null,
    featured: true,
    icon: '📊',
  },
  {
    title: 'Business Simulation – Data-Driven Strategy',
    description:
      'Analysed company KPIs across 28 simulated quarters to identify drivers behind a multi-year revenue downturn. Designed and led a recovery strategy that grew simulated revenue from $1.5B to $8.2B, improving product competitiveness (+25%), market share (+15%), and overall performance (+20%).',
    tags: ['Data Analysis', 'KPI Tracking', 'Strategy', 'Excel'],
    github: null,
    live: null,
    featured: false,
    icon: '💼',
  },
  {
    title: 'Customer Behaviour Analytics – Predictive Modelling',
    description:
      'End-to-end analytics project following CRISP-DM methodology. Evaluated multiple classification models against business performance metrics and translated model outputs into commercial recommendations through evaluation dashboards.',
    tags: ['Python', 'scikit-learn', 'CRISP-DM', 'Classification', 'pandas'],
    github: null,
    live: null,
    featured: false,
    icon: '🤖',
  },
  {
    title: 'Loan Approval Model Evaluation',
    description:
      'Designed and executed an A/B experiment comparing a new predictive model against an existing baseline using R. Ran t-tests and recall analyses; produced data-driven recommendations to reduce financial risk and improve model accuracy.',
    tags: ['R', 'A/B Testing', 'Hypothesis Testing', 'Statistical Analysis'],
    github: null,
    live: null,
    featured: false,
    icon: '🔬',
  },
  {
    title: 'NHS RAG Assistant',
    description:
      'Built a Retrieval-Augmented Generation (RAG) assistant using NLP and LLM tooling, designed to surface relevant NHS information in response to natural language queries.',
    tags: ['Python', 'NLP', 'RAG', 'LLM', 'Generative AI'],
    github: null,
    live: null,
    featured: false,
    icon: '🏥',
  },
  {
    title: 'On-Demand Delivery Platform Analysis',
    description:
      'Comprehensive analysis of a delivery company\'s 8-year trajectory using 20+ data sources. Identified 5 critical operational failure drivers; produced actionable recommendations on cost structure, rider engagement, and sustainable growth.',
    tags: ['Data Analysis', 'Operations', 'Business Analysis', 'Reporting'],
    github: null,
    live: null,
    featured: false,
    icon: '🚚',
  },
]

const Tag = ({ label }) => (
  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
    {label}
  </span>
)

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 hover:shadow-md transition-all flex flex-col ${
      project.featured ? 'md:col-span-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : ''
    }`}
  >
    <div className="flex items-start justify-between mb-3">
      <span className="text-3xl">{project.icon}</span>
      {project.featured && (
        <span className="text-xs bg-primary text-white px-2.5 py-1 rounded-full font-medium">
          ⭐ Featured
        </span>
      )}
    </div>

    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
      {project.title}
    </h3>

    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>

    <div className="flex gap-3">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-alt font-medium transition-colors"
        >
          💻 GitHub
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-alt font-medium transition-colors"
        >
          🔗 Live Demo
        </a>
      )}
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-2">What I've Built</p>
          <h2 className="text-4xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
