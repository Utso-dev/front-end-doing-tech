export interface Creator {
  id: string;
  name: string;
  role: string;
  tagline?: string;
  bio: string;
  avatar: string;
  coverImage?: string;
  productsCount: number;
  followersCount: number;
  isFollowing?: boolean;
  courses?: string[]; // Course IDs
  rating?: number;
  reviewsCount?: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  isCompleted?: boolean;
  isPreview?: boolean;
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
  duration?: string;
}

export interface Review {
  id: string;
  userName: string;
  userRole: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  content: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  creatorId: string;
  creator: Creator;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  category: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  pricingType: "lifetime" | "monthly" | "yearly";
  thumbnail: string;
  previewVideoUrl?: string;
  lessonsCount: number;
  totalDuration: string;
  commentsCount: number;
  description: string[];
  sneakPeakImages: string[];
  keyPoints: string[];
  modules: CourseModule[];
  reviews: Review[];
  includes: string[];
  studentAvatars?: string[];
  featured?: boolean;
  learningProgress?: number;
}

export type FilterCategory =
  | "All"
  | "Featured"
  | "Music"
  | "Drawing & Painting"
  | "Marketing"
  | "Animation"
  | "Social Media"
  | "UI/UX Design"
  | "Creative Marketing"
  | "Cooking"
  | "Development"
  | "Business";

export type FilterLevel = "All" | "Beginner" | "Intermediate" | "Advanced";
export type SortOption = "most-relevant" | "highest-rated" | "newest" | "price-low" | "price-high";
