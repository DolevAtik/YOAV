import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

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
  const { t } = useLanguage()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center py-8 md:py-20 px-1 relative"
    >
      {/* Number */}
      <div
        className="font-display font-bold text-[#5B82D6] leading-none mb-3"
        style={{ fontSize: 'clamp(1.5rem, 4.5vw, 4.5rem)', letterSpacing: '-0.03em' }}
      >
        {count}
        <span
          className="text-[#5B82D6]/60"
          style={{ fontSize: '0.5em', letterSpacing: '0' }}
        >
          {stat.suffix}
        </span>
      </div>
      <p className="text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.45em] text-white/30 uppercase">
        {t.stats[stat.key]}
      </p>

      {/* Trailing divider — not on last. `end-0` mirrors automatically in RTL. */}
      {index < 2 && (
        <div className="hidden md:block absolute end-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/[0.05]" />
      )}
    </motion.div>
  )
}

export default function Statistics() {
  return (
    <section className="border-t border-b border-white/[0.04] bg-[#0D1526]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-3 gap-x-4 md:gap-x-10">
          {stats.map((s, i) => <Stat key={s.key} stat={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
