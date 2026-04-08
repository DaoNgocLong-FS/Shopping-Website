import { useState, useEffect } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "./ProductCard";

interface FlashProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  sold: number;
  stock: number;
  rating: number;
}

const flashProducts: FlashProduct[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones Pro",
    image: "https://images.unsplash.com/photo-1765279360461-e6b8199b906c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBhdWRpbyUyMHByb2R1Y3R8ZW58MXx8fHwxNzc1NTYwMjc1fDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 29.99,
    originalPrice: 89.99,
    discount: 67,
    sold: 1842,
    stock: 50,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Premium Skincare Glow Set",
    image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBza2luY2FyZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzc1NTMxNzM0fDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 15.5,
    originalPrice: 45.0,
    discount: 66,
    sold: 3291,
    stock: 30,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Smart Running Shoes Lightweight",
    image: "https://images.unsplash.com/photo-1762690285055-fa80848e825b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzaG9lcyUyMGF0aGxldGljJTIwZm9vdHdlYXJ8ZW58MXx8fHwxNzc1NjExMjUyfDA&ixlib=rb-4.1.0&q=80&w=400",
    price: 38.0,
    originalPrice: 110.0,
    discount: 65,
    sold: 921,
    stock: 20,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Luxury Leather Handbag Collection",
    image: "https://images.unsplash.com/photo-1774259479601-69a44c70bed1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhhbmRiYWclMjBsZWF0aGVyJTIwZmFzaGlvbiUyMGFjY2Vzc29yeXxlbnwxfHx8fDE3NzU2MTEyNTd8MA&ixlib=rb-4.1.0&q=80&w=400",
    price: 49.99,
    originalPrice: 150.0,
    discount: 67,
    sold: 456,
    stock: 15,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Pro Gaming Laptop Ultra",
    image: "https://images.unsplash.com/photo-1650387248585-7c0c9ac6688b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2slMjB0ZWNofGVufDF8fHx8MTc3NTYxMTI1N3ww&ixlib=rb-4.1.0&q=80&w=400",
    price: 599.0,
    originalPrice: 1299.0,
    discount: 54,
    sold: 87,
    stock: 10,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Luxury Watch Timepiece Edition",
    image: "https://images.unsplash.com/photo-1639564879163-a2a85682410e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHRpbWVwaWVjZSUyMHdyaXN0fGVufDF8fHx8MTc3NTYxMTI2MHww&ixlib=rb-4.1.0&q=80&w=400",
    price: 89.0,
    originalPrice: 280.0,
    discount: 68,
    sold: 312,
    stock: 25,
    rating: 4.8,
  },
];

function getTimeLeft() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 0);
  const diff = Math.max(0, end.getTime() - now.getTime());
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { h, m, s };
}

interface FlashSaleProps {
  onAddToCart: (product: Product) => void;
}

export function FlashSale({ onAddToCart }: FlashSaleProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-[#ee4d2d] font-black text-xl tracking-wide">⚡ FLASH SALE</span>
          <div className="flex items-center gap-1 text-white">
            <span className="bg-[#222] text-white text-sm font-bold px-2 py-0.5 rounded">
              {pad(timeLeft.h)}
            </span>
            <span className="text-gray-800 font-bold">:</span>
            <span className="bg-[#222] text-white text-sm font-bold px-2 py-0.5 rounded">
              {pad(timeLeft.m)}
            </span>
            <span className="text-gray-800 font-bold">:</span>
            <span className="bg-[#222] text-white text-sm font-bold px-2 py-0.5 rounded">
              {pad(timeLeft.s)}
            </span>
          </div>
        </div>
        <a href="#" className="text-[#ee4d2d] text-sm hover:underline flex items-center gap-1">
          See All &rarr;
        </a>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {flashProducts.map((product) => {
          const soldPercent = Math.min(100, (product.sold / (product.sold + product.stock)) * 100);
          return (
            <div key={product.id} className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-1 left-1 bg-[#ee4d2d] text-white text-xs font-bold px-1.5 py-0.5 rounded">
                  -{product.discount}%
                </span>
                <button
                  onClick={() => onAddToCart({
                    ...product,
                    reviews: 0,
                    location: "Seller",
                    freeShipping: true,
                    category: "Electronics",
                  })}
                  className="absolute bottom-2 right-2 bg-[#ee4d2d] text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                >
                  <ShoppingCart size={14} />
                </button>
              </div>
              <div className="p-2">
                <p className="text-[#ee4d2d] font-bold text-sm">${product.price.toFixed(2)}</p>
                <p className="text-gray-400 text-xs line-through">${product.originalPrice.toFixed(2)}</p>
                {/* Sold bar */}
                <div className="mt-2 bg-orange-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#ee4d2d] h-full rounded-full"
                    style={{ width: `${soldPercent}%` }}
                  />
                </div>
                <p className="text-gray-500 text-xs mt-0.5">{product.sold.toLocaleString()} sold</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}