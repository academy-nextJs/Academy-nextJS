import Image from "next/image";

export default function Poster() {
  return (
    <div className="relative w-[524px] h-[612px] bg-red-900 max-lg:hidden">
      <Image
        className="relative top-4"
        src="/man.png"
        width={524}
        height={612}
        alt=""
      />
      <Image
        className="absolute top-[12px] left-[142px]"
        src="/star.svg"
        width={16}
        height={16}
        alt=""
      />
      <Image
        className="absolute top-[113px] left-[62px]"
        src="/star.svg"
        width={10}
        height={10}
        alt=""
      />
      <Image
        className="absolute top-[230px] left-[54px]"
        src="/star.svg"
        width={16}
        height={16}
        alt=""
      />
      <Image
        className="absolute top-[209px] right-[85px]"
        src="/star.svg"
        width={16}
        height={16}
        alt=""
      />
      <Image
        className="absolute top-[41px] right-[83px]"
        src="/star.svg"
        width={10}
        height={10}
        alt=""
      />
      <Image
        className="absolute top-[41px] right-[83px]"
        src="/star.svg"
        width={10}
        height={10}
        alt=""
      />
      <Image
        className="absolute top-[-25px] right-[222px]"
        src="/star.svg"
        width={10}
        height={10}
        alt=""
      />
    </div>
  );
}
