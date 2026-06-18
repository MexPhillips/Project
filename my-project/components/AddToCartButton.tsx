"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface AddToCartButtonProps {
  productId: number;
  productName: string;
  price: number;
  image: string;
  seller: string;
  inStock: boolean;
}

export default function AddToCartButton({
  productId,
  productName,
  price,
  image,
  seller,
  inStock,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      name: productName,
      price,
      image,
      quantity,
      seller,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div>
      {!inStock ? (
        <button
          disabled
          className="w-full py-3 rounded-lg font-medium bg-gray-400 text-white cursor-not-allowed"
        >
          Sold Out
        </button>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700">Quantity:</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-12 text-center border-0 outline-none"
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-lg font-medium transition-all ${
              isAdded
                ? "bg-green-600 text-white"
                : "bg-amber-700 text-white hover:bg-amber-800"
            }`}
          >
            {isAdded ? "✓ Added to Cart" : "Add to Cart"}
          </button>
        </div>
      )}
    </div>
  );
}
