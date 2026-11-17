import { useState } from 'react'
import { LangProvider, useLang, type Lang } from './i18n'
import { projects, type Tag } from './data/projects'
import './App.css'

const TAGS: Tag[] = ['AI', 'Backend', 'Frontend']

function LangSwitch() {
  const { lang, setLang } = useLang()
  const options: Lang[] = ['pl', 'en']
  return (
    <div className="lang" role="group" aria-label="Język / Language">
      {options.map((l) => (
        <button
          key={l}
          className={l === lang ? 'on' : ''}
          aria-pressed={l === lang}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function Header() {
  const { t } = useLang()
  return (
    <header className="top">
      <nav aria-label="Główna">
        <a href="#projekty">{t.nav.projects}</a>
        <a href="#stack">{t.nav.stack}</a>
        <a href="#sposob">{t.nav.how}</a>
        <a href="#cv">{t.nav.cv}</a>
        <a href="#kontakt">{t.nav.contact}</a>
      </nav>
      <LangSwitch />
    </header>
  )
}

function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <p className="status">
        <span className="dot" aria-hidden /> {t.hero.status}
      </p>
      <h1>{t.hero.name}</h1>
      <p className="role">{t.hero.role}</p>
      <div className="actions">
        <a className="btn primary" href="/cv/CV-Karol-Idzkowski-PL.pdf" download>
          {t.hero.cvPl}
        </a>
        <a className="btn" href="/cv/CV-Karol-Idzkowski-EN.pdf" download>
          {t.hero.cvEn}
        </a>
        <a className="btn" href="https://github.com/Keryyyl" target="_blank" rel="noreferrer">
          {t.hero.github}
        </a>
      </div>
    </section>
  )
}

function Projects() {
  const { t } = useLang()
  const [tag, setTag] = useState<Tag | 'all'>('all')
  const shown = projects.filter((p) => tag === 'all' || p.tags.includes(tag))
  return (
    <section id="projekty" className="section">
      <h2>{t.projects.title}</h2>
      <div className="filters" role="group" aria-label="Filtr">
        {(['all', ...TAGS] as const).map((f) => (
          <button key={f} className={tag === f ? 'on' : ''} aria-pressed={tag === f} onClick={() => setTag(f)}>
            {f === 'all' ? t.projects.all : f}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => {
          const copyP = t.projects.items[projects.indexOf(p)]
          return (
            <article className={`card ${p.featured ? 'featured' : ''}`} key={p.id}>
              <div className="card-head">
                <h3>{p.title}</h3>
                <div className="tags">
                  {p.tags.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
              <p>{copyP.summary}</p>
              <ul>
                {copyP.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="stack-line">{p.stack.join(' · ')}</div>
              <a href={p.link} target="_blank" rel="noreferrer">
                {t.projects.open} →
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Stack() {
  const { t } = useLang()
  return (
    <section id="stack" className="section">
      <h2>{t.stack.title}</h2>
      <dl className="stack">
        {t.stack.groups.map((g) => (
          <div key={g.name}>
            <dt>{g.name}</dt>
            <dd>{g.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function How() {
  const { t } = useLang()
  return (
    <section id="sposob" className="section">
      <h2>{t.how.title}</h2>
      <ol className="principles">
        {t.how.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ol>
    </section>
  )
}

function Cv() {
  const { t } = useLang()
  return (
    <section id="cv" className="section">
      <h2>{t.cv.title}</h2>
      <div className="actions">
        <a className="btn primary" href="/cv/CV-Karol-Idzkowski-PL.pdf" download>
          {t.cv.pl} · {t.cv.download}
        </a>
        <a className="btn" href="/cv/CV-Karol-Idzkowski-EN.pdf" download>
          {t.cv.en} · {t.cv.download}
        </a>
      </div>
    </section>
  )
}

function Contact() {
  const { t } = useLang()
  return (
    <section id="kontakt" className="section">
      <h2>{t.contact.title}</h2>
      <p>{t.contact.text}</p>
      <a className="btn" href="https://github.com/Keryyyl" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </section>
  )
}

function Footer() {
  const { t } = useLang()
  return <footer>{t.footer}</footer>
}

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <How />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
