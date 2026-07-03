import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const THUMBS = [
  'JET VAZANA - JAR JAR.jpg', 'JET VAZANA – SEO ANTHEM.jpg', 'Ni_a.jpg',
  'annaZack.jpg', 'badbitch.jpg', 'bestiz.jpg', 'bloodEyes.jpg',
  'edenDarso.jpg', 'fit.jpg', 'hen.jpg', 'hila.png', 'liadclipimg.jpg',
  'liamGOlan.jpg', 'loAmin.jpg', 'mayTwtik.jpg', 'milion.jpg',
  'missOlam.jpg', 'nasrin1.jpg', 'nasrin2.jpg', 'notAlone.jpg',
  'oriSabanjpg.jpg', 'oy.jpg', 'parparim.jpg', 'shrek.jpg',
  'soldier.jpg', 'tilPatzmar.png', 'versim.jpg',
]

const rotate = (arr, n) => [...arr.slice(n % arr.length), ...arr.slice(0, n % arr.length)]

const POSTER_ROWS = [
  { items: rotate(THUMBS, 0).slice(0, 9),  reverse: false, duration: 90 },
  { items: rotate(THUMBS, 9).slice(0, 9),  reverse: true,  duration: 110 },
  { items: rotate(THUMBS, 18).slice(0, 9), reverse: false, duration: 100 },
  { items: rotate(THUMBS, 5).slice(0, 9),  reverse: true,  duration: 120 },
  { items: rotate(THUMBS, 14).slice(0, 9), reverse: false, duration: 105 },
  { items: rotate(THUMBS, 22).slice(0, 9), reverse: true,  duration: 95 },
]

function PosterRow({ items, reverse, duration }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`poster-track gap-2 md:gap-4 pr-2 md:pr-4 ${reverse ? 'reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((file, i) => (
          <div key={i} className="shrink-0 w-[52vw] md:w-[22vw] aspect-video">
            <img
              src={`/thumbnails/hero/${encodeURIComponent(file.replace(/\.[^.]+$/, '.jpg'))}`}
              alt=""
              loading="eager"
              decoding="async"
              draggable="false"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

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

        {/* Poster collage — Marvel-intro style drifting rows */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute left-1/2 top-1/2 w-[160vw] -translate-x-1/2 -translate-y-1/2 -rotate-6
                       flex flex-col gap-2 md:gap-4 opacity-[0.58]"
          >
            {POSTER_ROWS.map((row, i) => (
              <PosterRow key={i} {...row} />
            ))}
          </div>
        </div>

        {/* Dark scrim so the type stays readable */}
        <div className="absolute inset-0 bg-[#0B0B0B]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,#0B0B0B8C_0%,transparent_62%)]" />

        <div className="hero-glow absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-transparent to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/40 via-transparent to-[#0B0B0B]/40" />
      </div>

      {/* ── Main content — flex-1 centers within remaining space ── */}
      <motion.div
        style={{ y: titleY, opacity: contentOp }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full
                   pt-14 md:pt-0"
      >
        {/* YZ PRODUCTIONS — single H1 split across two lines for visual effect */}
        <h1 className="sr-only">YZ Productions — Music Video Director &amp; Producer</h1>
        <div className="overflow-hidden mb-2 md:mb-4" aria-hidden="true">
          <motion.img
            src="/yz-icon.png"
            alt=""
            draggable="false"
            initial={{ y: '108%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="block w-auto mx-auto h-16 md:h-28 lg:h-36 xl:h-44"
          />
        </div>

        <div className="overflow-hidden leading-[0.88] mb-[2vh] md:mb-12" aria-hidden="true">
          <motion.span
            initial={{ y: '108%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.3, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="block font-display font-bold text-white text-[2.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
            style={{ letterSpacing: '-0.025em' }}
          >
            PRODUCTIONS
          </motion.span>
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
          className="font-display italic text-white/75 text-sm md:text-xl tracking-wide mb-[3vh] md:mb-14 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]"
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
            className="group relative px-8 py-3.5 md:px-10 md:py-4 bg-[#1E3A8A]/70 backdrop-blur-sm text-white text-[11px] tracking-[0.3em] uppercase font-semibold overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 group-hover:text-[#1E3A8A] transition-colors duration-300">
              View Portfolio
            </span>
            <div className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
          </button>
          <button
            onClick={() => goto('contact')}
            className="px-8 py-3.5 md:px-10 md:py-4 border border-white/40 bg-[#0B0B0B]/40 backdrop-blur-sm text-white/90 text-[11px] tracking-[0.3em] uppercase hover:border-white hover:text-white transition-all duration-400 w-full sm:w-auto"
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
            <span key={i} className={item === '·' ? 'text-[#5B82D6]/35' : ''}>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
