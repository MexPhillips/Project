import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SECTIONS = [
  { title: "1. Acceptance of Terms", content: "By accessing or using Handcrafted Haven (\"the Platform\"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. We may update these terms periodically; continued use constitutes acceptance of changes." },
  { title: "2. Account Registration", content: "You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. You must be at least 18 years old to create an account or make purchases." },
  { title: "3. Buyer Responsibilities", content: "Buyers agree to pay for items purchased, provide accurate shipping information, and communicate respectfully with sellers. Disputes should first be resolved directly with the seller before escalating to platform support." },
  { title: "4. Seller Responsibilities", content: "Sellers must accurately represent their products as handmade, ship orders within stated timeframes, respond to buyer inquiries promptly, and comply with all applicable laws including tax obligations in their jurisdiction." },
  { title: "5. Prohibited Items", content: "The following are prohibited: mass-produced items misrepresented as handmade, counterfeit goods, hazardous materials, items violating intellectual property rights, and any products illegal in the buyer's or seller's jurisdiction." },
  { title: "6. Fees and Payments", content: "Seller fees are outlined on our Pricing page. Payment processing is handled by third-party providers. Handcrafted Haven is not responsible for payment processor outages or delays." },
  { title: "7. Returns and Refunds", content: "Our standard return policy allows 30-day returns on eligible items. Refund processing times vary by payment method. Custom and personalized items may be exempt from standard return policies." },
  { title: "8. Intellectual Property", content: "Sellers retain ownership of their designs and content. By listing on the Platform, sellers grant Handcrafted Haven a license to display and promote their listings. Buyers may not reproduce artisan work without permission." },
  { title: "9. Limitation of Liability", content: "Handcrafted Haven acts as a marketplace connecting buyers and sellers. We are not the seller of record. Our liability is limited to the fees paid to us in the twelve months preceding any claim." },
  { title: "10. Contact", content: "Questions about these terms? Contact legal@handcrafted-haven.com or write to Handcrafted Haven, 123 Artisan Street, Portland, OR 97201." },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: March 1, 2024</p>
        <div className="space-y-8">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
