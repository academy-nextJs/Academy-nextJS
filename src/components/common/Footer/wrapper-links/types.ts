import { IconType } from "react-icons";

export enum ICON_SIZE {
  "md" = "w-10 h-10",
  "lg" = "w-[56px] h-[56px]",
}

export interface CreateIconListProps {
  width: number;
  height: number;
  picture?: string;
  size: keyof typeof ICON_SIZE;
  href: string;
  Icon?: IconType;
  type: "icon" | "picture";
}

export interface CreateLinksProps {
  title: string;
  links: Array<{ name: string; href: string }>;
  isLink?: boolean;
}