import circleMask from "@/public/hero/circle.png";
import drumMask from "@/public/hero/drum.png";
import primaryMask from "@/public/hero/Mask Group.png";
import triangleMask from "@/public/hero/triangle.png";
import whiteBigMask from "@/public/hero/white-big-mask.png";
import whiteMask from "@/public/hero/white-mask.png";
import { StarIcon } from "@/public/Icons";
import Image from "next/image";
import Search from "../common/Search";
export default function HeroSection() {
  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  ];

  return (
    <section className="relative -top-19 md:-top-23.5 w-full min-h-[calc(100vh-76px)] overflow-hidden bg-secondaryColor text-white flex flex-col justify-between pt-24 sm:pt-28 md:pt-40">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "center -10px",
        }}
      />

      <div className="absolute left-0 top-[24%] sm:top-[26%] z-10 w-28 sm:w-36 md:w-44 lg:w-60 xl:w-71.5 pointer-events-none select-none transition-transform duration-700 hover:scale-105">
        <Image src={primaryMask} alt="primary-mask" className="w-full h-auto" />
      </div>

      <div className="absolute  right-0  top-[20%] sm:top-[22%] z-10 w-28 sm:w-36 md:w-44 lg:w-48 pointer-events-none select-none">
        <Image src={drumMask} alt="primary-mask" className="w-full h-auto" />
      </div>

      <div className="relative z-20 max-w-233.75 mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-white leading-[120%] drop-shadow-sm">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-liteWhiteColor   font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mt-7 md:mt-10 lg:mt-15 relative">
          <div className="absolute right-[-8%] sm:right-[-10%] md:right-[5%] lg:-right-22 top-10 lg:top-4 z-10 w-18 sm:w-24 md:w-25 lg:w-47 pointer-events-none select-none">
            <Image
              src={triangleMask}
              width={200}
              height={200}
              alt="primary-mask"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute left-[-8%] sm:left-[-10%] md:left-[-2%] lg:-left-22 top-10 lg:top-4 z-10 w-24 sm:w-20 md:w-25 lg:w-44 pointer-events-none select-none">
            <Image
              src={whiteMask}
              alt="primary-mask"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <Search />
        </div>
      </div>
      <div className="relative w-full mt-10 sm:mt-14 md:mt-16 flex flex-col items-center justify-end z-20">
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-70 sm:-bottom-85 md:-bottom-114 lg:-bottom-154 xl:-bottom-200 w-120 sm:w-190 md:w-3xl xl:w-300 lg:w-255 lg:h-255 h-120 sm:h-190 md:h-192 xl:h-300 rounded-full bg-primaryColor z-10 pointer-events-none select-none shadow-[0_0_80px_rgba(212,251,32,0.25)]" />
        <div className="relative z-20 w-[320px] sm:w-105 md:w-122.5 lg:w-160.5  ">
          <Image
            src="/image/hero-image.png"
            alt="ByteSpace student learning online with laptop and headphones"
            width={580}
            height={50}
            priority
            className="w-full h-auto  block drop-shadow-2xl"
          />
          <div className="absolute -left-10 md:-left-40 lg:-left-55 xl:-left-86 xl:top-45   md:top-25 z-20 bottom-[4%]   w-32 sm:w-40 md:w-40 lg:w-60.75 xl:w-65.75 pointer-events-none select-none">
            <Image
              src={circleMask}
              alt="primary-mask"
              width={343}
              height={343}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute lg:-right-95 -right-10 md:-right-40 -rotate-5 top-[55%] md:top-[20%] lg:top-[32%] z-10 w-22 sm:w-36 md:w-40 lg:w-60 xl:w-71.5 pointer-events-none select-none">
            <Image
              src={whiteBigMask}
              alt="primary-mask"
              className="w-full h-auto"
            />
          </div>

          <div className="absolute lg:-left-5  -left-2 md:-left-16 top-[3%] sm:top-[16%] md:top-[17%] lg:top-[21%] z-30 bg-white text-descriptionColor rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.22)]  p-3 sm:p-4 border border-white/60 select-none">
            <h5 className="font-medium text-descriptionColor text-sm sm:text-base leading-tight tracking-tight">
              UI/UX Design
            </h5>
            <p className="text-grayColor text-[11px] sm:text-xs  font-medium mt-1 whitespace-nowrap">
              <span className="block md:inline-block"> 200 Courses</span>{" "}
              <span className="hidden md:inline-block">&nbsp;&bull;&nbsp;</span>
              1000+ Students
            </p>
          </div>
          <div className="absolute right-[-5%] md:right-3 lg:right-6  top-[14%] sm:top-[18%] md:top-[20%] lg:top-[22%] z-30 bg-white text-descriptionColor rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.22)] p-3 sm:p-4 min-w-36.5 sm:min-w-48.75 lg:min-w-58 border border-white/60 select-none">
            <h5 className="text-descriptionColor text-xs sm:text-sm font-medium ">
              Learning Progress
            </h5>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-descriptionColor mt-2 tracking-tight leading-[120%]">
              55%
            </h2>
            <div className="w-full h-2 bg-[#F6F6F6] rounded-full mt-2 overflow-hidden">
              <div className="w-[55%] h-full bg-primaryColor rounded-full" />
            </div>
          </div>
        </div>

        <div className="absolute left-[2%] sm:left-[6%] md:left-[11%] lg:left-[9%] xl:left-[21%] 2xl:left-[28%] bottom-[8%] sm:bottom-[12%] md:bottom-[14%] lg:bottom-[9%] z-30 bg-white text-descriptionColor rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.22)] p-3 lg:p-4 border border-white/60 select-none">
          <h5 className="font-medium text-descriptionColor text-sm sm:text-base  ">
            Happy Students
          </h5>
          <p className="flex items-center gap-1.5 text-xs  ">
            4.5 <span className="text-grayColor"> (240)</span>
            <StarIcon className="text-primaryColor fill-primaryColor" />
          </p>
          <div className="flex items-center -space-x-4 lg:-space-x-4.5 mt-2">
            {studentAvatars.map((avatar, idx) => (
              <Image
                key={idx}
                src={avatar}
                width={50}
                height={50}
                alt={`Student ${idx + 1}`}
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10.75 lg:h-10.75  rounded-full object-cover shadow-xs"
              />
            ))}
            <h5 className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10.75 lg:h-10.75 rounded-full bg-primaryColor text-descriptionColor font-medium  text-xs flex items-center justify-center  shadow-xs">
              2K+
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
