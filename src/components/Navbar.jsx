import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3 shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { t, toggleLang } = useLanguage()

  const navLinks = [
    { label: t.nav.work,    href: '#work'    },
    { label: t.nav.about,   href: '#about'   },
    { label: t.nav.contact, href: '#contact' },
  ]

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
            aria-label={t.nav.home}
          >
            <img
              src="/yz-logo.png"
              alt="YZ"
              className="h-11 sm:h-14 md:h-[4.5rem] w-auto select-none hover:opacity-70 transition-opacity duration-300"
              draggable={false}
            />
          </button>

          {/* Nav links — always visible */}
          <div className="flex items-center gap-3.5 sm:gap-7 md:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goto(link.href)}
                className="relative text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-300 uppercase group [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5B82D6] group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              aria-label={t.langToggleAria}
              className="flex items-center gap-1.5 shrink-0 px-2 py-1 sm:px-2.5 sm:py-1.5 border border-white/15
                         text-[10px] sm:text-[11px] tracking-[0.1em] text-white/70
                         hover:text-[#5B82D6] hover:border-[#5B82D6]/50 transition-colors duration-300
                         [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
            >
              <GlobeIcon />
              <span className="leading-none">{t.langToggle}</span>
            </button>
          </div>

        </div>
      </div>
    </motion.nav>
  )
}
