# Beans Coffee ☕

Strona internetowa kawiarni i piekarni Beans Coffee - w pełni funkcjonalna aplikacja e-commerce stworzona z React i Tailwind CSS.

## 🚀 Funkcjonalności

- **Responsywny design** - działa na wszystkich urządzeniach
- **Katalog produktów** - kategorie: Kawa, Ciasta, Czekolady, Akcesoria
- **Koszyk zakupowy** - panel boczny z zarządzaniem produktami
- **Strony produktów** - szczegółowe informacje, galeria zdjęć, opinie
- **Wiele podstron** - Strona główna, O nas, Kontakt, Dostawa, Regulamin, Zwroty
- **Karuzela hero** - automatyczna rotacja slajdów
- **Karuzela produktów** - sekcja bestsellerów
- **Trust badges** - budowanie zaufania klientów

## 🛠️ Technologie

- React 18 + TypeScript
- Tailwind CSS v4
- Vite
- react-slick (karuzele)
- Lucide React (ikony)

## 📦 Instalacja

```bash
# Zainstaluj zależności
pnpm install

# Uruchom serwer deweloperski
pnpm dev

# Zbuduj do produkcji
pnpm build
```

## 🎨 Kolorystyka

- Kolor główny: `#7A6343` (brązowy)
- Tło: `#FFFCF7` (kremowy)
- Font nagłówków: Baguet Script

## 📁 Struktura projektu

```
src/
├── app/
│   ├── App.tsx              # Główny komponent aplikacji
│   └── components/          # Wszystkie komponenty
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Categories.tsx
│       ├── ProductCard.tsx
│       ├── ProductCarousel.tsx
│       ├── ProductCatalog.tsx
│       ├── ProductDetailPage.tsx
│       ├── SideCart.tsx
│       ├── Footer.tsx
│       └── ...
├── imports/                 # Obrazy i assety
└── styles/                  # Style CSS
    ├── theme.css
    └── ...
```

## 🌐 GitHub Pages / Hosting

Aby wdrożyć na GitHub Pages, Vercel lub Netlify, użyj komendy build:

```bash
pnpm build
```

Folder `dist` będzie zawierał gotową do wdrożenia aplikację.

## 📝 Licencja

© 2026 Beans Coffee. Wszystkie prawa zastrzeżone.
