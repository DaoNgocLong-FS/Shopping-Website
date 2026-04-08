import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGJhbm5lciUyMHNhbGUlMjBwcm9tb3Rpb258ZW58MXx8fHwxNzc1NjExMjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "MEGA SALE",
    subtitle: "Up to 90% OFF",
    badge: "TODAY ONLY",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1765814734909-ba21cdbc4c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBzYWxlJTIwZGlzY291bnQlMjBzaG9wcGluZyUyMHByb21vdGlvbmFsJTIwYmFubmVyJTIwb3JhbmdlfGVufDF8fHx8MTc3NTYxMTI2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "SUMMER DEALS",
    subtitle: "New Arrivals Daily",
    badge: "FREE SHIPPING",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1753161618072-47595bed770f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBvbmxpbmUlMjBzaG9wfGVufDF8fHx8MTc3NTYxMTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "FASHION WEEK",
    subtitle: "Trending Styles 2026",
    badge: "NEW SEASON",
  },
];

const miniAds = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1771325085597-83cb49767a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjBzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzU2MTEyNDl8MA&ixlib=rb-4.1.0&q=80&w=400",
    tag: "🔥 Electronics",
    label: "Up to 60% off",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBza2luY2FyZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzc1NTMxNzM0fDA&ixlib=rb-4.1.0&q=80&w=400",
    tag: "✨ Beauty",
    label: "Buy 2 Get 1 Free",
  },
];

export function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrentBanner((p) => (p - 1 + banners.length) % banners.length);
  const next = () => setCurrentBanner((p) => (p + 1) % banners.length);

  return (
    <div className="flex gap-2 mb-4">
      {/* Main carousel */}
      <div className="relative flex-1 rounded-lg overflow-hidden" style={{ height: 320 }}>
        {banners.map((b, i) => (
          <div
            key={b.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === currentBanner ? "opacity-100" : "opacity-0"}`}
          >
            <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-center px-10">
              <span className="bg-[#ee4d2d] text-white text-xs font-bold px-2 py-0.5 rounded w-fit mb-3">
                {b.badge}
              </span>
              <h2 className="text-white text-5xl font-black drop-shadow-lg">{b.title}</h2>
              <p className="text-white/90 text-xl mt-1 drop-shadow">{b.subtitle}</p>
              <button className="mt-4 bg-[#ee4d2d] hover:bg-[#d73211] text-white px-6 py-2 rounded w-fit transition-colors font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        ))}
        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBanner(i)}
              className={`rounded-full transition-all ${i === currentBanner ? "bg-white w-4 h-1.5" : "bg-white/50 w-1.5 h-1.5"}`}
            />
          ))}
        </div>
      </div>

      {/* Mini ads */}
      <div className="flex flex-col gap-2 w-52 flex-shrink-0">
        {miniAds.map((ad) => (
          <div key={ad.id} className="relative rounded-lg overflow-hidden cursor-pointer group flex-1">
            <img src={ad.image} alt={ad.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
              <span className="text-white font-bold text-sm">{ad.tag}</span>
              <span className="text-white/90 text-xs">{ad.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
