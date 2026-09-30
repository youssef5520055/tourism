"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    localStorage.setItem("token", "mock_token_123");
    localStorage.setItem("user", JSON.stringify({ firstName: formData.firstName, email: formData.email }));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-row-reverse">
      {/* Right side (mirrored) */}
      <div className="hidden lg:flex w-1/2 bg-[#1C1917] flex-col justify-center items-center text-white p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-lg text-center space-y-8">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <MapPin className="h-10 w-10 text-[#CA8A04]" />
            <span className="text-4xl font-serif font-bold">WanderAI</span>
          </div>
          <h1 className="text-5xl font-serif leading-tight">
            "Adventure is worthwhile in itself."
          </h1>
          <p className="text-lg text-stone-300 font-sans">
            Join our exclusive community of travelers and let AI craft your perfect itinerary.
          </p>
        </div>
      </div>

      {/* Left side form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FAFAF9] p-8">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-stone-200 shadow-2xl rounded-3xl p-10 transition-all duration-500">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-[#1C1917] mb-2">Create Account</h2>
            <p className="text-[#44403C] font-sans">Start your luxury travel journey today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            
            <div className="flex space-x-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-[#1C1917]" htmlFor="firstName">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First"
                    className="pl-10 h-12 rounded-xl"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-[#1C1917]" htmlFor="lastName">Last Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last"
                    className="pl-10 h-12 rounded-xl"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1C1917]" htmlFor="email">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 rounded-xl"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1C1917]" htmlFor="password">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="pl-10 pr-10 h-12 rounded-xl"
                  value={formData.password}
                  onChange={handleChange}
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

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1C1917]" htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="pl-10 h-12 rounded-xl"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#CA8A04] text-white rounded-full px-8 py-6 mt-4 hover:bg-[#B45309] text-lg font-medium shadow-lg hover:shadow-xl transition-all">
              Sign Up
            </Button>
          </form>

          <p className="text-center mt-8 text-[#44403C]">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#CA8A04] font-semibold hover:text-[#B45309]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
