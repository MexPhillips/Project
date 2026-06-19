"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";

const PAGE_SIZE = 12;

type SortOption = "newest" | "price-asc" | "price-desc" | "popular" | "rating";

interface ProductsCatalogProps {
  products: Product[];
  categories: string[];
  priceRanges: string[];
}

function matchesPriceRange(price: number, range: string) {
  switch (range) {
    case "Under $50":
      return price < 50;
    case "$50-$100":
      return price >= 50 && price <= 100;
    case "$100-$200":
      return price > 100 && price <= 200;
    case "$200+":
      return price > 200;
    default:
      return true;
  }
}

function matchesRating(rating: number, filter: string) {
  switch (filter) {
    case "4.5+ ⭐":
      return rating >= 4.5;
    case "4.0+ ⭐":
      return rating >= 4.0;
    case "3.5+ ⭐":
      return rating >= 3.5;
    default:
      return true;
  }
}

export default function ProductsCatalog({ products, categories, priceRanges }: ProductsCatalogProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const [priceRange, setPriceRange] = useState("All Prices");
  const [ratingFilters, setRatingFilters] = useState<string[]>(["All Ratings"]);
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.seller.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategories.includes("All") || selectedCategories.includes(product.category);

      const matchesPrice = matchesPriceRange(product.price, priceRange);

      const activeRatings = ratingFilters.filter((rating) => rating !== "All Ratings");
      const matchesRatings =
        activeRatings.length === 0 ||
        activeRatings.some((filter) => matchesRating(product.rating, filter));

      return matchesSearch && matchesCategory && matchesPrice && matchesRatings;
    });

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "popular":
          return b.reviews - a.reviews;
        case "rating":
          return b.rating - a.rating;
        default:
          return b.id - a.id;
      }
    });

    return result;
  }, [products, search, selectedCategories, priceRange, ratingFilters, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function toggleCategory(category: string) {
    setPage(1);
    if (category === "All") {
      setSelectedCategories(["All"]);
      return;
    }

    setSelectedCategories((prev) => {
      const withoutAll = prev.filter((item) => item !== "All");
      const next = withoutAll.includes(category)
        ? withoutAll.filter((item) => item !== category)
        : [...withoutAll, category];
      return next.length === 0 ? ["All"] : next;
    });
  }

  function toggleRating(rating: string) {
    setPage(1);
    if (rating === "All Ratings") {
      setRatingFilters(["All Ratings"]);
      return;
    }

    setRatingFilters((prev) => {
      const withoutAll = prev.filter((item) => item !== "All Ratings");
      const next = withoutAll.includes(rating)
        ? withoutAll.filter((item) => item !== rating)
        : [...withoutAll, rating];
      return next.length === 0 ? ["All Ratings"] : next;
    });
  }

  return (
    <>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketplace</h1>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-lg text-gray-600">
            Showing {filteredProducts.length} of {products.length} handcrafted treasures
          </p>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value as SortOption);
              setPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          >
            <option value="newest">Sort by: Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products, sellers, or tags..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg lg:sticky lg:top-20">
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-amber-700"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span className="ml-3 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      className="w-4 h-4 text-amber-700"
                      checked={priceRange === range}
                      onChange={() => {
                        setPriceRange(range);
                        setPage(1);
                      }}
                    />
                    <span className="ml-3 text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Rating</h3>
              <div className="space-y-2">
                {["4.5+ ⭐", "4.0+ ⭐", "3.5+ ⭐", "All Ratings"].map((rating) => (
                  <label key={rating} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-amber-700"
                      checked={ratingFilters.includes(rating)}
                      onChange={() => toggleRating(rating)}
                    />
                    <span className="ml-3 text-gray-700">{rating}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <p className="text-xl text-gray-600 mb-4">No products match your filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategories(["All"]);
                  setPriceRange("All Prices");
                  setRatingFilters(["All Ratings"]);
                  setPage(1);
                }}
                className="text-amber-700 hover:text-amber-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col group">
                    <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-6xl">
                      {product.image}
                      {!product.stock && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold">Out of Stock</span>
                        </div>
                      )}
                      {product.rating === 5.0 && (
                        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                          ⭐ Bestseller
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-700">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.seller}</p>
                      <p className="text-xs text-gray-500 mb-3 bg-gray-100 w-fit px-2 py-1 rounded">{product.category}</p>
                      <div className="flex items-center gap-1 text-sm mb-3">
                        <span className="text-yellow-500">⭐ {product.rating}</span>
                        <span className="text-gray-500">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200">
                        <div>
                          <p className="text-lg font-bold text-amber-700">${product.price}</p>
                          {product.stock && <p className="text-xs text-green-600 font-medium">In Stock</p>}
                        </div>
                        <span
                          className={`${product.stock ? "bg-amber-700" : "bg-gray-400"} text-white px-3 py-2 rounded-lg text-sm font-medium`}
                        >
                          {product.stock ? "View" : "Sold"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    pageNumber === currentPage
                      ? "bg-amber-700 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <p className="text-3xl mb-2">🚚</p>
              <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $75</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <p className="text-3xl mb-2">✨</p>
              <h3 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">Every item is authentically handmade</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <p className="text-3xl mb-2">🔄</p>
              <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
