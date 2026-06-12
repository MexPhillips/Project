import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSellerById, PRODUCTS } from "@/lib/data";

export default async function SellerProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const seller = getSellerById(parseInt(id));
  if (!seller) notFound();

  const sellerProducts = PRODUCTS.filter((p) => p.sellerId === seller.id);

  return (
    <div className="min-h-screen bg-white">
      <Header active="sellers" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/sellers" className="text-amber-700 hover:text-amber-800 mb-6 inline-block">← Back to Sellers</Link>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="text-8xl">{seller.emoji}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{seller.name}</h1>
              <p className="text-gray-600 mb-1">📍 {seller.location}</p>
              <p className="text-lg text-gray-600 mb-4">{seller.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {seller.specialties.map((s) => (
                  <span key={s} className="px-3 py-1 bg-white text-amber-800 rounded-full text-sm font-medium">{s}</span>
                ))}
              </div>
              <div className="flex gap-8">
                <div><p className="text-sm text-gray-600">Rating</p><p className="text-2xl font-bold text-amber-700">⭐ {seller.rating}</p></div>
                <div><p className="text-sm text-gray-600">Products</p><p className="text-2xl font-bold text-gray-900">{seller.products}</p></div>
                <div><p className="text-sm text-gray-600">Since</p><p className="text-2xl font-bold text-gray-900">{seller.joined}</p></div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Artisan</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">{seller.bio}</p>
          <p className="text-gray-600 leading-relaxed">{seller.story}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Products ({sellerProducts.length})</h2>
          {sellerProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sellerProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-6xl">{product.image}</div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-amber-700 font-semibold">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seller.featuredProducts.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-6xl">{item.image}</div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-amber-700 font-semibold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact {seller.name}</h2>
          <p className="text-gray-600 mb-6">Have questions about their products? Get in touch directly!</p>
          <Link href="/contact" className="inline-block bg-amber-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-800">Send a Message</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
