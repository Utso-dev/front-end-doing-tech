import { TestimonialItem } from "@/lib/types";
import Image from "next/image";

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <div>
      <figure className="rounded-3xl flex flex-col justify-between h-full transition hover:-translate-y-1 hover:border-borderColor hover:shadow-[0_20px_40px_-24px_rgb(0_59_226/0.5)] duration-200 bg-white p-4 md:p-6 shadow-[0_20px_60px_-40px_rgb(3_8_24/0.4)]">
        <div>
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={100}
            height={100}
            className="lg:h-20 lg:w-20 w-15 h-15 rounded-full object-cover"
          />
          <figcaption className="mt-8">
            <h2 className="text-lg lg:text-xl font-semibold text-headerColor">
              {testimonial.name}
            </h2>
            <p className="md:text-lg text-base text-secondaryColor">
              {testimonial.role}
            </p>
          </figcaption>
        </div>
        <blockquote className="mt-8 text-base md:text-lg leading-relaxed text-textColor">
          {testimonial.quote}
        </blockquote>
      </figure>
    </div>
  );
}

export default TestimonialCard;
