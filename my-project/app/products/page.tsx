import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS, CATEGORIES, PRICE_RANGES } from "@/lib/data";

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="products" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">🌟 Trending This Week</h2>
          <p className="text-amber-50">Discover the most popular handcrafted items loved by our community</p>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketplace</h1>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-lg text-gray-600">Browse {PRODUCTS.length}+ handcrafted treasures from talented artisans</p>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
              <option>Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="mb-8">
          <input type="text" placeholder="Search products..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-amber-700" defaultChecked={category === "All"} />
                      <span className="ml-3 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <label key={range} className="flex items-center cursor-pointer">
                      <input type="radio" name="price" className="w-4 h-4 text-amber-700" defaultChecked={range === "All Prices"} />
                      <span className="ml-3 text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Rating</h3>
                <div className="space-y-2">
                  {["4.5+ ⭐", "4.0+ ⭐", "3.5+ ⭐", "All Ratings"].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-amber-700" defaultChecked={rating === "All Ratings"} />
                      <span className="ml-3 text-gray-700">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col group">
                    <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">
                      {product.image}
                      {!product.stock && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold">Out of Stock</span>
                        </div>
                      )}
                      {product.rating === 5.0 && (
                        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">⭐ Bestseller</div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-700">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.seller}</p>
                      <p className="text-xs text-gray-500 mb-3 bg-gray-100 w-fit px-2 py-1 rounded">{product.category}</p>
                      <div className="flex items-center gap-1 text-sm mb-3">
                        <span className="text-yellow-500">⭐ {product.rating}</span>
                        <span className="text-gray-500">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
                        <div>
                          <p className="text-lg font-bold text-amber-700">${product.price}</p>
                          {product.stock && <p className="text-xs text-green-600 font-medium">In Stock</p>}
                        </div>
                        <span className={`${product.stock ? "bg-amber-700" : "bg-gray-400"} text-white px-3 py-2 rounded-lg text-sm font-medium`}>
                          {product.stock ? "View" : "Sold"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Previous</button>
              <button className="px-4 py-2 bg-amber-700 text-white rounded-lg font-medium">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Next</button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <p className="text-3xl mb-2">🚚</p>
                <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
                <p className="text-gray-600 text-sm">On orders over $75</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <p className="text-3xl mb-2">✨</p>
                <h3 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">Every item is authentically handmade</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <p className="text-3xl mb-2">🔄</p>
                <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
                <p className="text-gray-600 text-sm">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
