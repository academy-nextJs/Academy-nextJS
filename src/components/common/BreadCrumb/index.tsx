// /components/NextBreadcrumb.tsx
"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  pageElement: ReactNode | string;
};

const NextBreadcrumb = ({ pageElement }: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <ul dir="rtl" className={"flex py-4 bg-base text-gray text-sm font-Peyda-500"}>
        <li className={` mx-2 hover:scale-110 duration-100`}>
          <Link href={"/"}>خانه</Link>
        </li>
        {pathNames.length > 0 && ">"}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses =
            paths === href
              ? ` mx-2  text-green pointer-events-none `
              : `hover:scale-110 duration-200 mx-2 text-gray`;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{pageElement}</Link>
              </li>
              {pathNames.length !== index + 1 && ">"}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
