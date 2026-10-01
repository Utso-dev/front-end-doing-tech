import { StarIcon } from "@/public/Icons";
import Image from "next/image";
const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
];

export function HappyStudentsCard({
  className = "",
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "lime";
}) {
  return (
    <div className=" z-20 bg-white text-descriptionColor rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.22)] p-3 lg:p-4 border border-white/60 select-none">
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
  );
}

export function LearningProgressCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-white text-descriptionColor rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.22)] p-3 sm:p-4 min-w-36.5 sm:min-w-48.75 lg:min-w-58 border border-white/60 select-none ${className}`}
    >
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
  );
}

export function TopicCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-white px-4 py-3 shadow-[0_20px_50px_-20px_rgb(3_8_24/0.35)] ${className}`}
    >
      <p className="text-lg text-ink">UI/UX Design</p>
      <p className="text-xs text-muted">
        200 Courses <span className="mx-1">•</span> 1000+ Students
      </p>
    </div>
  );
}
