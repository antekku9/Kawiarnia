import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  unit?: string;
  onAddToCart: (product: { id: number; name: string; price: number; image: string }) => void;
  onProductClick?: (product: any) => void;
}

export function ProductCard({ id, name, price, image, category, unit, onAddToCart, onProductClick }: ProductCardProps) {
  const handleImageClick = () => {
    if (onProductClick) {
      onProductClick({ id, name, price, image, category, unit });
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-300 hover:shadow-md transition-shadow relative">
      <button className="absolute top-3 right-3 z-10 bg-white/90 p-1.5 rounded-full hover:bg-white transition-colors border border-gray-200">
        <Heart className="h-4 w-4 text-foreground" />
      </button>
      <div
        className="aspect-square overflow-hidden bg-gray-100 cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm mb-1 text-foreground text-center">{name}</h3>
        <p className="text-sm text-foreground font-medium mb-1 text-center">Od {price.toFixed(2)} zł</p>
        {unit && (
          <p className="text-xs text-muted-foreground mb-3 text-center">{unit}</p>
        )}
        <button
          onClick={() => onAddToCart({ id, name, price, image })}
          className="w-full text-white px-3 py-1.5 rounded text-xs hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#7A6343' }}
        >
          Do koszyka
        </button>
      </div>
    </div>
  );
}
