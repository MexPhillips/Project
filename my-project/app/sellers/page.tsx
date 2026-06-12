import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SELLERS } from "@/lib/data";

export default function Sellers() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="sellers" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Artisans</h1>
          <p className="text-lg text-gray-600">Meet {SELLERS.length} talented creators behind our handcrafted treasures</p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SELLERS.slice(0, 3).map((seller) => (
              <Link key={seller.id} href={`/sellers/${seller.id}`}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-amber-200 overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-6xl">{seller.emoji}</div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{seller.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">📍 {seller.location}</p>
                    <p className="text-gray-600 text-sm mb-4">{seller.description}</p>
                    <div className="flex justify-between mb-4 pb-4 border-b border-amber-200">
                      <div><p className="text-xs text-gray-600">Rating</p><p className="font-bold text-amber-700">⭐ {seller.rating}</p></div>
                      <div><p className="text-xs text-gray-600">Products</p><p className="font-bold">{seller.products}</p></div>
                      <div><p className="text-xs text-gray-600">Since</p><p className="font-bold">{seller.joined}</p></div>
                    </div>
                    <span className="block w-full text-center bg-amber-700 text-white py-2 rounded-lg font-medium">View Profile</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Specialty</h2>
          <div className="flex flex-wrap gap-3">
            {["Ceramics", "Woodworking", "Leather", "Textiles", "Jewelry", "Soap & Beauty", "Glass", "Metal"].map((s) => (
              <span key={s} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-800 cursor-pointer">{s}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELLERS.map((seller) => (
              <Link key={seller.id} href={`/sellers/${seller.id}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">{seller.emoji}</div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{seller.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">📍 {seller.location}</p>
                    <p className="text-gray-600 text-sm mb-4">{seller.description}</p>
                    <div className="flex justify-between mb-4 pb-4 border-b border-gray-200">
                      <div><p className="text-xs text-gray-600">Rating</p><p className="font-bold text-amber-700">⭐ {seller.rating}</p></div>
                      <div><p className="text-xs text-gray-600">Products</p><p className="font-bold">{seller.products}</p></div>
                      <div><p className="text-xs text-gray-600">Since</p><p className="font-bold">{seller.joined}</p></div>
                    </div>
                    <span className="block w-full text-center bg-amber-700 text-white py-2 rounded-lg font-medium">View Profile</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-gradient-to-r from-amber-700 to-orange-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become a Seller?</h2>
          <p className="mb-8 text-amber-50 max-w-2xl mx-auto">Join our community of talented artisans and reach customers worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50">Start Selling Today</Link>
            <Link href="/seller-guide" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10">Read Seller Guide</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
