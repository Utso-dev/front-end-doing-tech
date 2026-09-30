"use client";

import * as React from "react";
import { Video, ChevronDown, ChevronRight, CheckCircle2, Lock } from "lucide-react";
import { Course } from "@/lib/types";
import { Progress } from "@/components/ui/progress";

interface CourseLessonsTabProps {
  course: Course;
}

export function CourseLessonsTab({ course }: CourseLessonsTabProps) {
  const [expandedModules, setExpandedModules] = React.useState<Record<string, boolean>>({
    "mod-1": true,
  });

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-10 py-6 max-w-3xl animate-in fade-in duration-300">
      {/* Explore the Modules */}
      <section className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Explore the Modules
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </section>

      {/* Lesson List */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          Lesson List
        </h3>

        <div className="space-y-3.5">
          {course.modules.map((module) => {
            const isExpanded = !!expandedModules[module.id];

            return (
              <div
                key={module.id}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:border-slate-200 transition-all duration-200"
              >
                <div
                  onClick={() => toggleModule(module.id)}
                  className="flex items-start gap-4 cursor-pointer select-none"
                >
                  {/* Vibrant Lime Video Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#D2FF00] flex items-center justify-center shrink-0 shadow-xs text-[#0f172a] mt-0.5">
                    <Video className="w-5 h-5 fill-current" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">
                        {module.title}
                      </h4>
                      <button className="text-slate-400 hover:text-slate-700 p-1">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Expanded Sub-Lessons Syllabus */}
                {isExpanded && module.lessons && module.lessons.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 pl-2 sm:pl-14 animate-in fade-in">
                    {module.lessons.map((lesson, lIdx) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-xs transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                          )}
                          <span
                            className={
                              lesson.isCompleted
                                ? "text-slate-800 font-medium"
                                : "text-slate-600"
                            }
                          >
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 font-mono text-[11px]">
                            {lesson.duration}
                          </span>
                          {lesson.isPreview ? (
                            <span className="text-[10px] font-bold text-[#0047FF] bg-blue-50 px-2 py-0.5 rounded-full">
                              Preview
                            </span>
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-slate-300" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Lesson Content Section */}
      <section className="space-y-2 pt-2">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          Lesson Content
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </section>

      {/* Lesson Progress Tracking */}
      <section className="space-y-3 pt-2">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          Lesson Progress Tracking
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Learning Progress
            </span>
            <span className="text-xs font-bold text-slate-400">
              {course.learningProgress || 55}% Complete
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {course.learningProgress || 55}%
          </div>
          <Progress
            value={course.learningProgress || 55}
            indicatorColor="bg-[#D2FF00]"
            height="h-3.5"
            className="bg-slate-100"
          />
        </div>
      </section>
    </div>
  );
}
