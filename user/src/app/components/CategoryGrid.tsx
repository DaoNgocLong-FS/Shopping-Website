import { Zap, Shirt, Sparkles, Home, Dumbbell, Baby, Coffee, Car, Laptop, Watch, Gift, Headphones } from "lucide-react";

const categories = [
  { id: 1, label: "Electronics", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-50" },
  { id: 2, label: "Fashion", icon: Shirt, color: "text-pink-500", bg: "bg-pink-50" },
  { id: 3, label: "Beauty", icon: Sparkles, color: "text-purple-500", bg: "bg-purple-50" },
  { id: 4, label: "Home & Living", icon: Home, color: "text-blue-500", bg: "bg-blue-50" },
  { id: 5, label: "Sports", icon: Dumbbell, color: "text-green-500", bg: "bg-green-50" },
  { id: 6, label: "Babies & Toys", icon: Baby, color: "text-red-400", bg: "bg-red-50" },
  { id: 7, label: "Food & Drinks", icon: Coffee, color: "text-orange-500", bg: "bg-orange-50" },
  { id: 8, label: "Automotive", icon: Car, color: "text-gray-600", bg: "bg-gray-100" },
  { id: 9, label: "Computers", icon: Laptop, color: "text-indigo-500", bg: "bg-indigo-50" },
  { id: 10, label: "Watches", icon: Watch, color: "text-teal-500", bg: "bg-teal-50" },
  { id: 11, label: "Gifts", icon: Gift, color: "text-rose-500", bg: "bg-rose-50" },
  { id: 12, label: "Audio", icon: Headphones, color: "text-cyan-500", bg: "bg-cyan-50" },
];

interface CategoryGridProps {
  onCategorySelect: (category: string) => void;
}

export function CategoryGrid({ onCategorySelect }: CategoryGridProps) {
  return (
    <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
      <h2 className="text-gray-800 font-bold mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-[#ee4d2d] rounded-full inline-block"></span>
        CATEGORIES
      </h2>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => onCategorySelect(cat.label)}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className={`${cat.bg} ${cat.color} w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                <Icon size={22} />
              </div>
              <span className="text-gray-600 text-xs text-center leading-tight group-hover:text-[#ee4d2d] transition-colors whitespace-nowrap">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
