import { CoffeeBeanIcon } from './SectionDivider';
import { stockImages } from '../lib/images';

interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

const categories = [
  { name: 'Kawa', image: stockImages.coffeeBeans },
  { name: 'Wypieki', image: stockImages.pastryCounter },
  { name: 'Słodkości', image: stockImages.chocolate },
  { name: 'Zestawy', image: stockImages.bakeryBox },
];

export function Categories({ onCategoryClick }: CategoriesProps) {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-2 text-foreground text-lg font-normal">
          Kawiarnia, sklep i słodkie zamówienia
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-4">
          Wybierz produkty do domu albo sprawdź, co czeka na Ciebie w lokalu.
        </p>
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gray-300 w-20"></div>
          <div className="mx-4">
            <CoffeeBeanIcon className="h-7 w-7 text-[#7A6343]" />
          </div>
          <div className="h-px bg-gray-300 w-20"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategoryClick(category.name)}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow text-left"
            >
              <div className="aspect-square overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-foreground text-base font-normal">{category.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
