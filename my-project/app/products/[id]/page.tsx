'use client';

import Link from "next/link";

const PRODUCTS: Record<number, any> = {
  1: { name: "Handmade Ceramic Vase", price: 89.99, image: "🏺", seller: "Clay Artistry", sellerId: 1, category: "Home Décor", rating: 4.8, reviews: 24, description: "Beautiful ceramic vase hand-thrown and glazed. Perfect for flowers or as a standalone decorative piece.", inStock: true },
  2: { name: "Wooden Cutting Board", price: 54.99, image: "🪵", seller: "Wood Crafters", sellerId: 2, category: "Kitchen", rating: 4.9, reviews: 18, description: "Premium hardwood cutting board made from sustainably sourced materials. Food-safe and durable.", inStock: true },
  3: { name: "Leather Journal", price: 34.99, image: "📔", seller: "Leather Works", sellerId: 3, category: "Stationery", rating: 4.7, reviews: 42, description: "Genuine leather journal with handstitched binding. Perfect for writers and travelers.", inStock: true },
  4: { name: "Knitted Wool Blanket", price: 129.99, image: "🧶", seller: "Cozy Creations", sellerId: 4, category: "Home Décor", rating: 5.0, reviews: 15, description: "Cozy wool blanket hand-knitted with natural fibers. Warm and luxuriously soft.", inStock: false },
  5: { name: "Hand-Painted Mug", price: 24.99, image: "☕", seller: "Painted Pottery", sellerId: 5, category: "Kitchen", rating: 4.6, reviews: 31, description: "Unique ceramic mug with hand-painted design. Each one is one-of-a-kind.", inStock: true },
  6: { name: "Macramé Wall Hanging", price: 64.99, image: "🪡", seller: "Fiber Arts", sellerId: 1, category: "Home Décor", rating: 4.8, reviews: 12, description: "Beautiful macramé wall hanging made from natural cotton cord. Bohemian style décor.", inStock: true },
  7: { name: "Handmade Soap Set", price: 39.99, image: "🧼", seller: "Natural Beauty", sellerId: 6, category: "Personal Care", rating: 4.9, reviews: 67, description: "Set of 5 artisan soaps made from organic ingredients. Gentle on skin, eco-friendly packaging.", inStock: true },
  8: { name: "Wooden Jewelry Box", price: 79.99, image: "💎", seller: "Wood Crafters", sellerId: 2, category: "Accessories", rating: 4.7, reviews: 9, description: "Hand-carved wooden jewelry box with velvet lining. Perfect gift for jewelry lovers.", inStock: true },
};

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = PRODUCTS[parseInt(params.id)];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-amber-700 hover:text-amber-800">
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-amber-800">
              🎨 Handcrafted Haven
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-700 hover:text-amber-700">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-amber-700">Marketplace</Link>
              <Link href="/sellers" className="text-gray-700 hover:text-amber-700">Sellers</Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-700">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-700">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/products" className="text-amber-700 hover:text-amber-800 mb-6 inline-block">
          ← Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center text-9xl">
            {product.image}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-yellow-500">⭐ {product.rating}</span>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-amber-700">${product.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700">Availability:</p>
                <p className={product.inStock ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>

            {/* Seller Info */}
            <div className="border-t border-gray-200 pt-6 mb-6">
              <p className="text-sm text-gray-600 mb-3">By</p>
              <Link href={`/sellers/${product.sellerId}`}>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="text-4xl">👤</div>
                  <div>
                    <p className="font-bold text-gray-900">{product.seller}</p>
                    <p className="text-sm text-gray-600">View seller profile</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-amber-700 text-white py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-amber-700 text-amber-700 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                Save for Later
              </button>
            </div>

            {/* Reviews Section */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-gray-900">Sarah M.</p>
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-600">Absolutely beautiful! The craftsmanship is incredible. Highly recommend!</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-gray-900">John D.</p>
                    <span className="text-yellow-500">⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-600">Great product. Arrived quickly and well-packaged. Very happy with my purchase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
