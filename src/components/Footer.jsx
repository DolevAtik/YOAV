import { useLanguage } from '../i18n/LanguageContext'

const CREDIT_LINKS = {
  dolev: 'https://www.linkedin.com/in/dolev-atik/',
  tomer: 'https://www.linkedin.com/in/tomer-cohen-486457346',
  web4you: 'https://web4-you.vercel.app/',
}

const creditLink = 'text-white/85 hover:text-[#5B82D6] transition-colors duration-300'

export default function Footer() {
  const { t, dir } = useLanguage()

  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-5">

        <div className="text-center md:text-start">
          <p
            className="font-display font-semibold text-white/80 tracking-[0.15em]"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
          >
            YZ PRODUCTIONS
          </p>
          <p className="text-[8px] tracking-[0.4em] text-white/20 uppercase mt-1">
            {t.footer.roles}
          </p>
        </div>

        {/* Accent rule */}
        <div className="hidden md:block flex-1 max-w-[80px] h-px bg-[#5B82D6]/15" />

        <div className="text-center md:text-end">
          <p className="text-[8px] tracking-[0.25em] text-white/15 uppercase">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p dir={dir} className="text-[11px] tracking-[0.05em] text-white/50 mt-2">
            {t.footer.builtBy}{' '}
            <a href={CREDIT_LINKS.dolev} target="_blank" rel="noopener noreferrer" className={creditLink}>
              {t.footer.dolev}
            </a>
            {' '}&amp;{' '}
            <a href={CREDIT_LINKS.tomer} target="_blank" rel="noopener noreferrer" className={creditLink}>
              {t.footer.tomer}
            </a>
            {' '}·{' '}
            <a href={CREDIT_LINKS.web4you} target="_blank" rel="noopener noreferrer" className={creditLink}>
              {t.footer.web4you}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
