import Footer from "@/components/common/Footer";
import React from "react";



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Navbar/> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
