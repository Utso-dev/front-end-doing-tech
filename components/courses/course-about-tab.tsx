import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Course } from "@/lib/types";

interface CourseAboutTabProps {
  course: Course;
}

export function CourseAboutTab({ course }: CourseAboutTabProps) {
  return (
    <div className="space-y-10 py-6 max-w-3xl animate-in fade-in duration-300">
      {/* Description Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Description
        </h3>
        <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          {course.description.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Sneak Peak Gallery */}
      {course.sneakPeakImages && course.sneakPeakImages.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Sneak Peak
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {course.sneakPeakImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={imgUrl}
                  alt={`Sneak peak preview ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Points */}
      {course.keyPoints && course.keyPoints.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Key Points
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {course.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100"
              >
                <div className="w-5 h-5 rounded-full bg-[#0047FF] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
