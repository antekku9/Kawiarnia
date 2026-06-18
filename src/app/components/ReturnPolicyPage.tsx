import { stockImages } from '../lib/images';
interface ReturnPolicyPageProps {
  onBack: () => void;
}

export function ReturnPolicyPage({ onBack }: ReturnPolicyPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="mb-8 text-foreground hover:underline text-sm"
        >
          ← Powrót do strony głównej
        </button>

        <h1 className="text-3xl text-center mb-8 text-foreground font-normal">
          Polityka Zwrotów
        </h1>

        <img src={stockImages.takeaway} alt="Produkty na wynos" className="w-full h-56 object-cover rounded-lg border border-gray-300 mb-8" />

        <div className="bg-white p-8 rounded-lg border border-gray-300 mb-6">
          <h2 className="text-lg mb-4 text-foreground">Jak dokonać zwrotu?</h2>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li>1. Skontaktuj się z nami mailem na adres BeansCoffee@gmail.com w ciągu 14 dni</li>
            <li>2. Otrzymasz formularz zwrotu wraz z instrukcjami</li>
            <li>3. Zapakuj produkt w oryginalne opakowanie</li>
            <li>4. Wyślij paczkę na podany adres</li>
            <li>5. Zwrot środków nastąpi w ciągu 14 dni</li>
          </ol>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-300 mb-6">
          <h2 className="text-lg mb-4 text-foreground">Warunki zwrotu</h2>
          <p className="text-sm text-muted-foreground mb-3">Produkt musi być:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
            <li>W stanie nienaruszonym</li>
            <li>W oryginalnym opakowaniu</li>
            <li>Kompletny</li>
            <li>Bez śladów używania</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-300">
          <h2 className="text-lg mb-4 text-foreground">Produkty wyłączone z prawa zwrotu</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Ze względu na charakter produktów spożywczych, z prawa odstąpienia wyłączone są:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
            <li>Produkty które ulegają szybkiemu zepsuciu</li>
            <li>Produkty w opakowaniach otwartych</li>
            <li>Produkty dostosowane do indywidualnych potrzeb</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
