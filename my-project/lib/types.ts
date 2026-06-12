export interface CustomerReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  seller: string;
  sellerId: number;
  category: string;
  rating: number;
  reviews: number;
  stock: boolean;
  description: string;
  longDescription: string;
  materials: string[];
  dimensions?: string;
  careInstructions?: string;
  tags: string[];
  customerReviews: CustomerReview[];
}

export interface SellerProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface Seller {
  id: number;
  name: string;
  rating: number;
  products: number;
  joined: string;
  description: string;
  location: string;
  bio: string;
  story: string;
  specialties: string[];
  emoji: string;
  featuredProducts: SellerProduct[];
}

export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
}

export interface Collection {
  id: number;
  slug: string;
  name: string;
  description: string;
  emoji: string;
  productIds: number[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSection {
  category: string;
  questions: FAQItem[];
}
