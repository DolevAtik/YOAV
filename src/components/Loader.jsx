import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAME = 'YOAV ZADIKOV'.split('')

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState(0) // 0=blank, 1=reveal, 2=exit
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 250)
    const t1 = setTimeout(() => setPhase(2), 2600)
    const t2 = setTimeout(() => {
      setMounted(false)
      onComplete()
    }, 3200)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0B0B0B] flex flex-col items-center justify-center"
        >
          {/* Top rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ originX: 0.5 }}
            className="w-16 h-px bg-[#D4AF37]/70 mb-10"
          />

          {/* Name — character stagger */}
          <div className="overflow-hidden flex">
            {NAME.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={phase >= 1 ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.048,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-display font-semibold text-white tracking-[0.3em] text-2xl sm:text-3xl md:text-4xl ${
                  char === ' ' ? 'w-5 sm:w-7' : ''
                }`}
              >
                {char === ' ' ? null : char}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-[9px] tracking-[0.55em] text-white/25 uppercase mt-6"
          >
            Director&nbsp;&nbsp;·&nbsp;&nbsp;Producer&nbsp;&nbsp;·&nbsp;&nbsp;Editor
          </motion.p>

          {/* Bottom rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ originX: 0.5 }}
            className="w-16 h-px bg-[#D4AF37]/70 mt-10"
          />

          {/* Exit wipe overlay */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={phase >= 2 ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className="absolute inset-0 bg-[#0B0B0B]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
