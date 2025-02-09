import { IconType } from "react-icons";

export type TFooterLinks = {
  id: number;
  title: string;
  links: Array<{ name: string; href: string }>;
  isLink?: boolean;
};

export type TIconList = {
  picture?: string;
  href: string;
  width?: number;
  icon?: IconType;
};

export type TIcons = {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};
