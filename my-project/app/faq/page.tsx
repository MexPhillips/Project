import Link from "next/link";

const FAQS = [
  {
    category: "Buying",
    questions: [
      {
        q: "How do I place an order on Handcrafted Haven?",
        a: "Simply browse our marketplace, add items to your cart, and proceed to checkout. We accept major credit cards, PayPal, and other payment methods."
      },
      {
        q: "Is my payment information secure?",
        a: "Yes! We use industry-leading encryption and security protocols to protect all payment information. All transactions are processed through secure payment gateways."
      },
      {
        q: "Can I track my order?",
        a: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can track your package in real-time on our website."
      },
      {
        q: "What's your return policy?",
        a: "We offer a 30-day return policy for most items. Items must be unused and in original condition. Shipping costs for returns are typically covered by the seller."
      },
      {
        q: "How long does shipping take?",
        a: "Shipping times vary by seller and location, typically 5-10 business days domestically. International shipping may take 2-4 weeks. Check the product page for specific estimates."
      },
      {
        q: "Do you offer free shipping?",
        a: "Many sellers offer free shipping on orders over $100. Check individual product pages for shipping options and costs."
      },
    ]
  },
  {
    category: "Sellers",
    questions: [
      {
        q: "How do I become a seller?",
        a: "Click 'Become a Seller' on our homepage and follow the registration process. You'll need to provide basic information and set up your shop."
      },
      {
        q: "What are the seller fees?",
        a: "We charge a 5% platform fee on all sales, plus standard payment processing fees (2.9% + $0.30). No monthly fees!"
      },
      {
        q: "How do I list products?",
        a: "Once your shop is set up, you can easily create product listings with photos, descriptions, prices, and shipping information from your seller dashboard."
      },
      {
        q: "Can I manage my inventory?",
        a: "Yes! Our seller dashboard includes inventory management tools, order tracking, and analytics to help you manage your business."
      },
      {
        q: "How long does it take to get paid?",
        a: "Payments are processed weekly. Your earnings are automatically transferred to your bank account every Thursday."
      },
      {
        q: "What support do you provide for sellers?",
        a: "We offer seller resources, email support, seller forums, and regular webinars to help you grow your business."
      },
    ]
  },
  {
    category: "Account & Safety",
    questions: [
      {
        q: "Is my personal information safe?",
        a: "Absolutely. We follow strict data protection policies and comply with all privacy regulations. Your information is never shared with third parties without consent."
      },
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page and follow the instructions. You'll receive an email to reset your password."
      },
      {
        q: "Can I have multiple accounts?",
        a: "We recommend one account per person. Multiple accounts may violate our terms of service."
      },
      {
        q: "How do I report a problem with an order?",
        a: "Contact the seller directly through your order page. They'll work with you to resolve any issues. If needed, our support team can help mediate."
      },
      {
        q: "What if I never receive my order?",
        a: "If your tracked order shows delivered but you haven't received it, contact the seller. If unresolved, we offer buyer protection guarantees."
      },
      {
        q: "How do I leave a review?",
        a: "After receiving your order, you'll be able to leave a review and rating for the seller and product."
      },
    ]
  },
  {
    category: "General",
    questions: [
      {
        q: "What makes Handcrafted Haven different?",
        a: "We connect authentic artisans directly with customers. Every product is handmade with care, and we support sustainable craftsmanship."
      },
      {
        q: "Do you have a mobile app?",
        a: "Our website is fully mobile-responsive! You can browse and shop from any device. Native apps are coming soon."
      },
      {
        q: "How do I contact customer support?",
        a: "Visit our Contact page to reach our support team via email, phone, or contact form. We typically respond within 24 hours."
      },
      {
        q: "Do you offer wholesale or bulk orders?",
        a: "For bulk orders, please contact us directly at wholesale@handcrafted-haven.com."
      },
      {
        q: "Can I use gift cards?",
        a: "Gift cards are coming soon! Check back for updates."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes! Many sellers ship internationally. Check individual product pages to see international shipping options and costs."
      },
    ]
  },
];

export default function FAQ() {
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

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about buying, selling, and using Handcrafted Haven
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-16">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Categories Navigation */}
        <div className="mb-12 flex flex-wrap gap-2">
          {FAQS.map((section) => (
            <a
              key={section.category}
              href={`#${section.category.toLowerCase()}`}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-amber-100 hover:text-amber-700 transition-colors font-medium"
            >
              {section.category}
            </a>
          ))}
        </div>

        {/* FAQ Sections */}
        {FAQS.map((section) => (
          <section key={section.category} id={section.category.toLowerCase()} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-amber-700">
              {section.category}
            </h2>

            <div className="space-y-6">
              {section.questions.map((item, i) => (
                <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden hover:border-amber-700 transition-colors">
                  <summary className="flex items-center justify-between p-6 cursor-pointer bg-gray-50 hover:bg-amber-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 group-open:text-amber-700">
                      {item.q}
                    </h3>
                    <span className="text-2xl text-gray-400 group-open:text-amber-700 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-white text-gray-700 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* Contact CTA */}
        <section className="mt-20 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Didn't find what you're looking for?</h2>
          <p className="text-amber-50 mb-8">
            Our support team is here to help! Reach out with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-amber-700 font-medium hover:bg-amber-50 transition-colors">
              Contact Support
            </Link>
            <Link href="/" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors">
              Back to Home
            </Link>
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
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
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
