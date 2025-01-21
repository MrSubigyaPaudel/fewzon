"use client";

import logo from "@/assets/fewzon-removebg-preview.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        {/* Logo Section */}
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="Fewzon logo" height={60} width={120} className="relative" priority />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Products
          </a>
          <a href="#" className="hover:underline">
            Customers
          </a>
          <a href="#" className="hover:underline">
            Team
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://x.com/Fewzon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on X"
          >
            <SocialX className="h-6 w-6 fill-current hover:text-white" />
          </a>
          <a
            href="https://www.instagram.com/fewzontech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on Instagram"
          >
            <SocialInsta className="h-6 w-6 fill-current hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/fewzon-tech-15a510345/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on LinkedIn"
          >
            <SocialLinkedin className="h-6 w-6 fill-current hover:text-white" />
          </a>
          <a
            href="https://www.youtube.com/@Fewzon1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit us on YouTube"
          >
            <SocialYoutube className="h-6 w-6 fill-current hover:text-white" />
          </a>
        </div>

        {/* Contact and Footer Note */}
        <p className="mt-4">fewzontech@gmail.com</p>
        <p className="mt-6">&copy; 2025 Fewzon Tech, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
