'use client';

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
              <Link href="/contact" className="text-amber-700 font-semibold">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600">
            Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  ✓ Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">📧 Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:support@handcrafted-haven.com" className="text-amber-700 hover:text-amber-800">
                      support@handcrafted-haven.com
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">📞 Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">📍 Address</h4>
                  <p className="text-gray-600">
                    123 Artisan Street<br/>
                    Portland, OR 97201<br/>
                    USA
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">🕒 Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 6pm<br/>
                    Saturday: 10am - 4pm<br/>
                    Sunday: Closed
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-amber-700 hover:text-amber-800 text-2xl">f</a>
                    <a href="#" className="text-amber-700 hover:text-amber-800 text-2xl">𝕏</a>
                    <a href="#" className="text-amber-700 hover:text-amber-800 text-2xl">📷</a>
                    <a href="#" className="text-amber-700 hover:text-amber-800 text-2xl">📌</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">❓ How do I place an order?</h3>
              <p className="text-gray-600 text-sm">Simply browse the marketplace, select your desired product, and follow the secure checkout process. We support multiple payment methods.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">❓ What's the return policy?</h3>
              <p className="text-gray-600 text-sm">We offer a 30-day return policy for most items. Check with the individual seller for specific terms and conditions.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">❓ How long does shipping take?</h3>
              <p className="text-gray-600 text-sm">Shipping times vary by seller and location. Average domestic shipping is 5-10 business days.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">❓ How do I become a seller?</h3>
              <p className="text-gray-600 text-sm">
                <Link href="/auth/signup" className="text-amber-700 hover:text-amber-800 font-medium">Sign up for an account</Link> and follow our simple seller onboarding process.
              </p>
            </div>
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
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Sell</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/auth/signup" className="hover:text-white transition-colors">Become a Seller</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Seller Resources</a></li>
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
