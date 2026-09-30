"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categoryPillsList = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export function CourseCategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "Featured";

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "Featured") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-271.5 mx-auto">
      {categoryPillsList.map((category) => {
        const isSelected =
          activeCategory.toLowerCase() === category.toLowerCase();

        return (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={cn(
              "px-4 py-2 sm:px-4 sm:py-2 md:py-3 font-medium rounded-full text-sm sm:text-base transition-all cursor-pointer  whitespace-nowrap",
              isSelected
                ? "bg-primaryColor text-descriptionColor  shadow-xs"
                : "bg-liteWhiteColor hover:bg-slate-200/80 text-[#4B4C53] ",
            )}
          >
            {category}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => handleCategoryChange("Featured")}
        className="px-3.5 py-2 text-xs sm:text-sm font-medium text-secondaryColor hover:underline transition-all cursor-pointer "
      >
        + More
      </button>
    </div>
  );
}
