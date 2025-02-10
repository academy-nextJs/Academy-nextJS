"use client";
import React from "react";
import { HeroUIProvider } from "@heroui/react";
import ReactQueryProvider from "@/Layout/ReactQueryProvider";
import Footer from "@/components/common/Footer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <HeroUIProvider>
        <main className="flex flex-wrap justify-center">
          {/* <Navbar/> */}
          {children}
          <Footer />
        </main>
      </HeroUIProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
