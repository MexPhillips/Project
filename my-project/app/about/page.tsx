import Link from "next/link";

export default function About() {
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
              <Link href="/about" className="text-amber-700 font-semibold">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-700">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Handcrafted Haven</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are on a mission to revolutionize how handcrafted items are discovered, appreciated, and acquired. By providing a digital platform for artisans to showcase their creativity, we foster a thriving community of passionate creators and conscious consumers.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Handcrafted Haven was born from a simple belief: handmade items have soul. Each product tells a story of dedication, skill, and passion. We noticed that talented artisans struggled to reach customers who would truly appreciate their work, while consumers were overwhelmed by mass-produced alternatives.
            </p>
            <p>
              We created Handcrafted Haven as a bridge between these two worlds. Our platform celebrates the beauty of craftsmanship and supports local creators in building sustainable businesses. We believe in quality over quantity, authenticity over mass production, and community over competition.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 Craftsmanship</h3>
              <p className="text-gray-600">We celebrate the skill, dedication, and artistry that goes into every handmade item.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌱 Sustainability</h3>
              <p className="text-gray-600">We promote eco-conscious production and sustainable consumption of handcrafted goods.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🤝 Community</h3>
              <p className="text-gray-600">We foster a vibrant community where artisans and customers support and inspire each other.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">💯 Authenticity</h3>
              <p className="text-gray-600">Every item on our platform is genuinely handcrafted with transparent sourcing and fair pricing.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 bg-gradient-to-r from-amber-700 to-orange-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-8">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-amber-50">Active Artisans</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5,000+</p>
              <p className="text-amber-50">Handcrafted Items</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50,000+</p>
              <p className="text-amber-50">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">$5M+</p>
              <p className="text-amber-50">Artisan Revenue</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg text-gray-600 mb-8">Whether you're a buyer looking for unique treasures or an artisan ready to share your craft with the world.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-block px-8 py-3 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800 transition-colors">
              Browse Products
            </Link>
            <Link href="/auth/signup" className="inline-block px-8 py-3 border-2 border-amber-700 text-amber-700 rounded-lg font-medium hover:bg-amber-50 transition-colors">
              Become a Seller
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
