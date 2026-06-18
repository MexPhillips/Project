"use client";

import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  createdAt: string;
}

interface ReviewsSectionProps {
  productId: number;
  initialReviews: Array<{ author: string; rating: number; text: string; date: string }>;
}

export default function ReviewsSection({ productId, initialReviews }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load reviews from database
    const loadReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?productId=${productId}`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        }
      } catch (error) {
        console.error("Failed to load reviews:", error);
        // Fallback to initial reviews
        setReviews(
          initialReviews.map((r, i) => ({
            id: i,
            author: r.author,
            rating: r.rating,
            text: r.text,
            createdAt: r.date,
          }))
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, [productId, initialReviews]);

  const handleReviewSubmitted = async () => {
    // Refresh reviews list
    try {
      const response = await fetch(`/api/reviews?productId=${productId}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (error) {
      console.error("Failed to refresh reviews:", error);
    }
  };

  const displayReviews = reviews.length > 0 ? reviews : initialReviews.map((r, i) => ({
    id: i,
    author: r.author,
    rating: r.rating,
    text: r.text,
    createdAt: r.date,
  }));

  return (
    <div>
      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
        {isLoading ? (
          <p className="text-gray-600">Loading reviews...</p>
        ) : (
          <div className="space-y-4">
            {displayReviews.length > 0 ? (
              displayReviews.map((review) => (
                <div key={`${review.id}-${review.author}`} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
            )}
          </div>
        )}
      </div>

      <ReviewForm productId={productId} onReviewSubmitted={handleReviewSubmitted} />
    </div>
  );
}
