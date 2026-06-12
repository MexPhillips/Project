import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_ARTICLES } from "@/lib/data";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="blog" />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-12 mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Handcrafted Haven Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stories, tips, and insights from our community of artisans and craft enthusiasts</p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Link href={`/blog/${BLOG_ARTICLES[0].slug}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-8xl">{BLOG_ARTICLES[0].image}</div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">{BLOG_ARTICLES[0].category}</span>
                    <span className="text-gray-500 text-sm">{BLOG_ARTICLES[0].readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{BLOG_ARTICLES[0].title}</h3>
                  <p className="text-gray-600 mb-6">{BLOG_ARTICLES[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{BLOG_ARTICLES[0].date}</span>
                    <span className="text-amber-700 font-medium">Read More →</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_ARTICLES.slice(1).map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">{article.image}</div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{article.category}</span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{article.date}</span>
                      <span className="text-amber-700 font-medium">Read →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {["All", "Craft Education", "Community", "Home & Design", "Artisan Stories", "Sustainability", "Gift Guides"].map((category) => (
              <button key={category} className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-700 hover:border-amber-700 hover:text-amber-700 transition-colors font-medium text-sm">{category}</button>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-amber-50 mb-6 max-w-2xl mx-auto">Subscribe for the latest articles, artisan stories, and handcrafted tips.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
            <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50">Subscribe</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
