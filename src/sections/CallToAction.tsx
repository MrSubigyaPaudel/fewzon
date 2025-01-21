"use client";

import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const CallToAction = () => {
  const [isClient, setIsClient] = useState(false); // Ensure animations run only on the client
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true); // Set this to true after mounting
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Start your journey now</h2>
          <p className="section-des mt-5">
            Harness the power of AI with Fewzon's advanced tools, designed to
            elevate your projects, enhance creativity, and drive innovation in
            every aspect of your work.
          </p>

          {/* Render animations only on the client */}
          {isClient && (
            <>
              <motion.div
                className="absolute -left-[350px] -top-[137px]"
                style={{ translateY }}
              >
                <Image
                  src={starImage}
                  alt="star image"
                  width={360}
                  height={360}
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -right-[331px] -top-[19px]"
                style={{ translateY }}
              >
                <Image
                  src={springImage}
                  alt="spring image"
                  width={360}
                  height={360}
                  priority
                />
              </motion.div>
            </>
          )}
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Launching Soon</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
