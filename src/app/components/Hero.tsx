import { useState, useEffect } from 'react';
import { stockImages } from '../lib/images';

const slides = [
  {
    title: 'Kawiarnia i sklep z wypiekami w jednym miejscu',
    subtitle: 'Wpadnij na kawę, a ulubione ziarna, ciasta i słodkie zestawy zamów również online z odbiorem lub dostawą.',
    image: stockImages.cafeInterior,
    cta: 'Zobacz ofertę'
  },
  {
    title: 'Świeżo parzona kawa i ziarna do domu',
    subtitle: 'Mieszanki Beans Coffee przygotowane do espresso, przelewu i codziennej kawy w domu albo biurze.',
    image: stockImages.coffeeBeans,
    cta: 'Kup kawę'
  },
  {
    title: 'Wypieki, desery i miejsce przyjazne pupilom',
    subtitle: 'Domowe ciasta, croissanty i słodkości na wynos, do stolika oraz na małe zamówienia okolicznościowe.',
    image: stockImages.dogCafe,
    cta: 'Odwiedź nas'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: '#2D1B0F' }}>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#ffffff,_transparent_35%)]" />
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 px-6 py-12'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white z-10">
                <p className="uppercase tracking-[0.25em] text-xs text-white/70 mb-3">Beans Coffee</p>
                <h2 className="font-['Baguet_Script',cursive] text-5xl lg:text-6xl mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-white/85 mb-6 text-base max-w-xl">
                  {slide.subtitle}
                </p>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md transition-colors text-sm">
                  {slide.cta}
                </button>
              </div>
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg w-full h-[400px] object-cover shadow-2xl"
                />

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
