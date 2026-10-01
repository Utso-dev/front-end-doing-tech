import { testimonials } from "@/data/mock-data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      className="bg-[#FAFAFA] h-full"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 30%, rgb(212 251 31 / 0.35), transparent 22%), radial-gradient(circle at 0% 100%, rgb(0 59 226 / 0.2), transparent 30%), radial-gradient(circle at 100% 20%, rgb(212 251 31 / 0.4), transparent 25%)",
      }}
    >
      <div className="container">
        <div className=" py-12  md:pt-18.5 md:pb-14 ">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <h2 className="font-semibold  text-3xl sm:text-4xl md:text-[44px] leading-[120%] tracking-tight text-headerColor">
              Discover What Our Community Is Saying
            </h2>
            <p className=" text-sm sm:text-base md:text-lg leading-[160%] text-descriptionColor ">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          <div className="mt-16 lg:mt-18 grid gap-10 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
