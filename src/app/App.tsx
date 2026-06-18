import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import { SideCart } from './components/SideCart';
import { ContactPage } from './components/ContactPage';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductCarousel } from './components/ProductCarousel';
import { AboutPage } from './components/AboutPage';
import { DeliveryPage } from './components/DeliveryPage';
import { TermsPage } from './components/TermsPage';
import { ReturnPolicyPage } from './components/ReturnPolicyPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CoffeeBeanIcon } from './components/SectionDivider';
import { CheckoutPage } from './components/CheckoutPage';
import { stockImages } from './lib/images';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type Page = 'home' | 'contact' | 'catalog' | 'about' | 'delivery' | 'terms' | 'returns' | 'product-detail' | 'checkout';

const bestsellers = [
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleAddToCart = (product: { id: number; name: string; price: number; image: string }) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('catalog');
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Funkcja renderująca właściwą treść strony w zależności od stanu
  const renderContent = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactPage onBack={() => setCurrentPage('home')} />;
      case 'catalog':
        return (
          <ProductCatalog
            onBack={() => setCurrentPage('home')}
            selectedCategory={selectedCategory}
            onAddToCart={handleAddToCart}
            onNavigate={setCurrentPage}
            onProductClick={handleProductClick}
          />
        );
      case 'about':
        return <AboutPage onBack={() => setCurrentPage('home')} />;
      case 'delivery':
        return <DeliveryPage onBack={() => setCurrentPage('home')} />;
      case 'terms':
        return <TermsPage onBack={() => setCurrentPage('home')} />;
      case 'returns':
        return <ReturnPolicyPage onBack={() => setCurrentPage('home')} />;
      case 'checkout':
        return <CheckoutPage items={cartItems} onBack={() => setCurrentPage('home')} onNavigateShop={() => setCurrentPage('catalog')} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setCurrentPage('home')}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <div className="text-center py-20">Nie wybrano produktu.</div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Categories onCategoryClick={handleCategoryClick} />
            <section className="py-12 bg-background">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-center mb-2 text-foreground px-6 text-lg font-normal">
                  Bestsellery
                </h2>
                <div className="flex items-center justify-center mb-8 px-6">
                  <div className="h-px bg-gray-300 w-20"></div>
                  <div className="mx-4">
<CoffeeBeanIcon className="h-7 w-7 text-[#7A6343]" />
                  </div>
                  <div className="h-px bg-gray-300 w-20"></div>
                </div>
                <ProductCarousel products={bestsellers} onAddToCart={handleAddToCart} onProductClick={handleProductClick} />
              </div>
            </section>
            <TrustBadges />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header 
        onCartClick={() => setIsCartOpen(true)} 
        cartItemCount={totalItemsInCart} 
        onLogoClick={() => setCurrentPage('home')} 
      />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={setCurrentPage} />

      <SideCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setCurrentPage('checkout');
        }}
      />
    </div>
  );
}
