"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantamLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black, transparent)", maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[
              acmeLogo,
              quantamLogo,
              echoLogo,
              celestialLogo,
              pulseLogo,
              apexLogo,
            ].map((logo, index) => (
              <Image
                key={`logo-${index}`}
                src={logo}
                alt={`Logo ${index}`}
                className="logo-ticker-image"
                width={100} // Ensure consistent image sizes
                height={50}
              />
            ))}

            {[
              acmeLogo,
              quantamLogo,
              echoLogo,
              celestialLogo,
              pulseLogo,
              apexLogo,
            ].map((logo, index) => (
              <Image
                key={`logo-repeat-${index}`}
                src={logo}
                alt={`Logo Repeat ${index}`}
                className="logo-ticker-image"
                width={100}
                height={50}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
