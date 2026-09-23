import FadeIn from './FadeIn'

const JOBS = [
  {
    role: 'Founder & Lead Digital Delivery',
    company: 'OvationX',
    companyLink: 'https://ovationx.co.uk',
    location: 'Liverpool, UK',
    period: 'Jun 2024 to Present',
    desc: 'Led business analysis and data requirements scoping for SME clients, translating operational objectives into structured functional specifications and robust digital platforms. Constructed interactive client reporting dashboards and web analytics pipelines, surfacing traffic acquisition patterns, user engagement metrics, and conversion funnels to executive stakeholders. Managed full project delivery metrics across the software lifecycle using data-backed milestones to track velocity, resource allocation, and budget compliance. Conducted systematic quality assurance, website performance benchmarking, and SEO audit analytics.',
  },
  {
    role: 'Founder & Analytics Lead',
    company: 'KRATE',
    companyLink: 'https://krate.shop',
    location: 'Liverpool, UK',
    period: 'Oct 2024 to Present',
    desc: 'Founded and scaled a direct-to-consumer e-commerce brand; built quantitative data tracking across customer funnels, browsing telemetry, and checkout transactions to analyse user conversion bottlenecks. Modelled unit economics, product gross margin elasticity, and print-on-demand supplier cost structures, executing data-driven pricing strategies that maintained healthy gross margins with zero inventory risk. Designed and executed continuous A/B testing on kit-builder product layouts, utilising visitor event data to drive measurable uplifts in average order value and customer retention.',
  },
  {
    role: 'Front of House',
    company: 'Subway',
    location: 'Liverpool, UK',
    period: 'Apr 2026 to Present',
    desc: 'Prepared and served food to customers in a high-throughput environment while maintaining strict quality and hygiene standards. Delivered efficient counter service, taking orders, processing POS payments, and managing queue flow during peak hours. Collaborated with team members across multiple stations, adapting to varying demand levels and demonstrating reliability in a fast-paced customer-facing role.',
  },
  {
    role: 'Parcel Sorter',
    company: 'Royal Mail Warehouse',
    location: 'Atherstone, UK',
    period: 'Nov 2025 to Dec 2025',
    desc: 'Accurately sorted and processed high volumes of parcels in a fast-paced national distribution warehouse during the peak Christmas period, ensuring timely dispatch. Maintained strict health and safety compliance while collaborating with the team to consistently meet daily productivity targets under pressure.',
  },
  {
    role: 'Event Steward',
    company: 'Notting Hill Carnival 2025',
    location: 'London, UK',
    period: 'August 2025',
    desc: 'Supported event safety and smooth operations at Europe\'s largest street festival, facilitating crowd management across designated zones and providing real-time information to attendees. Collaborated with the stewarding team and emergency services to ensure a welcoming and secure environment for over a million participants.',
  },
  {
    role: 'Conference Assistant',
    company: 'Warwick Conferences',
    location: 'Coventry, UK',
    period: 'Jul 2025 to Dec 2025',
    desc: 'Supported conference operations across multiple university venues, managing room setups, AV equipment handling, catering coordination, and on-site client assistance. Delivered high-quality customer service managing delegate arrivals for corporate events, academic conferences, and large-scale university functions, adapting to varied operational demands on short notice.',
  },
  {
    role: 'Business Development Associate',
    company: 'TechLearn India',
    location: 'New Delhi, India',
    period: 'Jun 2024 to Sep 2024',
    desc: 'Led end-to-end data analysis for customer acquisition pipelines, building ETL routines to evaluate lead demographics, conversion rates, and drop-off stages across the sales funnel. Analysed prospective institutional client datasets to identify high-value target segments, developing data-driven outreach strategies that boosted qualified lead volume by ~60%. Partnered with senior leadership to present weekly pipeline performance dashboards, providing actionable recommendations that improved deal qualification and lifted client acquisition by ~20%. Maintained CRM data integrity across 500+ client touchpoints, conducting cohort and trend analyses to refine commercial targeting strategies.',
  },
  {
    role: 'Committee Head',
    company: 'Aaruush (SRM Institute)',
    location: 'Chennai, India',
    period: 'May 2022 to Jan 2023',
    desc: 'Led the organisation and execution of large-scale events at Aaruush, South Asia\'s largest techno-management fest, managing diverse cross-functional teams of 30+ volunteers. Delivered results that directly enhanced overall fest success through project management, technical coordination, sponsor relations, and leadership, overseeing event logistics from ideation through to delivery for an audience of 15,000+ attendees.',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 10vw, 120px)', lineHeight: 1 }}
        >
          Experience
        </h2>
      </FadeIn>

      <ul className="max-w-5xl mx-auto">
        {JOBS.map(({ role, company, companyLink, location, period, desc }, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <li
              className="flex flex-row items-start md:items-center gap-4 sm:gap-6 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0 mt-1 md:mt-0"
                style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col justify-center gap-2 pt-0 w-full">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
                  >
                    {role}
                  </h3>
                  <span className="text-sm font-semibold text-[#0C0C0C]/60 bg-black/5 px-3 py-1 rounded-full">
                    {period}
                  </span>
                </div>
                <p className="font-medium text-[#0C0C0C]/80 text-sm md:text-base">
                  {companyLink ? (
                    <a
                      href={companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0C0C0C] underline decoration-[#0C0C0C]/30 hover:decoration-[#0C0C0C] transition-all"
                    >
                      {company}
                    </a>
                  ) : (
                    company
                  )} · {location}
                </p>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)',
                    opacity: 0.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
