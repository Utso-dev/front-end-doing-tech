"use client";

import { cn } from "@/lib/utils";
import { CartIcon } from "@/public/Icons";
import mainLogo from "@/public/mainlogo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky left-0 top-0 z-50 w-full py-5 transition-all duration-300 md:py-7",
        isScrolled &&
          "animate-[navbar-reveal_1020ms_ease-out] bg-secondaryColor/50 shadow-lg backdrop-blur-md",
      )}
    >
      <div className="container flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="inline-block transition-opacity hover:opacity-90"
          >
            <Image
              src={mainLogo}
              alt="ByteSpace Logo"
              width={172}
              height={37}
              priority
              className="h-7 sm:h-8 md:h-9.25 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm lg:text-[15px] transition-colors duration-200",
                  isActive
                    ? "text-white font-medium"
                    : "text-white/80 hover:text-white font-normal",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Desktop Auth & Cart */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            href="/sign-in"
            className="text-white/90 hover:text-white text-sm lg:text-[15px] font-normal transition-colors"
          >
            Sign In
          </Link>

          <Link
            href="/join-us"
            className="text-white/90 hover:text-white text-sm lg:text-[15px] font-normal transition-colors"
          >
            Join Us
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="text-white hover:text-white/80 transition-colors p-1"
          >
            <CartIcon className="w-5 h-5 " />
          </Link>
        </div>

        {/* Mobile Actions: Cart & Menu Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="text-white hover:text-white/80 transition-colors p-1"
          >
            <CartIcon className="w-5 h-5" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <HiXMark className="w-7 h-7" />
            ) : (
              <HiOutlineBars3 className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden fixed top-0 right-0 h-full w-[280px] bg-[#002fad] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between p-6",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Image
              src={mainLogo}
              alt="ByteSpace Logo"
              width={120}
              height={28}
              className="h-6 w-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white p-1"
              aria-label="Close menu"
            >
              <HiXMark className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 mt-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-base py-1 transition-colors",
                  pathname === item.href
                    ? "text-[#d4fb20] font-semibold"
                    : "text-white/90 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col space-y-3">
          <Link
            href="/sign-in"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-2.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/join-us"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-2.5 rounded-lg bg-[#d4fb20] text-black font-semibold text-sm hover:bg-[#c3ea15] transition"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
