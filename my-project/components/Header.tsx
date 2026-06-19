"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderActions from "./HeaderActions";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-amber-800">
            🎨 Handcrafted Haven
          </Link>

          <nav className="hidden lg:flex gap-6" aria-label="Main navigation">
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

          <div className="flex items-center gap-2">
            <HeaderActions />
            <button
              type="button"
              className="lg:hidden p-2 text-gray-700 hover:text-amber-700"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-4 space-y-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-2 py-2 rounded-lg ${
                  active === link.key
                    ? "bg-amber-50 text-amber-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
