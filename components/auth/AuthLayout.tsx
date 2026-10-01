import { coursesData } from "@/data/mock-data";
import logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Shape from "../common/Shape";
import { shapes } from "../common/ShapOBJ";
import { CourseCard } from "../courses/CourseCard";
import { HappyStudentsCard } from "../home/StateCard";
type AuthLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <section className="bg-grid min-h-screen overflow-hidden">
      <div className="container">
        <div className=" grid  items-start gap-10 lg:gap-6 xl:gap-10  py-8  lg:grid-cols-12 xl:grid-cols-2 xl:px-0">
          <aside className="relative md:text-center lg:text-start lg:col-span-6 xl:col-span-1">
            <Link href="/" aria-label="ByteSpace home" className="inline-block">
              <Image
                src={logo}
                alt="ByteSpace logo"
                width={100}
                height={100}
                className="w-7 h-auto"
              />
            </Link>
            <h2 className="mt-12  text-xl font-semibold text-white">{title}</h2>
            <p className="mt-4 md:px-12 lg:px-0 lg:max-w-120  text-lg font-light leading-relaxed text-white/90">
              {description}
            </p>

            <div className="relative mt-8 lg:mt-16  h-140 " aria-hidden="true">
              <div className="absolute left-0 md:left-25 lg:left-0 top-20 md:top-24.5 max-w-93 hover:translate-y-0">
                <CourseCard course={coursesData[1]} />
              </div>
              <div className="absolute left-8 md:left-45 lg:left-28 top-0 max-w-93 hover:translate-y-0">
                <CourseCard course={coursesData[2]} />
              </div>

              <Shape
                src={shapes.torusLime}
                className="lg:left-15 md:left-25 top-7.5 w-20 md:w-25 lg:w-28"
                rotate={-20}
              />
              <Shape
                src={shapes.springWhite}
                className="lg:left-95 md:left-100 hidden md:block top-85 z-10 w-25 lg:w-28"
                delay={1}
              />
              <Shape
                src={shapes.pyramidLime}
                className="left-0 lg:left-0 md:left-30 bottom-10 md:bottom-0 lg:-bottom-15 w-18 lg:w-32"
                rotate={-8}
                delay={2}
              />
              <div className="absolute  md:right-40 lg:left-56.5 right-0 bottom-12 w-40 md:w-fit md:-bottom-5 shadow-none">
                <HappyStudentsCard variant="lime" />
              </div>
            </div>
          </aside>

          <main className="rounded-[28px] lg:col-span-6 xl:col-span-1 bg-white px-4 py-12 sm:px-16 lg:mt-22 ">
            {children}
          </main>
        </div>
      </div>
    </section>
  );
}
