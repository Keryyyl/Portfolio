import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'pl' | 'en'

/** Wszystkie teksty interfejsu. Opisy projektów są w src/data/projects.ts. */
export const copy = {
  pl: {
    nav: { projects: 'Projekty', experience: 'Doświadczenie', stack: 'Stack', contact: 'Skontaktuj się' },
    runtime: {
      title: 'local-runtime.status',
      rows: [
        { key: 'architecture', value: 'local-first', accent: false },
        { key: 'ai_inference', value: 'Ollama + whisper.cpp', accent: false },
        { key: 'core_tests', value: '216 passing', accent: true },
        { key: 'external_calls', value: 'poczta, pogoda', accent: false },
      ],
    },
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
    preview: {
      button: 'Podgląd',
      close: 'Zamknij',
      drop: (id: string) => `Dodaj zrzut ekranu: public/previews/${id}.png`,
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
        { role: 'Informatyka (Sztuczna Inteligencja)', org: 'Uniwersytet Vizja', period: '10.2026 – obecnie', kind: 'Edukacja', current: true, text: 'Studia inżynierskie ze specjalizacją w AI.' },
        { role: 'Tester oprogramowania (staż)', org: 'Concept Lab', period: '11.2024 – 12.2024', kind: 'Staż', current: false, text: 'Identyfikacja i raportowanie błędów, dokumentacja techniczna, nagrania prezentujące usterki.' },
        { role: 'Technik programista', org: 'Technikum Kinematograficzno-Komputerowe im. K. Kieślowskiego', period: '09.2021 – 05.2026', kind: 'Edukacja', current: false, text: 'Programowanie w Pythonie i JavaScript, bazy danych SQL oraz tworzenie aplikacji webowych w React.' },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { name: 'AI lokalne', items: ['Python', 'Ollama', 'LLM', 'Function Calling', 'whisper.cpp', 'Klasyfikacja tekstu'] },
        { name: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'HTML / CSS'] },
        { name: 'Backend i desktop', items: ['Rust', 'Tauri 2', 'rusqlite', 'SQLite'] },
        { name: 'Narzędzia i workflow', items: ['Git', 'GitHub', 'SQL', 'macOS'] },
      ],
    },
    cv: { title: 'CV', pl: 'Wersja polska', en: 'Wersja angielska', download: 'Pobierz PDF' },
    form: {
      title: 'Skontaktuj się',
      lead: 'Napisz, czego szukasz. Odpowiem na podany adres e-mail.',
      name: 'Imię',
      email: 'E-mail',
      message: 'Wiadomość',
      consent: 'Zgadzam się na kontakt w sprawie tej wiadomości.',
      send: 'Wyślij',
      sending: 'Wysyłanie…',
      sent: 'Dziękuję, wiadomość wysłana.',
      error: 'Nie udało się wysłać. Spróbuj ponownie albo napisz przez GitHub.',
      notConfigured: 'Formularz nie jest jeszcze podłączony. Ustaw VITE_CONTACT_ENDPOINT.',
      errors: {
        name: 'Podaj imię.',
        email: 'Podaj poprawny adres e-mail.',
        message: 'Wiadomość powinna mieć co najmniej 10 znaków.',
        consent: 'Zaznacz zgodę, żebym mógł odpowiedzieć.',
      },
    },
    contact: {
      title: 'Kontakt i CV',
      heading: 'Szukasz kogoś do narzędzi AI działających lokalnie?',
      text: 'Jestem otwarty na nowe projekty i współpracę. Najszybciej napiszesz przez GitHub.',
      back: 'Wróć na górę ↑',
      copyright: '© 2026 Karol Idźkowski · React & TypeScript',
    },
    footer: 'Karol Idźkowski',
  },
  en: {
    nav: { projects: 'Projects', experience: 'Experience', stack: 'Stack', contact: 'Get in touch' },
    runtime: {
      title: 'local-runtime.status',
      rows: [
        { key: 'architecture', value: 'local-first', accent: false },
        { key: 'ai_inference', value: 'Ollama + whisper.cpp', accent: false },
        { key: 'core_tests', value: '216 passing', accent: true },
        { key: 'external_calls', value: 'mail, weather', accent: false },
      ],
    },
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
    preview: {
      button: 'Preview',
      close: 'Close',
      drop: (id: string) => `Drop screenshot into public/previews/${id}.png`,
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
        { role: 'Computer Science (Artificial Intelligence)', org: 'Vizja University', period: '10.2026 – present', kind: 'Education', current: true, text: 'Engineering studies with a specialisation in AI.' },
        { role: 'Software Tester (Internship)', org: 'Concept Lab', period: '11.2024 – 12.2024', kind: 'Internship', current: false, text: 'Bug identification and reporting, technical documentation, video recordings showing defects.' },
        { role: 'IT Technician (Programming)', org: 'Kieślowski Technical School of Film and Computing', period: '09.2021 – 05.2026', kind: 'Education', current: false, text: 'Programming in Python and JavaScript, SQL databases and building web applications in React.' },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { name: 'Local AI', items: ['Python', 'Ollama', 'LLM', 'Function Calling', 'whisper.cpp', 'Text Classification'] },
        { name: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'HTML / CSS'] },
        { name: 'Backend & Desktop', items: ['Rust', 'Tauri 2', 'rusqlite', 'SQLite'] },
        { name: 'Tools & Workflow', items: ['Git', 'GitHub', 'SQL', 'macOS'] },
      ],
    },
    cv: { title: 'CV', pl: 'Polish version', en: 'English version', download: 'Download PDF' },
    form: {
      title: 'Get in touch',
      lead: 'Tell me what you are looking for. I will reply to the email address you give.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      consent: 'I agree to be contacted about this message.',
      send: 'Send',
      sending: 'Sending…',
      sent: 'Thanks, your message was sent.',
      error: 'Sending failed. Try again or write to me on GitHub.',
      notConfigured: 'The form is not connected yet. Set VITE_CONTACT_ENDPOINT.',
      errors: {
        name: 'Enter your name.',
        email: 'Enter a valid email address.',
        message: 'The message should be at least 10 characters.',
        consent: 'Tick the box so I can reply.',
      },
    },
    contact: {
      title: 'Contact & CV',
      heading: 'Looking for someone to build local-first AI tools?',
      text: 'I am open to new projects and collaboration. GitHub is the quickest way to reach me.',
      back: 'Back to top ↑',
      copyright: '© 2026 Karol Idźkowski · React & TypeScript',
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
