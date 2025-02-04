"use client";
import { usePagination, PaginationItemType, cn } from "@heroui/react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function MyPagination({
  itemCount,
  isForPhoto,
  onPageChange,
}: {
  itemCount: number;
  isForPhoto?: boolean;
  onPageChange?: (page: number) => void | undefined | null;
}) {
  const { activePage, range, setPage } = usePagination({
    total: isForPhoto ? itemCount : Math.ceil(itemCount / 4),
    showControls: true,
    siblings: 1,
    boundaries: 1,
  });

  useEffect(() => {
    if (onPageChange) {
      onPageChange(activePage);
    }
  }, [activePage, onPageChange]);

  return (
    <div className="flex flex-col gap-2">
      <p>Active page: {activePage}</p>
      <ul className="flex gap-2 items-center">
        {range.map((page, index) => {
          if (typeof page !== "number" && page !== PaginationItemType.DOTS)
            return null;

          if (page === PaginationItemType.DOTS)
            return <li key={page + String(index)}>...</li>;

          return (
            <motion.li
            key={page}
            aria-label={`page ${page}`}
            className="w-4 h-4 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activePage === page ? (
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setPage(page)}
                className="cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <path
                  d="M7.73205 0.999999C6.96225 -0.333334 5.03775 -0.333332 4.26795 1L0.803847 7C0.0340471 8.33334 0.996299 10 2.5359 10L9.4641 10C11.0037 10 11.966 8.33333 11.1962 7L7.73205 0.999999Z"
                  fill="#8cff45"
                />
              </motion.svg>
            ) : (
              <motion.button
                className="w-1/2 h-1/2 bg-[#D9D9D9] rounded-full"
                onClick={() => setPage(page)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            )}
          </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
