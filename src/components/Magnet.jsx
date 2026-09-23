import { useRef, useCallback } from 'react'

/**
 * Magnet — mouse-following magnetic hover effect.
 * padding: activation radius beyond element bounds
 * strength: divisor for movement (higher = subtler)
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  style = {},
}) {
  const ref = useRef(null)
  const active = useRef(false)

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const threshold = Math.max(rect.width, rect.height) / 2 + padding

      if (dist < threshold) {
        if (!active.current) {
          el.style.transition = activeTransition
          active.current = true
        }
        el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`
        el.style.willChange = 'transform'
      } else if (active.current) {
        el.style.transition = inactiveTransition
        el.style.transform = 'translate3d(0,0,0)'
        active.current = false
      }
    },
    [padding, strength, activeTransition, inactiveTransition]
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = inactiveTransition
    el.style.transform = 'translate3d(0,0,0)'
    active.current = false
  }, [inactiveTransition])

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', ...style }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
