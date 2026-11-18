/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Adres usługi, która przekazuje wiadomości z formularza do Ciebie (np. Formspree). */
  readonly VITE_CONTACT_ENDPOINT?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
