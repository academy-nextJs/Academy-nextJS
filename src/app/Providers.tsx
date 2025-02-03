'use client'
import React from "react";
import { HeroUIProvider } from "@heroui/react";
import ReactQueryProvider from "@/Layout/ReactQueryProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <HeroUIProvider>
        <main>
          {/* <Navbar/> */}
          {children}
          {/* <Footer/> */}
        </main>
      </HeroUIProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
