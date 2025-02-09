import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";

const Arrow = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="w-[45px] h-[22px] flex justify-center items-center rounded-[8px] bg-[#393939] group-hover:bg-green"
    >
      <HiArrowLongLeft size={25} className="text-white group-hover:text-[#393939]" />
    </Link>
  );
};

export default Arrow;
