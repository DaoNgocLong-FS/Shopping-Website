import { useState } from "react";
import {
  ShoppingCart,
  Bell,
  Search,
  ChevronDown,
  Heart,
  Store,
  MessageCircle,
  Globe,
  HelpCircle,
  Download,
  Smartphone,
} from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

const trendingSearches = [
  "Wireless Earbuds",
  "Summer Dress",
  "Laptop Stand",
  "Skincare Set",
  "Running Shoes",
];

export function Header({ cartCount, onCartClick, onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-[#ee4d2d] sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-1 text-white/80 text-xs border-b border-white/20">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <Store size={12} />
              <span>Seller Centre</span>
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <Download size={12} />
              <span>Download</span>
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <Smartphone size={12} />
              <span>Mobile App</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <Bell size={12} />
              <span>Notifications</span>
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <HelpCircle size={12} />
              <span>Help</span>
            </a>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer">
              <Globe size={12} />
              <span>English</span>
              <ChevronDown size={10} />
            </div>
            <span className="text-white/40">|</span>
            <div
              className="relative"
              onMouseEnter={() => setIsUserMenuOpen(true)}
              onMouseLeave={() => setIsUserMenuOpen(false)}
            >
              <button className="hover:text-white transition-colors flex items-center gap-1">
                <span>Sign Up</span>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white text-gray-700 rounded shadow-lg py-2 w-36 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">My Account</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">Purchase</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">Following Shops</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">My Coins</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">My Vouchers</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-sm">Logout</a>
                </div>
              )}
            </div>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:text-white transition-colors font-medium">Log In</a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center gap-6 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-1">
              <div className="text-white font-black text-3xl tracking-tight" style={{ fontFamily: "serif" }}>
                <span className="italic">Shoppee</span>
              </div>
            </a>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              {/* Trending below input */}
              <div className="flex items-center bg-white rounded overflow-hidden shadow-sm">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={trendingSearches[Math.floor(Date.now() / 5000) % trendingSearches.length]}
                  className="flex-1 px-4 py-2.5 text-sm text-gray-700 outline-none placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-[#ee4d2d] hover:bg-[#d73211] text-white px-5 py-2.5 transition-colors flex items-center gap-2"
                >
                  <Search size={18} />
                </button>
              </div>
              {/* Trending searches */}
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => { setSearchQuery(term); onSearch(term); }}
                    className="text-white/80 hover:text-white text-xs transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </form>

          {/* Right icons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button className="text-white hover:text-white/80 transition-colors">
              <Heart size={24} />
            </button>
            <button
              className="text-white hover:text-white/80 transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-[#ee4d2d] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>
            <button className="text-white hover:text-white/80 transition-colors relative">
              <MessageCircle size={24} />
              <span className="absolute -top-1 -right-1 bg-white text-[#ee4d2d] text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <nav className="bg-[#d73211]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 py-1.5 text-white/90 text-xs overflow-x-auto scrollbar-hide">
            {[
              "Flash Sale",
              "Shoppee Mall",
              "Groceries",
              "Free Shipping",
              "Live Now",
              "Vouchers",
              "Coins",
              "Games",
              "Travel & Hotel",
              "Shoppee Pay",
              "Best Deals",
              "New Arrivals",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="whitespace-nowrap hover:text-white transition-colors py-0.5 border-b border-transparent hover:border-white/60"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
