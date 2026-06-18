import { Search, Heart, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import logoUrl from '@/imports/Nowe_logo_14.png';

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
  onLogoClick: () => void;
}

export function Header({ onCartClick, cartItemCount, onLogoClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = ['Kawa arabica', 'Croissant', 'Ciasto czekoladowe', 'Espresso', 'Ciastka owsiane'];
  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#7A6343' }}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={onLogoClick}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img
              src={logoUrl}
              alt="Beans Coffee"
              className="h-12 w-12 object-contain bg-white rounded-full p-1"
            />
            <div>
              <h1 className="font-['Baguet_Script',cursive] text-2xl text-white leading-tight">Beans</h1>
              <p className="text-sm text-white/90 leading-tight">Coffee</p>
            </div>
          </button>

          <div className="flex-1 max-w-xl relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Wyszukaj produkt"
                className="w-full pl-4 pr-10 py-2.5 rounded-md bg-white/95 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>

            {showSuggestions && searchQuery && filteredSuggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-border rounded-lg shadow-lg">
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-muted cursor-pointer text-foreground"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button className="p-2.5 hover:bg-white/10 rounded-lg transition-colors">
              <Heart className="h-5 w-5 text-white" />
            </button>
            <button
              className="p-2.5 hover:bg-white/10 rounded-lg transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingBag className="h-5 w-5 text-white" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button className="p-2.5 hover:bg-white/10 rounded-lg transition-colors">
              <User className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
