import { IconType } from "react-icons";

export interface DescribeProps {
  room: number;
  bathroom: number;
  capacity: number;
  garage: number;
  yard: boolean;
  type: "pipe" | "comma";
}

export type InformationType = {
  name: string;
  value: number | undefined;
  icon?: IconType;
};