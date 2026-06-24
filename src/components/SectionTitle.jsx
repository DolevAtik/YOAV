import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionTitle({ label, title, index, centered = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={centered ? 'text-center' : ''}>
      {/* Label row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}
      >
        {index && (
          <span className="font-display font-light text-[#D4AF37]/40 text-sm tabular-nums">{index}</span>
        )}
        <div className="w-5 h-px bg-[#D4AF37]/50" />
        <p className="text-[9px] tracking-[0.5em] text-[#D4AF37] uppercase font-medium">{label}</p>
      </motion.div>

      {/* Title — wipe-up reveal */}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: '100%', opacity: 0 }}
          animate={inView ? { y: '0%', opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="font-display font-bold text-white leading-none"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  )
}
