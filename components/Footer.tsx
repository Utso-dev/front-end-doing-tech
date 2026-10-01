"use client";
import logo from "@/public/footer-logo.png";
import { SearchIcon } from "@/public/Icons";
import Image from "next/image";
import Link from "next/link";

const columnOneLinks = [
  { name: "Featured Courses", slug: "/featured-courses" },
  { name: "Featured Categories", slug: "/featured-categories" },
  { name: "Business", slug: "/business" },
  { name: "IT", slug: "/it" },
  { name: "Design", slug: "/design" },
];

const columnTwoLinks = [
  { name: "Development", slug: "/development" },
  { name: "Marketing", slug: "/marketing" },
  { name: "Photography", slug: "/photography" },
  { name: "Finance", slug: "/finance" },
  { name: "Sport", slug: "/sport" },
];

const columnThreeLinks = [
  { name: "Become a Creator", slug: "/become-creator" },
  { name: "Affiliate Program", slug: "/affiliate-program" },
  { name: "Contact", slug: "/contact" },
  { name: "Help", slug: "/help" },
  { name: "About", slug: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-whiteColor container">
      <div className="py-12">
        <div className=" grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-10 md:mb-18 lg:mb-24 xl:mb-32.5">
          <div className="md:col-span-12 lg:col-span-6 ">
            <Link href="/">
              <Image
                src={logo}
                alt="ByteSpace logo"
                width={160}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm  text-descriptionColor max-w-125 leading-[160%] mt-4 mb-8 lg:mb-10">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className=" flex items-center gap-3 max-w-145  w-full px-2 sm:px-0">
              <div className="flex items-center border border-borderColor bg-white rounded-full mx p-1.5 pl-5 py-3 sm:pl-6  transition-all focus-within:ring-2 max-w-100 w-full focus-within:ring-primaryColor">
                <SearchIcon className="text-grayColor w-5 h-5 shrink-0 mr-2.5" />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full  bg-transparent text-blackColor placeholder-gray-400 text-base md:text-lg outline-none pr-3 font-normal"
                />
              </div>
              <button
                type="submit"
                className="bg-primaryColor hover:shadow-md font-medium shadow-primaryColor/50 text-black text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                Search
              </button>
            </div>

            <p className="text-xs text-descriptionColor max-w-125 leading-[160%] mt-6">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="md:col-span-12 lg:col-span-6 grid grid-cols-2 pt-6 md:pt-14 sm:grid-cols-3 gap-8">
            {/* Column 2 */}
            <div>
              <ul className="space-y-4 text-sm  text-descriptionColor">
                {columnOneLinks.map(({ name, slug }) => (
                  <li key={slug}>
                    <Link
                      href={slug}
                      className="hover:text-secondaryColor transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-4 text-sm  text-descriptionColor">
                {columnTwoLinks.map(({ name, slug }) => (
                  <li key={slug}>
                    <Link
                      href={slug}
                      className="hover:text-secondaryColor transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <ul className="space-y-4 text-sm  text-descriptionColor">
                {columnThreeLinks.map(({ name, slug }) => (
                  <li key={slug}>
                    <Link
                      href={slug}
                      className="hover:text-secondaryColor transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-descriptionColor">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-secondaryColor transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-secondaryColor transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies-settings"
              className="hover:text-secondaryColor transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
