import Link from "next/link";

const SELLERS = [
  { id: 1, name: "Clay Artistry", rating: 4.8, products: 24, joined: "2022", description: "Specializing in hand-thrown ceramic art", location: "Portland, OR" },
  { id: 2, name: "Wood Crafters", rating: 4.9, products: 18, joined: "2021", description: "Premium hardwood furniture and kitchen items", location: "Vermont, USA" },
  { id: 3, name: "Leather Works", rating: 4.7, products: 12, joined: "2023", description: "Handcrafted leather goods and accessories", location: "Buenos Aires, Argentina" },
  { id: 4, name: "Cozy Creations", rating: 5.0, products: 8, joined: "2023", description: "Hand-knitted blankets and home textiles", location: "Seattle, WA" },
  { id: 5, name: "Painted Pottery", rating: 4.6, products: 31, joined: "2020", description: "Unique hand-painted ceramic pieces", location: "Oaxaca, Mexico" },
  { id: 6, name: "Natural Beauty", rating: 4.9, products: 15, joined: "2022", description: "Organic handmade soaps and skincare", location: "Boulder, CO" },
  { id: 7, name: "Artisan Jewelry", rating: 4.8, products: 22, joined: "2021", description: "Handcrafted beaded and metal jewelry", location: "Santa Fe, NM" },
  { id: 8, name: "Fiber Arts", rating: 4.9, products: 19, joined: "2020", description: "Hand-woven textiles and wall hangings", location: "Oakland, CA" },
  { id: 9, name: "Woodworking Studio", rating: 4.7, products: 16, joined: "2022", description: "Precision woodwork and wooden toys", location: "Asheville, NC" },
  { id: 10, name: "Glass Creations", rating: 4.8, products: 14, joined: "2023", description: "Hand-blown glass art and functional pieces", location: "Corning, NY" },
  { id: 11, name: "Textile Design", rating: 4.9, products: 20, joined: "2021", description: "Hand-dyed and printed fabrics", location: "Austin, TX" },
  { id: 12, name: "Metal Works", rating: 4.7, products: 11, joined: "2022", description: "Forged metal art and home décor", location: "Missoula, MT" },
];

export default function Sellers() {
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
              <Link href="/sellers" className="text-amber-700 font-semibold">Sellers</Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-700">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-700">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Artisans</h1>
          <p className="text-lg text-gray-600">Meet the talented creators behind our {SELLERS.length}+ handcrafted treasures</p>
        </div>

        {/* Featured Sellers Highlight */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {SELLERS.slice(0, 3).map((seller) => (
              <Link key={seller.id} href={`/sellers/${seller.id}`}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-amber-200 overflow-hidden cursor-pointer h-full">
                  <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-6xl">
                    🎨
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{seller.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">📍 {seller.location}</p>
                    <p className="text-gray-600 text-sm mb-4">{seller.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-amber-200">
                      <div>
                        <p className="text-xs text-gray-600">Rating</p>
                        <p className="font-bold text-amber-700">⭐ {seller.rating}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Products</p>
                        <p className="font-bold text-gray-900">{seller.products}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Since</p>
                        <p className="font-bold text-gray-900">{seller.joined}</p>
                      </div>
                    </div>

                    <button className="w-full bg-amber-700 text-white py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Sellers Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELLERS.map((seller) => (
              <Link key={seller.id} href={`/sellers/${seller.id}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden cursor-pointer h-full">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">
                    🎨
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{seller.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">📍 {seller.location}</p>
                    <p className="text-gray-600 text-sm mb-4">{seller.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                      <div>
                        <p className="text-xs text-gray-600">Rating</p>
                        <p className="font-bold text-amber-700">⭐ {seller.rating}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Products</p>
                        <p className="font-bold text-gray-900">{seller.products}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Member Since</p>
                        <p className="font-bold text-gray-900">{seller.joined}</p>
                      </div>
                    </div>

                    <button className="w-full bg-amber-700 text-white py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-amber-700 to-orange-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become a Seller?</h2>
          <p className="mb-8 text-amber-50 max-w-2xl mx-auto">
            Join our community of talented artisans. Reach customers worldwide and turn your passion into a thriving business.
          </p>
          <Link href="/auth/signup" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-amber-700 font-medium hover:bg-amber-50 transition-colors">
            Start Selling Today
          </Link>
        </section>
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
                <li><Link href="/sellers" className="hover:text-white transition-colors">Artisans</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">New Sellers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Sell</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Become a Seller</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Seller Dashboard</a></li>
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
