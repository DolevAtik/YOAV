import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TICKER_ITEMS = [
  'Director', '·', 'Producer', '·', 'Editor', '·',
  'Motion Graphics', '·', 'Music Videos', '·', 'Commercials', '·',
  'Visual Storytelling', '·', 'Cinematography', '·',
  'Director', '·', 'Producer', '·', 'Editor', '·',
  'Motion Graphics', '·', 'Music Videos', '·', 'Commercials', '·',
  'Visual Storytelling', '·', 'Cinematography', '·',
  'Director', '·', 'Producer', '·', 'Editor', '·',
  'Motion Graphics', '·', 'Music Videos', '·', 'Commercials', '·',
  'Visual Storytelling', '·', 'Cinematography', '·',
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const titleY    = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOp = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      ref={ref}
      id="hero"
      className="grain relative h-[82svh] md:h-[100svh] flex flex-col overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B0B]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse 70% 50% at 25% 55%, #1c110400 0%, #1c110418 40%, transparent 70%)',
              'radial-gradient(ellipse 70% 50% at 75% 45%, #1c110414 0%, #1c110408 40%, transparent 70%)',
              'radial-gradient(ellipse 70% 50% at 25% 55%, #1c110400 0%, #1c110418 40%, transparent 70%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-transparent to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/60 via-transparent to-[#0B0B0B]/60" />
      </div>

      {/* ── Main content — flex-1 centers within remaining space ── */}
      <motion.div
        style={{ y: titleY, opacity: contentOp }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full
                   pt-14 md:pt-0"
      >
        {/* 2018 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex items-center justify-center gap-5 mb-[2vh] md:mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            style={{ originX: 1 }}
            className="w-10 h-px bg-[#D4AF37]/50"
          />
          <span className="text-[8px] sm:text-[9px] tracking-[0.55em] text-white/25 uppercase">
            2018
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            style={{ originX: 0 }}
            className="w-10 h-px bg-[#D4AF37]/50"
          />
        </motion.div>

        {/* YOAV */}
        <div className="overflow-hidden leading-[0.88] mb-1 md:mb-2">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-bold text-white text-[3.2rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
            style={{ letterSpacing: '-0.025em' }}
          >
            YOAV
          </motion.h1>
        </div>

        {/* ZADIKOV */}
        <div className="overflow-hidden leading-[0.88] mb-[2vh] md:mb-12">
          <motion.h1
            initial={{ y: '108%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.3, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-bold text-white text-[3.2rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
            style={{ letterSpacing: '-0.025em' }}
          >
            ZADIKOV
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ originX: 0.5 }}
          className="w-full max-w-[180px] md:max-w-xs mx-auto h-px bg-white/10 mb-[2vh] md:mb-9"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-display italic text-white/35 text-sm md:text-xl tracking-wide mb-[3vh] md:mb-14"
        >
          Creating visual stories through music, culture and cinema.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => goto('work')}
            className="group relative px-8 py-3.5 md:px-10 md:py-4 bg-[#D4AF37] text-[#0B0B0B] text-[11px] tracking-[0.3em] uppercase font-semibold overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View Work
            </span>
            <div className="absolute inset-0 bg-[#0B0B0B] -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
          </button>
          <button
            onClick={() => goto('contact')}
            className="px-8 py-3.5 md:px-10 md:py-4 border border-white/12 text-white/50 text-[11px] tracking-[0.3em] uppercase hover:border-white/35 hover:text-white transition-all duration-400 w-full sm:w-auto"
          >
            Contact
          </button>
        </motion.div>
      </motion.div>

      {/* ── Ticker — always at bottom, part of flow ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="relative z-10 shrink-0 overflow-hidden border-t border-b border-white/[0.04] py-3 mb-2"
      >
        <div className="marquee-track text-[9px] tracking-[0.35em] uppercase text-white/18">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className={item === '·' ? 'text-[#D4AF37]/35' : ''}>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
