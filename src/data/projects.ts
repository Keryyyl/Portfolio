/** Projekty na stronie. Każdy ma opis PL i EN w polu `text`. Nowy projekt = nowy wpis tutaj.
 *  Linki do aplikacji ZINX prowadzą do podfolderów repozytorium. */
import type { Lang } from '../i18n'

export type Tag = 'AI' | 'Backend' | 'Frontend'

export type Project = {
  id: string
  title: string
  tags: Tag[]
  stack: string[]
  link: string
  /** wyróżniony na pełną szerokość */
  featured?: boolean
  text: Record<Lang, { summary: string; highlights: string[] }>
}

const ZINX = 'https://github.com/Keryyyl/ZINX'

export const projects: Project[] = [
  {
    id: 'zinx',
    title: 'ZINX',
    tags: ['AI', 'Backend', 'Frontend'],
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'SQLite', 'Ollama', 'whisper.cpp'],
    link: ZINX,
    featured: true,
    text: {
      pl: {
        summary:
          'Ekosystem lokalnych aplikacji na macOS: poczta, planer, finanse, dashboard i asystent głosowy. Każda ma własną bazę SQLite. Dane nie opuszczają komputera.',
        highlights: [
          'Asystent głosowy: rozpoznawanie mowy (whisper.cpp) i lokalny model z wywoływaniem narzędzi (Ollama)',
          'Zapisy wyłącznie po wyraźnym potwierdzeniu użytkownika',
          'Testy rdzenia: 68 w finansach, 120 w poczcie, 28 w asystencie',
        ],
      },
      en: {
        summary:
          'An ecosystem of local macOS apps: mail, planner, finance, dashboard and a voice assistant. Each has its own SQLite database. The data never leaves the machine.',
        highlights: [
          'Voice assistant: speech recognition (whisper.cpp) and a local model that calls tools (Ollama)',
          'Writes only after explicit user confirmation',
          'Core tests: 68 in finance, 120 in mail, 28 in the assistant',
        ],
      },
    },
  },
  {
    id: 'klaudiusz',
    title: 'Klaudiusz',
    tags: ['AI', 'Backend'],
    stack: ['Tauri 2', 'Rust', 'Ollama', 'whisper.cpp'],
    link: `${ZINX}/tree/main/Klaudiusz`,
    text: {
      pl: {
        summary:
          'Asystent głosowy po polsku w pasku menu macOS. Odczytuje dane z pozostałych aplikacji, dodaje wpisy po potwierdzeniu głosem i przypomina.',
        highlights: ['Lokalny model i rozpoznawanie mowy, bez chmury', 'Cofanie ostatniej zmiany i dziennik operacji'],
      },
      en: {
        summary:
          'A Polish voice assistant in the macOS menu bar. Reads data from the other apps, adds entries after a spoken confirmation and sends reminders.',
        highlights: ['Local model and speech recognition, no cloud', 'Undo for the last change and an operations log'],
      },
    },
  },
  {
    id: 'pfmx',
    title: 'PFMX',
    tags: ['Backend', 'Frontend', 'AI'],
    stack: ['Tauri 2', 'Rust', 'React', 'SQLite'],
    link: `${ZINX}/tree/main/PFMX`,
    text: {
      pl: {
        summary:
          'Finanse osobiste: import historii z banku, budżet w kopertach, płatności cykliczne, kategorie wydatków z lokalnym modelem i paragony przy transakcjach.',
        highlights: ['Kwoty w groszach (i64), bez liczb zmiennoprzecinkowych', 'Deduplikacja importu i sprawdzanie salda krok po kroku'],
      },
      en: {
        summary:
          'Personal finance: bank history import, a budget in envelopes, recurring payments, expense categories from a local model and receipts attached to transactions.',
        highlights: ['Amounts in grosze (i64), never floats', 'Import deduplication and a balance check at every step'],
      },
    },
  },
  {
    id: 'zim',
    title: 'ZIM',
    tags: ['Backend', 'Frontend', 'AI'],
    stack: ['Tauri 2', 'Rust', 'React', 'SQLite'],
    link: `${ZINX}/tree/main/ZIM`,
    text: {
      pl: {
        summary:
          'Klient poczty: synchronizacja skrzynek, sortowanie wiadomości lokalnym modelem AI i kolejka wysyłki. Hasła w schowku systemowym.',
        highlights: ['Hasła przechowywane w Keychain, nie w plikach', '120 testów w rdzeniu Rust'],
      },
      en: {
        summary:
          'A mail client: inbox sync, message sorting with a local AI model and an outgoing queue. Passwords live in the system keychain.',
        highlights: ['Passwords kept in the Keychain, not in files', '120 tests in the Rust core'],
      },
    },
  },
  {
    id: 'cthx',
    title: 'CTHX',
    tags: ['Frontend', 'Backend'],
    stack: ['Tauri 2', 'Rust', 'React', 'SQLite'],
    link: `${ZINX}/tree/main/CTHX`,
    text: {
      pl: {
        summary: 'Planer: kalendarz miesiąca, zadania i wydarzenia, powtarzalne wpisy, habit tracker i tablica kanban.',
        highlights: ['Powtarzalne wpisy liczone z reguł, bez kopiowania danych', 'Urodziny z kontaktów w planie dnia'],
      },
      en: {
        summary: 'A planner: month calendar, tasks and events, repeating entries, a habit tracker and a kanban board.',
        highlights: ['Repeating entries computed from rules, not copied', 'Birthdays from contacts shown in the day plan'],
      },
    },
  },
  {
    id: 'einpx',
    title: 'EINPX',
    tags: ['Frontend', 'Backend'],
    stack: ['Tauri 2', 'Rust', 'React', 'SQLite'],
    link: `${ZINX}/tree/main/EINPX`,
    text: {
      pl: {
        summary:
          'Dashboard, który w jednym oknie pokazuje pocztę, saldo i wydatki oraz plan dnia z pozostałych aplikacji, z pogodą i szybkimi notatkami.',
        highlights: ['Odczyt baz pozostałych aplikacji tylko w trybie do odczytu'],
      },
      en: {
        summary:
          'A dashboard that shows mail, balances, spending and the day plan from the other apps in one window, with weather and quick notes.',
        highlights: ['Reads the other apps’ databases in read-only mode'],
      },
    },
  },
  {
    id: 'infinity-wordle',
    title: 'Infinity Wordle',
    tags: ['Frontend'],
    stack: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Keryyyl/Infinity_Wordle',
    text: {
      pl: {
        summary:
          'Wordle po polsku w czystym JavaScripcie, bez frameworków. Polskie litery, klawiatura na ekranie, tryb jasny i ciemny, kilka gier naraz.',
        highlights: ['Słownik ponad 50 000 polskich słów'],
      },
      en: {
        summary:
          'Polish Wordle in plain JavaScript, no frameworks. Polish letters, an on-screen keyboard, light and dark mode, several games at once.',
        highlights: ['Dictionary of over 50,000 Polish words'],
      },
    },
  },
]
