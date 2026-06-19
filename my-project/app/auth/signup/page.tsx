'use client';

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "buyer",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to create account. Please try again.");
        return;
      }

      router.push("/");
    } catch (err) {
      setError("Unable to create account. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-amber-800 mb-2">🎨</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Handcrafted Haven</h2>
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">I am a...</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="accountType"
                    value="buyer"
                    checked={formData.accountType === "buyer"}
                    onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                    className="w-4 h-4"
                  />
                  <span className="ml-2 text-gray-700">Buyer - I want to purchase handcrafted items</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="accountType"
                    value="seller"
                    checked={formData.accountType === "seller"}
                    onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                    className="w-4 h-4"
                  />
                  <span className="ml-2 text-gray-700">Seller - I want to sell my handcrafted items</span>
                </label>
              </div>
            </div>

            <label className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 mt-1"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-amber-700 hover:text-amber-800">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-amber-700 hover:text-amber-800">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-700 text-white py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-amber-700 hover:text-amber-800 font-medium">
              Sign in here
            </Link>
          </p>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
