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
            <p>
              Since our launch in 2020, we've connected over 2,500 artisans with 50,000 satisfied customers worldwide. Together, we've channeled over $5 million directly to independent creators, supporting their dreams and livelihoods.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-amber-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authenticity</h3>
              <p className="text-gray-600">We celebrate genuine craftsmanship and direct creator-to-consumer relationships without unnecessary middlemen.</p>
            </div>
            <div className="border-l-4 border-amber-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">We promote eco-conscious practices and support artisans who prioritize environmental responsibility.</p>
            </div>
            <div className="border-l-4 border-amber-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">We build a supportive ecosystem where creators and collectors learn, grow, and inspire each other.</p>
            </div>
            <div className="border-l-4 border-amber-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">We maintain rigorous standards ensuring only the finest handcrafted items reach our marketplace.</p>
            </div>
            <div className="border-l-4 border-amber-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empowerment</h3>
              <p className="text-gray-600">We empower artisans with tools, education, and resources to turn their passion into thriving businesses.</p>
            </div>
            <div className="border-l-4 border-amber-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">We operate with complete transparency in fees, processes, and creator support.</p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Handcrafted Haven is led by a passionate team of entrepreneurs, designers, and craftspeople who understand both sides of the marketplace. Our team members come from diverse backgrounds but share a common vision: democratizing craft commerce.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Emma Wilson', role: 'Founder & CEO', expertise: 'E-commerce strategist, former artisan' },
              { name: 'James Park', role: 'CTO', expertise: 'Full-stack developer, tech innovator' },
              { name: 'Lisa Martinez', role: 'Head of Community', expertise: 'Community builder, customer advocate' },
            ].map((member, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-5xl mb-4 text-center">👤</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className="text-amber-700 font-medium text-center mb-3">{member.role}</p>
                <p className="text-gray-600 text-center text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower artisans and craftspeople worldwide by providing a trusted digital marketplace where their authentic creations are celebrated, valued, and accessible to customers who appreciate the beauty of handmade excellence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where handcrafted items are the preferred choice for conscious consumers, where artisans thrive through their creativity, and where the value of human skill and creativity is recognized and rewarded.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-amber-700 mb-2">2,500+</p>
              <p className="text-gray-600">Active Artisans</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-amber-700 mb-2">15,000+</p>
              <p className="text-gray-600">Products Listed</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-amber-700 mb-2">50,000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-amber-700 mb-2">$5M+</p>
              <p className="text-gray-600">Creator Revenue</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-amber-700 to-orange-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-8 text-amber-50">Whether you're an artisan or collector, there's a place for you in Handcrafted Haven</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-amber-700 font-medium hover:bg-amber-50 transition-colors">
              Explore Marketplace
            </Link>
            <Link href="/auth/signup" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors">
              Become a Seller
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
