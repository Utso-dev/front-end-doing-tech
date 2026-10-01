import { CourseCategoryFilter } from "./CourseCategoryFilter";
import { FeaturedCoursesHeader } from "./FeaturedCoursesHeader";
import { FeaturedCoursesList } from "./FeaturedCoursesList";

interface FeaturedCoursesSectionProps {
  searchParams: {
    category?: string;
  };
}

export default async function FeaturedCoursesSection({
  searchParams,
}: FeaturedCoursesSectionProps) {
  const params = await searchParams;
  const rawCategory = params?.category || "Featured";

  return (
    <section className="container">
      <div className="py-16 sm:py-20 space-y-10">
        <FeaturedCoursesHeader />
        <div className="md:pb-4 ">
          <CourseCategoryFilter />
        </div>

        <FeaturedCoursesList category={rawCategory} />
      </div>
    </section>
  );
}
