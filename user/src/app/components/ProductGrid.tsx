import { ProductCard, Product } from "./ProductCard";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  searchQuery: string;
  selectedCategory: string;
}

const sortOptions = ["Relevant", "Latest", "Top Sales", "Price: Low to High", "Price: High to Low"];

export function ProductGrid({ products, onAddToCart, searchQuery, selectedCategory }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("Relevant");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  let filtered = products;

  if (searchQuery) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedCategory) {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (priceMin) {
    filtered = filtered.filter((p) => p.price >= parseFloat(priceMin));
  }
  if (priceMax) {
    filtered = filtered.filter((p) => p.price <= parseFloat(priceMax));
  }

  // Sort
  if (sortBy === "Latest") filtered = [...filtered].reverse();
  if (sortBy === "Top Sales") filtered = [...filtered].sort((a, b) => b.sold - a.sold);
  if (sortBy === "Price: Low to High") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === "Price: High to Low") filtered = [...filtered].sort((a, b) => b.price - a.price);

  const title = selectedCategory || (searchQuery ? `Results for "${searchQuery}"` : "RECOMMENDED FOR YOU");

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-100 p-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-gray-600">
          <SlidersHorizontal size={16} />
          <span className="font-bold text-gray-800 text-sm uppercase tracking-wide">{title}</span>
          {(searchQuery || selectedCategory) && (
            <span className="text-gray-400 text-sm">({filtered.length} items)</span>
          )}
        </div>

        {/* Sort options */}
        <div className="flex items-center gap-2 ml-auto flex-wrap">
          <span className="text-gray-500 text-sm">Sort by:</span>
          {sortOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSortBy(opt)}
              className={`text-sm px-3 py-1 rounded transition-colors ${
                sortBy === opt
                  ? "bg-[#ee4d2d] text-white"
                  : "text-gray-600 hover:text-[#ee4d2d] border border-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Price filter */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Price:</span>
          <input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            className="w-16 border border-gray-200 rounded px-2 py-1 text-xs outline-none focus:border-[#ee4d2d]"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            className="w-16 border border-gray-200 rounded px-2 py-1 text-xs outline-none focus:border-[#ee4d2d]"
          />
          <button className="bg-[#ee4d2d] text-white text-xs px-3 py-1 rounded hover:bg-[#d73211] transition-colors">
            Apply
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="p-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🛒</p>
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm mt-1">Try searching for something else</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>

      {filtered.length > 0 && (
        <div className="border-t border-gray-100 p-4 flex justify-center">
          <button className="border border-[#ee4d2d] text-[#ee4d2d] px-8 py-2 rounded hover:bg-[#ee4d2d] hover:text-white transition-colors text-sm">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
