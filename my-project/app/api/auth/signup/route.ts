import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashPassword, createSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, confirmPassword, accountType, agreeToTerms } = body;

    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match." }, { status: 400 });
    }

    if (!agreeToTerms) {
      return NextResponse.json(
        { error: "You must agree to the Terms of Service and Privacy Policy." },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existingUser = await prisma.user.findUnique({ where: { email: normalizedEmail } });

    if (existingUser) {
      return NextResponse.json({ error: "A user with that email already exists." }, { status: 409 });
    }

    const passwordHash = hashPassword(String(password));
    const user = await prisma.user.create({
      data: {
        name: String(name).trim(),
        email: normalizedEmail,
        passwordHash,
        accountType: String(accountType || "buyer"),
      },
    });

    const response = NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
    response.headers.set("Set-Cookie", createSessionCookie(user.id));
    return response;
  } catch (error) {
    console.error("Signup error", error);
    return NextResponse.json({ error: "Could not create account. Please try again." }, { status: 500 });
  }
}
