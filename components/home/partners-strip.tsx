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
    <section className="w-full bg-liteWhiteColor border-y py-6 md:py-10 xl:py-20  ">
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
              className="flex items-center px-2 md:px-4 lgxl:px-8 justify-center shrink-0 opacity-75 hover:opacity-100 transition-all cursor-pointer "
            >
              <Image
                src={src}
                width={200}
                height={100}
                alt={`Partner logo ${index + 1}`}
                className="h-full  object-contain w-20.5 md:w-30 lg:w-40 xl:w-42"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
