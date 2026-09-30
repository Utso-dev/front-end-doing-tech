import { CourseCard } from "@/components/courses/CourseCard";
import { coursesData } from "@/data/mock-data";

interface FeaturedCoursesListProps {
  category: string;
}

export function FeaturedCoursesList({ category }: FeaturedCoursesListProps) {
  const normalizedCategory = category.trim().toLowerCase();


  const filteredCourses =
    normalizedCategory === "featured"
      ? coursesData.slice(0, 6)
      : coursesData.filter(
          (course) =>
            course.category.trim().toLowerCase() === normalizedCategory,
        );

  const courses =
    filteredCourses.length > 0 ? filteredCourses : coursesData.slice(0, 6);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
