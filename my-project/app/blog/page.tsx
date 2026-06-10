import Link from "next/link";

const ARTICLES = [
  {
    id: 1,
    title: "The Art of Handcrafted Pottery: A Beginner's Guide",
    excerpt: "Learn about the ancient art of pottery and how modern artisans are keeping this tradition alive.",
    category: "Craft Education",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "🏺"
  },
  {
    id: 2,
    title: "Supporting Local Artisans: Why Handmade Matters",
    excerpt: "Discover how purchasing handcrafted items supports local economies and sustainable practices.",
    category: "Community",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "🌍"
  },
  {
    id: 3,
    title: "10 Styling Tips for Handmade Home Décor",
    excerpt: "Get expert tips on how to incorporate handcrafted pieces into your interior design.",
    category: "Home & Design",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "🎨"
  },
  {
    id: 4,
    title: "The Journey of an Artisan: Interview with Clay Artistry",
    excerpt: "Meet the talented ceramic artist behind some of our most popular pieces.",
    category: "Artisan Stories",
    date: "February 28, 2024",
    readTime: "8 min read",
    image: "👤"
  },
  {
    id: 5,
    title: "Sustainable Crafting: Eco-Friendly Materials and Practices",
    excerpt: "Explore how artisans are using sustainable materials to create beautiful handcrafted items.",
    category: "Sustainability",
    date: "February 20, 2024",
    readTime: "6 min read",
    image: "♻️"
  },
  {
    id: 6,
    title: "The Perfect Gift Guide for Handcraft Enthusiasts",
    excerpt: "Can't decide what to gift? Check out our curated list of handcrafted items for every occasion.",
    category: "Gift Guides",
    date: "February 15, 2024",
    readTime: "5 min read",
    image: "🎁"
  },
];

export default function Blog() {
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
              <Link href="/sellers" className="text-gray-700 hover:text-amber-700">Sellers</Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-700">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-700">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-12 mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Handcrafted Haven Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover stories, tips, and insights from our community of artisans and craft enthusiasts.
          </p>
        </div>

        {/* Featured Article */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-8xl">
                {ARTICLES[0].image}
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    {ARTICLES[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{ARTICLES[0].readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{ARTICLES[0].title}</h3>
                <p className="text-gray-600 mb-6">{ARTICLES[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{ARTICLES[0].date}</span>
                  <a href="#" className="text-amber-700 hover:text-amber-800 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.slice(1).map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">
                  {article.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{article.date}</span>
                    <a href="#" className="text-amber-700 hover:text-amber-800 font-medium">
                      Read →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mt-20 bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["All", "Craft Education", "Community", "Home & Design", "Artisan Stories", "Sustainability"].map((category) => (
              <button
                key={category}
                className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-700 hover:border-amber-700 hover:text-amber-700 transition-colors font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-20 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-amber-50 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, artisan stories, and handcrafted tips directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50 transition-colors">
              Subscribe
            </button>
          </div>
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
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Sell</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Become a Seller</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Seller Tools</a></li>
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
