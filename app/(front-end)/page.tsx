import CategoriesSection from "@/components/home/CategoriesSection";
import CreatorSection from "@/components/home/CreatorSection";
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection";
import HeroSection from "@/components/home/HeroSection";
import PartnersStrip from "@/components/home/partners-strip";
import Testimonials from "@/components/home/Testimonials";
interface CoursesPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function Home({ searchParams }: CoursesPageProps) {
  const params = await searchParams;
  return (
    <main>
      <HeroSection />
      <PartnersStrip />
      <FeaturedCoursesSection searchParams={params} />
      <CategoriesSection />
      <CreatorSection />
      <Testimonials />
    </main>
  );
}
