/** Dane projektów bez tekstów. Opisy PL/EN są w src/i18n.tsx (projects.items w tej samej kolejności).
 *  Nowy projekt = nowy wpis tutaj + nowy wpis w i18n. */
export type Tag = 'AI' | 'Backend' | 'Frontend'

export type Project = {
  id: string
  title: string
  tags: Tag[]
  stack: string[]
  link: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'zinx',
    title: 'ZINX',
    tags: ['AI', 'Backend', 'Frontend'],
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'SQLite', 'Ollama', 'whisper.cpp'],
    link: 'https://github.com/Keryyyl/ZINX',
    featured: true,
  },
  {
    id: 'infinity-wordle',
    title: 'Infinity Wordle',
    tags: ['Frontend'],
    stack: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Keryyyl/Infinity_Wordle',
  },
]
