import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App' 

// --- KOMPLET IMPORTÓW STYLÓW Z FIGMY ---
import './styles/tailwind.css'
import './styles/globals.css'
import './styles/theme.css'
import './styles/fonts.css'
import './styles/carousel.css'
import './styles/index.css'
// (Jeśli masz w głównym katalogu plik default_shadcn_theme.css, odznacz poniższą linijkę)
// import '../default_shadcn_theme.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
