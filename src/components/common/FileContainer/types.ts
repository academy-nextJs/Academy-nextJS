import { ReactNode } from "react";

export enum RadiusSize {
  sm = "14px",
  md = "24px",
  lg = "40px",
}

type ClassNameKeys =
  | "base"
  | "innerLabel"
  | "wrapperLabel"
  | "wrapperTag"
  | "coverHollow";

export type ClassNames = Partial<Record<ClassNameKeys, string>>;

type PartialShapeProps = {
  width: string;
  height: string;
  label: ReactNode;
  tag: ReactNode;
  labelWidth: string;
  labelHeight: string;
  tagHeight: string;
  classNames: ClassNames;
};

type RequireShapeProps = {
  children: ReactNode;
  background: string;
  radius: keyof typeof RadiusSize;
  size: "lg" | "md";
};

export type ShapeProps = Partial<PartialShapeProps> & RequireShapeProps;

export type HollowType = Partial<
  Pick<ShapeProps, "background" | "classNames" | "labelHeight" | "radius">
> &
  Pick<ShapeProps, "size">;
