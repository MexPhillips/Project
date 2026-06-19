import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsCatalog from "@/components/ProductsCatalog";
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

        <ProductsCatalog products={PRODUCTS} categories={CATEGORIES} priceRanges={PRICE_RANGES} />
      </main>
      <Footer />
    </div>
  );
}
