import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'pl' | 'en'

/** Wszystkie teksty interfejsu. Opisy projektów są w src/data/projects.ts. */
export const copy = {
  pl: {
    nav: { projects: 'Projekty', experience: 'Doświadczenie', stack: 'Stack', how: 'Sposób pracy', cv: 'CV', contact: 'Kontakt' },
    hero: {
      name: 'Karol Idźkowski',
      role: 'Młodszy programista. Buduję narzędzia AI, które działają lokalnie.',
      status: 'Otwarty na nowe projekty i współpracę.',
      stack: 'Python · TypeScript · React · Rust',
      cvPl: 'Pobierz CV (PL)',
      cvEn: 'Pobierz CV (EN)',
      github: 'GitHub',
    },
    projects: {
      title: 'Projekty',
      all: 'Wszystkie',
      open: 'Zobacz kod',
      featuredLabel: 'Projekt główny',
      badge: 'AI lokalnie • Dane na komputerze • Local-first',
      coreTitle: 'Moduły ekosystemu ZINX',
      labTitle: 'Inne projekty i eksperymenty',
    },
    demo: {
      label: 'Demo: Klaudiusz steruje EINPX na żywo',
      placeholder: '[Demo Video: Klaudiusz Voice Orchestration & EINPX Live Dashboard]',
      hint: 'Nagranie: zapis ekranu w pętli, plik demo.webm lub demo.gif',
    },
    zinx: {
      title: 'Jak to się łączy',
      caption: 'Każda aplikacja ma własną bazę SQLite. Dashboard i asystent czytają dane innych, ale nie zapisują w nich bez potwierdzenia.',
      db: 'baza SQLite',
      reads: 'czyta (tylko odczyt)',
      confirm: 'zapisuje po potwierdzeniu',
      voice: 'asystent głosowy',
      dash: 'dashboard',
    },
    experience: {
      title: 'Doświadczenie i edukacja',
      items: [
        { role: 'Informatyka (Sztuczna Inteligencja)', org: 'Uniwersytet Vizja', period: '10.2026 – obecnie', text: 'Studia inżynierskie ze specjalizacją w AI.' },
        { role: 'Tester oprogramowania (staż)', org: 'Concept Lab', period: '11.2024 – 12.2024', text: 'Identyfikacja i raportowanie błędów, dokumentacja techniczna, nagrania prezentujące usterki.' },
        { role: 'Technik programista', org: 'Technikum Kinematograficzno-Komputerowe im. K. Kieślowskiego', period: '09.2021 – 05.2026', text: 'Podstawy programowania, baz danych i tworzenia aplikacji webowych.' },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { name: 'AI lokalne', items: 'Ollama, modele LLM, Function Calling, whisper.cpp, klasyfikacja tekstu' },
        { name: 'Frontend', items: 'React, TypeScript, Vite, CSS' },
        { name: 'Backend i desktop', items: 'Rust, Tauri 2, rusqlite, SQLite' },
        { name: 'Inne', items: 'JavaScript, Python, Git, GitHub' },
      ],
    },
    how: {
      title: 'Sposób pracy',
      points: [
        { title: 'Prywatność lokalnie', text: 'Dane zostają na moim komputerze. Chmura tylko tam, gdzie jest konieczna.' },
        { title: 'Zapisy po potwierdzeniu', text: 'Zmiany, które mogą coś nadpisać, wymagają wyraźnego potwierdzenia.' },
        { title: 'Testy w rdzeniu', text: 'Każda część rdzenia ma testy, zanim trafi dalej.' },
        { title: 'Dziennik decyzji', text: 'Decyzje architektoniczne zapisuję w repozytorium, żeby wrócić do nich po czasie.' },
      ],
    },
    cv: { title: 'CV', pl: 'Wersja polska', en: 'Wersja angielska', download: 'Pobierz PDF' },
    contact: {
      title: 'Kontakt',
      text: 'Najłatwiej przez GitHub. Dane kontaktowe są w CV.',
    },
    footer: 'Karol Idźkowski',
  },
  en: {
    nav: { projects: 'Projects', experience: 'Experience', stack: 'Stack', how: 'How I work', cv: 'CV', contact: 'Contact' },
    hero: {
      name: 'Karol Idźkowski',
      role: 'Junior developer building AI tools that run locally.',
      status: 'Open to new projects and collaboration.',
      stack: 'Python · TypeScript · React · Rust',
      cvPl: 'Download CV (PL)',
      cvEn: 'Download CV (EN)',
      github: 'GitHub',
    },
    projects: {
      title: 'Projects',
      all: 'All',
      open: 'View code',
      featuredLabel: 'Flagship project',
      badge: 'Local AI • Data on your machine • Local-first',
      coreTitle: 'ZINX Ecosystem Modules',
      labTitle: 'Other Experiments & Labs',
    },
    demo: {
      label: 'Demo: Klaudiusz controls EINPX live',
      placeholder: '[Demo Video: Klaudiusz Voice Orchestration & EINPX Live Dashboard]',
      hint: 'Recording: looped screen capture, demo.webm or demo.gif',
    },
    zinx: {
      title: 'How it fits together',
      caption: 'Every app has its own SQLite database. The dashboard and the assistant read the others’ data, but never write to it without confirmation.',
      db: 'SQLite database',
      reads: 'reads (read-only)',
      confirm: 'writes after confirmation',
      voice: 'voice assistant',
      dash: 'dashboard',
    },
    experience: {
      title: 'Experience and education',
      items: [
        { role: 'Computer Science (Artificial Intelligence)', org: 'Vizja University', period: '10.2026 – present', text: 'Engineering studies with a specialisation in AI.' },
        { role: 'Software tester (internship)', org: 'Concept Lab', period: '11.2024 – 12.2024', text: 'Bug identification and reporting, technical documentation, video recordings showing defects.' },
        { role: 'Software developer technician', org: 'Kieślowski Technical School of Film and Computing', period: '09.2021 – 05.2026', text: 'Programming, databases and web application basics.' },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { name: 'Local AI', items: 'Ollama, LLM models, Function Calling, whisper.cpp, text classification' },
        { name: 'Frontend', items: 'React, TypeScript, Vite, CSS' },
        { name: 'Backend & desktop', items: 'Rust, Tauri 2, rusqlite, SQLite' },
        { name: 'Other', items: 'JavaScript, Python, Git, GitHub' },
      ],
    },
    how: {
      title: 'How I work',
      points: [
        { title: 'Local-first privacy', text: 'Data stays on my machine. The cloud only where it is needed.' },
        { title: 'Explicit write confirmations', text: 'Changes that could overwrite something need explicit confirmation.' },
        { title: 'Core test coverage', text: 'Every part of the core has tests before it moves on.' },
        { title: 'Decision log', text: 'Architecture decisions are written in the repository so I can come back to them later.' },
      ],
    },
    cv: { title: 'CV', pl: 'Polish version', en: 'English version', download: 'Download PDF' },
    contact: {
      title: 'Contact',
      text: 'GitHub is the quickest way. Contact details are in the CV.',
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
