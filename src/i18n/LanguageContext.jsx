import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { translations, DEFAULT_LANG } from './translations'

const STORAGE_KEY = 'yz-lang'

const LanguageContext = createContext(null)

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'he' || stored === 'en' ? stored : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

export function LanguageProvider({ children }) {
  // English is the default — Hebrew only when the visitor picked it before.
  const [lang, setLang] = useState(readStoredLang)

  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.documentElement.dir = t.dir
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage blocked — language still applies for this session */
    }
  }, [lang, t])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'he' : 'en'))
  }, [])

  const value = useMemo(
    () => ({ lang, t, dir: t.dir, isRTL: t.dir === 'rtl', toggleLang }),
    [lang, t, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside a LanguageProvider')
  return ctx
}
