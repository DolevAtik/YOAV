import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { artists } from '../data/content'
import SectionTitle from './SectionTitle'

function ArtistRow({ artist, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex items-center justify-between py-5 md:py-6 border-b border-white/[0.05]
                 hover:border-[#5B82D6]/20 transition-colors duration-400 cursor-default"
    >
      <div className="flex items-center gap-5 md:gap-8">
        {/* Index number */}
        <span className="font-display font-light text-white/15 text-sm tabular-nums w-5 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Name */}
        <h3
          className="font-display font-semibold text-white/70 group-hover:text-white transition-colors duration-300"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)', letterSpacing: '-0.01em' }}
        >
          {artist.name}
        </h3>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden sm:block text-[10px] tracking-[0.25em] text-white/25 uppercase group-hover:text-[#5B82D6]/60 transition-colors duration-300">
          {artist.genre}
        </span>
        {/* Arrow */}
        <span className="text-white/10 group-hover:text-[#5B82D6]/60 group-hover:translate-x-1 transition-all duration-300">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </span>
      </div>
    </motion.div>
  )
}

export default function Artists() {
  return (
    <section id="artists" className="py-24 md:py-36 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 md:mb-16">
          <SectionTitle label="Collaborations" title="ARTISTS & COLLABORATIONS" index="02" />
        </div>

        {/* List layout — more editorial than cards */}
        <div className="border-t border-white/[0.05]">
          {artists.map((artist, i) => (
            <ArtistRow key={artist.id} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
