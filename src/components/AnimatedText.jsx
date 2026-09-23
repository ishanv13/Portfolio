import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * AnimatedText - character-by-character scroll-reveal.
 * Each char fades from opacity 0.2 to 1 as scroll progresses.
 * Words are wrapped in inline-blocks to prevent breaking mid-word.
 */
export default function AnimatedText({ text, className = '', style = {} }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  let charIndex = 0
  const totalChars = text.length

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wordI) => {
        const wordChars = word.split('')
        return (
          <span key={wordI} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {wordChars.map((char, charI) => {
              const start = charIndex / totalChars
              const end = (charIndex + 1) / totalChars
              charIndex++
              return (
                <Char
                  key={charI}
                  char={char}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  end={end}
                />
              )
            })}
            {wordI < words.length - 1 && (() => {
              const start = charIndex / totalChars
              const end = (charIndex + 1) / totalChars
              charIndex++
              return (
                <Char
                  key="space"
                  char=" "
                  scrollYProgress={scrollYProgress}
                  start={start}
                  end={end}
                />
              )
            })()}
          </span>
        )
      })}
    </p>
  )
}

function Char({ char, scrollYProgress, start, end }) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder to reserve space */}
      <span style={{ visibility: 'hidden' }}>{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity, position: 'absolute', left: 0, top: 0 }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}
