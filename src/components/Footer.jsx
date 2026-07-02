import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-5">

        <div className="text-center md:text-left">
          <p
            className="font-display font-semibold text-white/80 tracking-[0.15em]"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
          >
            YZ PRODUCTIONS
          </p>
          <p className="text-[8px] tracking-[0.4em] text-white/20 uppercase mt-1">
            Director&nbsp;·&nbsp;Producer&nbsp;·&nbsp;Editor
          </p>
        </div>

        {/* Gold rule */}
        <div className="hidden md:block flex-1 max-w-[80px] h-px bg-[#5B82D6]/15" />

        <p className="text-[8px] tracking-[0.25em] text-white/15 uppercase">
          © {new Date().getFullYear()} Yoav Zadikov. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
