import Link from "next/link";

const SELLERS = [
  { id: 1, name: "Clay Artistry", rating: 4.8, products: 24, joined: "2022", description: "Specializing in hand-thrown ceramic art" },
  { id: 2, name: "Wood Crafters", rating: 4.9, products: 18, joined: "2021", description: "Premium hardwood furniture and kitchen items" },
  { id: 3, name: "Leather Works", rating: 4.7, products: 12, joined: "2023", description: "Handcrafted leather goods and accessories" },
  { id: 4, name: "Cozy Creations", rating: 5.0, products: 8, joined: "2023", description: "Hand-knitted blankets and home textiles" },
  { id: 5, name: "Painted Pottery", rating: 4.6, products: 31, joined: "2020", description: "Unique hand-painted ceramic pieces" },
  { id: 6, name: "Natural Beauty", rating: 4.9, products: 15, joined: "2022", description: "Organic handmade soaps and skincare" },
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
          <p className="text-lg text-gray-600">Meet the talented creators behind our handcrafted treasures</p>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SELLERS.map((seller) => (
            <Link key={seller.id} href={`/sellers/${seller.id}`}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden cursor-pointer h-full">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">
                  🎨
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{seller.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{seller.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="font-bold text-amber-700">⭐ {seller.rating}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Products</p>
                      <p className="font-bold text-gray-900">{seller.products}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Member Since</p>
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
      </main>
    </div>
  );
}
