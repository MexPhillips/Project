import Link from "next/link";

interface HeaderProps {
  active?: "home" | "products" | "sellers" | "about" | "contact" | "blog" | "faq" | "collections";
}

const navLinks = [
  { href: "/", label: "Home", key: "home" as const },
  { href: "/products", label: "Marketplace", key: "products" as const },
  { href: "/collections", label: "Collections", key: "collections" as const },
  { href: "/sellers", label: "Sellers", key: "sellers" as const },
  { href: "/blog", label: "Blog", key: "blog" as const },
  { href: "/about", label: "About", key: "about" as const },
  { href: "/contact", label: "Contact", key: "contact" as const },
];

export default function Header({ active }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-amber-800">
            🎨 Handcrafted Haven
          </Link>
          <nav className="hidden lg:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={
                  active === link.key
                    ? "text-amber-700 font-semibold"
                    : "text-gray-700 hover:text-amber-700"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <Link href="/auth/signin" className="px-4 py-2 text-gray-700 hover:text-amber-700">
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
