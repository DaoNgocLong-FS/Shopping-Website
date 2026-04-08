import { Star, Heart, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  sold: number;
  location: string;
  freeShipping: boolean;
  shopMall?: boolean;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer relative">
      {/* Wishlist */}
      <button
        className={`absolute top-2 right-2 z-10 p-1.5 rounded-full shadow transition-all ${
          isWishlisted ? "bg-[#ee4d2d] text-white" : "bg-white/80 text-gray-400 opacity-0 group-hover:opacity-100"
        }`}
        onClick={(e) => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
      >
        <Heart size={14} fill={isWishlisted ? "currentColor" : "none"} />
      </button>

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount > 0 && (
          <span className="absolute top-1 left-1 bg-[#ee4d2d] text-white text-xs font-bold px-1.5 py-0.5 rounded">
            -{product.discount}%
          </span>
        )}
        {product.shopMall && (
          <span className="absolute bottom-1 left-1 bg-[#ee4d2d] text-white text-xs font-black px-1.5 py-0.5 rounded tracking-wide" style={{ fontSize: "9px" }}>
            MALL
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute bottom-2 right-2 bg-[#ee4d2d] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-[#d73211]"
        >
          <ShoppingCart size={14} />
        </button>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-gray-800 text-sm line-clamp-2 leading-tight mb-2 min-h-[2.5rem]">
          {product.name}
        </p>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#ee4d2d] font-bold text-base">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-gray-400 text-xs line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={11}
                className={star <= Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}
              />
            ))}
          </div>
          <span className="text-gray-400 text-xs">({product.reviews.toLocaleString()})</span>
          <span className="text-gray-400 text-xs ml-auto">{product.sold > 1000 ? `${(product.sold / 1000).toFixed(1)}k` : product.sold} sold</span>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="text-gray-400 text-xs">{product.location}</span>
          {product.freeShipping && (
            <span className="flex items-center gap-0.5 text-green-600 text-xs">
              <Truck size={11} />
              <span>Free</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
