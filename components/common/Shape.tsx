import Image, { StaticImageData } from "next/image";

type ShapeProps = {
  src: string | StaticImageData;
  className: string;
  rotate?: number;
  delay?: number;
};

export default function Shape({
  src,
  className,
  rotate = 0,
  delay = 0,
}: ShapeProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={500}
      height={500}
      draggable={false}
      className={`pointer-events-none absolute select-none animate-float ${className}`}
      style={
        {
          "--r": `${rotate}deg`,
          animationDelay: `${delay}s`,
        } as React.CSSProperties
      }
    />
  );
}
