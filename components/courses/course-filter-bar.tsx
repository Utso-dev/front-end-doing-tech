"use client";

import * as React from "react";
import { SlidersHorizontal, BarChart3, Grid, ArrowUpDown, ChevronDown } from "lucide-react";
import { categoryPills } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CourseFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedLevel: string;
  onSelectLevel: (lvl: string) => void;
  sortBy: string;
  onSelectSort: (sort: string) => void;
  showCategoryPills?: boolean;
}

export function CourseFilterBar({
  selectedCategory,
  onSelectCategory,
  selectedLevel,
  onSelectLevel,
  sortBy,
  onSelectSort,
  showCategoryPills = true,
}: CourseFilterBarProps) {
  const [levelDropdownOpen, setLevelDropdownOpen] = React.useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
  const allCategories = [
    "All Categories",
    "UI/UX Design",
    "Development",
    "Business",
    "Marketing",
    "Music",
    "Drawing & Painting",
    "Animation",
    "Social Media",
    "Creative Marketing",
    "Cooking",
  ];

  const sortOptions = [
    { label: "Most relevant", value: "most-relevant" },
    { label: "Highest rated", value: "highest-rated" },
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price-low" },
    { label: "Price: High to Low", value: "price-high" },
  ];

  return (
    <div className="space-y-4 w-full">
      {/* Top Filter Buttons Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left Filter Group */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Main Filter Icon Button */}
          <Button
            variant="pill-light"
            size="pill"
            className="gap-2 text-xs font-semibold text-slate-700"
            onClick={() => {
              onSelectCategory("Featured");
              onSelectLevel("All Levels");
            }}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600" />
            <span>Filter</span>
          </Button>

          {/* Level Dropdown */}
          <div className="relative">
            <Button
              variant="pill-light"
              size="pill"
              className="gap-2 text-xs font-semibold text-slate-700"
              onClick={() => {
                setLevelDropdownOpen(!levelDropdownOpen);
                setCategoryDropdownOpen(false);
                setSortDropdownOpen(false);
              }}
            >
              <BarChart3 className="w-3.5 h-3.5 text-slate-600" />
              <span>{selectedLevel || "Level"}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </Button>

            {levelDropdownOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30 animate-in fade-in zoom-in-95">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      onSelectLevel(lvl);
                      setLevelDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition-colors flex items-center justify-between",
                      selectedLevel === lvl
                        ? "text-[#0047FF] font-bold bg-blue-50/50"
                        : "text-slate-700"
                    )}
                  >
                    <span>{lvl}</span>
                    {selectedLevel === lvl && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <Button
              variant="pill-light"
              size="pill"
              className="gap-2 text-xs font-semibold text-slate-700"
              onClick={() => {
                setCategoryDropdownOpen(!categoryDropdownOpen);
                setLevelDropdownOpen(false);
                setSortDropdownOpen(false);
              }}
            >
              <Grid className="w-3.5 h-3.5 text-slate-600" />
              <span>{selectedCategory === "Featured" ? "Category" : selectedCategory}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </Button>

            {categoryDropdownOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelectCategory(cat === "All Categories" ? "Featured" : cat);
                      setCategoryDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition-colors flex items-center justify-between",
                      (selectedCategory === cat || (cat === "All Categories" && selectedCategory === "Featured"))
                        ? "text-[#0047FF] font-bold bg-blue-50/50"
                        : "text-slate-700"
                    )}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Sort Dropdown */}
        <div className="relative">
          <Button
            variant="pill-light"
            size="pill"
            className="gap-2 text-xs font-semibold text-slate-700"
            onClick={() => {
              setSortDropdownOpen(!sortDropdownOpen);
              setLevelDropdownOpen(false);
              setCategoryDropdownOpen(false);
            }}
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-600" />
            <span>
              {sortOptions.find((s) => s.value === sortBy)?.label || "Most relevant"}
            </span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </Button>

          {sortDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30 animate-in fade-in zoom-in-95">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    onSelectSort(opt.value);
                    setSortDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition-colors flex items-center justify-between",
                    sortBy === opt.value
                      ? "text-[#0047FF] font-bold bg-blue-50/50"
                      : "text-slate-700"
                  )}
                >
                  <span>{opt.label}</span>
                  {sortBy === opt.value && <span>✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Horizontal Category Filter Pills Row */}
      {showCategoryPills && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
          {categoryPills.map((category) => {
            const isSelected =
              selectedCategory.toLowerCase() === category.toLowerCase();
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-[#D2FF00] text-[#0f172a] shadow-xs scale-100"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
