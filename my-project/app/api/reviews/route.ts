import { NextRequest, NextResponse } from "next/server";

// Store reviews in memory (fallback when database is not available)
let reviewsStore: Array<{
  id: number;
  productId: number;
  author: string;
  rating: number;
  text: string;
  createdAt: Date;
}> = [];
let reviewIdCounter = 1;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, author, rating, text } = body;

    // Validate input
    if (!productId || !author || !rating || !text) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    // Create review in memory
    const review = {
      id: reviewIdCounter++,
      productId: parseInt(productId),
      author,
      rating: parseInt(rating),
      text,
      createdAt: new Date(),
    };

    reviewsStore.push(review);

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const productId = request.nextUrl.searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Missing productId parameter" },
        { status: 400 }
      );
    }

    // Get reviews from memory for the product
    const reviews = reviewsStore
      .filter((r) => r.productId === parseInt(productId))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
