import Link from "next/link";

const PRODUCTS = [
  { id: 1, name: "Handmade Ceramic Vase", price: 89.99, image: "🏺", seller: "Clay Artistry", category: "Home Décor", rating: 4.8, reviews: 127, stock: true },
  { id: 2, name: "Wooden Cutting Board", price: 54.99, image: "🪵", seller: "Wood Crafters", category: "Kitchen", rating: 4.9, reviews: 203, stock: true },
  { id: 3, name: "Leather Journal", price: 34.99, image: "📔", seller: "Leather Works", category: "Stationery", rating: 4.7, reviews: 89, stock: true },
  { id: 4, name: "Knitted Wool Blanket", price: 129.99, image: "🧶", seller: "Cozy Creations", category: "Home Décor", rating: 5.0, reviews: 312, stock: true },
  { id: 5, name: "Hand-Painted Mug", price: 24.99, image: "☕", seller: "Painted Pottery", category: "Kitchen", rating: 4.6, reviews: 156, stock: true },
  { id: 6, name: "Macramé Wall Hanging", price: 64.99, image: "🪡", seller: "Fiber Arts", category: "Home Décor", rating: 4.8, reviews: 98, stock: true },
  { id: 7, name: "Handmade Soap Set", price: 39.99, image: "🧼", seller: "Natural Beauty", category: "Personal Care", rating: 4.9, reviews: 234, stock: true },
  { id: 8, name: "Wooden Jewelry Box", price: 79.99, image: "💎", seller: "Wood Crafters", category: "Accessories", rating: 4.7, reviews: 112, stock: true },
  { id: 9, name: "Hand-Knit Sweater", price: 149.99, image: "👕", seller: "Cozy Creations", category: "Clothing", rating: 4.9, reviews: 178, stock: true },
  { id: 10, name: "Ceramic Dinner Set", price: 189.99, image: "🍽️", seller: "Clay Artistry", category: "Kitchen", rating: 4.8, reviews: 267, stock: true },
  { id: 11, name: "Leather Wallet", price: 44.99, image: "👜", seller: "Leather Works", category: "Accessories", rating: 4.8, reviews: 195, stock: true },
  { id: 12, name: "Handmade Candles", price: 29.99, image: "🕯️", seller: "Natural Beauty", category: "Personal Care", rating: 4.9, reviews: 341, stock: true },
  { id: 13, name: "Wood Carving Art", price: 199.99, image: "🎨", seller: "Wood Crafters", category: "Art", rating: 5.0, reviews: 87, stock: true },
  { id: 14, name: "Beaded Necklace", price: 49.99, image: "📿", seller: "Artisan Jewelry", category: "Accessories", rating: 4.7, reviews: 134, stock: true },
  { id: 15, name: "Hand-Woven Rug", price: 299.99, image: "🏠", seller: "Fiber Arts", category: "Home Décor", rating: 4.9, reviews: 156, stock: false },
  { id: 16, name: "Pottery Dinnerware", price: 159.99, image: "🥘", seller: "Painted Pottery", category: "Kitchen", rating: 4.8, reviews: 223, stock: true },
  { id: 17, name: "Leather Bookmark", price: 14.99, image: "📚", seller: "Leather Works", category: "Stationery", rating: 4.9, reviews: 278, stock: true },
  { id: 18, name: "Hand-Stamped Jewelry", price: 59.99, image: "⌚", seller: "Artisan Jewelry", category: "Accessories", rating: 4.8, reviews: 201, stock: true },
  { id: 19, name: "Wooden Spoon Set", price: 34.99, image: "🥄", seller: "Wood Crafters", category: "Kitchen", rating: 4.7, reviews: 145, stock: true },
  { id: 20, name: "Natural Bath Bombs", price: 24.99, image: "🛁", seller: "Natural Beauty", category: "Personal Care", rating: 4.9, reviews: 289, stock: true },
  { id: 21, name: "Glass Terrarium", price: 44.99, image: "🌿", seller: "Plant Artisans", category: "Home Décor", rating: 4.8, reviews: 167, stock: true },
  { id: 22, name: "Embroidered Pillowcase", price: 39.99, image: "🧵", seller: "Thread & Needle", category: "Home Décor", rating: 4.9, reviews: 198, stock: true },
  { id: 23, name: "Handwoven Basket", price: 74.99, image: "🧺", seller: "Basket Works", category: "Home Décor", rating: 4.7, reviews: 112, stock: true },
  { id: 24, name: "Ceramic Mug Set", price: 59.99, image: "🍵", seller: "Clay Artistry", category: "Kitchen", rating: 4.9, reviews: 256, stock: true },
  { id: 25, name: "Wooden Cutting Knife", price: 29.99, image: "🔪", seller: "Wood Crafters", category: "Kitchen", rating: 4.8, reviews: 134, stock: true },
  { id: 26, name: "Leather Phone Case", price: 34.99, image: "📱", seller: "Leather Works", category: "Accessories", rating: 4.6, reviews: 89, stock: true },
  { id: 27, name: "Scented Room Diffuser", price: 32.99, image: "🌸", seller: "Natural Beauty", category: "Personal Care", rating: 4.9, reviews: 267, stock: true },
  { id: 28, name: "Hand-Dyed Scarf", price: 49.99, image: "🧣", seller: "Fiber Arts", category: "Clothing", rating: 4.8, reviews: 145, stock: true },
  { id: 29, name: "Wooden Picture Frame", price: 24.99, image: "🖼️", seller: "Wood Crafters", category: "Home Décor", rating: 4.7, reviews: 98, stock: true },
  { id: 30, name: "Artisan Honey Jar", price: 19.99, image: "🍯", seller: "Local Honey Co", category: "Personal Care", rating: 4.9, reviews: 334, stock: true },
  { id: 31, name: "Leather Desk Pad", price: 89.99, image: "🪑", seller: "Leather Works", category: "Accessories", rating: 4.8, reviews: 76, stock: true },
  { id: 32, name: "Handmade Bookmark Set", price: 17.99, image: "🎀", seller: "Thread & Needle", category: "Stationery", rating: 4.9, reviews: 213, stock: true },
  { id: 33, name: "Ceramic Planter", price: 44.99, image: "🪴", seller: "Clay Artistry", category: "Home Décor", rating: 4.8, reviews: 189, stock: true },
  { id: 34, name: "Hand-Knit Socks", price: 19.99, image: "🧦", seller: "Cozy Creations", category: "Clothing", rating: 4.9, reviews: 287, stock: true },
  { id: 35, name: "Wooden Coaster Set", price: 22.99, image: "🪵", seller: "Wood Crafters", category: "Home Décor", rating: 4.7, reviews: 156, stock: true },
  { id: 36, name: "Copper Tea Infuser", price: 24.99, image: "☕", seller: "Artisan Crafts", category: "Kitchen", rating: 4.8, reviews: 198, stock: true },
  { id: 37, name: "Hand-Painted Plate", price: 54.99, image: "🎨", seller: "Painted Pottery", category: "Kitchen", rating: 4.9, reviews: 234, stock: true },
  { id: 38, name: "Leather Hair Clips", price: 14.99, image: "💇", seller: "Leather Works", category: "Accessories", rating: 4.8, reviews: 167, stock: true },
  { id: 39, name: "Wooden Watch", price: 99.99, image: "⌚", seller: "Wood Crafters", category: "Accessories", rating: 4.9, reviews: 145, stock: false },
  { id: 40, name: "Hand-Stamped Clay Pendant", price: 29.99, image: "💍", seller: "Artisan Jewelry", category: "Accessories", rating: 4.7, reviews: 121, stock: true },
];

