import { useEffect, useRef, useState, type FormEvent, type MouseEvent as ReactMouseEvent } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="top">
        <nav aria-label="Główna">
          <a href="#projekty">{t.nav.projects}</a>
          <a href="#doswiadczenie">{t.nav.experience}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#kontakt">{t.nav.contact}</a>
        </nav>
        <LangSwitch />
      </div>
    </header>
  )
}

function RuntimeCard() {
  const { t } = useLang()
  return (
    <aside className="runtime" aria-label={t.runtime.title}>
      <div className="runtime-head">
        <span className="runtime-dot" aria-hidden />
        <span>{t.runtime.title}</span>
      </div>
      <dl>
        {t.runtime.rows.map((r) => (
          <div key={r.key}>
            <dt>{r.key}</dt>
            <dd className={r.accent ? 'accent' : ''}>{r.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}

function Hero() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  // reflektor: pozycja kursora zapisywana w zmiennych CSS sekcji
  const onMove = (e: ReactMouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
  }
  return (
    <section className="hero" ref={ref} onMouseMove={onMove}>
      <div className="hero-grid">
        <div className="hero-main">
          <p className="status">
            <span className="dot" aria-hidden /> {t.hero.status}
          </p>
          <h1>{t.hero.name}</h1>
          <p className="role">{t.hero.role}</p>
          <p className="hero-stack">
            {t.hero.stack.split(' · ').map((x, i) => (
              <span key={x}>
                {i > 0 && <span className="sep"> · </span>}
                {x}
              </span>
            ))}
          </p>
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
        </div>
        <RuntimeCard />
      </div>
    </section>
  )
}

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

/** Miejsce na nagranie: podmień plik public/media/demo.webm (lub demo.mp4), a placeholder zniknie sam. */
function DemoSlot() {
  const { t } = useLang()
  const [missing, setMissing] = useState(false)
  return (
    <figure className="demo" aria-label={t.demo.label}>
      {!missing ? (
        <video
          src="/media/demo.webm"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setMissing(true)}
        />
      ) : (
        <div className="demo-placeholder">
          <span className="play" aria-hidden>▶</span>
          <span className="demo-text">{t.demo.placeholder}</span>
          <span className="demo-hint">{t.demo.hint}</span>
        </div>
      )}
      <figcaption>{t.demo.label}</figcaption>
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
          <span className="badge">{t.projects.badge}</span>
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
      <DemoSlot />
      <ZinxDiagram />
      <div className="stack-line">{p.stack.join(' · ')}</div>
      <a href={p.link} target="_blank" rel="noreferrer">
        {t.projects.open} →
      </a>
    </article>
  )
}

/** Ikona modułu: public/icons/<id>.png, a bez pliku prosty znak SVG. */
function ModuleIcon({ id, title }: { id: string; title: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className="mod-icon" aria-hidden>
      {!failed ? (
        <img src={`/icons/${id}.png`} alt="" width={32} height={32} onError={() => setFailed(true)} />
      ) : (
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect x="1" y="1" width="30" height="30" rx="8" fill="#111114" stroke="rgba(255,255,255,0.08)" />
          <circle cx="16" cy="16" r="4" fill="#2dd4bf" />
          <title>{title}</title>
        </svg>
      )}
    </span>
  )
}

function TagPills({ tags }: { tags: Tag[] }) {
  return (
    <div className="tags">
      {tags.map((x) => (
        <span key={x} className={x === 'AI' ? 'tag-ai' : ''}>
          {x}
        </span>
      ))}
    </div>
  )
}

/** Modal z podglądem: Escape i kliknięcie w tło zamykają. */
function PreviewModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const { lang, t } = useLang()
  const text = p.text[lang]
  const [missing, setMissing] = useState(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div className="modal" role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <ModuleIcon id={p.id} title={p.title} />
          <div className="modal-title">
            <strong>{p.title}</strong>
            <div className="stack-line">{p.stack.join(' · ')}</div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label={t.preview.close}>
            ×
          </button>
        </div>
        <div className="shot">
          {!missing ? (
            <img src={`/previews/${p.id}.png`} alt={`${p.title}`} onError={() => setMissing(true)} />
          ) : (
            <div className="shot-placeholder">
              <strong>{p.title}</strong>
              <span>{t.preview.drop(p.id)}</span>
            </div>
          )}
        </div>
        <ul>
          {text.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Card({ p }: { p: Project }) {
  const { lang, t } = useLang()
  const [preview, setPreview] = useState(false)
  const text = p.text[lang]
  return (
    <article className="card">
      <div className="card-title">
        <ModuleIcon id={p.id} title={p.title} />
        <h3>{p.title}</h3>
      </div>
      <TagPills tags={p.tags} />
      <p>{text.summary}</p>
      <ul>
        {text.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="stack-line">{p.stack.join(' · ')}</div>
      <div className="card-foot">
        <a href={p.link} target="_blank" rel="noreferrer">
          {t.projects.open} →
        </a>
        <button className="ghost" onClick={() => setPreview(true)}>
          <span aria-hidden>◫</span> {t.preview.button}
        </button>
      </div>
      {preview && <PreviewModal p={p} onClose={() => setPreview(false)} />}
    </article>
  )
}

/** Infinity Wordle: pełna szerokość, w jednym wierszu. */
function LabRow({ p }: { p: Project }) {
  const { lang, t } = useLang()
  const text = p.text[lang]
  return (
    <article className="lab-row">
      <div className="lab-main">
        <div className="card-title">
          <h3>{p.title}</h3>
          <TagPills tags={p.tags} />
        </div>
        <p>{text.summary}</p>
      </div>
      <div className="lab-side">
        <div className="stack-line">{p.stack.join(' · ')}</div>
        <a href={p.link} target="_blank" rel="noreferrer">
          {t.projects.open} →
        </a>
      </div>
    </article>
  )
}

function Projects() {
  const { t } = useLang()
  const [tag, setTag] = useState<Tag | 'all'>('all')
  const featured = projects.filter((p) => p.featured)
  const core = projects.filter((p) => p.group === 'core' && !p.featured)
  const lab = projects.filter((p) => p.group === 'lab')
  const shown = core.filter((p) => tag === 'all' || p.tags.includes(tag))
  const count = (f: Tag | 'all') => (f === 'all' ? core.length : core.filter((p) => p.tags.includes(f)).length)
  return (
    <section id="projekty" className="section">
      <h2>{t.projects.title}</h2>
      {featured.map((p) => (
        <FeaturedCard key={p.id} p={p} />
      ))}

      <h3 className="subhead">{t.projects.coreTitle}</h3>
      <div className="filters" role="group" aria-label="Filtr">
        {(['all', ...TAGS] as const).map((f) => (
          <button key={f} className={tag === f ? 'on' : ''} aria-pressed={tag === f} onClick={() => setTag(f)}>
            {f === 'all' ? t.projects.all : f} <span className="count">{count(f)}</span>
          </button>
        ))}
      </div>
      <div className="grid-scroll">
        <div className="grid">
          {shown.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </div>

      {lab.length > 0 && (
        <>
          <h3 className="subhead">{t.projects.labTitle}</h3>
          {lab.map((p) => (
            <LabRow key={p.id} p={p} />
          ))}
        </>
      )}
    </section>
  )
}

/** Okres z wyróżnionym słowem „obecnie” / „present” */
function Period({ text }: { text: string }) {
  const m = text.match(/^(.*?)(obecnie|present)$/)
  if (!m) return <span className="period">{text}</span>
  return (
    <span className="period">
      {m[1]}
      <span className="now-word">{m[2]}</span>
    </span>
  )
}

function Experience() {
  const { t } = useLang()
  return (
    <section id="doswiadczenie" className="section">
      <h2>{t.experience.title}</h2>
      <ol className="timeline">
        {t.experience.items.map((e) => (
          <li key={e.role} className={e.current ? 'current' : ''}>
            <span className="tl-dot" aria-hidden />
            <div className="tl-row">
              <div className="tl-title">
                <strong>{e.role}</strong>
                <span className={`kind ${e.kind === 'Staż' || e.kind === 'Internship' ? 'intern' : ''}`}>{e.kind}</span>
              </div>
              <Period text={e.period} />
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
      <div className="stack-grid">
        {t.stack.groups.map((g) => (
          <div className="stack-card" key={g.name}>
            <h4>{g.name}</h4>
            <div className="pills">
              {g.items.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

type FormStatus = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'

/** Formularz kontaktowy. Wysyła JSON na adres z VITE_CONTACT_ENDPOINT (np. Formspree).
 *  Adres e-mail odbiorcy jest po stronie usługi, nie w kodzie strony. */
function ContactForm() {
  const { t } = useLang()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const consent = data.get('consent') === 'on'
    const honeypot = String(data.get('website') ?? '')

    const found: Record<string, string> = {}
    if (!name) found.name = t.form.errors.name
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) found.email = t.form.errors.email
    if (message.length < 10) found.message = t.form.errors.message
    if (!consent) found.consent = t.form.errors.consent
    setErrors(found)
    if (Object.keys(found).length) return

    // pułapka na boty: wypełnione ukryte pole udaje sukces i nic nie wysyła
    if (honeypot) {
      setStatus('sent')
      return
    }
    if (!CONTACT_ENDPOINT) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, _subject: 'Wiadomość z portfolio' }),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={(e) => void submit(e)} noValidate>
      <div className="row-2">
        <label>
          <span>{t.form.name}</span>
          <input name="name" autoComplete="name" maxLength={120} />
          {errors.name && <em className="field-error">{errors.name}</em>}
        </label>
        <label>
          <span>{t.form.email}</span>
          <input name="email" type="email" autoComplete="email" maxLength={200} />
          {errors.email && <em className="field-error">{errors.email}</em>}
        </label>
      </div>
      <label>
        <span>{t.form.message}</span>
        <textarea name="message" rows={5} maxLength={3000} />
        {errors.message && <em className="field-error">{errors.message}</em>}
      </label>
      <label className="check">
        <input name="consent" type="checkbox" />
        <span>{t.form.consent}</span>
        {errors.consent && <em className="field-error">{errors.consent}</em>}
      </label>
      {/* pole-pułapka dla botów: ukryte dla ludzi */}
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-foot">
        <button className="btn primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.form.sending : t.form.send}
        </button>
        <span className="form-status" role="status" aria-live="polite">
          {status === 'sent' && t.form.sent}
          {status === 'error' && t.form.error}
          {status === 'unconfigured' && t.form.notConfigured}
        </span>
      </div>
    </form>
  )
}

function Contact() {
  const { t } = useLang()
  return (
    <section id="kontakt" className="section contact-section">
      <h2>{t.form.title}</h2>
      <p className="form-lead">{t.form.lead}</p>
      <ContactForm />
      <div className="contact-card">
        <span className="eyebrow">{t.contact.title}</span>
        <h3 className="contact-heading">{t.contact.heading}</h3>
        <p>{t.contact.text}</p>
        <div className="actions">
          <a className="btn primary" href="/cv/CV-Karol-Idzkowski-PL.pdf" download>
            {t.cv.pl} · {t.cv.download}
          </a>
          <a className="btn" href="/cv/CV-Karol-Idzkowski-EN.pdf" download>
            {t.cv.en} · {t.cv.download}
          </a>
          <a className="btn" href="https://github.com/Keryyyl" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href="https://www.linkedin.com/in/karol-idzkowski-2278b633b/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer className="site-footer">
      <span>{t.contact.copyright}</span>
      <button className="ghost" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {t.contact.back}
      </button>
    </footer>
  )
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
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
