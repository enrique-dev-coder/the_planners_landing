import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen-xl overflow-hidden bg-dark-main-bg mx-auto  h-auto pt-4">
      <div className="max-w-[1200px]  mx-auto overflow-hidden">
        <Navbar />
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
