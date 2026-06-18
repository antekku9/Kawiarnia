import { stockImages } from '../lib/images';
interface DeliveryPageProps {
  onBack: () => void;
}

export function DeliveryPage({ onBack }: DeliveryPageProps) {
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
          Dostawa i Płatność
        </h1>

        <img src={stockImages.bakeryBox} alt="Zapakowane produkty z kawiarni" className="w-full h-56 object-cover rounded-lg border border-gray-300 mb-8" />

        <div className="bg-white p-8 rounded-lg border border-gray-300 mb-6">
          <h2 className="text-xl mb-4 text-foreground">Opcje Dostawy</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-1 text-foreground">Kurier - InPost / DPD</h3>
              <p className="text-sm text-muted-foreground mb-1">Czas dostawy: 1-2 dni robocze</p>
              <p className="text-sm text-foreground font-medium">14,99 zł (darmowa dostawa od 149 zł)</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="mb-1 text-foreground">Paczkomaty InPost</h3>
              <p className="text-sm text-muted-foreground mb-1">Czas dostawy: 1-2 dni robocze</p>
              <p className="text-sm text-foreground font-medium">11,99 zł (darmowa dostawa od 149 zł)</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="mb-1 text-foreground">Odbiór osobisty</h3>
              <p className="text-sm text-muted-foreground mb-1">Gotowe do odbioru tego samego dnia</p>
              <p className="text-sm text-foreground font-medium">0 zł</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-300 mb-6">
          <h2 className="text-xl mb-4 text-foreground">Metody Płatności</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Płatność online (Przelewy24, PayU)</li>
            <li>• Karta kredytowa / debetowa (Visa, Mastercard)</li>
            <li>• BLIK</li>
            <li>• Przelew tradycyjny</li>
            <li>• Gotówka przy odbiorze</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-300">
          <h2 className="text-xl mb-4 text-foreground">Czas Realizacji</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Zamówienia złożone do godziny 14:00 są wysyłane tego samego dnia roboczego.
            W weekendy i święta realizujemy zamówienia w następny dzień roboczy.
          </p>
        </div>
      </div>
    </div>
  );
}
