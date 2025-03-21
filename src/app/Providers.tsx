"use client";
import React from "react";
import { HeroUIProvider } from "@heroui/react";
import ReactQueryProvider from "@/Layout/ReactQueryProvider";
import Footer from "@/components/common/Footer";
import ToastAlert from "@/components/common/ToastContainer";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <HeroUIProvider>
        <main>
          {/* <Navbar/> */}
          {children}
          <Footer />
        </main>
        <ToastAlert />
      </HeroUIProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
