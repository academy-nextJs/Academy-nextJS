"use client";
import Link from "next/link";
import { RiArrowDropLeftLine } from "react-icons/ri";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({
  items,
  className = "",
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav
      dir="rtl"
      aria-label="Breadcrumb"
      className={`flex items-center w-fit max-lg:mx-auto bg-base font-Peyda-400 text-sm py-2 sm:px-10 text-gray ${className}`}
    >
      <Link
        href="/"
        className="hover:scale-110 duration-200 "
        aria-label="Home"
      >
        <span>خانه</span>
      </Link>
      {items.map((item) => (
        <div key={item.label} className="flex items-center">
          <RiArrowDropLeftLine size={25} className="text-gray " />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:scale-105 duration-200 "
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-green">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
