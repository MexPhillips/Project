import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCTS, SELLERS, BLOG_ARTICLES, COLLECTIONS } from "@/lib/data";

const CATEGORIES = [
  { emoji: "🏠", name: "Home Décor", count: 12 },
  { emoji: "🍳", name: "Kitchen", count: 10 },
  { emoji: "💎", name: "Accessories", count: 8 },
  { emoji: "📚", name: "Stationery", count: 4 },
  { emoji: "🧴", name: "Personal Care", count: 6 },
  { emoji: "👕", name: "Clothing", count: 4 },
  { emoji: "🎨", name: "Art", count: 2 },
  { emoji: "🎁", name: "Gifts", count: 15 },
];

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.rating >= 4.9).slice(0, 8);
  const featuredSellers = SELLERS.slice(0, 6);
  const latestArticles = BLOG_ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-white">
      <Header active="home" />

      <main className="flex flex-col w-full">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-amber-700 font-medium mb-4">🌍 2,500+ Artisans · 40+ Countries</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                  Discover Handcrafted <span className="text-amber-700">Treasures</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with talented artisans worldwide. Support local creators, discover unique handmade products, and celebrate the beauty of craftsmanship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-amber-700 text-white font-medium hover:bg-amber-800">Explore Marketplace</Link>
                  <Link href="/auth/signup" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-amber-700 text-amber-700 font-medium hover:bg-amber-50">Become a Seller</Link>
                </div>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {["🏺", "🪵", "🧶", "📔", "🕯️", "🪡", "💎", "🍯", "🎨"].map((e, i) => (
                    <span key={i} className="text-4xl bg-white/30 rounded-lg p-3 text-center">{e}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
              <p className="text-gray-600">Find exactly what you&apos;re looking for</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {CATEGORIES.map((cat) => (
                <Link key={cat.name} href="/products" className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-amber-50 hover:shadow-md transition-all">
                  <span className="text-4xl mb-2">{cat.emoji}</span>
                  <span className="font-medium text-gray-900 text-sm text-center">{cat.name}</span>
                  <span className="text-xs text-gray-500">{cat.count}+ items</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Handcrafted Haven?</h2>
              <p className="text-lg text-gray-600">A platform built for artisans and conscious consumers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { emoji: "👥", title: "Seller Profiles", desc: "Artisans showcase craftsmanship and share their stories with dedicated profiles." },
                { emoji: "🛍️", title: "Rich Listings", desc: "Detailed descriptions, ratings, and flexible filtering for every product." },
                { emoji: "⭐", title: "Reviews & Ratings", desc: "Authentic reviews from our community of 50,000+ happy customers." },
                { emoji: "🌱", title: "Sustainable", desc: "Support eco-conscious creators who value quality over mass production." },
                { emoji: "🔒", title: "Secure Checkout", desc: "Protected payments with buyer guarantee on every order." },
                { emoji: "🤝", title: "Community Driven", desc: "Forums, blog, and events connecting creators and collectors." },
              ].map((f) => (
                <div key={f.title} className="flex flex-col p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{f.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Treasures</h2>
                <p className="text-gray-600">Top-rated handcrafted items loved by our community</p>
              </div>
              <Link href="/products" className="text-amber-700 hover:text-amber-800 font-medium hidden sm:block">View all →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-5xl">{product.image}</div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">{product.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{product.seller}</p>
                      <p className="text-lg font-bold text-amber-700">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated Collections</h2>
              <p className="text-gray-600">Hand-picked groupings for every occasion</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COLLECTIONS.map((col) => (
                <Link key={col.id} href={`/collections/${col.slug}`}>
                  <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow flex items-center gap-4">
                    <span className="text-5xl">{col.emoji}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{col.name}</h3>
                      <p className="text-sm text-gray-600">{col.productIds.length} items</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Artisans */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Artisans</h2>
              <p className="text-gray-600">Talented creators from around the world</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {featuredSellers.map((seller) => (
                <Link key={seller.id} href={`/sellers/${seller.id}`}>
                  <div className="text-center p-4 rounded-lg hover:bg-amber-50 transition-colors">
                    <div className="text-5xl mb-3">{seller.emoji}</div>
                    <h3 className="font-bold text-gray-900 text-sm">{seller.name}</h3>
                    <p className="text-xs text-gray-500">⭐ {seller.rating}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/sellers" className="text-amber-700 hover:text-amber-800 font-medium">View all artisans →</Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by Artisans & Collectors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "Handcrafted Haven transformed my pottery business. The platform is intuitive and the community is incredibly supportive!", name: "Sarah Chen", role: "Ceramic Artist", stars: 5 },
                { quote: "I've found the most amazing handcrafted pieces here. Every item tells a story and supports real artisans.", name: "Marcus Rodriguez", role: "Collector", stars: 5 },
                { quote: "As a woodworker, this platform perfectly showcases my craftsmanship. Running my business here is a joy.", name: "James Thompson", role: "Wood Craftsman", stars: 5 },
                { quote: "The quality of items is outstanding. I love knowing exactly who made each piece I buy.", name: "Priya Sharma", role: "Interior Designer", stars: 5 },
                { quote: "Selling my leather goods here connected me with customers I never could have reached on my own.", name: "Carlos Mendez", role: "Leather Artisan", stars: 5 },
                { quote: "My go-to for unique gifts. The curated collections make shopping so easy and thoughtful.", name: "Emily Foster", role: "Gift Buyer", stars: 5 },
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                  <span className="text-yellow-500">{"⭐".repeat(t.stars)}</span>
                  <p className="text-gray-700 my-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-amber-700 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "2,500+", label: "Artisans" },
                { value: `${PRODUCTS.length}+`, label: "Products Listed" },
                { value: "50,000+", label: "Happy Customers" },
                { value: "$5M+", label: "Artist Revenue" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-amber-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { n: "1", title: "Create Account", desc: "Sign up free in minutes" },
                { n: "2", title: "Browse & Discover", desc: "Explore unique handcrafted items" },
                { n: "3", title: "Secure Checkout", desc: "Safe payments with buyer protection" },
                { n: "4", title: "Enjoy & Review", desc: "Receive treasures and share feedback" },
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4 text-2xl font-bold text-amber-700">{step.n}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-20 bg-green-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">🌱 Crafted with Care for Our Planet</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Handmade goods are inherently sustainable—made in small batches, built to last, and often using locally sourced, natural materials. We partner with artisans who share our commitment to environmental responsibility.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Small-batch production reduces waste</li>
                  <li>✓ Natural and recycled materials preferred</li>
                  <li>✓ Plastic-free packaging encouraged</li>
                  <li>✓ Carbon-neutral shipping options available</li>
                </ul>
                <Link href="/blog/sustainable-crafting-practices" className="inline-block mt-6 text-green-700 font-medium hover:text-green-800">Learn about sustainable crafting →</Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["♻️", "🌿", "🌍", "🍃"].map((e, i) => (
                  <div key={i} className="aspect-square bg-white rounded-xl flex items-center justify-center text-6xl shadow">{e}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">From the Blog</h2>
                <p className="text-gray-600">Stories, tips, and craft inspiration</p>
              </div>
              <Link href="/blog" className="text-amber-700 hover:text-amber-800 font-medium hidden sm:block">All articles →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-5xl">{article.image}</div>
                    <div className="p-6">
                      <span className="text-xs text-amber-700 font-medium">{article.category}</span>
                      <h3 className="font-bold text-gray-900 mt-2 mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">Get artisan stories, new arrivals, and exclusive offers in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <button className="px-8 py-3 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800">Subscribe</button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-600">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg text-amber-50 mb-8">Whether you&apos;re seeking unique treasures or sharing your craft with the world, Handcrafted Haven is your destination.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50">Browse Products</Link>
              <Link href="/auth/signup" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10">Sell Your Craft</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
