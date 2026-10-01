import { coursesData } from "@/data/mock-data";
import bgImage from "@/public/image/bg-image.png";
import gWoman from "@/public/image/groth-woman.png";
import heroBoy from "@/public/image/profetional-groth.png";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Shape from "../common/Shape";
import { shapes } from "../common/ShapOBJ";
import { CourseCard } from "../courses/CourseCard";
import { HappyStudentsCard, LearningProgressCard } from "./StateCard";
const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthSection() {
  return (
    <section
      id="creators"
      className="relative  "
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        {/* Professional growth */}
        <div className=" grid items-center gap-16  pb-16 xl:pb-40 pt-24  lg:grid-cols-2 lg:pt-32 ">
          <div>
            <h2 className="font-semibold   text-3xl sm:text-4xl md:text-[44px] leading-[120%] tracking-tight text-headerColor">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-base md:text-lg leading-[160%] text-textColor mt-8 md:mt-12 ">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <dl className="lg:mt-12 mt-8 flex gap-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <h3 className="lg:text-4xl text-3xl font-medium leading-[160%]  text-secondaryColor">
                    {s.value}
                  </h3>
                  <p className="mt-1 text-lg text-textColor">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative w-full ">
            <div className="relative z-10 w-full max-w-93">
              <CourseCard course={coursesData[0]} />
            </div>
            <div className="w-99 h-100 -bottom-40 left-0 md:w-130 lg:top-25 xl:top-3 md:h-140 lg:w-110 lg:h-120 xl:w-144.5 xl:h-165 absolute md:left-10 md:top-0 z-10">
              <Image
                src={heroBoy}
                alt="growth-boy"
                width={780}
                height={500}
                className=" md:object-cover h-full  w-full "
              />
            </div>
            <Shape
              src={shapes.coilLime}
              className="xl:-right-2 right-0 md:right-35 xl:46  lg:right-2 bottom-29 lg:top-28 md:top-26 w-15 z-20 -rotate-45 sm:w-32 lg:w-25 xl:w-32"
            />
            <div className="absolute  xl:top-50 lg:right-6 md:top-40 lg:top-51 bottom-11 right-2 md:right-57 xl:right-0  z-10">
              <LearningProgressCard className="lg:min-w-45! xl:min-w-58! " />
            </div>
          </div>
        </div>

        {/* Create & manage */}
        <div className=" grid items-center gap-16 pb-24 pt-8 lg:grid-cols-2 lg:pb-32">
          <div className="relative order-2 lg:order-1 ">
            <Image
              src={gWoman}
              width={700}
              height={500}
              alt="Creator with headphones holding a tablet"
              className="w-full h-full object-cover relative  z-20"
            />
            <div className="absolute left-0 top-0 xl:-left-5 md:left-19 lg:left-0 lg:top-10 md:top-17 z-0 xl:top-13 w-58 rounded-2xl bg-secondaryColor p-4 text-liteWhiteColor shadow-lg">
              <h5 className="sm:text-base text-sm font-medium">
                Total Revenue
              </h5>
              <p className="text-[10px] text-liteWhiteColor">July 1-28</p>
              <div className="flex items-center justify-between mt-2">
                <p className=" font-display text-base sm:text-xl xl:text-2xl font-semibold">
                  $120.29
                </p>
                <span className="mt-2   bg-lime px-2 py-0.75 text-[10px] text-descriptionColor bg-primaryColor rounded-full">
                  +12$
                </span>
              </div>
              <div className="w-full h-2 bg-[#F6F6F6] rounded-full mt-2 overflow-hidden">
                <div className="w-[55%] h-full bg-primaryColor rounded-full" />
              </div>
            </div>
            <div className="absolute xl:-left-5 left-0 top-33 z-20 md:z-0 md:left-10 lg:left-0 lg:top-44 lg:z-20 xl:z-0 md:top-70 xl:top-50 w-33.5 rounded-2xl bg-secondaryColor p-3 md:p-4 text-liteWhiteColor shadow-lg">
              <h5 className="sm:text-base text-sm font-medium">Year to Date</h5>
              <p className="text-[10px] text-liteWhiteColor">2023</p>
              <p className="mt-2 text-base md:text-xl  xl:text-2xl font-semibold">
                $1,200.38
              </p>
              <span className="mt-2   bg-lime px-2 py-0.75 text-[10px] text-descriptionColor  bg-primaryColor rounded-full">
                +12$
              </span>
            </div>
            <Shape
              src={shapes.springLime}
              className="md:left-105 left-50 top-21 md:top-50 lg:top-26 lg:left-65  rotate-45 w-15 z-20  lg:w-25 xl:w-32 sm:w-32"
              delay={1}
            />
            <div className="absolute right-0 lg:bottom-35 bottom-0 md:bottom-55 md:right-10 lg:right-10 z-20 w-64">
              <HappyStudentsCard />
            </div>
          </div>

          <div className="order-1 mt-4 lg:mt-0 lg:order-2">
            <h2 className="text-descriptionColor text-3xl font-semibold leading-[120%] sm:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="lg:mt-12 mt-8 max-w-140 text-lg leading-relaxed text-textColor">
              <strong className="font-semibold text-descriptionColor">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="lg:mt-12 mt-8 space-y-4">
              {perks.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-base md:text-lg text-descriptionColor"
                >
                  <CircleCheck className="h-6 w-6 fill-secondaryColor text-white" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
