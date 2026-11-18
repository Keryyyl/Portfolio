import { useState } from 'react'
import { LangProvider, useLang, type Lang } from './i18n'
import { projects, type Project, type Tag } from './data/projects'
import './App.css'

const TAGS: Tag[] = ['AI', 'Backend', 'Frontend']

function LangSwitch() {
  const { lang, setLang } = useLang()
  const options: Lang[] = ['pl', 'en']
  return (
    <div className="lang" role="group" aria-label="Język / Language">
      {options.map((l) => (
        <button key={l} className={l === lang ? 'on' : ''} aria-pressed={l === lang} onClick={() => setLang(l)}>
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
        <a href="#doswiadczenie">{t.nav.experience}</a>
        <a href="#stack">{t.nav.stack}</a>
        <a href="#sposob">{t.nav.how}</a>
        <a href="#cv">{t.nav.cv}</a>
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
      <p className="hero-stack">{t.hero.stack}</p>
      <div className="actions">
        <a className="btn primary" href="#projekty">
          {t.projects.title}
        </a>
        <a className="btn" href="/cv/CV-Karol-Idzkowski-PL.pdf" download>
          {t.hero.cvPl}
        </a>
        <a className="btn" href="https://github.com/Keryyyl" target="_blank" rel="noreferrer">
          {t.hero.github}
        </a>
      </div>
    </section>
  )
}

/** Schemat ZINX: każda aplikacja ma własną bazę, dashboard i asystent czytają dane innych. */
function ZinxDiagram() {
  const { t } = useLang()
  const sources = ['ZIM', 'PFMX', 'CTHX']
  return (
    <figure className="diagram" aria-label={t.zinx.title}>
      <div className="node voice">
        <strong>Klaudiusz</strong>
        <span>{t.zinx.voice}</span>
      </div>
      <div className="arrows" aria-hidden>
        <span>{t.zinx.reads}</span>
        <span>{t.zinx.reads}</span>
        <span>{t.zinx.reads}</span>
      </div>
      <div className="row">
        {sources.map((s) => (
          <div className="node" key={s}>
            <strong>{s}</strong>
            <span>{t.zinx.db}</span>
          </div>
        ))}
      </div>
      <div className="arrows up" aria-hidden>
        <span>{t.zinx.reads}</span>
      </div>
      <div className="node dash">
        <strong>EINPX</strong>
        <span>{t.zinx.dash}</span>
      </div>
      <figcaption>{t.zinx.caption}</figcaption>
    </figure>
  )
}

function FeaturedCard({ p }: { p: Project }) {
  const { lang, t } = useLang()
  const text = p.text[lang]
  return (
    <article className="card featured">
      <div className="card-head">
        <div>
          <span className="eyebrow">{t.projects.featuredLabel}</span>
          <h3>{p.title}</h3>
        </div>
        <div className="tags">
          {p.tags.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
      <p>{text.summary}</p>
      <ul>
        {text.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <ZinxDiagram />
      <div className="stack-line">{p.stack.join(' · ')}</div>
      <a href={p.link} target="_blank" rel="noreferrer">
        {t.projects.open} →
      </a>
    </article>
  )
}

function Card({ p }: { p: Project }) {
  const { lang, t } = useLang()
  const text = p.text[lang]
  return (
    <article className="card">
      <div className="card-head">
        <h3>{p.title}</h3>
        <div className="tags">
          {p.tags.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
      <p>{text.summary}</p>
      {text.highlights.length > 0 && (
        <ul>
          {text.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className="stack-line">{p.stack.join(' · ')}</div>
      <a href={p.link} target="_blank" rel="noreferrer">
        {t.projects.open} →
      </a>
    </article>
  )
}

function Projects() {
  const { t } = useLang()
  const [tag, setTag] = useState<Tag | 'all'>('all')
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const shown = rest.filter((p) => tag === 'all' || p.tags.includes(tag))
  return (
    <section id="projekty" className="section">
      <h2>{t.projects.title}</h2>
      {featured.map((p) => (
        <FeaturedCard key={p.id} p={p} />
      ))}
      <div className="filters" role="group" aria-label="Filtr">
        {(['all', ...TAGS] as const).map((f) => (
          <button key={f} className={tag === f ? 'on' : ''} aria-pressed={tag === f} onClick={() => setTag(f)}>
            {f === 'all' ? t.projects.all : f}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <Card key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const { t } = useLang()
  return (
    <section id="doswiadczenie" className="section">
      <h2>{t.experience.title}</h2>
      <ol className="timeline">
        {t.experience.items.map((e) => (
          <li key={e.role}>
            <div className="tl-head">
              <strong>{e.role}</strong>
              <span className="period">{e.period}</span>
            </div>
            <div className="org">{e.org}</div>
            <p>{e.text}</p>
          </li>
        ))}
      </ol>
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
        <Experience />
        <Stack />
        <How />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
