import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="relative -mt-19 md:-mt-23.5">{children}</div>
      <Footer />
    </div>
  );
}
