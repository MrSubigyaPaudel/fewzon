"use client"; // Marking this file as a client-side component

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/fewzon-removebg-preview.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const refreshPage = () => {
    if (typeof window !== "undefined") {
      // Ensures this function runs only on the client side
      window.location.reload();
    }
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top Announcement Bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <a href="#">
          <div className="inline-flex gap-1 items-center">
            <p>Launching Soon</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </div>
        </a>
      </div>

      {/* Main Header */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div onClick={refreshPage} className="cursor-pointer">
              <Image src={Logo} alt="Saas logo" height={60} width={60} priority />
            </div>

            {/* Mobile Menu Icon */}
            <MenuIcon className="h-5 w-5 md:hidden" />

            {/* Navigation Links */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Products</a>
              <a href="#">Customers</a>
              <a href="#">Team</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Launching Soon
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
