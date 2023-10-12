import Navbar from "@/components/shared/navbar/Navbar";
import LeftSideBar from "@/components/shared/sidebar/LeftSideBar";
import RightSideBar from "@/components/shared/sidebar/RightSideBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <div className="w-[110px] max-sm:hidden lg:w-[266px]">
          <LeftSideBar />
        </div>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-full">{children}</div>
        </section>
        <div className="w-[350px] max-xl:hidden ">
          <RightSideBar />
        </div>
      </div>
      Toaster
    </main>
  );
}
