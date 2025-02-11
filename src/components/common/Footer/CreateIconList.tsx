import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

enum ICON_SIZE {
  "md" = "w-10 h-10",
  "lg" = "w-[56px] h-[56px]",
}

interface CreateIconListProps {
  width: number;
  height: number;
  picture?: string;
  size: "md" | "lg";
  href: string;
  Icon?: IconType;
  type: "icon" | "picture";
}

const CreateIconList: FC<CreateIconListProps> = ({
  width,
  height,
  picture,
  size,
  href,
  Icon,
  type,
}) => {
  return (
    <Link
      href={href}
      className={`${ICON_SIZE?.[size]} first:bg-white first:text-black
         rounded-2xl border-1 border-white flex items-center justify-center`}
    >
      {type == "picture" ? (
        <Image
          width={width}
          height={height}
          src={picture ? picture : ""}
          alt=""
        />
      ) : (
        Icon && <Icon size={18} />
      )}
    </Link>
  );
};

export default CreateIconList;
