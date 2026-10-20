import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'es'

/** A piece of copy in both languages. */
export type Text = { en: string; es: string }

// eslint-disable-next-line react-refresh/only-export-components
export const tx =(en: string, es: string): Text => ({ en, es })

const STORAGE_KEY = 'lang'

// A manual choice wins; otherwise follow the browser.
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    // Storage can be blocked (private mode); fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

type LangState = { lang: Lang; setLang: (lang: Lang) => void }

const LangContext = createContext<LangState>({ lang: 'en', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function setLang(next: Lang) {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Not remembered across visits, but the switch still works.
    }
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  const t = (text: Text) => text[lang]
  return { lang, setLang, t }
}
