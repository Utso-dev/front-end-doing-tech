import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen -mt-19 md:-mt-23.5 w-full bg-secondaryColor flex items-center justify-center text-white px-4 py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
          `,
            backgroundSize: "120px 120px",
            backgroundPosition: "center -10px",
          }}
        />
        <div className="container text-center space-y-6 ">
          <h1
            className="text-8xl sm:text-9xl lg:text-[10rem] xl:text-[27rem] font-semibold tracking-tighter bg-clip-text text-transparent z-10 drop-shadow-2xl"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #D4FB20 0%, rgba(212,251,32,0.96) 25%, rgba(212,251,32,0.81) 50%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)",
            }}
          >
            404
          </h1>
          <h2 className="text-2xl max-w-233 mx-auto sm:text-3xl md:text-6xl relative lg:text-7xl z-20 -mt-35 font-semibold text-white leading-[120%]">
            The page you are looking for doesn&apos;t exist
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#E5E6E8] ">
            Try to use a correct url or go back to homepage to start again
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="text-descriptionColor px-6 py-2 md:py-3 rounded-full bg-primaryColor font-medium"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
