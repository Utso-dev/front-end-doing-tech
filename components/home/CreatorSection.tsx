import Link from "next/link";
import Shape from "../common/Shape";
import { shapes } from "../common/ShapOBJ";

export default function CreatorSection() {
  return (
    <section className="bg-grid relative overflow-hidden">
      <Shape
        src={shapes.coilLime}
        className="xl:-left-10 md:w-26 w-20 -left-5 lg:w-40 lg:-left-10 md:-left-6 -top-2 xl:-top-6  xl:w-52 "
        rotate={-10}
      />

      <Shape
        src={shapes.coneWhite}
        className="xl:-left-16 md:-left-2 -left-2 top-90 md:top-80 xl:top-60  w-16 md:w-20 xl:w-44 "
        delay={2}
      />
      <Shape
        src={shapes.circleSecondIcon}
        className="xl:-bottom-24 xl:left-16 md:w-30 -bottom-10 left-8 md:left-19  w-20  xl:w-60 "
        delay={0.5}
      />

      <Shape
        src={shapes.cylinderWhite}
        className="xl:-right-16 md:top-8 xl:top-8 w-20  -right-9 top-6 md:-right-12 md:w-30 lg:40  xl:w-52"
        delay={2.5}
      />
      <Shape
        src={shapes.coilLime}
        className="md:-bottom-10 -bottom-7 right-8 md:right-16  w-15 md:w-30 -rotate-44 lg:40  xl:w-48  "
        delay={3}
      />
      <div className="container">
        <div className="relative z-10   py-24 text-center  lg:py-21.5">
          <div className="mx-auto w-full max-w-150 relative">
            <Shape
              src={shapes.springWhite}
              className="xl:-left-50 md:w-12 lg:w-17 lg:-left-20  top-7 -left-3 xl:-top-8 w-6   xl:w-28 "
              delay={1}
            />
            <Shape
              src={shapes.pyramidLime}
              className="xl:-right-52 lg:-right-20 lg:top-9  xl:-top-10 w-8 top-7 md:right-0 -right-2  md:top-6 md:w-12 lg:w-17  xl:w-32 "
              delay={1.5}
            />
            <h2 className="  text-2xl md:text-4xl font-semibold leading-[120%] text-liteWhiteColor lg:text-[44px]">
              Unlock Your Potential as a Creator with ByteSpace
            </h2>
          </div>
          <p className="my-10 text-base md:text-lg max-w-242 mx-auto leading-[160%] text-liteWhiteColor ">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <div className="pt-2.75">
            <Link
              href="/sign-up"
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full bg-primaryColor text-descriptionColor font-medium text-base md:text-lg `}
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
