import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SECTIONS = [
  { title: "Information We Collect", content: "We collect information you provide directly (name, email, shipping address, payment details), automatically (device info, IP address, browsing behavior), and from third parties (payment processors, social login providers)." },
  { title: "How We Use Your Information", content: "We use your data to process orders, facilitate communication between buyers and sellers, improve our platform, send transactional emails, and—with your consent—marketing communications. We never sell your personal information." },
  { title: "Information Sharing", content: "We share information with sellers (shipping details for fulfillment), payment processors (to complete transactions), and service providers who assist our operations. All partners are bound by confidentiality agreements." },
  { title: "Cookies and Tracking", content: "We use cookies to remember preferences, analyze traffic, and personalize content. You can manage cookie preferences in your browser settings. Essential cookies are required for the platform to function." },
  { title: "Data Security", content: "We implement industry-standard security measures including encryption, secure servers, and regular security audits. No method of transmission over the internet is 100% secure." },
  { title: "Your Rights", content: "Depending on your location, you may have rights to access, correct, delete, or export your personal data. California residents have additional rights under CCPA. EU residents have rights under GDPR. Contact privacy@handcrafted-haven.com to exercise these rights." },
  { title: "Data Retention", content: "We retain account information while your account is active and for a reasonable period afterward for legal and business purposes. Transaction records are kept for seven years for tax and legal compliance." },
  { title: "Children's Privacy", content: "Handcrafted Haven is not intended for users under 18. We do not knowingly collect information from children. If we learn we have collected such information, we will delete it promptly." },
  { title: "Contact Us", content: "For privacy-related questions, contact our Data Protection Officer at privacy@handcrafted-haven.com or Handcrafted Haven, 123 Artisan Street, Portland, OR 97201." },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
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
