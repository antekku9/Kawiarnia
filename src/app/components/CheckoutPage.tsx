import { ArrowLeft, CreditCard, MapPin, PackageCheck, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CheckoutPageProps {
  items: CartItem[];
  onBack: () => void;
  onNavigateShop: () => void;
}

export function CheckoutPage({ items, onBack, onNavigateShop }: CheckoutPageProps) {
  const productsTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = productsTotal >= 80 || productsTotal === 0 ? 0 : 12.99;
  const total = productsTotal + delivery;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-[#7A6343]" />
        <h1 className="text-2xl mb-3">Koszyk jest pusty</h1>
        <p className="text-muted-foreground mb-6">Dodaj kawę, wypieki albo zestaw prezentowy i wróć do kasy.</p>
        <button onClick={onNavigateShop} className="bg-[#7A6343] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Przejdź do sklepu
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Wróć
        </button>

        <h1 className="text-3xl mb-2">Kasa</h1>
        <p className="text-muted-foreground mb-8">To demonstracyjny formularz zamówienia do projektu strony kawiarni i sklepu.</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">
          <div className="space-y-6">
            <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="h-5 w-5 text-[#7A6343]" />
                <h2 className="text-xl">Dane do dostawy</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border rounded-lg px-4 py-3" placeholder="Imię i nazwisko" />
                <input className="border rounded-lg px-4 py-3" placeholder="Telefon" />
                <input className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="E-mail" />
                <input className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Adres / paczkomat / odbiór w lokalu" />
                <textarea className="border rounded-lg px-4 py-3 md:col-span-2 min-h-[110px]" placeholder="Uwagi do zamówienia, np. godzina odbioru" />
              </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <PackageCheck className="h-5 w-5 text-[#7A6343]" />
                <h2 className="text-xl">Dostawa</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['Odbiór w kawiarni', 'Kurier miejski', 'Paczkomat'].map((option, index) => (
                  <label key={option} className={`border rounded-xl p-4 cursor-pointer ${index === 0 ? 'border-[#7A6343] bg-[#7A6343]/5' : 'border-gray-200'}`}>
                    <input type="radio" name="delivery" defaultChecked={index === 0} className="mr-2" />
                    {option}
                  </label>
                ))}
              </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <CreditCard className="h-5 w-5 text-[#7A6343]" />
                <h2 className="text-xl">Płatność</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['BLIK / szybki przelew', 'Karta online', 'Płatność przy odbiorze'].map((option, index) => (
                  <label key={option} className={`border rounded-xl p-4 cursor-pointer ${index === 0 ? 'border-[#7A6343] bg-[#7A6343]/5' : 'border-gray-200'}`}>
                    <input type="radio" name="payment" defaultChecked={index === 0} className="mr-2" />
                    {option}
                  </label>
                ))}
              </div>
            </section>
          </div>

          <aside className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit sticky top-24">
            <h2 className="text-xl mb-4">Podsumowanie</h2>
            <div className="space-y-4 max-h-[360px] overflow-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded-lg border" />
                  <div className="flex-1">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Ilość: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">{(item.price * item.quantity).toFixed(2)} zł</p>
                </div>
              ))}
            </div>
            <div className="border-t mt-5 pt-5 space-y-2 text-sm">
              <div className="flex justify-between"><span>Produkty</span><span>{productsTotal.toFixed(2)} zł</span></div>
              <div className="flex justify-between"><span>Dostawa</span><span>{delivery === 0 ? '0 zł' : `${delivery.toFixed(2)} zł`}</span></div>
              <div className="flex justify-between text-xl pt-3"><span>Razem</span><span className="text-[#7A6343]">{total.toFixed(2)} zł</span></div>
            </div>
            <button onClick={() => alert('Zamówienie demonstracyjne — projekt studencki.')} className="w-full mt-6 bg-[#7A6343] text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
              Złóż zamówienie
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
