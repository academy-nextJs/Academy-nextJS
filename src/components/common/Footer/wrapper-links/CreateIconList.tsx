import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CreateIconListProps, ICON_SIZE } from "./types";
import { cn } from "@/utils/cn";

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
      className={cn(
        "first:bg-white first:text-black rounded-2xl border-1 border-white flex items-center justify-center",
        ICON_SIZE?.[size]
      )}
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
