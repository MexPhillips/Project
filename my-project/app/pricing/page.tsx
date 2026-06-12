import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PLANS = [
  { name: "Starter", price: "Free", fee: "5%", features: ["Unlimited listings", "Basic analytics", "Standard support", "Weekly payouts", "Seller profile page"], highlight: false },
  { name: "Pro", price: "$19/mo", fee: "3.5%", features: ["Everything in Starter", "Advanced analytics", "Priority support", "Featured in search", "Promotional tools", "Custom shop banner"], highlight: true },
  { name: "Studio", price: "$49/mo", fee: "2.5%", features: ["Everything in Pro", "Dedicated account manager", "Early access to features", "Bulk listing tools", "API access", "Co-marketing opportunities"], highlight: false },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No surprises. Start free and upgrade when you&apos;re ready to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`rounded-lg p-8 ${plan.highlight ? "bg-amber-700 text-white ring-4 ring-amber-300 scale-105" : "bg-gray-50 border border-gray-200"}`}>
              {plan.highlight && <p className="text-amber-200 text-sm font-medium mb-2">Most Popular</p>}
              <h2 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h2>
              <p className={`text-4xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-amber-700"}`}>{plan.price}</p>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-amber-100" : "text-gray-500"}`}>+ {plan.fee} per sale + payment processing</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-amber-50" : "text-gray-600"}`}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup" className={`block text-center py-3 rounded-lg font-medium transition-colors ${plan.highlight ? "bg-white text-amber-700 hover:bg-amber-50" : "bg-amber-700 text-white hover:bg-amber-800"}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fee Breakdown</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-700">Platform fee (Starter)</span>
                <span className="font-bold text-gray-900">5% of sale price</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-700">Payment processing</span>
                <span className="font-bold text-gray-900">2.9% + $0.30</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-700">Listing fee</span>
                <span className="font-bold text-green-600">$0 — always free</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-700">Monthly fee (Starter)</span>
                <span className="font-bold text-green-600">$0 — always free</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-700 font-bold">Example: $100 sale on Starter plan</span>
                <span className="font-bold text-amber-700">You keep ~$91.80</span>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions about pricing?</h2>
          <p className="text-gray-600 mb-6">Our team is happy to help you choose the right plan.</p>
          <Link href="/contact" className="text-amber-700 hover:text-amber-800 font-medium">Contact us →</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
