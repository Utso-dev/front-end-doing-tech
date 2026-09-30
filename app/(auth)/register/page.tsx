"use client";

import * as React from "react";
import Link from "next/link";
import { Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen w-full blueprint-grid flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden">
      {/* Decorative 3D yellow & lime shapes */}
      <div className="absolute top-10 left-1/4 w-16 h-16 rounded-full border-[8px] border-[#D2FF00] rotate-12 pointer-events-none opacity-80" />
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-[#D2FF00]/30 rotate-45 rounded-3xl pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Side: Brand Text & Visual Floating Collage */}
        <div className="lg:col-span-6 text-white space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 group mb-2">
            <div className="w-8 h-8 rounded-xl bg-[#D2FF00] flex items-center justify-center shadow-md">
              <div className="w-3.5 h-3.5 bg-[#0047FF] rounded-xs rotate-45" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white font-sans">
              Byte<span className="text-[#D2FF00]">Space</span>
            </span>
          </Link>

          <div className="space-y-2 max-w-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Join ByteSpace Today
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              Start learning from industry leaders and unlock limitless potential with world-class digital courses.
            </p>
          </div>

          {/* Floating Course Collage */}
          <div className="relative pt-6 max-w-md hidden sm:block">
            <div className="relative z-10 w-72 bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 rotate-[1deg]">
              <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-2 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1581291518655-9523c932edcf?w=500&auto=format&fit=crop&q=80"
                  alt="Build Digital Asset"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 flex justify-between text-[8px] text-white">
                  <span className="bg-black/60 px-1.5 py-0.5 rounded-full">112 Lessons</span>
                  <span className="bg-black/60 px-1.5 py-0.5 rounded-full">24 hours</span>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-xs text-slate-900">Build Digital Asset</h4>
                <p className="text-[10px] text-slate-400">by purepearl studio</p>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[9px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-full">
                  Intermediate
                </span>
                <span className="text-xs font-bold text-[#0047FF]">$25<span className="text-[9px] text-slate-400 font-normal">/lifetime</span></span>
              </div>
            </div>

            {/* Happy Students Lime Widget */}
            <div className="absolute -bottom-6 left-28 z-20 bg-[#D2FF00] rounded-2xl p-3 shadow-xl text-[#0f172a] space-y-1">
              <div className="text-[10px] font-bold">Happy Students</div>
              <div className="flex items-center gap-1 text-[9px] font-semibold">
                <span>4.8 (12k+)</span>
                <Star className="w-2.5 h-2.5 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Card */}
        <div className="lg:col-span-6 max-w-md w-full mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-100 relative">
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#0047FF]">Get Started</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Create an Account
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Jane Doe"
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF] text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@example.com"
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF] text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF] text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="flex justify-end pt-1">
                <Button
                  type="submit"
                  variant="lime"
                  className="px-8 py-2.5 rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform"
                >
                  Create Account
                </Button>
              </div>
            </form>

            {/* OR separator */}
            <div className="relative my-8 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <span className="relative px-4 bg-white text-xs text-slate-400">or</span>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => alert("Facebook login")}
                className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Register with Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => alert("Google login")}
                className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Register with Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-8 text-center text-xs text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#0047FF] font-semibold hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
