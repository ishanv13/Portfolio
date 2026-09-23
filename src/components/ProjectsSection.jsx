import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import { LiveProjectButton } from './Buttons'

const PROJECTS = [
  {
    num: '01',
    title: 'KRATE, AI-Operated Startup',
    category: 'AI Agents',
    date: '2026 to Present',
    icon: '🎪',
    description: 'Co-founded and launched KRATE, a disruptive D2C UK rave and festival accessories brand. Rather than building a traditional team, I designed and deployed a CEO-orchestrated AI agent organisation using Claude Code. I engineered 7 specialist subagents (Brand, Marketing, Product, Legal, Finance, Ops, Tech) with independent mandates and deliverable standards. Operating in parallel, these agents shipped 11 core business deliverables in a single session, ranging from a 48% gross margin pricing model and UK IPO trademark checks to full packaging specs and DJ outreach playbooks. Supported by a robust infrastructure including Git auto-commits, Notion API sync, and an automated XeLaTeX branded PDF pipeline.',
    tags: ['Claude Code', 'Python', 'AI Agents', 'Anthropic SDK', 'Notion API'],
    link: 'https://krate.shop',
    linkType: 'Live',
  },
  {
    num: '02',
    title: 'TexTrail, AI Compliance SaaS',
    category: 'AI Engineering',
    date: '2026',
    icon: '🧾',
    description: 'Built a full-stack multi-tenant vertical SaaS for Indian garment exporters that auto-generates export customs paperwork (LUT, shipping bill, commercial invoice, packing list) from a single shipment entry via server-rendered headless Chromium. Architected an AI compliance chatbot combining Cloudflare Workers AI (Llama 3.1 8B) with a custom bilingual English/Tamil per-exporter memory graph, enforcing deterministic zero-hallucination guardrails. Constructed enterprise multi-tenant isolation in NestJS/PostgreSQL using Postgres Row-Level Security and dual-Prisma service layers. Integrated Tesseract OCR for certificate validity extraction with automated WhatsApp expiry alerts and Razorpay subscription billing.',
    tags: ['NestJS', 'PostgreSQL', 'Cloudflare Workers AI', 'RAG', 'TypeScript', 'WhatsApp API', 'Razorpay'],
    link: 'https://textrail.ishanv2003.workers.dev',
    linkType: 'Live',
  },
  {
    num: '03',
    title: 'UK Job Market Intelligence',
    category: 'Data Analytics',
    date: 'Apr–May 2026',
    icon: '📊',
    description: 'Architected and built a fully automated end-to-end data pipeline collecting 10,000+ live UK job postings daily via Adzuna and Reed APIs. Engineered a machine learning workflow including linear regression for salary prediction and regex-based NLP for skill extraction. Developed a composite scoring model to rank regional opportunities and visualised insights through a four-page interactive Power BI dashboard featuring dynamic regional heatmaps and market trend analyses.',
    tags: ['Python', 'PostgreSQL', 'Power BI', 'scikit-learn', 'REST APIs', 'DAX', 'NLTK'],
    link: 'https://github.com/ishanv13/UK-job-market-analysis',
    linkType: 'GitHub',
  },
  {
    num: '04',
    title: 'NHS Healthcare Assistant',
    category: 'Generative AI',
    date: '2025',
    icon: '🏥',
    description: 'Designed and deployed an AI-powered healthcare assistant aimed at streamlining NHS administrative and clinical search workflows. Engineered a Retrieval-Augmented Generation (RAG) pipeline combining advanced NLP and LLMs to instantly surface relevant NHS protocols from natural language queries. The solution successfully reduced manual documentation review workload by 70% while maintaining a 95% accuracy rate, demonstrating strong potential for real-world clinical environments.',
    tags: ['Python', 'NLP', 'RAG', 'LLM', 'Generative AI'],
    link: 'https://github.com/ishanv13/NHS-Healthcare-Assistant',
    linkType: 'GitHub',
  },
  {
    num: '05',
    title: 'Customer Behaviour Analytics',
    category: 'Predictive Modelling',
    date: 'Jan to Feb 2025',
    icon: '🛒',
    description: 'Executed an end-to-end data science lifecycle project leveraging the CRISP-DM methodology to predict and analyse e-commerce customer reviews. Engineered robust data preprocessing and feature selection pipelines in pandas, and evaluated multiple machine learning classification models. Mapped technical model outputs against key business performance metrics to deliver commercially viable recommendations for customer retention and product improvement.',
    tags: ['Python', 'scikit-learn', 'CRISP-DM', 'Classification', 'pandas'],
    link: 'https://github.com/ishanv13/Nile-eCommerce-Review-Prediction',
    linkType: 'GitHub',
  },
  {
    num: '06',
    title: 'Loan Approval Model',
    category: 'A/B Testing',
    date: 'Feb 2025',
    icon: '🔬',
    description: 'Designed a rigorous A/B testing framework to evaluate the efficacy of a newly developed predictive loan approval model against the existing business baseline. Leveraged R for advanced statistical analysis, executing t-tests, recall analyses, and variance testing. Translated complex statistical findings into clear, data-driven strategy recommendations to mitigate institutional financial risk while tangibly improving loan approval accuracy.',
    tags: ['R', 'A/B Testing', 'Hypothesis Testing', 'Statistical Analysis'],
    link: 'https://github.com/ishanv13/LoanApprovalModel_EffectivenessAnalysis',
    linkType: 'GitHub',
  },
  {
    num: '07',
    title: 'Business Simulation',
    category: 'Strategy',
    date: 'May–Aug 2025',
    icon: '💼',
    description: 'Acted as chief strategist in a complex business simulation, analysing vast arrays of corporate KPIs across 28 simulated quarters to diagnose a multi-year revenue downturn. Designed and executed a comprehensive turnaround strategy based on predictive tracking and market analysis. Successfully steered the simulated enterprise from $1.5B to $8.2B in revenue, achieving a 25% increase in product competitiveness and a 15% expansion in total market share.',
    tags: ['Data Analysis', 'KPI Tracking', 'Strategy', 'Excel'],
    link: 'https://drive.google.com/file/d/1kLWepIUkvTanyeAEcBC_DrcthclbvsWQ/view?usp=sharing',
    linkType: 'Report',
  },
  {
    num: '08',
    title: 'EventsGo, Ticketing Analysis',
    category: 'Data Modelling',
    date: 'Mar 2025',
    icon: '🎟️',
    description: 'Designed a sophisticated, normalised relational database schema from scratch and executed complex SQL data pipelines for a large-scale event ticketing platform. Modeled complex, many-to-many relationships across events, venues, attendees, and financial transactions. This robust data architecture served as the foundation for an advanced business intelligence layer, enabling real-time reporting on revenue, attendance tracking, and user engagement metrics.',
    tags: ['SQL', 'Data Modelling', 'Database Design', 'Business Intelligence'],
    link: 'https://drive.google.com/file/d/1Asbp-cPStTTUhd0c3KzyvqZb8KWMS-bL/view?usp=sharing',
    linkType: 'Report',
  },
  {
    num: '09',
    title: 'Dunzo, Delivery Platform Analysis',
    category: 'Business Analysis',
    date: 'Mar 2025',
    icon: '🚚',
    description: 'Conducted an extensive data-driven analysis of Dunzo\'s 8-year operational trajectory, synthesising data from over 20 disparate sources. Mapped complex logistical workflows to identify 5 critical systemic failure drivers within the hyper-local delivery model. Translated quantitative findings into actionable executive-level recommendations focusing on unit cost structure optimisation, rider fleet engagement, and sustainable strategic growth pathways.',
    tags: ['Data Analysis', 'Operations', 'Business Analysis', 'Reporting'],
    link: 'https://drive.google.com/file/d/182i5cTUOwkfS1fIyU7NhWuFzOHEd3OAw/view?usp=sharing',
    linkType: 'Report',
  },
  {
    num: '10',
    title: 'Homely, Community Service',
    category: 'Tech Lead',
    date: '2025',
    icon: '🏠',
    description: 'Spearheaded the technical vision and product strategy as Head of Technology for an MVP platform connecting university students with local residents for reliable household services. Led the architectural design and full-stack implementation, establishing the subscription tier logic, integrating secure payment gateways, and building robust provider verification workflows. Established quality control systems to ensure service reliability, balancing rapid startup execution with scalable platform architecture.',
    tags: ['Product Design', 'MVP', 'Platform Architecture', 'Tech Lead'],
    link: 'https://drive.google.com/file/d/1j6KNhGwGZog8PqOpb6oysUnCJGXhYWWV/view?usp=sharing',
    linkType: 'Report',
  },
]

