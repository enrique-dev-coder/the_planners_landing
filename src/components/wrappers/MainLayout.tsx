import React from "react";
import Navbar from "../Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen-xl bg-dark-main-bg mx-auto  h-auto pt-4">
      <div className="max-w-[1200px]  mx-auto">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
