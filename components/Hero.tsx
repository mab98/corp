import Image from "next/image";

interface HeroProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

export default function Hero({ imgSrc, imgAlt, title }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={imgSrc} alt={imgAlt} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>

      <div className="flex h-full items-center justify-center">
        <h1 className="text-6xl text-white">{title}</h1>
      </div>
    </div>
  );
}