const CATEGORIES = ["All", "Home Décor", "Kitchen", "Accessories", "Stationery", "Personal Care", "Clothing", "Art"];
const PRICE_RANGES = ["All Prices", "Under $50", "$50-$100", "$100-$200", "$200+"];

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
        {/* Featured Banner */}
        <div className="mb-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">🌟 Trending This Week</h2>
          <p className="text-amber-50">Discover the most popular handcrafted items loved by our community</p>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketplace</h1>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600">Browse our collection of {PRODUCTS.length}+ handcrafted treasures from talented artisans</p>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
              <option>Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-amber-700 cursor-pointer"
                        defaultChecked={category === "All"}
                      />
                      <span className="ml-3 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <label key={range} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="w-4 h-4 text-amber-700 cursor-pointer"
                        defaultChecked={range === "All Prices"}
                      />
                      <span className="ml-3 text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Rating</h3>
                <div className="space-y-2">
                  {['4.5+ ⭐', '4.0+ ⭐', '3.5+ ⭐', 'All Ratings'].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-amber-700 cursor-pointer"
                        defaultChecked={rating === 'All Ratings'}
                      />
                      <span className="ml-3 text-gray-700">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full flex flex-col group">
                    <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl overflow-hidden">
                      {product.image}
                      {!product.stock && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold">Out of Stock</span>
                        </div>
                      )}
                      {product.rating === 5.0 && (
                        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">⭐ Bestseller</div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.seller}</p>
                      <p className="text-xs text-gray-500 mb-3 bg-gray-100 w-fit px-2 py-1 rounded">{product.category}</p>
                      
                      <div className="flex items-center gap-1 text-sm mb-3">
                        <span className="text-yellow-500">⭐ {product.rating}</span>
                        <span className="text-gray-500">({product.reviews} reviews)</span>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
                        <div>
                          <p className="text-lg font-bold text-amber-700">${product.price}</p>
                          {product.stock && <p className="text-xs text-green-600 font-medium">In Stock</p>}
                        </div>
                        <button className={`${product.stock ? 'bg-amber-700 hover:bg-amber-800' : 'bg-gray-400 cursor-not-allowed'} text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors`}>
                          {product.stock ? 'View' : 'Sold'}
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50">Previous</button>
              <button className="px-4 py-2 bg-amber-700 text-white rounded-lg font-medium">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">4</button>
              <span className="text-gray-600 px-2">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Next</button>
            </div>

            {/* Info Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <p className="text-3xl mb-2">🚚</p>
                <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
                <p className="text-gray-600 text-sm">On orders over $75 to most locations</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <p className="text-3xl mb-2">✨</p>
                <h3 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm">Every item is handcrafted with care and authenticity</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <p className="text-3xl mb-2">🔄</p>
                <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
                <p className="text-gray-600 text-sm">30-day return policy for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Handcrafted Haven</h4>
              <p className="text-sm">Supporting artisans and celebrating handmade craftsmanship worldwide.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Browse</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="hover:text-white transition-colors">Marketplace</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">New Items</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Sell</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Become a Seller</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Seller Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Handcrafted Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
