import FadeIn from './FadeIn'

const EDU = [
  {
    degree: 'MSc Business Analytics (Merit)',
    school: 'Warwick Business School',
    location: 'Coventry, UK',
    period: 'Sep 2024 to Sep 2025',
    desc: 'Focused on bridging the gap between advanced data science and business strategy. Coursework covered Predictive Modelling, Big Data Analytics, Data Visualisation, and Business Statistics. Master\'s dissertation focused on applied data solutions for real-world business environments.'
  },
  {
    degree: "B.Tech Computer Science Engineering (First Class)",
    school: 'SRM Institute of Science & Technology',
    location: 'Chennai, India',
    period: '2020 to 2024',
    desc: 'Comprehensive foundation in software engineering, algorithms, and database management. Led technical committees and developed early entrepreneurial ventures, combining technical coding skills with product management and team leadership.'
  },
  {
    degree: 'High School (Physics, Chemistry, Maths)',
    school: 'Stepping Stones Senior Sec. School',
    location: 'Chandigarh, India',
    period: '2018 to 2020',
    desc: 'Completed secondary education with a strong emphasis on mathematics, science, and analytical problem-solving, laying the groundwork for a career in technology and data.'
  },
]

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-white px-5 sm:px-8 md:px-10 py-16 sm:py-20"
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 10vw, 120px)', lineHeight: 1 }}
        >
          Education
        </h2>
      </FadeIn>

      <ul className="max-w-5xl mx-auto">
        {EDU.map(({ degree, school, location, period, desc }, i) => (
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
                <div className="flex flex-wrap items-baseline gap-3 w-full">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
                  >
                    {degree}
                  </h3>
                  <span className="text-sm font-semibold text-[#0C0C0C]/60 bg-black/5 px-3 py-1 rounded-full whitespace-nowrap">
                    {period}
                  </span>
                </div>
                <p className="font-medium text-[#0C0C0C]/80 text-sm md:text-base">
                  {school} · {location}
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
