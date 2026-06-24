import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from './SectionTitle'

const skills = ['Music Videos', 'Commercials', 'Visual Storytelling', 'Post-Production']

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 md:py-36 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Portrait (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* Replace with: <img src="/images/portrait.jpg" ... className="w-full h-full object-cover" /> */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1006] via-[#0f0f0f] to-[#0B0B0B]
                              flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full border border-[#D4AF37]/15 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth={0.6} className="w-9 h-9 opacity-25">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="text-[8px] tracking-[0.4em] text-white/10 uppercase">Portrait Placeholder</p>
              </div>

              {/* Corner marks */}
              <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-[#D4AF37]/30 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-[#D4AF37]/30 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-5 -right-3 md:-right-6 bg-[#D4AF37] px-5 py-4"
            >
              <p className="text-[8px] tracking-[0.25em] uppercase font-semibold text-[#0B0B0B] leading-loose">
                Director<br />& Producer
              </p>
            </motion.div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-start justify-between lg:block">
              <div className="flex-1">
                <SectionTitle label="Biography" title="ABOUT" index="03" />
              </div>
              {/* Small portrait — mobile only */}
              <div className="block lg:hidden w-28 h-36 ml-4 shrink-0 overflow-hidden">
                <img src="/ABOUT.jpg" alt="Yoav Zadikov" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <p className="font-display italic text-white/45 text-lg md:text-xl leading-relaxed">
                Yoav Zadikov is a director, producer and editor specializing in music videos,
                commercial productions and visual storytelling.
              </p>
              <p className="text-sm text-white/35 leading-[1.9]">
                His work combines cinematic aesthetics, strong visual narratives and
                contemporary culture — crafting images that resonate long after the screen goes dark.
              </p>
            </div>

            {/* Skill list */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1 h-1 bg-[#D4AF37] rounded-full shrink-0" />
                  <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
