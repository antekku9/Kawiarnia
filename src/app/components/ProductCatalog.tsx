import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Hero } from './Hero';
import { TrustBadges } from './TrustBadges';
import { stockImages } from '../lib/images';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  unit?: string;
}

interface ProductCatalogProps {
  onBack: () => void;
  selectedCategory?: string;
  onAddToCart: (product: { id: number; name: string; price: number; image: string }) => void;
  onNavigate?: (page: string) => void;
  onProductClick?: (product: any) => void;
}

const allProducts: Product[] = [
  { id: 1, name: 'Kawa Arabica Premium', price: 45.00, image: stockImages.coffeeBeans, category: 'Kawa', unit: '1000g' },
  { id: 2, name: 'Mieszanka Espresso House', price: 39.00, image: stockImages.coffeeBag, category: 'Kawa', unit: '500g' },
  { id: 3, name: 'Cold Brew w butelce', price: 15.00, image: stockImages.coffeeCup, category: 'Kawa', unit: '330 ml' },
  { id: 4, name: 'Croissant Maślany', price: 8.50, image: stockImages.pastryCounter, category: 'Wypieki', unit: '1 szt' },
  { id: 5, name: 'Ciasto Czekoladowe', price: 12.00, image: stockImages.cake, category: 'Wypieki', unit: 'porcja' },
  { id: 6, name: 'Tarta Owocowa', price: 14.50, image: stockImages.tart, category: 'Wypieki', unit: 'porcja' },
  { id: 7, name: 'Trufle Czekoladowe', price: 24.00, image: stockImages.chocolate, category: 'Słodkości', unit: '12 szt' },
  { id: 8, name: 'Ciastka Maślane', price: 18.00, image: stockImages.cookies, category: 'Słodkości', unit: '20 szt' },
  { id: 9, name: 'Zestaw prezentowy Beans', price: 69.00, image: stockImages.bakeryBox, category: 'Zestawy', unit: 'kawa + słodkości' },
  { id: 10, name: 'Kubek termiczny', price: 42.00, image: stockImages.takeaway, category: 'Akcesoria', unit: '1 szt' },
];

export function ProductCatalog({ onBack, selectedCategory, onAddToCart, onProductClick }: ProductCatalogProps) {
  const [category, setCategory] = useState(selectedCategory || 'Wszystkie');
  const [sortBy, setSortBy] = useState('best-match');

  const categories = ['Wszystkie', 'Kawa', 'Wypieki', 'Słodkości', 'Zestawy', 'Akcesoria'];

  const filteredProducts = category === 'Wszystkie'
    ? allProducts
    : allProducts.filter(p => p.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl text-center mb-6 text-foreground font-normal">
          {selectedCategory || 'Sklep Beans Coffee'}
        </h1>

        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
            <SlidersHorizontal className="h-4 w-4" />
            FILTRY
          </button>

          <div className="flex gap-2 flex-wrap flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded text-sm transition-colors ${
                  category === cat
                    ? 'bg-gray-200 text-foreground'
                    : 'bg-white border border-gray-300 text-foreground hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none px-4 py-2 pr-10 rounded border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 cursor-pointer text-sm"
            >
              <option value="best-match">Sortuj: Najlepsze dopasowanie</option>
              <option value="price-asc">Sortuj: Cena rosnąco</option>
              <option value="price-desc">Sortuj: Cena malejąco</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-600" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
              onProductClick={onProductClick}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>Brak produktów w tej kategorii</p>
          </div>
        )}

        <div className="mt-12">
          <TrustBadges />
        </div>
      </div>
    </div>
  );
}
