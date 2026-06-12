'use client';

import Link from "next/link";

interface Item {
  id: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

interface Seller {
  name: string;
  rating: number;
  products: number;
  joined: string;
  description: string;
  bio: string;
  items: Item[];
}

const SELLERS: Record<number, Seller> = {
  1: {
    name: "Clay Artistry",
    rating: 4.8,
    products: 24,
    joined: "2022",
    description: "Specializing in hand-thrown ceramic art",
    bio: "Hello! I'm a passionate ceramic artist who has been creating beautiful, functional pottery for over a decade. Each piece is hand-thrown on the wheel and glazed with care to create unique works of art.",
    items: [
      { id: 1, name: "Handmade Ceramic Vase", price: 45.99, description: "Beautiful hand-thrown ceramic vase" },
      { id: 2, name: "Macramé Wall Hanging", price: 35.99, description: "Elegant macramé wall decoration" },
    ],
  },
  2: {
    name: "Wood Crafters",
    rating: 4.9,
    products: 18,
    joined: "2021",
    description: "Premium hardwood furniture and kitchen items",
    bio: "We are a family-run workshop specializing in sustainable hardwood craftsmanship. Using only responsibly sourced materials, we create beautiful, durable pieces that will last generations.",
    items: [
      { id: 3, name: "Wooden Cutting Board", price: 49.99, description: "Premium hardwood cutting board" },
      { id: 4, name: "Wooden Jewelry Box", price: 59.99, description: "Handcrafted wooden jewelry storage" },
    ],
  },
  3: {
    name: "Leather Works",
    rating: 4.7,
    products: 12,
    joined: "2023",
    description: "Handcrafted leather goods and accessories",
    bio: "Authentic leather craftsmanship meets modern design. Every item is hand-stitched with premium leather to create timeless accessories.",
    items: [
      { id: 5, name: "Leather Journal", price: 39.99, description: "Premium leather-bound journal" },
    ],
  },
  4: {
    name: "Cozy Creations",
    rating: 5.0,
    products: 8,
    joined: "2023",
    description: "Hand-knitted blankets and home textiles",
    bio: "Creating cozy moments, one stitch at a time. Our hand-knitted pieces are made with the finest natural fibers for ultimate comfort.",
    items: [
      { id: 6, name: "Knitted Wool Blanket", price: 79.99, description: "Soft hand-knitted wool blanket" },
    ],
  },
  5: {
    name: "Painted Pottery",
    rating: 4.6,
    products: 31,
    joined: "2020",
    description: "Unique hand-painted ceramic pieces",
    bio: "Every piece tells a story. I hand-paint ceramic items with vibrant colors and meaningful designs to bring joy to your home.",
    items: [
      { id: 7, name: "Hand-Painted Mug", price: 24.99, description: "Colorful hand-painted ceramic mug" },
    ],
  },
  6: {
    name: "Natural Beauty",
    rating: 4.9,
    products: 15,
    joined: "2022",
    description: "Organic handmade soaps and skincare",
    bio: "Crafting natural beauty products with organic ingredients. We believe in sustainability, quality, and taking care of your skin naturally.",
    items: [
      { id: 8, name: "Handmade Soap Set", price: 29.99, description: "Organic handmade soap collection" },
    ],
  },
};

export default function SellerProfile({ params }: { params: { id: string } }) {
  const seller = SELLERS[parseInt(params.id)];

  if (!seller) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Seller Not Found</h1>
          <Link href="/sellers" className="text-amber-700 hover:text-amber-800">
            Back to Sellers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-amber-800">
              🎨 Handcrafted Haven
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-700 hover:text-amber-700">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-amber-700">Marketplace</Link>
              <Link href="/sellers" className="text-gray-700 hover:text-amber-700">Sellers</Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-700">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-700">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/sellers" className="text-amber-700 hover:text-amber-800 mb-6 inline-block">
          ← Back to Sellers
        </Link>

        {/* Seller Profile Header */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-12 mb-12">
          <div className="flex items-center gap-8 mb-6">
            <div className="text-9xl">🎨</div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{seller.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{seller.description}</p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-amber-700">⭐ {seller.rating}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Products</p>
                  <p className="text-2xl font-bold text-gray-900">{seller.products}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="text-2xl font-bold text-gray-900">{seller.joined}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Artisan</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{seller.bio}</p>
        </div>

        {/* Featured Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seller.items.map((item: Item, idx: number) => (
              <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-6xl">
                  🏺
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-amber-700 font-semibold mb-3">${item.price.toFixed(2)}</p>
                  {item.description && <p className="text-sm text-gray-600 mb-3">{item.description}</p>}
                  <button className="w-full bg-amber-700 text-white py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact This Seller</h2>
          <p className="text-gray-600 mb-6">Have questions about their products? Get in touch directly!</p>
          <button className="bg-amber-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors">
            Send a Message
          </button>
        </div>
      </main>
    </div>
  );
}
