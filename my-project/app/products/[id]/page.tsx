import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById, PRODUCTS } from "@/lib/data";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(parseInt(id));
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Header active="products" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/products" className="text-amber-700 hover:text-amber-800 mb-6 inline-block">← Back to Marketplace</Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center text-9xl">
            {product.image}
          </div>

          <div>
            <p className="text-sm text-amber-700 font-medium mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl text-yellow-500">⭐ {product.rating}</span>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <span className="text-4xl font-bold text-amber-700">${product.price}</span>
              <p className="text-gray-600 mt-4">{product.description}</p>
              <p className="text-gray-600 mt-2">{product.longDescription}</p>
              <p className={`mt-4 font-semibold ${product.stock ? "text-green-600" : "text-red-600"}`}>
                {product.stock ? "✓ In Stock" : "Out of Stock"}
              </p>
            </div>

            {product.materials.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m) => (
                    <span key={m} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{m}</span>
                  ))}
                </div>
              </div>
            )}

            {product.dimensions && (
              <p className="text-gray-600 mb-2"><strong>Dimensions:</strong> {product.dimensions}</p>
            )}
            {product.careInstructions && (
              <p className="text-gray-600 mb-6"><strong>Care:</strong> {product.careInstructions}</p>
            )}

            <Link href={`/sellers/${product.sellerId}`}>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mb-6">
                <div className="text-4xl">👤</div>
                <div>
                  <p className="font-bold text-gray-900">{product.seller}</p>
                  <p className="text-sm text-gray-600">View seller profile →</p>
                </div>
              </div>
            </Link>

            <div className="flex gap-4 mb-8">
              <button className={`flex-1 py-3 rounded-lg font-medium transition-colors ${product.stock ? "bg-amber-700 text-white hover:bg-amber-800" : "bg-gray-400 text-white cursor-not-allowed"}`}>
                {product.stock ? "Add to Cart" : "Sold Out"}
              </button>
              <button className="flex-1 border-2 border-amber-700 text-amber-700 py-3 rounded-lg font-medium hover:bg-amber-50">Save for Later</button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                {product.customerReviews.map((review, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                    <p className="text-xs text-gray-400 mt-2">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-5xl">{p.image}</div>
                    <div className="p-3">
                      <h3 className="font-bold text-gray-900 text-sm">{p.name}</h3>
                      <p className="text-amber-700 font-bold">${p.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
