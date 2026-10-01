import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface MainLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
  src?: string;
}

export function MainLogo({
  src = "/Logo.png",
  className,
  variant = "light",
  showText = true,
}: MainLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 group select-none",
        className,
      )}
      aria-label="ByteSpace Home"
    >
      <Image
        src={src}
        alt="ByteSpace Logo"
        width={29}
        height={32}
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        priority
      />
      {showText && (
        <span
          className={cn(
            "font-clash font-bold text-2xl tracking-tight transition-colors",
            variant === "light" ? "text-white" : "text-shuttle-gray-950",
          )}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
