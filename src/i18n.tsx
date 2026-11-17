import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'pl' | 'en'

/** Wszystkie teksty strony. Dodanie języka = dopisanie kolumny tutaj. */
export const copy = {
  pl: {
    nav: { projects: 'Projekty', stack: 'Stack', how: 'Sposób pracy', cv: 'CV', contact: 'Kontakt' },
    hero: {
      name: 'Karol Idźkowski',
      role: 'Buduję narzędzia z AI, które działają lokalnie.',
      status: 'Otwarty na nowe projekty i współpracę.',
      cvPl: 'Pobierz CV (PL)',
      cvEn: 'Pobierz CV (EN)',
      github: 'GitHub',
    },
    projects: {
      title: 'Projekty',
      all: 'Wszystkie',
      open: 'Otwórz',
      readme: 'Opis w repozytorium',
      items: [
        {
          title: 'ZINX',
          tags: ['AI', 'Backend', 'Frontend'],
          summary:
            'Ekosystem pięciu osobistych aplikacji na macOS: poczta, planer, finanse, dashboard i asystent głosowy. Wszystko działa lokalnie, a dane zostają na komputerze.',
          highlights: ['Asystent głosowy z lokalnym LLM i rozpoznawaniem mowy', 'Zapisy wyłącznie po potwierdzeniu użytkownika', '68 testów w rdzeniu finansów, 28 w asystencie'],
          link: 'https://github.com/Keryyyl/ZINX',
        },
        {
          title: 'Infinity Wordle',
          tags: ['Frontend'],
          summary:
            'Wordle po polsku w czystym JavaScripcie, bez frameworków. Polskie litery, klawiatura na ekranie, tryb jasny i ciemny, kilka gier naraz.',
          highlights: ['Słownik ponad 50 000 polskich słów'],
          link: 'https://github.com/Keryyyl/Infinity_Wordle',
        },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { name: 'AI lokalne', items: 'Ollama, modele LLM, whisper.cpp, klasyfikacja tekstu' },
        { name: 'Frontend', items: 'React, TypeScript, Vite, CSS' },
        { name: 'Backend i desktop', items: 'Rust, Tauri 2, rusqlite, SQLite' },
        { name: 'Inne', items: 'JavaScript, Python, Git, GitHub' },
      ],
    },
    how: {
      title: 'Sposób pracy',
      points: [
        'Dane zostają na moim komputerze. Chmura tylko tam, gdzie jest konieczna.',
        'Zmiany, które mogą coś nadpisać, wymagają wyraźnego potwierdzenia.',
        'Każda część rdzenia ma testy, zanim trafi dalej.',
        'Dokumentuję decyzje w repozytorium, żeby wrócić do nich po czasie.',
      ],
    },
    cv: { title: 'CV', pl: 'Polska wersja', en: 'English version', download: 'Pobierz PDF' },
    contact: {
      title: 'Kontakt',
      text: 'Najszybciej napiszesz przez GitHub albo pobierz CV i odezwij się na adres podany w CV.',
    },
    footer: 'Karol Idźkowski',
  },
  en: {
    nav: { projects: 'Projects', stack: 'Stack', how: 'How I work', cv: 'CV', contact: 'Contact' },
    hero: {
      name: 'Karol Idźkowski',
      role: 'I build AI tools that run locally.',
      status: 'Open to new projects and collaboration.',
      cvPl: 'Download CV (PL)',
      cvEn: 'Download CV (EN)',
      github: 'GitHub',
    },
    projects: {
      title: 'Projects',
      all: 'All',
      open: 'Open',
      readme: 'Description in the repository',
      items: [
        {
          title: 'ZINX',
          tags: ['AI', 'Backend', 'Frontend'],
          summary:
            'An ecosystem of five personal macOS apps: mail, planner, finance, dashboard and a voice assistant. Everything runs locally and the data stays on the machine.',
          highlights: ['Voice assistant with a local LLM and speech recognition', 'Writes only after explicit user confirmation', '68 tests in the finance core, 28 in the assistant'],
          link: 'https://github.com/Keryyyl/ZINX',
        },
        {
          title: 'Infinity Wordle',
          tags: ['Frontend'],
          summary:
            'Polish Wordle in plain JavaScript, no frameworks. Polish letters, an on-screen keyboard, light and dark mode, several games at once.',
          highlights: ['Dictionary of over 50,000 Polish words'],
          link: 'https://github.com/Keryyyl/Infinity_Wordle',
        },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { name: 'Local AI', items: 'Ollama, LLM models, whisper.cpp, text classification' },
        { name: 'Frontend', items: 'React, TypeScript, Vite, CSS' },
        { name: 'Backend & desktop', items: 'Rust, Tauri 2, rusqlite, SQLite' },
        { name: 'Other', items: 'JavaScript, Python, Git, GitHub' },
      ],
    },
    how: {
      title: 'How I work',
      points: [
        'Data stays on my machine. The cloud only where it is needed.',
        'Changes that could overwrite something need explicit confirmation.',
        'Every part of the core has tests before it moves on.',
        'I document decisions in the repository so I can come back to them later.',
      ],
    },
    cv: { title: 'CV', pl: 'Polish version', en: 'English version', download: 'Download PDF' },
    contact: {
      title: 'Contact',
      text: 'The quickest way is GitHub, or download the CV and reach out at the address listed in it.',
    },
    footer: 'Karol Idźkowski',
  },
} as const

type Dict = (typeof copy)['pl'] | (typeof copy)['en']

const KEY = 'portfolio.lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'pl' || saved === 'en') return saved
  } catch {
    // brak dostępu do pamięci przeglądarki: zostaje domyślny język
  }
  return 'pl'
}

const LangContext = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({
  lang: 'pl',
  t: copy.pl,
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(KEY, l)
    } catch {
      // zapis to tylko wygoda: bez niego język wróci do polskiego po odświeżeniu
    }
  }

  return <LangContext.Provider value={{ lang, t: copy[lang], setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
