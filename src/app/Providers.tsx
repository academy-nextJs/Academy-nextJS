"use client";
import React from "react";
import { HeroUIProvider } from "@heroui/react";
import ReactQueryProvider from "@/Layout/ReactQueryProvider";
import Footer from "@/components/common/Footer";
import ToastAlert from "@/components/common/ToastContainer";
import { SessionProvider } from "@/Layout/SessionProvider";
import TokenRefresher from "@/components/common/TokenRefresher";

const Providers = ({
  children,
  accessToken,
}: {
  children: React.ReactNode;
  accessToken: string | null;
}) => {
  return (
    <ReactQueryProvider>
      <HeroUIProvider>
        <SessionProvider accessToken={accessToken}>
          <main>
            {/* <Navbar/> */}
            {children}
            <Footer />
          </main>
          <TokenRefresher />
          <ToastAlert />
        </SessionProvider>
      </HeroUIProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
