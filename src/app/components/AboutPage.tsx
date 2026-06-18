import { stockImages } from '../lib/images';

interface AboutPageProps { onBack: () => void; }

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <button onClick={onBack} className="mb-8 text-foreground hover:underline text-sm">← Powrót do strony głównej</button>
        <h1 className="text-3xl text-center mb-8 text-foreground font-normal">O Beans Coffee</h1>

        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden mb-8 grid grid-cols-1 md:grid-cols-2">
          <img src={stockImages.barista} alt="Barista przygotowujący kawę" className="w-full h-full min-h-[320px] object-cover" />
          <div className="p-8">
            <h2 className="text-xl mb-4 text-foreground">Nasza historia</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">Beans Coffee to kawiarnia i mały sklep z autorskimi produktami: świeżą kawą, wypiekami, słodkościami i zestawami prezentowymi.</p>
            <p className="text-muted-foreground mb-4 leading-relaxed">W lokalu możesz usiąść z filiżanką kawy, a online zamówić te same smaki do domu, biura albo na prezent.</p>
            <p className="text-muted-foreground leading-relaxed">Jesteśmy miejscem przyjaznym zwierzętom, więc Twój pupil jest u nas mile widziany.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <img src={stockImages.coffeeCup} alt="Kawa w filiżance" className="rounded-lg border border-gray-300 h-56 w-full object-cover" />
          <img src={stockImages.pastryCounter} alt="Wypieki w kawiarni" className="rounded-lg border border-gray-300 h-56 w-full object-cover" />
          <img src={stockImages.dogCafe} alt="Kawiarnia przyjazna zwierzętom" className="rounded-lg border border-gray-300 h-56 w-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ['Świeża kawa', 'Ziarna i mieszanki do espresso, przelewu oraz kawy domowej.'],
            ['Sklep z wyrobami', 'Ciasta, ciasteczka i zestawy prezentowe dostępne również online.'],
            ['Pet friendly', 'Miska z wodą, spokojne stoliki i luźna atmosfera.'],
            ['Jakość i prostota', 'Dobre składniki, czytelna oferta i produkty przygotowywane na bieżąco.'],
          ].map(([title, text]) => (
            <div key={title} className="bg-white rounded-lg border border-gray-300 p-6 text-center">
              <h3 className="mb-3 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
