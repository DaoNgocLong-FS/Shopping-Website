import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-8">
      {/* Trust badges */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🛡️", title: "Buyer Protection", desc: "Get full refund if the item doesn't match description" },
              { icon: "🚚", title: "Free Shipping", desc: "On orders over $25 with Shoppee Guaranteed" },
              { icon: "↩️", title: "Easy Returns", desc: "30-day hassle-free return policy" },
              { icon: "💳", title: "Secure Payment", desc: "Your payment is 100% secure with us" },
            ].map((b) => (
              <div key={b.title} className="flex items-center gap-3">
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{b.title}</p>
                  <p className="text-gray-500 text-xs">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-[#ee4d2d] font-black text-2xl italic mb-3">Shoppee</div>
            <p className="text-gray-500 text-sm mb-4">Your one-stop online shopping destination with millions of products at great prices.</p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-200 hover:bg-[#ee4d2d] hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Customer Service",
              links: ["Help Center", "How to Buy", "Returns & Refunds", "Contact Us", "Payment Methods", "Shoppee Guarantee"],
            },
            {
              title: "About Shoppee",
              links: ["About Us", "Careers", "Shoppee Blog", "Shoppee Policies", "Press", "Investor Relations"],
            },
            {
              title: "Payment & Shipping",
              links: ["Shoppee Pay", "Shoppee Coins", "Free Shipping", "Shoppee Express", "Gift Cards", "Promotions"],
            },
            {
              title: "Sell on Shoppee",
              links: ["Seller Centre", "Seller Education", "Shoppee Mall", "Seller Policies", "Flash Deals", "Affiliate Program"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-[#ee4d2d] text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-wrap items-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>1900-1234 (Free)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>support@shoppee.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Available in 15+ countries</span>
          </div>
          <div className="ml-auto text-xs text-gray-400">
            © 2026 Shoppee. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
