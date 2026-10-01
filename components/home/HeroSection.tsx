import Image from "next/image";
import Search from "../common/Search";
import Shape from "../common/Shape";
import { shapes } from "../common/ShapOBJ";
import { HappyStudentsCard, LearningProgressCard } from "./StateCard";
export default function HeroSection() {
  return (
    <section className="relative  w-full min-h-[calc(100vh-76px)] overflow-hidden bg-secondaryColor text-white flex flex-col justify-between pt-24 sm:pt-28 md:pt-40">
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
      <Shape
        src={shapes.coilLime}
        className="absolute -left-15 top-[24%] sm:top-[26%] z-10 w-28 sm:w-36 md:w-44 lg:w-50 xl:w-61.5 pointer-events-none select-none transition-transform duration-700 hover:scale-105"
      />
      <Shape
        src={shapes.cylinderLime}
        className="absolute  -right-20  top-[20%] sm:top-[22%] z-10 w-28 sm:w-36 md:w-44 lg:w-48 pointer-events-none select-none"
        delay={0.5}
      />

      <div className="relative z-20 max-w-233.75 mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-white leading-[120%] drop-shadow-sm">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-liteWhiteColor md:px-20 lg:px-0 px-6  font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mt-7 md:mt-10 lg:mt-15 relative">
          <Shape
            src={shapes.coneWhite}
            className="absolute right-[-8%] sm:right-[-10%] md:right-[5%] lg:right-5 top-10 lg:top-4 z-10 w-13 sm:w-18 md:w-18 lg:w-22 xl:w-28 rotate-30 pointer-events-none select-none"
            delay={2}
          />
          <Shape
            src={shapes.springWhite}
            className="absolute left-[-6%] sm:left-[-10%] md:left-[-2%] lg:left-0 top-12 lg:top-4 z-10 w-13 sm:w-15 md:w-18 lg:w-22 xl:w-28 pointer-events-none select-none"
            delay={1}
          />

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
          <Shape
            src={shapes.circleWhiteIcon}
            className="absolute -left-10 md:-left-40 lg:-left-55 xl:-left-80 xl:top-45   md:top-25 z-20 bottom-[4%]   w-20 sm:w-25 md:w-30 lg:w-40.75 xl:w-55.75 pointer-events-none select-none"
            delay={3}
          />

          <Shape
            src={shapes.springWhite}
            className="absolute lg:-right-75 -right-10 md:-right-40 -rotate-5 top-[55%] md:top-[20%] lg:top-[32%] z-10  w-16 sm:w-22 md:w-36 lg:w-42  pointer-events-none select-none"
            delay={3}
          />

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
          <div className="absolute right-[-5%] md:right-3 lg:right-6  top-[14%] sm:top-[18%] md:top-[20%] lg:top-[22%] z-30   min-w-36.5 sm:min-w-48.75 lg:min-w-58  select-none">
            <LearningProgressCard />
          </div>
        </div>

        <div className="absolute left-[2%] sm:left-[6%] md:left-[11%] lg:left-[9%] xl:left-[21%] 2xl:left-[28%] bottom-[8%] sm:bottom-[12%] md:bottom-[14%] lg:bottom-[9%] z-30">
          <HappyStudentsCard />
        </div>
      </div>
    </section>
  );
}
