import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="faq" />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers about buying, selling, and using Handcrafted Haven</p>
        </div>

        <div className="mb-16">
          <input type="text" placeholder="Search FAQs..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {FAQS.map((section) => (
            <a key={section.category} href={`#${section.category.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-amber-100 hover:text-amber-700 transition-colors font-medium">
              {section.category}
            </a>
          ))}
        </div>

        {FAQS.map((section) => (
          <section key={section.category} id={section.category.toLowerCase().replace(/ /g, "-")} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-amber-700">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((item, i) => (
                <details key={i} className="group border border-gray-200 rounded-lg overflow-hidden hover:border-amber-700 transition-colors">
                  <summary className="flex items-center justify-between p-6 cursor-pointer bg-gray-50 hover:bg-amber-50">
                    <h3 className="text-lg font-semibold text-gray-900 group-open:text-amber-700">{item.q}</h3>
                    <span className="text-2xl text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 py-4 bg-white text-gray-700 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-20 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Didn&apos;t find what you&apos;re looking for?</h2>
          <p className="text-amber-50 mb-8">Our support team is here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50">Contact Support</Link>
            <Link href="/help" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10">Help Center</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
