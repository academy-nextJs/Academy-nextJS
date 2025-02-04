"use client";

import { useState, useRef, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

const SIZES = {
  sm: "px-2 py-1.5",
  md: "px-4 py-2",
  lg: "px-5 py-5",
  xl: "px-6 py-4 ",
  "2xl": "px-8 py-5",
  full: "w-full px-6 py-3", // Full width button with height control via padding
};

const COLORS = {
  dark: "bg-gray",
  light: "bg-white",
  green: "bg-green",
  red: "bg-red",
};

const BORDERS = {
  dark: "text-gray border-gray",
  light: "text-white border-white",
  green: "text-green border-green",
  red: "text-red border-red",
};

type ButtonProps = {
  color?: keyof typeof COLORS;
  size?: keyof typeof SIZES;
  width?: string;
  height?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isMagnetic?: boolean;
  children: ReactNode;
  variant?: "bordered" | "solid";
};

export default function Button({
  color = "dark",
  size = "md",
  width,
  height,
  startContent,
  endContent,
  variant = "solid",
  children,
  isMagnetic,
}: ButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      className={`relative flex items-center justify-center ${
        size === "full" ? "w-full" : "w-fit"
      }`}
      onMouseMove={isMagnetic ? handleMouseMove : undefined}
      onMouseLeave={isMagnetic ? handleMouseLeave : undefined}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="w-full"
      >
        <button
          ref={buttonRef}
          onClick={handleClick}
          className={`relative font-bold flex items-center justify-center rounded-full shadow-lg overflow-hidden transition-all 
            ${
              variant === "solid"
                ? COLORS[color]
                : `bg-transparent ${BORDERS[color]} border-2`
            } ${SIZES[size]}`}
          style={{
            borderColor:
              variant === "bordered"
                ? BORDERS[color].split(" ")[2]
                : "transparent",
            width: width || (size === "full" ? "100%" : "auto"),
            height: height || "auto",
          }}
        >
          {/* Start Content (Icon/Text) */}
          {startContent && <span className="mr-2">{startContent}</span>}

          {children}

          {/* End Content (Icon/Text) */}
          {endContent && <span className="ml-2">{endContent}</span>}

          {/* Ripple Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 5, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: ripple.y - 10,
                  left: ripple.x - 10,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.5)",
                }}
              />
            ))}
          </div>
        </button>
      </motion.div>
    </div>
  );
}
