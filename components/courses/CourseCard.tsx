import { Course } from "@/lib/types";
import { NetworkIcon, StarIcon } from "@/public/Icons";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group flex flex-col bg-white rounded-3xl p-4 border border-borderColor shadow-xs hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-slate-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={400}
          height={225}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 text-[10px] text-white font-medium">
          <div className="flex items-center gap-1.5 w-full justify-between">
            <span className=" font-medium text-[12px] leading-[120%] text-center align-middle px-2.5 py-1 rounded-full bg-[#F6F6F6]/50 text-textColor border border-white/10 backdrop-blur-sm">
              {course.lessonsCount} Lessons
            </span>
            <span className=" font-medium text-[12px] leading-[120%] text-center align-middle px-2.5 py-1 rounded-full bg-[#F6F6F6]/50 text-textColor border border-white/10 backdrop-blur-sm">
              {course.totalDuration}
            </span>
            <span className=" font-medium text-[12px] leading-[120%] text-center align-middle px-2.5 py-1 rounded-full bg-[#F6F6F6]/50 text-textColor border border-white/10 backdrop-blur-sm">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 md:pt-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className=" font-semibold truncate text-xl leading-[120%]">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-xs font-semibold text-grayColor shrink-0">
              <span className="font-normal text-lg leading-[160%]">
                {course.rating.toFixed(1)}
              </span>
              <StarIcon className="w-3.5 h-3.5 fill-grayColor text-grayColor" />
            </div>
          </div>

          <p className=" font-normal text-descriptionColor text-xs leading-[160%] a mt-0.5">
            by{" "}
            <span className=" font-normal leading-[160%]   text-secondaryColor">
              {course.creator.name.toLowerCase()}
            </span>
          </p>
        </div>

        <div className="pt-2 border-t border-slate-50 ">
          <div className="flex items-center gap-2">
            <p className="inline-flex items-center gap-1 text-[#4B4C53]  font-medium text-xs leading-[120%] text-center bg-liteWhiteColor px-2.5  rounded-full py-3">
              <NetworkIcon className="w-3 h-3  " />
              {course.level}
            </p>

            {/* Overlapping Student Avatars */}
            <div className="flex items-center -space-x-1.5 overflow-hidden">
              {(
                course.studentAvatars || [
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
                ]
              ).map((avatar, idx) => (
                <Image
                  key={idx}
                  src={avatar}
                  width={60}
                  height={60}
                  alt="Student"
                  className="inline-block h-5 w-5 md:w-8 md:h-8 rounded-full  object-cover"
                />
              ))}
              <span className="inline-flex items-center justify-center h-5 w-5 md:w-8 md:h-8 rounded-full text-xs font-bold bg-primaryColor text-descriptionColor ">
                26+
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className=" font-semibold text-lg md:text-xl leading-[120%]   text-secondaryColor">
              ${course.price}
            </span>
            <span className=" text-textColor text-xs leading-[160%] ">
              /lifetime
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
