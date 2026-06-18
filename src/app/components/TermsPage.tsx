import { stockImages } from '../lib/images';
interface TermsPageProps {
  onBack: () => void;
}

export function TermsPage({ onBack }: TermsPageProps) {
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
          Regulamin
        </h1>

        <img src={stockImages.cafeInterior} alt="Wnętrze kawiarni" className="w-full h-56 object-cover rounded-lg border border-gray-300 mb-8" />

        <div className="bg-white p-8 rounded-lg border border-gray-300 space-y-6">
          <section>
            <h2 className="text-lg mb-3 text-foreground">§1 Postanowienia ogólne</h2>
            <p className="text-sm text-muted-foreground mb-2">
              1. Niniejszy Regulamin określa zasady korzystania ze sklepu internetowego Beans Coffee.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              2. Właścicielem sklepu jest Beans Coffee sp. z o.o.
            </p>
            <p className="text-sm text-muted-foreground">
              3. Sklep prowadzi sprzedaż kawy, wypieków, czekolady i akcesoriów.
            </p>
          </section>

          <section>
            <h2 className="text-lg mb-3 text-foreground">§2 Składanie zamówień</h2>
            <p className="text-sm text-muted-foreground mb-2">
              1. Zamówienia można składać 24 godziny na dobę przez cały rok.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              2. Do złożenia zamówienia niezbędne jest podanie danych kontaktowych.
            </p>
            <p className="text-sm text-muted-foreground">
              3. Potwierdzenie przyjęcia zamówienia następuje drogą mailową.
            </p>
          </section>

          <section>
            <h2 className="text-lg mb-3 text-foreground">§3 Ceny i płatności</h2>
            <p className="text-sm text-muted-foreground mb-2">
              1. Wszystkie ceny podane są w złotych polskich i zawierają podatek VAT.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              2. Do ceny produktów doliczane są koszty dostawy.
            </p>
            <p className="text-sm text-muted-foreground">
              3. Sklep oferuje płatności online, przelewem oraz gotówką przy odbiorze.
            </p>
          </section>

          <section>
            <h2 className="text-lg mb-3 text-foreground">§4 Dostawa</h2>
            <p className="text-sm text-muted-foreground mb-2">
              1. Czas realizacji zamówienia wynosi 1-2 dni robocze.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              2. Dostępne są opcje dostawy kurierem, do paczkomatu oraz odbiór osobisty.
            </p>
            <p className="text-sm text-muted-foreground">
              3. Darmowa dostawa obowiązuje przy zamówieniach powyżej 149 zł.
            </p>
          </section>

          <section>
            <h2 className="text-lg mb-3 text-foreground">§5 Zwroty i reklamacje</h2>
            <p className="text-sm text-muted-foreground mb-2">
              1. Konsument ma prawo odstąpić od umowy w terminie 14 dni.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              2. Reklamacje należy zgłaszać mailem na adres BeansCoffee@gmail.com
            </p>
            <p className="text-sm text-muted-foreground">
              3. Sklep rozpatruje reklamacje w ciągu 14 dni.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
