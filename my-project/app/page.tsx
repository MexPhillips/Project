export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-800">
                🎨 Handcrafted Haven
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 hover:text-amber-700 px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </a>
                <a href="#marketplace" className="text-gray-700 hover:text-amber-700 px-3 py-2 rounded-md text-sm font-medium">
                  Marketplace
                </a>
                <a href="#contact" className="text-gray-700 hover:text-amber-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-amber-700 text-white font-medium hover:bg-amber-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                  Discover Handcrafted <span className="text-amber-700">Treasures</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with talented artisans and crafters from around the world. Support local creators, discover unique handmade products, and celebrate the beauty of craftsmanship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-amber-700 text-white font-medium hover:bg-amber-800 transition-colors">
                    Explore Marketplace
                  </button>
                  <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-amber-700 text-amber-700 font-medium hover:bg-amber-50 transition-colors">
                    Become a Seller
                  </button>
                </div>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl shadow-lg flex items-center justify-center">
                <p className="text-6xl">🛠️</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Handcrafted Haven?
              </h3>
              <p className="text-lg text-gray-600">
                A platform built for artisans and conscious consumers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Seller Profiles
                </h4>
                <p className="text-gray-600">
                  Artisans showcase their craftsmanship, share their stories, and build their audience with dedicated profiles.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛍️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Rich Product Listings
                </h4>
                <p className="text-gray-600">
                  Browse unique handcrafted items with detailed descriptions, high-quality images, and flexible filtering options.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Reviews & Ratings
                </h4>
                <p className="text-gray-600">
                  Make informed decisions with authentic reviews and ratings from our community of buyers.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Sustainable
                </h4>
                <p className="text-gray-600">
                  Support sustainable consumption and eco-conscious creators who value quality and craftsmanship.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Secure Transactions
                </h4>
                <p className="text-gray-600">
                  Shop with confidence using our secure e-commerce platform with protected payments.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Community Driven
                </h4>
                <p className="text-gray-600">
                  Join a thriving community of passionate creators and conscious consumers who appreciate handmade quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="marketplace" className="py-20 sm:py-32 bg-gradient-to-r from-amber-700 to-orange-600">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-amber-50 mb-8">
              Whether you're a buyer seeking unique treasures or an artisan wanting to share your craft with the world, Handcrafted Haven is your destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-amber-700 font-medium hover:bg-amber-50 transition-colors">
                Browse Products
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors">
                Sell Your Craft
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-bold mb-4">Handcrafted Haven</h4>
                <p className="text-sm">Supporting artisans and celebrating handmade craftsmanship worldwide.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Browse</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">New Items</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Sell</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Become a Seller</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Seller Guide</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2024 Handcrafted Haven. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
