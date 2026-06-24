import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Work',    href: '#work'    },
  { label: 'About',   href: '#about'   },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goto = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center shrink-0"
            aria-label="Yoav Zadikov — Home"
          >
            <img
              src="/yz-logo.png"
              alt="YZ"
              className="h-7 sm:h-8 md:h-10 w-auto select-none hover:opacity-70 transition-opacity duration-300"
              draggable={false}
            />
          </button>

          {/* Nav links — always visible */}
          <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goto(link.href)}
                className="relative text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300 uppercase group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

        </div>
      </div>
    </motion.nav>
  )
}
