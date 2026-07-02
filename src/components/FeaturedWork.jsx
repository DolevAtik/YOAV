import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import projects from '../data/projects'
import VideoModal from './VideoModal'
import SectionTitle from './SectionTitle'

function PlayButton() {
  return (
    <div className="w-14 h-14 rounded-full border border-[#5B82D6] flex items-center justify-center text-[#5B82D6]
                    opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-500 ease-out">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  )
}

function ProjectCard({ project, onClick, index, hiddenOnMobile }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={() => onClick(project)}
      className={`group relative overflow-hidden cursor-pointer bg-[#0f0f0f] aspect-[3/4] md:aspect-video
                  ${hiddenOnMobile ? 'hidden md:block' : ''}`}
    >
      {/* ── Thumbnail ── */}
      <img
        src={project.thumbnail}
        alt={`${project.title} — ${project.artist}`}
        loading="lazy"
        style={project.thumbPosition ? { objectPosition: project.thumbPosition } : undefined}
        className="absolute inset-0 w-full h-full object-cover
                   transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />

      {/* ── Permanent bottom gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/85 via-[#0B0B0B]/10 to-transparent pointer-events-none" />

      {/* ── Hover darkening ── */}
      <div className="absolute inset-0 bg-[#0B0B0B]/0 group-hover:bg-[#0B0B0B]/35 transition-colors duration-500 pointer-events-none" />

      {/* ── Play button ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <PlayButton />
      </div>

      {/* ── Info bar — always visible, shifts up on hover ── */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6
                      group-hover:-translate-y-1 transition-transform duration-400 ease-out">
        <p className="font-display font-bold text-sm sm:text-base md:text-lg tracking-[0.15em] text-[#5B82D6] uppercase mb-1">
          {project.artist}
        </p>
        <h3 className="font-display font-semibold text-white text-lg sm:text-xl md:text-2xl leading-tight">
          {project.title}
        </h3>
      </div>

      {/* ── Gold border frame on hover ── */}
      <div className="absolute inset-0 border border-[#5B82D6]/0 group-hover:border-[#5B82D6]/25
                      transition-colors duration-500 pointer-events-none" />
    </motion.article>
  )
}

const MOBILE_VISIBLE_COUNT = 8

export default function FeaturedWork() {
  const [active, setActive] = useState(null)
  const [showAll, setShowAll] = useState(false)

  return (
    <>
      <section id="work" className="py-24 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 md:mb-16">
          <SectionTitle label="Portfolio" title="My new releases" />
        </div>

        {/* Uniform 3-col grid */}
        <div className="max-w-7xl mx-auto md:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-3 gap-[2px]">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              project={p}
              onClick={setActive}
              index={i}
              hiddenOnMobile={!showAll && i >= MOBILE_VISIBLE_COUNT}
            />
          ))}
        </div>

        {/* Show-more button — mobile only */}
        {!showAll && projects.length > MOBILE_VISIBLE_COUNT && (
          <div className="md:hidden flex justify-center mt-10 px-6">
            <button
              onClick={() => setShowAll(true)}
              className="font-display px-8 py-3 border border-[#5B82D6]/40 text-[#5B82D6] text-xs tracking-[0.25em] uppercase
                         hover:bg-[#5B82D6]/10 active:bg-[#5B82D6]/15 transition-colors duration-300"
            >
              Show More
            </button>
          </div>
        )}
      </section>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </>
  )
}
