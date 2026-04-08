import { useState } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { CategoryGrid } from "./components/CategoryGrid";
import { FlashSale } from "./components/FlashSale";
import { ProductGrid } from "./components/ProductGrid";
import { CartDrawer, CartItem } from "./components/CartDrawer";
import { Footer } from "./components/Footer";
import { Product } from "./components/ProductCard";
import { CheckCircle } from "lucide-react";

const allProducts: Product[] = [
  {
    id: 101,
    name: "Men's Casual Streetwear T-Shirt",
    image: "https://images.unsplash.com/photo-1753161618072-47595bed770f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBvbmxpbmUlMjBzaG9wfGVufDF8fHx8MTc3NTYxMTI0OXww&ixlib=rb-4.1.0&q=80&w=400",
    price: 12.99,
    originalPrice: 24.99,
    discount: 48,
    rating: 4.7,
    reviews: 5421,
    sold: 12300,
    location: "Metro Manila",
    freeShipping: true,
    shopMall: true,
    category: "Fashion",
  },
  {
    id: 102,
    name: "Samsung Galaxy Smartphone Pro Max",
    image: "https://images.unsplash.com/photo-1771325085597-83cb49767a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjBzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzU2MTEyNDl8MA&ixlib=rb-4.1.0&q=80&w=400",
    price: 399.0,
    originalPrice: 599.0,
    discount: 33,
    rating: 4.9,
    reviews: 2849,
    sold: 3400,
    location: "Makati City",
    freeShipping: true,
    shopMall: true,
    category: "Electronics",
  },
  {
    id: 103,
    name: "Hydrating Vitamin C Serum 30ml",
    image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBza2luY2FyZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzc1NTMxNzM0fDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 8.5,
    originalPrice: 18.0,
    discount: 53,
    rating: 4.8,
    reviews: 9823,
    sold: 45600,
    location: "Quezon City",
    freeShipping: true,
    category: "Beauty",
  },
  {
    id: 104,
    name: "Minimalist Sofa Set Modern Design",
    image: "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlJTIwaW50ZXJpb3IlMjBkZWNvcnxlbnwxfHx8fDE3NzU1MzgwNDB8MA&ixlib=rb-4.1.0&q=80&w=400",
    price: 249.0,
    originalPrice: 450.0,
    discount: 45,
    rating: 4.6,
    reviews: 1234,
    sold: 890,
    location: "Pasig City",
    freeShipping: false,
    category: "Home & Living",
  },
  {
    id: 105,
    name: "Trail Running Shoes Lightweight V2",
    image: "https://images.unsplash.com/photo-1762690285055-fa80848e825b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzaG9lcyUyMGF0aGxldGljJTIwZm9vdHdlYXJ8ZW58MXx8fHwxNzc1NjExMjUyfDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 45.0,
    originalPrice: 85.0,
    discount: 47,
    rating: 4.7,
    reviews: 3421,
    sold: 8900,
    location: "Cebu City",
    freeShipping: true,
    category: "Sports",
  },
  {
    id: 106,
    name: "Wireless Noise Canceling Headphones",
    image: "https://images.unsplash.com/photo-1765279360461-e6b8199b906c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBhdWRpbyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc1NTYwMjc1fDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    rating: 4.8,
    reviews: 7654,
    sold: 23400,
    location: "Taguig City",
    freeShipping: true,
    shopMall: true,
    category: "Electronics",
  },
  {
    id: 107,
    name: "Designer Leather Tote Bag Premium",
    image: "https://images.unsplash.com/photo-1774259479601-69a44c70bed1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhhbmRiYWclMjBsZWF0aGVyJTIwZmFzaGlvbiUyMGFjY2Vzc29yeXxlbnwxfHx8fDE3NzU2MTEyNTd8MA&ixlib=rb-4.1.0&q=80&w=400",
    price: 35.0,
    originalPrice: 70.0,
    discount: 50,
    rating: 4.5,
    reviews: 2109,
    sold: 5600,
    location: "BGC Manila",
    freeShipping: true,
    category: "Fashion",
  },
  {
    id: 108,
    name: "MacBook Pro Laptop Stand Aluminum",
    image: "https://images.unsplash.com/photo-1650387248585-7c0c9ac6688b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2slMjB0ZWNofGVufDF8fHx8MTc3NTYxMTI1N3ww&ixlib=rb-4.1.0&q=80&w=400",
    price: 28.5,
    originalPrice: 55.0,
    discount: 48,
    rating: 4.9,
    reviews: 4321,
    sold: 11200,
    location: "Mandaluyong",
    freeShipping: true,
    shopMall: true,
    category: "Electronics",
  },
  {
    id: 109,
    name: "Non-Stick Cookware Set 5 Pieces",
    image: "https://images.unsplash.com/photo-1773098587028-370ff3c207d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY29va3dhcmUlMjBjb29raW5nJTIwdXRlbnNpbHN8ZW58MXx8fHwxNzc1NjExMjU5fDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 55.0,
    originalPrice: 95.0,
    discount: 42,
    rating: 4.7,
    reviews: 1823,
    sold: 4500,
    location: "Muntinlupa",
    freeShipping: true,
    category: "Home & Living",
  },
  {
    id: 110,
    name: "LEGO Creator Expert Set Kids",
    image: "https://images.unsplash.com/photo-1725297951080-47e72ef3f788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwdG95cyUyMGNoaWxkcmVuJTIwcHJvZHVjdCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NTYxMTI2MHww&ixlib=rb-4.1.0&q=80&w=400",
    price: 32.0,
    originalPrice: 60.0,
    discount: 47,
    rating: 4.9,
    reviews: 6789,
    sold: 15600,
    location: "Antipolo City",
    freeShipping: true,
    category: "Babies & Toys",
  },
  {
    id: 111,
    name: "Automatic Luxury Wrist Watch Men",
    image: "https://images.unsplash.com/photo-1639564879163-a2a85682410e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHRpbWVwaWVjZSUyMHdyaXN0fGVufDF8fHx8MTc3NTYxMTI2MHww&ixlib=rb-4.1.0&q=80&w=400",
    price: 115.0,
    originalPrice: 320.0,
    discount: 64,
    rating: 4.8,
    reviews: 3210,
    sold: 7800,
    location: "Parañaque City",
    freeShipping: true,
    shopMall: true,
    category: "Watches",
  },
  {
    id: 112,
    name: "Organic Face Moisturizer SPF 50+",
    image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBza2luY2FyZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzc1NTMxNzM0fDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 11.0,
    originalPrice: 22.0,
    discount: 50,
    rating: 4.6,
    reviews: 4532,
    sold: 19800,
    location: "Caloocan City",
    freeShipping: true,
    category: "Beauty",
  },
  {
    id: 113,
    name: "Yoga Mat Non-Slip Professional 6mm",
    image: "https://images.unsplash.com/photo-1762690285055-fa80848e825b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzaG9lcyUyMGF0aGxldGljJTIwZm9vdHdlYXJ8ZW58MXx8fHwxNzc1NjExMjUyfDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 18.99,
    originalPrice: 35.0,
    discount: 46,
    rating: 4.7,
    reviews: 8901,
    sold: 34500,
    location: "Las Piñas City",
    freeShipping: true,
    category: "Sports",
  },
  {
    id: 114,
    name: "Instant Coffee Premium Blend Pack",
    image: "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGJhbm5lciUyMHNhbGUlMjBwcm9tb3Rpb258ZW58MXx8fHwxNzc1NjExMjQ4fDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 6.5,
    originalPrice: 12.0,
    discount: 46,
    rating: 4.5,
    reviews: 12304,
    sold: 56700,
    location: "Valenzuela City",
    freeShipping: false,
    category: "Food & Drinks",
  },
  {
    id: 115,
    name: "LED Gaming Mouse RGB 16000 DPI",
    image: "https://images.unsplash.com/photo-1771325085597-83cb49767a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjBzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzU2MTEyNDl8MA&ixlib=rb-4.1.0&q=80&w=400",
    price: 22.0,
    originalPrice: 45.0,
    discount: 51,
    rating: 4.8,
    reviews: 5670,
    sold: 18900,
    location: "San Juan City",
    freeShipping: true,
    category: "Electronics",
  },
];

