import type { FAQSection, Collection } from "../types";

export const FAQS: FAQSection[] = [
  {
    category: "Buying",
    questions: [
      { q: "How do I place an order on Handcrafted Haven?", a: "Browse our marketplace, add items to your cart, and proceed to checkout. We accept major credit cards, PayPal, Apple Pay, and Google Pay." },
      { q: "Is my payment information secure?", a: "Yes! We use industry-leading encryption and PCI-compliant payment processors. Your card details are never stored on our servers." },
      { q: "Can I track my order?", a: "Once your order ships, you'll receive a tracking number via email. Track packages in real-time from your account dashboard." },
      { q: "What's your return policy?", a: "We offer a 30-day return policy for most items in unused, original condition. Custom or personalized items may have different terms." },
      { q: "How long does shipping take?", a: "Domestic shipping typically takes 5–10 business days. International orders may take 2–4 weeks depending on destination and customs." },
      { q: "Do you offer free shipping?", a: "Free shipping on orders over $75 from participating sellers. Check individual product pages for shipping details." },
      { q: "Can I request gift wrapping?", a: "Many sellers offer gift wrapping for a small fee. Look for the gift wrap option at checkout or message the seller directly." },
      { q: "Do you price match?", a: "We don't price match, but our artisan-direct model ensures fair pricing without retail markups." },
    ],
  },
  {
    category: "Sellers",
    questions: [
      { q: "How do I become a seller?", a: "Click 'Become a Seller' and complete our simple onboarding: create your profile, verify identity, and list your first product." },
      { q: "What are the seller fees?", a: "5% platform fee plus standard payment processing (2.9% + $0.30). No monthly fees, no listing fees, no hidden charges." },
      { q: "How do I list products?", a: "Use the seller dashboard to upload photos, write descriptions, set prices, and configure shipping options." },
      { q: "Can I manage my inventory?", a: "Yes! Track stock levels, set low-inventory alerts, and manage variants from your dashboard." },
      { q: "How long does it take to get paid?", a: "Payments are processed weekly. Earnings transfer to your bank account every Thursday." },
      { q: "What support do you provide for sellers?", a: "Seller guides, email support, community forums, monthly webinars, and a dedicated seller success team." },
      { q: "Can I sell internationally?", a: "Yes! Configure shipping zones and rates for any country you wish to serve." },
      { q: "How are disputes handled?", a: "Our mediation team helps resolve buyer-seller disputes fairly. Most issues are resolved within 5 business days." },
    ],
  },
  {
    category: "Account & Safety",
    questions: [
      { q: "Is my personal information safe?", a: "We comply with GDPR and CCPA regulations. Your data is encrypted and never sold to third parties." },
      { q: "How do I reset my password?", a: "Click 'Forgot Password' on the sign-in page. You'll receive a secure reset link via email within minutes." },
      { q: "Can I have multiple accounts?", a: "One account per person is recommended. Separate buyer and seller functions exist within a single account." },
      { q: "How do I report a problem with an order?", a: "Contact the seller through your order page first. If unresolved after 48 hours, open a support ticket." },
      { q: "What if I never receive my order?", a: "Buyer protection covers lost packages. File a claim within 30 days of the expected delivery date." },
      { q: "How do I leave a review?", a: "After delivery, you'll receive an email prompt to rate the product and seller. Reviews help the community make informed decisions." },
      { q: "How do I delete my account?", a: "Go to Account Settings > Privacy > Delete Account. This action is permanent and cannot be undone." },
    ],
  },
  {
    category: "General",
    questions: [
      { q: "What makes Handcrafted Haven different?", a: "We connect authentic artisans directly with customers. Every product is handmade, and we channel revenue straight to creators." },
      { q: "Do you have a mobile app?", a: "Our website is fully mobile-responsive. Native iOS and Android apps are launching in 2025." },
      { q: "How do I contact customer support?", a: "Email support@handcrafted-haven.com, call +1 (555) 123-4567, or use our contact form. We respond within 24 hours." },
      { q: "Do you offer wholesale or bulk orders?", a: "Contact wholesale@handcrafted-haven.com for bulk pricing and custom orders." },
      { q: "Can I use gift cards?", a: "Digital gift cards are available in $25, $50, $100, and custom amounts." },
      { q: "Do you ship internationally?", a: "Yes! Many sellers ship worldwide. Check product pages for available destinations and rates." },
      { q: "Are items really handmade?", a: "Every seller is verified. We review listings and investigate reports of mass-produced items masquerading as handmade." },
      { q: "How can I suggest a feature?", a: "We love feedback! Email ideas@handcrafted-haven.com or join our community forum." },
    ],
  },
];

export const COLLECTIONS: Collection[] = [
  { id: 1, slug: "kitchen-essentials", name: "Kitchen Essentials", description: "Handcrafted tools and tableware for the home chef", emoji: "🍳", productIds: [2, 5, 10, 16, 19, 24, 25, 36, 37] },
  { id: 2, slug: "cozy-home", name: "Cozy Home", description: "Warm textiles and décor to make your space inviting", emoji: "🏠", productIds: [4, 6, 15, 22, 23, 28, 33] },
  { id: 3, slug: "perfect-gifts", name: "Perfect Gifts Under $50", description: "Thoughtful handmade gifts that won't break the bank", emoji: "🎁", productIds: [3, 5, 12, 17, 20, 26, 29, 30, 32, 34, 38, 40] },
  { id: 4, slug: "self-care", name: "Self-Care Collection", description: "Natural beauty and wellness products", emoji: "🧖", productIds: [7, 12, 20, 27, 30] },
  { id: 5, slug: "artisan-jewelry", name: "Artisan Jewelry", description: "Wearable art from talented metalsmiths and beaders", emoji: "💎", productIds: [14, 18, 40] },
  { id: 6, slug: "wood-and-leather", name: "Wood & Leather", description: "Timeless materials crafted into heirloom pieces", emoji: "🪵", productIds: [2, 3, 8, 11, 13, 17, 19, 25, 26, 31, 35, 39] },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
