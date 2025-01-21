"use client";
import productImage from "@/assets/product.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const [isClient, setIsClient] = useState(false); // Ensure client-side rendering

  useEffect(() => {
    // Mark the component as client-rendered
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Unleash creativity</div>
          </div>

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Generate breathtaking images instantly!
          </h2>
          <p className="section-des mt-5">
            Generate stunning, high-quality images in seconds. Turn your vision into reality with this powerful image generation tool, Laposky AI.
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="Product image" className="mt-10" />
          {isClient && (
            <>
              <motion.img
                src={pyramidImage.src}
                alt="Pyramid image"
                height={262}
                width={262}
                className="hidden md:block absolute -right-36 -top-32"
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img
                src={tubeImage.src}
                alt="Tube image"
                height={248}
                width={248}
                className="hidden md:block absolute bottom-24 -left-36"
                style={{
                  translateY: translateY,
                }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
