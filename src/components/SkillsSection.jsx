import FadeIn from './FadeIn'

const CATEGORIES = [
  {
    icon: '💻',
    title: 'Full-Stack & Architecture',
    skills: [
      { name: 'React, Tailwind & Frontend Engineering', percentage: 90 },
      { name: 'Cloudflare Ecosystem (Workers, D1, CDN)', percentage: 85 },
      { name: 'Python (pandas, NumPy, scikit-learn)', percentage: 90 },
      { name: 'SQL & Relational Database Design', percentage: 85 },
      { name: 'REST APIs & Serverless Backends', percentage: 85 },
    ],
  },
  {
    icon: '🤖',
    title: 'AI Systems & Automation',
    skills: [
      { name: 'Multi-Agent Systems (Claude Code, SDKs)', percentage: 90 },
      { name: 'Prompt Engineering & LLM Workflows', percentage: 85 },
      { name: 'NLP & RAG Data Pipelines', percentage: 80 },
      { name: 'CI/CD & Git Automation', percentage: 80 },
      { name: 'Document Automation (XeLaTeX, pandoc)', percentage: 75 },
    ],
  },
  {
    icon: '📊',
    title: 'Data & Commercial Strategy',
    skills: [
      { name: 'Financial Modeling & Pricing Strategy', percentage: 90 },
      { name: 'Power BI & Advanced DAX', percentage: 85 },
      { name: 'Statistical Methods & A/B Testing', percentage: 85 },
      { name: 'Machine Learning (Classification, Regression)', percentage: 80 },
      { name: 'Market Intelligence & Forecasting', percentage: 85 },
    ],
  },
  {
    icon: '🚀',
    title: 'Founder & Operational Skills',
    tags: [
      'Product Management', 'Go-to-Market Strategy', 'Cross-Functional Leadership',
      'Rapid Prototyping', 'D2C E-commerce Operations', 'B2B Client Engagement',
      'Agile Delivery', 'Venture Pitching', 'Unit Economics', 'Brand Architecture',
      'Crisis Management', 'Decisive Execution'
    ],
  },
]

const LANGUAGES = [
  { lang: 'English', level: 'Fluent', detail: 'IELTS Band 7', flag: '🇬🇧' },
  { lang: 'Hindi', level: 'Fluent', detail: 'Native', flag: '🇮🇳' },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 10vw, 120px)', lineHeight: 1 }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {CATEGORIES.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 0.1} y={30}>
            <div className="h-full rounded-[30px] sm:rounded-[40px] border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 flex flex-col hover:border-white/20 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl sm:text-5xl">{cat.icon}</span>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase tracking-wide"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
                >
                  {cat.title}
                </h3>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                {cat.skills && (
                  <div className="space-y-6">
                    {cat.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-sm sm:text-base text-[#D7E2EA]/80 font-light tracking-wide">
                            {skill.name}
                          </span>
                          <span className="text-xs sm:text-sm text-[#D7E2EA] font-medium">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="h-1 w-full bg-black/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#D7E2EA]"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cat.tags && (
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#0C0C0C] bg-[#D7E2EA] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}

        {/* Languages Card */}
        <FadeIn delay={0.4} y={30} className="md:col-span-2">
          <div className="rounded-[30px] sm:rounded-[40px] border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 hover:border-white/20 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl">🌐</span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
              >
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-12">
              {LANGUAGES.map((l) => (
                <div key={l.lang} className="flex items-center gap-4">
                  <span className="text-3xl sm:text-4xl">{l.flag}</span>
                  <div>
                    <p className="text-base sm:text-lg text-[#D7E2EA] font-medium uppercase tracking-wide">
                      {l.lang}
                    </p>
                    <p className="text-sm text-[#D7E2EA]/60 font-light">
                      {l.level} · {l.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
