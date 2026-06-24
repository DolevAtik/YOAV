import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/content'

function useCountUp(target, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame = 0
    const total = 80
    const timer = setInterval(() => {
      frame++
      // ease-out curve
      const progress = 1 - Math.pow(1 - frame / total, 3)
      setCount(Math.floor(progress * target))
      if (frame >= total) { setCount(target); clearInterval(timer) }
    }, 20)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}

function Stat({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCountUp(stat.value, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center py-14 md:py-20 relative"
    >
      {/* Number */}
      <div
        className="font-display font-bold text-[#D4AF37] leading-none mb-3"
        style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', letterSpacing: '-0.03em' }}
      >
        {count}
        <span
          className="text-[#D4AF37]/60"
          style={{ fontSize: '0.5em', letterSpacing: '0' }}
        >
          {stat.suffix}
        </span>
      </div>
      <p className="text-[10px] tracking-[0.45em] text-white/30 uppercase">{stat.label}</p>

      {/* Right divider — not on last */}
      {index < 2 && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/[0.05]" />
      )}
    </motion.div>
  )
}

export default function Statistics() {
  return (
    <section className="border-t border-b border-white/[0.04] bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((s, i) => <Stat key={s.label} stat={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
