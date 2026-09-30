"use client";

import * as React from "react";
import Link from "next/link";
import {
  Share2,
  BarChart3,
  Star,
  Users,
  Check,
  Sparkles,
} from "lucide-react";
import { Course } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoPreviewPlayer } from "./video-preview-player";
import { CourseSidebar } from "./course-sidebar";

interface CourseHeroProps {
  course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full blueprint-grid text-white pt-10 pb-16 lg:pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Row: Course Title & Share CTA */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="space-y-2.5 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
              {course.title}
            </h1>
            <p className="text-sm sm:text-base text-blue-100 font-normal">
              {course.subtitle}
            </p>
            <div className="pt-1">
              <span className="text-xs text-blue-200">by </span>
              <Link
                href={`/creators/${course.creator.id}`}
                className="text-xs font-semibold text-[#D2FF00] hover:underline"
              >
                {course.creator.name.toLowerCase()}
              </Link>
            </div>

            {/* Pill Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <Badge variant="pill-white" className="text-slate-900 font-semibold">
                <BarChart3 className="w-3.5 h-3.5 text-[#0047FF]" />
                <span>{course.level}</span>
              </Badge>

              <Badge variant="pill-white" className="text-slate-900 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>
                  {course.rating.toFixed(1)} ({course.reviewsCount} reviews)
                </span>
              </Badge>

              <Badge variant="pill-white" className="text-slate-900 font-semibold">
                <Users className="w-3.5 h-3.5 text-[#0047FF]" />
                <span>{course.studentsCount} Students</span>
              </Badge>
            </div>
          </div>

          {/* Share Button */}
          <div className="self-start">
            <Button
              onClick={handleShare}
              variant="lime"
              size="pill"
              className="gap-2 font-semibold shadow-md"
            >
              <Share2 className="w-4 h-4 text-[#0f172a]" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </Button>
          </div>
        </div>

        {/* Hero Content Grid: Video Preview on Left & Sidebar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Video Preview Card */}
          <div className="lg:col-span-8">
            <VideoPreviewPlayer
              thumbnailUrl={course.thumbnail}
              videoUrl={course.previewVideoUrl}
              title={course.title}
            />
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-4">
            <CourseSidebar course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
