# Portfolio: Karol Idźkowski

Strona w React + TypeScript + Vite. Język PL (domyślny) i EN.

```bash
pnpm install
pnpm dev     # podgląd lokalny
pnpm build   # wersja produkcyjna w dist/
```

## Formularz kontaktowy

Formularz wysyła JSON na adres z `VITE_CONTACT_ENDPOINT`. Najprościej użyć darmowej usługi
przekazującej wiadomości na e-mail, np. [Formspree](https://formspree.io):

1. Załóż formularz w usłudze i ustaw w jej panelu adres, na który mają przychodzić wiadomości.
2. Skopiuj `.env.example` do `.env.local` i wpisz adres formularza.
3. Uruchom `pnpm build` ponownie.

Bez tego zmiennej formularz pokazuje komunikat, że nie jest jeszcze podłączony.
Adres odbiorcy nie jest w kodzie strony. Pole-pułapka chroni przed botami.

## Pliki do uzupełnienia

- `public/icons/<id>.png` — ikony modułów (32×32), np. `klaudiusz.png`
- `public/previews/<id>.png` — zrzuty ekranu do podglądu (16:10)
- `public/media/demo.webm` — nagranie w sekcji projektu głównego
