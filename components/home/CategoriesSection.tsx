import {
  BusinessIcon,
  DesignIcon,
  DevIcon,
  MarkatingIcon,
  PcIcon,
  PhotoIcon,
} from "@/public/Icons";
import Link from "next/link";

const categories = [
  { label: "Design", Icon: DesignIcon },
  { label: "Development", Icon: DevIcon },
  { label: "IT & Software", Icon: PcIcon },
  { label: "Business", Icon: BusinessIcon },
  { label: "Marketing", Icon: MarkatingIcon },
  { label: "Photography", Icon: PhotoIcon },
];

export default function CategoriesSection() {
  return (
    <section className=" container">
      <div className="  pb-24  lg:pb-32 ">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-4 max-w-230 text-lg text-grayColor">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&lsquo;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {categories.map(({ label, Icon }) => (
            <Link
              key={label}
              href="#courses"
              className="flex aspect-square flex-col items-center justify-center gap-5 rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:border-borderColor hover:shadow-[0_20px_40px_-24px_rgb(0_59_226/0.5)]"
            >
              <span className="grid h-15 w-15 place-items-center rounded-full bg-primaryColor">
                <Icon className="h-7 w-7 text-descriptionColor" />
              </span>
              <span className="text-lg md:text-xl text-descriptionColor">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
