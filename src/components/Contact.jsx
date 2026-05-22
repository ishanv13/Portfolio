import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: '📞',
    title: 'Call Me',
    value: '+44 7553 780832',
    href: 'tel:+447553780832',
  },
  {
    icon: '✉️',
    title: 'Email',
    value: 'ishanv2003@gmail.com',
    href: 'mailto:ishanv2003@gmail.com',
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Liverpool, UK',
    href: null,
  },
]

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-2">Reach Out</p>
          <h2 className="text-4xl font-bold">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Name
                </label>
                <input type="text" className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email
                </label>
                <input type="email" className={inputClass} placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Subject
              </label>
              <input type="text" className={inputClass} placeholder="What's this about?" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary hover:bg-primary-alt text-white py-3.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary/20"
            >
              Send Message ✉️
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
