import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

enum ICON_SIZE {
  "md" = "w-10 h-10",
  "lg" = "w-[56px] h-[56px]",
}

interface CreateIconListProps {
  width: number;
  height: number;
  picture: string;
  size: "md" | "lg";
  href: string;
}

const CreateIconList: FC<CreateIconListProps> = ({
  width,
  height,
  picture,
  size,
  href,
}) => {
  return (
    <Link
      href={href}
      className={`
        ${ICON_SIZE?.[size]} 
        first:bg-white rounded-2xl border-1 border-white flex items-center justify-center
        `}
    >
      <Image width={width} height={height} src={picture} alt="" />
    </Link>
  );
};

export default CreateIconList;
