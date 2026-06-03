import Link from "next/link";

const PRODUCTS = [
  { id: 1, name: "Handmade Ceramic Vase", price: 89.99, image: "🏺", seller: "Clay Artistry", category: "Home Décor", rating: 4.8 },
  { id: 2, name: "Wooden Cutting Board", price: 54.99, image: "🪵", seller: "Wood Crafters", category: "Kitchen", rating: 4.9 },
  { id: 3, name: "Leather Journal", price: 34.99, image: "📔", seller: "Leather Works", category: "Stationery", rating: 4.7 },
  { id: 4, name: "Knitted Wool Blanket", price: 129.99, image: "🧶", seller: "Cozy Creations", category: "Home Décor", rating: 5.0 },
  { id: 5, name: "Hand-Painted Mug", price: 24.99, image: "☕", seller: "Painted Pottery", category: "Kitchen", rating: 4.6 },
  { id: 6, name: "Macramé Wall Hanging", price: 64.99, image: "🪡", seller: "Fiber Arts", category: "Home Décor", rating: 4.8 },
  { id: 7, name: "Handmade Soap Set", price: 39.99, image: "🧼", seller: "Natural Beauty", category: "Personal Care", rating: 4.9 },
  { id: 8, name: "Wooden Jewelry Box", price: 79.99, image: "💎", seller: "Wood Crafters", category: "Accessories", rating: 4.7 },
];

const CATEGORIES = ["All", "Home Décor", "Kitchen", "Accessories", "Stationery", "Personal Care"];

export default function Products() {
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
              <Link href="/products" className="text-amber-700 font-semibold">Marketplace</Link>
              <Link href="/sellers" className="text-gray-700 hover:text-amber-700">Sellers</Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-700">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-700">Contact</Link>
            </nav>
            <div className="flex gap-2">
              <Link href="/auth/signin" className="px-4 py-2 text-gray-700 hover:text-amber-700">Sign In</Link>
              <Link href="/auth/signup" className="px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800">Sign Up</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Marketplace</h1>
          <p className="text-lg text-gray-600">Browse our collection of handcrafted treasures from talented artisans</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-amber-700 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">By {product.seller}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-amber-700">${product.price}</span>
                    <span className="text-sm text-yellow-500">⭐ {product.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
