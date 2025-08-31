import { PosterStars } from "@/core/constants/Footer/poster";
import Image from "next/image";

export default function Poster() {
  return (
    <div className="w-[524px] h-[612px] absolute left-[42px] col">
      <Image alt="" src="/man.png" fill style={{ objectFit: "cover" }} />
      {PosterStars.map((star, i) => (
        <Image
          key={i}
          className={star.className}
          src="/star.svg"
          width={star.size == "big" ? 16 : 10}
          height={star.size == "big" ? 16 : 10}
          alt="star"
        />
      ))}
    </div>
  );
}
