import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HELP_CATEGORIES = [
  { title: "Getting Started", icon: "🚀", links: [{ label: "How to create an account", href: "/faq#account & safety" }, { label: "How to place your first order", href: "/faq#buying" }, { label: "How to become a seller", href: "/seller-guide" }] },
  { title: "Orders & Shipping", icon: "📦", links: [{ label: "Track your order", href: "/faq#buying" }, { label: "Shipping times and costs", href: "/faq#buying" }, { label: "Return policy", href: "/faq#buying" }] },
  { title: "Selling on Haven", icon: "🏪", links: [{ label: "Seller guide", href: "/seller-guide" }, { label: "Pricing and fees", href: "/pricing" }, { label: "Listing best practices", href: "/seller-guide" }] },
  { title: "Account & Payments", icon: "🔒", links: [{ label: "Reset password", href: "/faq#account & safety" }, { label: "Payment security", href: "/faq#buying" }, { label: "Seller payouts", href: "/faq#sellers" }] },
  { title: "Community", icon: "👥", links: [{ label: "Artisan stories", href: "/blog" }, { label: "Browse collections", href: "/collections" }, { label: "Meet our sellers", href: "/sellers" }] },
  { title: "Policies", icon: "📋", links: [{ label: "Terms of service", href: "/terms" }, { label: "Privacy policy", href: "/privacy" }, { label: "Buyer protection", href: "/faq#account & safety" }] },
];

export default function Help() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-lg text-gray-600 mb-8">Find answers, guides, and resources to get the most out of Handcrafted Haven</p>
          <input type="text" placeholder="Search for help..." className="max-w-xl w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {HELP_CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-gray-50 rounded-lg p-6">
              <p className="text-3xl mb-3">{cat.icon}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{cat.title}</h2>
              <ul className="space-y-2">
                {cat.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-amber-700 hover:text-amber-800 text-sm">{link.label} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-amber-50 mb-8">Our support team typically responds within 24 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50">Contact Support</Link>
            <Link href="/faq" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10">Browse FAQ</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
