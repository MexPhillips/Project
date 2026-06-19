import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createSessionCookie } from "@/lib/auth";
import { findUserByEmail } from "@/lib/users";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password." }, { status: 400 });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const user = await findUserByEmail(normalizedEmail);

    if (!user || !verifyPassword(String(password), user.passwordHash)) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const response = NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email, accountType: user.accountType },
    });
    response.headers.set("Set-Cookie", createSessionCookie(user.id));
    return response;
  } catch (error) {
    console.error("Signin error", error);
    return NextResponse.json({ error: "Unable to sign in. Please try again later." }, { status: 500 });
  }
}
