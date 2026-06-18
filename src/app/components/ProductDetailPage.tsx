import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star, Truck, Clock, Package } from 'lucide-react';
import { stockImages } from '../lib/images';

interface ProductDetailPageProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    unit?: string;
  };
  onBack: () => void;
  onAddToCart: (product: { id: number; name: string; price: number; image: string }) => void;
}

export function ProductDetailPage({ product, onBack, onAddToCart }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('opis');

  const images = [product.image, stockImages.tableCoffee, stockImages.bakeryBox, stockImages.cafeInterior];
  const rating = 4.9;
  const reviewsCount = 43;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6 text-sm text-muted-foreground">
          <button onClick={onBack} className="hover:text-foreground">
            Strona główna
          </button>
          {' > '}
          <button onClick={onBack} className="hover:text-foreground">
            {product.category}
          </button>
          {' > '}
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="relative bg-white border border-gray-300 rounded-lg overflow-hidden mb-4">
              {selectedImage === 0 && (
                <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full z-10">
                  NOWOŚĆ
                </span>
              )}
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors border border-gray-200">
                <Heart className="h-5 w-5 text-foreground" />
              </button>
              <button className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors border border-gray-200">
                🔍
              </button>
            </div>

            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 aspect-square bg-white border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-primary' : 'border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl mb-4 text-foreground">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({reviewsCount} opinie)</span>
            </div>

            <p className="text-4xl mb-6 text-foreground font-medium">{product.price.toFixed(2)} zł</p>
            {product.unit && (
              <p className="text-sm text-muted-foreground mb-6">(ok. {product.unit})</p>
            )}

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Produkt przygotowywany przez Beans Coffee z myślą o podaniu w kawiarni oraz wygodnym zamówieniu do domu.
              Sprawdzi się do porannej kawy, na spotkanie ze znajomymi albo jako drobny prezent.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium">Smak:</p>
                  <p className="text-muted-foreground text-xs">owocowy, lekko kwaśkowy</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Package className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium">Porcja:</p>
                  <p className="text-muted-foreground text-xs">12 kawałków (ok. 800g)</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium">Czas realizacji:</p>
                  <p className="text-muted-foreground text-xs">2-3 dni robocze</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6 text-sm">
              <Truck className="h-4 w-4 text-primary" />
              <div>
                <p className="font-medium">Dostawa:</p>
                <p className="text-muted-foreground">wysyłka w 24h, opakowanie chłodnicze</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <p className="text-sm mb-2">Ilość</p>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 text-white py-3 rounded text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#7A6343' }}
                >
                  DODAJ DO KOSZYKA
                </button>
                <button className="p-3 border border-gray-300 rounded hover:bg-gray-50">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-8 mb-12">
          <div className="flex gap-6 border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('opis')}
              className={`pb-3 px-2 ${activeTab === 'opis' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}
            >
              Opis
            </button>
            <button
              onClick={() => setActiveTab('sklad')}
              className={`pb-3 px-2 ${activeTab === 'sklad' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}
            >
              Skład
            </button>
            <button
              onClick={() => setActiveTab('alergeny')}
              className={`pb-3 px-2 ${activeTab === 'alergeny' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}
            >
              Alergeny
            </button>
            <button
              onClick={() => setActiveTab('sposob')}
              className={`pb-3 px-2 ${activeTab === 'sposob' ? 'border-b-2 border-primary text-foreground' : 'text-muted-foreground'}`}
            >
              Sposób przechowywania
            </button>
          </div>

          <div className="text-sm text-muted-foreground leading-relaxed">
            {activeTab === 'opis' && (
              <p>
                Produkt z oferty Beans Coffee — dostępny w sklepie online oraz w kawiarni. Każdą pozycję pakujemy tak, aby wygodnie odebrać ją na miejscu albo zamówić z dostawą.
              </p>
            )}
            {activeTab === 'sklad' && (
              <p>Mąka pszenna, masło, cukier, jajka, cytryny, maliny, śmietana, żelatyna, wanilia</p>
            )}
            {activeTab === 'alergeny' && (
              <p>Produkt zawiera: gluten, jajka, mleko. Może zawierać śladowe ilości orzechów.</p>
            )}
            {activeTab === 'sposob' && (
              <p>Przechowywać w lodówce w temperaturze 2-6°C. Spożyć w ciągu 3 dni od otrzymania.</p>
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl mb-2">4,9/5</h2>
              <p className="text-sm text-muted-foreground">Na podstawie {reviewsCount} opinii</p>
            </div>
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
              DODAJ OPINIĘ
            </button>
          </div>

          <div className="space-y-6">
            {[1, 2].map((review) => (
              <div key={review} className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium">
                    G
                  </div>
                  <div>
                    <p className="font-medium">Gosia</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">26/05/2026</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dobra, taka nie za słodka. Idealny zakup na dzień matki!
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
              WIĘCEJ OPINII
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
