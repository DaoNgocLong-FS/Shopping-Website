import { X, Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { Product } from "./ProductCard";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}

export function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[#ee4d2d] text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <span className="font-bold text-lg">My Cart</span>
            {count > 0 && (
              <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                {count} items
              </span>
            )}
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingBag size={64} className="mb-4 opacity-20" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Add items to get started!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3 bg-gray-50 rounded-lg p-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 text-sm line-clamp-2 leading-tight">{item.product.name}</p>
                    <p className="text-[#ee4d2d] font-bold mt-1">${item.product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:border-[#ee4d2d] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:border-[#ee4d2d] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors self-start"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 flex-shrink-0 bg-white">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600">Subtotal ({count} items)</span>
              <span className="text-[#ee4d2d] font-black text-xl">${total.toFixed(2)}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <div className="flex-1 border border-gray-200 rounded px-2 py-1 flex items-center gap-1">
                <input placeholder="Voucher code" className="flex-1 outline-none text-sm text-gray-600" />
              </div>
              <button className="border border-[#ee4d2d] text-[#ee4d2d] px-3 py-1 rounded text-sm hover:bg-[#ee4d2d] hover:text-white transition-colors">
                Apply
              </button>
            </div>
            <button className="w-full bg-[#ee4d2d] hover:bg-[#d73211] text-white py-3 rounded-lg font-bold transition-colors">
              Checkout (${total.toFixed(2)})
            </button>
          </div>
        )}
      </div>
    </>
  );
}
