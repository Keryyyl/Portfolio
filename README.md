# Portfolio: Karol Idźkowski

Strona w React + TypeScript + Vite. Język PL (domyślny) i EN.

```bash
pnpm install
pnpm dev     # podgląd lokalny
pnpm build   # wersja produkcyjna w dist/
```

## Formularz kontaktowy

Formularz wysyła wiadomości przez [Formspree](https://formspree.io) (`@formspree/react`).
Identyfikator formularza jest w `src/App.tsx` (`FORMSPREE_ID`). Adres odbiorcy ustawia się w panelu Formspree.
Pole `_gotcha` to pułapka na boty.

## Pliki do uzupełnienia

- `public/icons/<id>.png` — ikony modułów (32×32), np. `klaudiusz.png`
- `public/previews/<id>.png` — zrzuty ekranu do podglądu (16:10)
- `public/media/demo.webm` — nagranie w sekcji projektu głównego
