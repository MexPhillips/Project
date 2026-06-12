import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCollectionBySlug, PRODUCTS } from "@/lib/data";

export default async function CollectionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = collection.productIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      <Header active="collections" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/collections" className="text-amber-700 hover:text-amber-800 mb-6 inline-block">← All Collections</Link>
        <div className="mb-12">
          <span className="text-6xl">{collection.emoji}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{collection.name}</h1>
          <p className="text-lg text-gray-600">{collection.description}</p>
          <p className="text-sm text-gray-500 mt-2">{products.length} handcrafted items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => product && (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.seller}</p>
                  <p className="text-lg font-bold text-amber-700">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
