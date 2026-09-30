"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileText,
  Video,
  Award,
  Users2,
  CheckCircle2,
  Sparkles,
  X,
  CreditCard,
  Lock,
} from "lucide-react";
import { Course } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface CourseSidebarProps {
  course: Course;
}

export function CourseSidebar({ course }: CourseSidebarProps) {
  const [enrollModalOpen, setEnrollModalOpen] = React.useState(false);
  const [enrolledSuccess, setEnrolledSuccess] = React.useState(false);

  const previewLessons = [
    { num: "01", title: "Introduction to Digital Assets", time: "12 mins" },
    { num: "02", title: "Design Principles for Impacts", time: "21 mins" },
    { num: "03", title: "Advanced Techniques in Digital Creation", time: "16 mins" },
  ];

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolledSuccess(true);
    setTimeout(() => {
      setEnrolledSuccess(false);
      setEnrollModalOpen(false);
    }, 2500);
  };

  return (
    <>
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-6 sticky top-28">
        {/* Header */}
        <div>
          <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
            {course.lessonsCount} Lessons ({course.totalDuration})
          </h3>

          {/* Quick Lesson List */}
          <div className="mt-4 space-y-3">
            {previewLessons.map((item) => (
              <div
                key={item.num}
                className="flex items-center justify-between text-xs py-1 border-b border-slate-50 last:border-none"
              >
                <div className="flex items-center gap-2.5 max-w-[70%]">
                  <span className="font-semibold text-slate-400">{item.num}</span>
                  <span className="text-slate-700 font-medium truncate">
                    {item.title}
                  </span>
                </div>
                <span className="text-[#0047FF] font-semibold text-[11px] shrink-0">
                  {item.time}
                </span>
              </div>
            ))}
            <div className="text-xs text-slate-400 pt-1 font-medium">
              99 more videos
            </div>
          </div>
        </div>

        {/* Action & Pricing */}
        <div className="pt-2">
          <p className="text-xs text-slate-500 leading-relaxed">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-[#0047FF]">
              ${course.price}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              /{course.pricingType}
            </span>
          </div>

          <Button
            onClick={() => setEnrollModalOpen(true)}
            variant="lime"
            className="w-full mt-4 h-12 text-sm font-bold shadow-lg shadow-[#D2FF00]/25 hover:shadow-xl hover:shadow-[#D2FF00]/40 rounded-2xl"
          >
            Enroll Now
          </Button>
        </div>

        {/* This course includes */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="font-bold text-xs text-slate-900 mb-3">
            This course include
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600">
            <li className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-[#0047FF]" />
              <span>Learning Resources</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Video className="w-4 h-4 text-[#0047FF]" />
              <span>Quality Lesson Videos</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#0047FF]" />
              <span>Certificate of Completion</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Users2 className="w-4 h-4 text-[#0047FF]" />
              <span>Private Consultation</span>
            </li>
          </ul>
        </div>

        {/* Creator Mini-Card */}
        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img
              src={course.creator.avatar}
              alt={course.creator.name}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
            />
            <div>
              <h5 className="font-bold text-xs text-slate-900">
                {course.creator.name}
              </h5>
              <p className="text-[11px] text-slate-400">
                {course.creator.tagline || "Professional Creator"}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <Link href={`/creators/${course.creator.id}`}>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs font-semibold rounded-xl border-slate-200 hover:border-[#0047FF] hover:text-[#0047FF]"
            >
              See Full Profile
            </Button>
          </Link>
        </div>
      </div>

      {/* Enrollment Checkout Modal */}
      {enrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setEnrollModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {enrolledSuccess ? (
              <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 bg-[#D2FF00] rounded-full flex items-center justify-center mx-auto text-[#0f172a] shadow-lg shadow-[#D2FF00]/40">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Enrollment Successful!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  You now have full lifetime access to <strong>{course.title}</strong>. Check your dashboard to begin!
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#D2FF00] text-[#0f172a]">
                    Instant Access
                  </span>
                  <span className="text-xs text-slate-400">100% Safe Checkout</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Enroll in {course.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Instructed by {course.creator.name} • {course.lessonsCount} lessons
                </p>

                <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Total Due Today:</p>
                    <p className="text-2xl font-extrabold text-[#0047FF]">
                      ${course.price}.00{" "}
                      <span className="text-xs font-normal text-slate-500">USD</span>
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    Lifetime Plan
                  </span>
                </div>

                <form onSubmit={handleEnroll} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="4242 •••• •••• 4242"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
                      />
                      <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        CVC / CVV
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>256-bit SSL encrypted secure checkout</span>
                  </div>

                  <Button
                    type="submit"
                    variant="lime"
                    className="w-full py-3.5 text-sm font-bold mt-3 shadow-md"
                  >
                    Confirm & Complete Enrollment (${course.price})
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
