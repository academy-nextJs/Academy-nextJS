"use client";
import React from "react";
import { HeroUIProvider } from "@heroui/react";
import ReactQueryProvider from "@/Layout/ReactQueryProvider";
import Footer from "@/components/common/Footer";
import ToastAlert from "@/components/common/ToastContainer";
import TokenRefresher from "@/components/common/TokenRefresher";

const Providers = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ReactQueryProvider>
      <HeroUIProvider>
          <main>
            {/* <Navbar/> */}
            {children}
            <Footer />
          </main>
          <TokenRefresher />
          <ToastAlert />
      </HeroUIProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
