"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { Course } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface CourseReviewsTabProps {
  course: Course;
}

export function CourseReviewsTab({ course }: CourseReviewsTabProps) {
  const [selectedRating, setSelectedRating] = React.useState<number | "all">("all");

  const ratingBreakdown = [
    { stars: 5, count: 720, percent: 80 },
    { stars: 4, count: 130, percent: 14 },
    { stars: 3, count: 21, percent: 3 },
    { stars: 2, count: 10, percent: 1.5 },
    { stars: 1, count: 15, percent: 1.5 },
  ];

  const filteredReviews =
    selectedRating === "all"
      ? course.reviews
      : course.reviews.filter((r) => r.rating === selectedRating);

  return (
    <div className="space-y-10 py-6 max-w-3xl animate-in fade-in duration-300">
      {/* What Learners Are Saying */}
      <section className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          What Learners Are Saying
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Discover what our learners have to say about their experience with &apos;{course.title}&apos;. Read reviews and ratings from individuals who have embarked on this transformative journey of mastering digital asset creation.
        </p>
      </section>

      {/* Rating Breakdown Summary Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        {/* Left Lime Rating Box */}
        <div className="w-full sm:w-36 aspect-square rounded-2xl bg-[#D2FF00] flex flex-col items-center justify-center p-4 text-center shrink-0 shadow-sm">
          <span className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider">
            Rating
          </span>
          <span className="text-4xl font-extrabold text-[#0f172a] mt-1">
            4.7
          </span>
        </div>

        {/* Right Star Progress Bars */}
        <div className="w-full space-y-2 flex-1">
          {ratingBreakdown.map((row) => (
            <div
              key={row.stars}
              className="flex items-center gap-3 text-xs text-slate-600"
            >
              {/* Bar */}
              <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#D2FF00] h-full rounded-full transition-all duration-500"
                  style={{ width: `${row.percent}%` }}
                />
              </div>

              {/* Star Rating Icons */}
              <div className="flex items-center gap-0.5 text-slate-700 w-24 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < row.stars
                        ? "fill-slate-800 text-slate-800"
                        : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Count */}
              <span className="w-8 text-right font-mono text-[11px] text-slate-400">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews Section */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
          Individual Reviews:
        </h3>

        {/* Rating Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={() => setSelectedRating("all")}
            variant={selectedRating === "all" ? "lime" : "outline"}
            size="pill"
            className="text-xs font-semibold"
          >
            All rating
          </Button>
          {[5, 4, 3, 2, 1].map((stars) => (
            <Button
              key={stars}
              onClick={() => setSelectedRating(stars)}
              variant={selectedRating === stars ? "lime" : "outline"}
              size="pill"
              className="text-xs font-medium gap-1"
            >
              <Star className="w-3 h-3 fill-current" />
              <span>{stars}</span>
            </Button>
          ))}
        </div>

        {/* Review Cards */}
        <div className="space-y-4 pt-2">
          {filteredReviews.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs bg-slate-50 rounded-2xl">
              No reviews found for this star filter.
            </div>
          ) : (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-100 shadow-xs space-y-3 hover:border-slate-200 transition-all"
              >
                {/* User Info & Timestamp */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.userName}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                        {rev.userName}
                      </h4>
                      <p className="text-[11px] text-slate-400">{rev.userRole}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {rev.timeAgo}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? "fill-slate-800 text-slate-800"
                          : "fill-slate-200 text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