// Toast notification component
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-pulse">
      <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="text-gray-400 hover:text-white ml-2">✕</button>
    </div>
  );
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`${product.name.slice(0, 30)}... added to cart!`);
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.product.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i))
      );
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory("");
    if (query) {
      document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");
    document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />

      <main className="max-w-7xl mx-auto px-4 py-4">
        {/* Hero */}
        <HeroBanner />

        {/* Category Grid */}
        <CategoryGrid onCategorySelect={handleCategorySelect} />

        {/* Promotional Banner Strip */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { bg: "from-orange-400 to-red-500", icon: "🔥", title: "Flash Deals", sub: "Hourly Discounts" },
            { bg: "from-purple-500 to-pink-500", icon: "👑", title: "Shoppee Mall", sub: "Authentic Brands" },
            { bg: "from-blue-500 to-cyan-500", icon: "🚚", title: "Free Shipping", sub: "Orders over $25" },
          ].map((b) => (
            <div
              key={b.title}
              className={`bg-gradient-to-r ${b.bg} rounded-lg p-4 text-white cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-3`}
            >
              <span className="text-3xl">{b.icon}</span>
              <div>
                <p className="font-bold">{b.title}</p>
                <p className="text-white/80 text-sm">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flash Sale */}
        <FlashSale onAddToCart={addToCart} />

        {/* Products */}
        <div id="products-section">
          <ProductGrid
            products={allProducts}
            onAddToCart={addToCart}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </div>
      </main>

      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {/* Toast */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
