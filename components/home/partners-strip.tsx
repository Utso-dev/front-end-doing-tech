"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const PARTNERS = [
  "/image/logopsum1.png",
  "/image/logopsum2.png",
  "/image/logopsum3.png",
  "/image/logopsum4.png",
  "/image/logopsum5.png",
  "/image/logopsum1.png",
  "/image/logopsum2.png",
  "/image/logopsum3.png",
  "/image/logopsum4.png",
  "/image/logopsum5.png",
  "/image/logopsum1.png",
  "/image/logopsum2.png",
  "/image/logopsum3.png",
  "/image/logopsum4.png",
  "/image/logopsum5.png",
];

export default function PartnersStrip() {
  return (
    <section className="w-full bg-liteWhiteColor border-y  py-10 lg:py-20  ">
      <div className="w-full container flex relative items-center">
        <Marquee
          speed={40}
          pauseOnHover
          autoFill
          gradient={true}
          gradientColor="#f5f5f6"
          gradientWidth={100}
        >
          {PARTNERS.map((src, index) => (
            <div
              key={index}
              className="flex items-center px-4 md:px-7 lg:px-8 justify-center shrink-0 opacity-75 hover:opacity-100 transition-all cursor-pointer "
            >
              <Image
                src={src}
                width={200}
                height={100}
                alt={`Partner logo ${index + 1}`}
                className="h-full w-auto object-contain max-w-32.5 sm:max-w-42"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
