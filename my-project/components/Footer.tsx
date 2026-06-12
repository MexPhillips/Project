import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4">Handcrafted Haven</h4>
            <p className="text-sm mb-4">
              Supporting artisans and celebrating handmade craftsmanship worldwide.
              Over 2,500 creators, 15,000+ products, and $5M+ channeled to independent makers.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Browse</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link href="/sellers" className="hover:text-white transition-colors">Artisans</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Sell</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/auth/signup" className="hover:text-white transition-colors">Become a Seller</Link></li>
              <li><Link href="/seller-guide" className="hover:text-white transition-colors">Seller Guide</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2024 Handcrafted Haven. All rights reserved.</p>
          <p className="text-gray-500">Made with ❤️ for artisans everywhere</p>
        </div>
      </div>
    </footer>
  );
}
