import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const STEPS = [
  { step: 1, title: "Create Your Account", description: "Sign up as a seller and verify your email. Choose a shop name that reflects your craft and personality.", icon: "✅" },
  { step: 2, title: "Build Your Profile", description: "Upload a banner, profile photo, and write your artisan story. Share your techniques, inspiration, and what makes your work unique.", icon: "👤" },
  { step: 3, title: "List Your Products", description: "Add high-quality photos (minimum 3 per product), detailed descriptions, pricing, and shipping options. Use natural lighting for best results.", icon: "📸" },
  { step: 4, title: "Set Up Payments", description: "Connect your bank account through our secure Stripe integration. Payments are deposited weekly every Thursday.", icon: "💳" },
  { step: 5, title: "Launch & Promote", description: "Share your shop on social media, participate in community forums, and engage with customers through messages and reviews.", icon: "🚀" },
];

const TIPS = [
  { title: "Photography Matters", content: "Products with 5+ photos sell 2.3× more than those with fewer. Use natural light, clean backgrounds, and show scale with everyday objects." },
  { title: "Tell Your Story", content: "Buyers on Handcrafted Haven want to know the person behind the product. Share your process, materials, and the hours invested in each piece." },
  { title: "Price Fairly", content: "Calculate material costs, time (at a fair hourly rate), overhead, and platform fees. Don't undervalue your skill—handmade commands premium prices." },
  { title: "Ship Thoughtfully", content: "Use recyclable packaging, include a handwritten thank-you note, and ship within 3 business days. First impressions matter." },
  { title: "Respond Quickly", content: "Sellers who respond within 24 hours earn 40% more repeat customers. Enable notifications and check messages daily." },
  { title: "Request Reviews", content: "After delivery, follow up politely asking for a review. Social proof is the most powerful marketing tool for artisans." },
];

export default function SellerGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="sellers" />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Seller Guide</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know to start selling your handcrafted creations on Handcrafted Haven.
          </p>
        </div>

        <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Sell With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div><p className="text-3xl mb-2">🌍</p><p className="font-bold text-gray-900">Global Reach</p><p className="text-sm text-gray-600">50,000+ active buyers worldwide</p></div>
            <div><p className="text-3xl mb-2">💰</p><p className="font-bold text-gray-900">Fair Fees</p><p className="text-sm text-gray-600">Only 5% platform fee, no monthly charges</p></div>
            <div><p className="text-3xl mb-2">🤝</p><p className="font-bold text-gray-900">Community</p><p className="text-sm text-gray-600">Forums, webinars, and seller support</p></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Started in 5 Steps</h2>
          <div className="space-y-6">
            {STEPS.map((item) => (
              <div key={item.step} className="flex gap-6 p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <p className="text-sm text-amber-700 font-medium">Step {item.step}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pro Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TIPS.map((tip) => (
              <div key={tip.title} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Open Your Shop?</h2>
          <p className="text-amber-50 mb-8">Join 2,500+ artisans already selling on Handcrafted Haven</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50">Create Seller Account</Link>
            <Link href="/pricing" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10">View Pricing</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
