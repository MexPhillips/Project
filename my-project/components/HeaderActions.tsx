"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartBadge from "./CartBadge";

type SessionUser = {
  id: number;
  name: string;
  email: string;
  accountType: string;
};

export default function HeaderActions() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => setUser(data.user ?? null))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  }, []);

  async function handleSignOut() {
    await fetch("/api/auth/signout", { method: "POST" });
    setUser(null);
    router.push("/");
    router.refresh();
  }

  return (
    <div className="flex gap-3 sm:gap-4 items-center">
      <CartBadge />
      {isLoading ? (
        <span className="hidden sm:inline text-sm text-gray-400">...</span>
      ) : user ? (
        <>
          <span className="hidden md:inline text-sm text-gray-700">
            Hi, <span className="font-medium">{user.name.split(" ")[0]}</span>
          </span>
          <button
            type="button"
            onClick={handleSignOut}
            className="px-3 py-2 text-sm text-gray-700 hover:text-amber-700"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link href="/auth/signin" className="px-3 py-2 text-sm text-gray-700 hover:text-amber-700">
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-3 py-2 text-sm bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
          >
            Get Started
          </Link>
        </>
      )}
    </div>
  );
}
