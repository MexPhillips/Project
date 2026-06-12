import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COLLECTIONS, PRODUCTS } from "@/lib/data";

export default function Collections() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="collections" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curated Collections</h1>
          <p className="text-lg text-gray-600">Hand-picked groupings of our finest handcrafted treasures, curated by our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {COLLECTIONS.map((collection) => {
            const previewProducts = collection.productIds.slice(0, 4).map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
            return (
              <Link key={collection.id} href={`/collections/${collection.slug}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">
                    {collection.emoji}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{collection.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
                    <div className="flex gap-2 mb-4">
                      {previewProducts.map((p) => p && (
                        <span key={p.id} className="text-2xl">{p.image}</span>
                      ))}
                    </div>
                    <p className="text-amber-700 font-medium text-sm">{collection.productIds.length} items →</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
