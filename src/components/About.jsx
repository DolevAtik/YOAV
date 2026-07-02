import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTitle from './SectionTitle'

const skills = ['Music Videos', 'TV & Micro-Drama', 'Commercials', 'Post-Production']

const ARTICLE_URL = 'https://13tv.co.il/item/entertainment/television/ve22s-905247653/'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 transition-transform duration-400 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PressFeature() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="mt-24 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

      {/* ── Premiere photo ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative lg:col-span-5 max-w-sm mx-auto lg:max-w-none w-full"
      >
        <div className="group relative aspect-[3/4] overflow-hidden bg-[#0f0f0f]">
          <img
            src="/premiere.jpg"
            alt='Yoav Zadikov holding the "Double Lives" poster at the Reshet 13 premiere'
            width="1200"
            height="1600"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 via-transparent to-transparent pointer-events-none" />

          {/* Corner marks */}
          <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-[#5B82D6]/30 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-[#5B82D6]/30 pointer-events-none" />

          {/* Caption inside frame */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-[9px] tracking-[0.35em] text-[#5B82D6] uppercase mb-1">Premiere Night</p>
            <p className="font-display font-semibold text-white text-sm">"Double Lives" — Reshet 13</p>
          </div>
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute -top-4 -right-3 md:-right-5 bg-[#1E3A8A] px-4 py-3"
        >
          <p className="text-[8px] tracking-[0.25em] uppercase font-semibold text-white leading-loose">
            Director<br />חיים כפולים
          </p>
        </motion.div>
      </motion.div>

      {/* ── Article content ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="lg:col-span-7"
      >
        {/* Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-5 h-px bg-[#5B82D6]/50" />
          <p className="text-[9px] tracking-[0.5em] text-[#5B82D6] uppercase font-medium">In the Press — Reshet 13</p>
        </div>

        {/* Hebrew pull-quote */}
        <blockquote dir="rtl" lang="he" className="relative">
          <span aria-hidden="true" className="absolute -top-6 right-0 font-display text-7xl leading-none text-[#5B82D6]/15 select-none">"</span>
          <p
            className="font-display font-bold text-white leading-snug"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)', letterSpacing: '-0.01em' }}
          >
            לא למדתי בבית ספר לקולנוע — לימדתי את עצמי הכול
          </p>
          <footer className="mt-4 text-[10px] tracking-[0.3em] text-white/30 uppercase" dir="ltr">
            Yoav Zadikov — 13tv Special Interview
          </footer>
        </blockquote>

        <p className="mt-7 text-sm text-white/35 leading-[1.9] max-w-xl">
          In a special interview with Reshet 13, Yoav opens up about directing
          "Double Lives" (חיים כפולים) — the most successful micro-drama in Israel —
          becoming the youngest director in the country to helm a series for a major
          broadcaster, the fearless leap into deep water, and what's next.
        </p>

        {/* Stage photo strip */}
        <div className="group relative mt-9 overflow-hidden bg-[#0f0f0f]">
          <img
            src="/press-stage.jpg"
            alt="Yoav Zadikov speaking on stage at the Double Lives premiere event"
            width="1080"
            height="604"
            loading="lazy"
            className="w-full aspect-[16/7] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 border border-[#5B82D6]/0 group-hover:border-[#5B82D6]/25 transition-colors duration-500 pointer-events-none" />
          <p className="absolute bottom-3 left-4 text-[9px] tracking-[0.35em] text-white/50 uppercase">
            Tel Aviv — Premiere Event
          </p>
        </div>

        {/* CTA */}
        <a
          href={ARTICLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 mt-9 text-[#5B82D6] hover:text-white transition-colors duration-400"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase font-medium border-b border-[#5B82D6]/30 group-hover:border-white/40 pb-1 transition-colors duration-400">
            Read the Full Article
          </span>
          <ArrowIcon />
        </a>
      </motion.div>
    </div>
  )
}

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
            <div className="relative aspect-[3/4] overflow-hidden max-w-xs mx-auto">
              <img src="/ABOUT.jpg" alt="Yoav Zadikov" className="w-full h-full object-cover" />

              {/* Corner marks */}
              <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-[#5B82D6]/30 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-[#5B82D6]/30 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-5 -right-3 md:-right-6 bg-[#1E3A8A] px-5 py-4"
            >
              <p className="text-[8px] tracking-[0.25em] uppercase font-semibold text-white leading-loose">
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
                <SectionTitle label="Biography" title="ABOUT" />
              </div>
              {/* Small portrait — mobile only */}
              <div className="block lg:hidden w-28 h-36 ml-4 shrink-0 overflow-hidden">
                <img src="/ABOUT.jpg" alt="Yoav Zadikov" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <p className="font-display italic text-white/45 text-lg md:text-xl leading-relaxed">
                Yoav Zadikov is a director, producer and editor specializing in music videos,
                television and visual storytelling.
              </p>
              <p className="text-sm text-white/35 leading-[1.9]">
                After directing music videos for Nasrin Kadri, Raviv Kaner and more of Israel's
                biggest artists, Yoav stepped into television — directing "Double Lives"
                (חיים כפולים), Reshet 13's hit micro-drama, and becoming the youngest director
                in Israel to helm a series for a major broadcaster.
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
                  <div className="w-1 h-1 bg-[#5B82D6] rounded-full shrink-0" />
                  <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Press feature — 13tv article ── */}
        <PressFeature />
      </div>
    </section>
  )
}
