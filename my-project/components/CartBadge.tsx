"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function CartBadge() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center text-amber-700 hover:text-amber-800 font-medium transition-colors"
    >
      <span className="text-xl">🛒</span>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
      <span className="ml-1">Cart</span>
    </Link>
  );
}
