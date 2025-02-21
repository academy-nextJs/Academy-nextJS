import { ArrowIcon } from "@/core/icon/icons";
import Link from "next/link";

const Arrow = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="w-[45px] h-[22px] flex justify-center items-center rounded-[8px] bg-[#393939] group-hover:bg-green"
    >
      <ArrowIcon width={21} className="text-white group-hover:text-[#393939]" />
    </Link>
  );
};

export default Arrow;