const TOTAL = PROJECTS.length

function ProjectCard({ project, index, containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const targetScale = 1 - (TOTAL - 1 - index) * 0.02
  const scale = useTransform(
    scrollYProgress,
    [index / TOTAL, 1],
    [1, targetScale]
  )

  return (
    <div className="min-h-[80vh] flex items-start justify-center sticky top-24 md:top-32 pb-10">
      <motion.div
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-12 flex flex-col justify-between"
        style={{
          background: '#0C0C0C',
          scale,
          top: `${index * 24}px`,
          transformOrigin: 'top center',
          minHeight: '65vh',
        }}
      >
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-10">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
              >
                {project.num}
              </span>
              <div>
                <p
                  className="text-[#D7E2EA] font-light uppercase tracking-widest flex items-center gap-2"
                  style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
                >
                  {project.category} <span className="opacity-50">· {project.date}</span>
                </p>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase mt-1"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <LiveProjectButton />
              </a>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mt-6 lg:mt-12">
            <div className="text-[6rem] lg:text-[10rem] leading-none opacity-80 mix-blend-luminosity">
              {project.icon}
            </div>
            
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-[#D7E2EA]/80 font-light leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#0C0C0C] bg-[#D7E2EA] px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef(null)

  return (
    <section
      id="projects"
      ref={containerRef}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
        >
          Projects
        </h2>
      </FadeIn>

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  )
}
