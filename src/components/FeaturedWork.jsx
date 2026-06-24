import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import projects from '../data/projects'
import VideoModal from './VideoModal'
import SectionTitle from './SectionTitle'

// Asymmetric col-spans for a 3-column grid:
// Row 1: [2] [1]   Row 2: [1] [2]   Row 3: [2] [1]
const COL_SPANS = [2, 1, 1, 2, 2, 1]

function PlayButton() {
  return (
    <div className="w-14 h-14 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]
                    opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-500 ease-out">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  )
}

function ProjectCard({ project, onClick, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const span = COL_SPANS[index] ?? 1

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.1,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={() => onClick(project)}
      className={`group relative overflow-hidden cursor-pointer bg-[#0f0f0f]
        h-[200px] sm:h-[260px] lg:h-[340px]
        ${span === 2 ? 'sm:col-span-2' : 'sm:col-span-1'}`}
    >
      {/* ── Thumbnail ── */}
      <img
        src={project.thumbnail}
        alt={`${project.title} — ${project.artist}`}
        loading="lazy"
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
        <p className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase mb-1.5">
          {project.artist}
        </p>
        <h3 className="font-display font-semibold text-white text-lg sm:text-xl md:text-2xl leading-tight">
          {project.title}
        </h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[9px] tracking-[0.2em] text-white/25 uppercase">{project.year}</span>
          <span className="w-px h-2.5 bg-white/15" />
          <span className="text-[9px] tracking-[0.2em] text-white/25 uppercase">{project.category}</span>
        </div>
      </div>

      {/* ── Gold border frame on hover ── */}
      <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/25
                      transition-colors duration-500 pointer-events-none" />
    </motion.article>
  )
}

export default function FeaturedWork() {
  const [active, setActive] = useState(null)

  return (
    <>
      <section id="work" className="py-24 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 md:mb-16">
          <SectionTitle label="Portfolio" title="FEATURED WORK" index="01" />
        </div>

        {/* Asymmetric 3-col grid, hairline gap */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-3 gap-1">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} onClick={setActive} index={i} />
          ))}
        </div>
      </section>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </>
  )
}
