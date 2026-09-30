"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("token", "mock_token_123");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side */}
      <div className="hidden lg:flex w-1/2 bg-[#1C1917] flex-col justify-center items-center text-white p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-lg text-center space-y-8">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <MapPin className="h-10 w-10 text-[#CA8A04]" />
            <span className="text-4xl font-serif font-bold">WanderAI</span>
          </div>
          <h1 className="text-5xl font-serif leading-tight">
            "The world is a book and those who do not travel read only one page."
          </h1>
          <p className="text-lg text-stone-300 font-sans">
            Your journey begins here. Unlock AI-curated luxury experiences tailored precisely to your desires.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FAFAF9] p-8">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-stone-200 shadow-2xl rounded-3xl p-10 transition-all duration-500">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-[#1C1917] mb-2">Welcome Back</h2>
            <p className="text-[#44403C] font-sans">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1C1917]" htmlFor="email">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-[#1C1917]" htmlFor="password">Password</label>
                <Link href="#" className="text-sm text-[#CA8A04] hover:text-[#B45309]">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10 h-12 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#CA8A04] text-white rounded-full px-8 py-6 hover:bg-[#B45309] text-lg font-medium shadow-lg hover:shadow-xl transition-all">
              Sign In
            </Button>
          </form>

          <p className="text-center mt-8 text-[#44403C]">
            Don't have an account?{" "}
            <Link href="/auth/register" className="text-[#CA8A04] font-semibold hover:text-[#B45309]">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
