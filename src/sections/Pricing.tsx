"use client"; // Required for client-side rendering

import Image from "next/image";
import { motion } from "framer-motion"; // For animations
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import CEOImage from "@/assets/ceo.jpg";
import CTOImage from "@/assets/CTO.png";
import CFOImage from "@/assets/CFO.jpg";
import COOImage from "@/assets/COO.png";
import CMOImage from "@/assets/CMO.jpg";
import CMO2Image from "@/assets/cmo2.jpg";
import CSOImage from "@/assets/cso.jpg";
import CMO3Image from "@/assets/cmo3.jpg";
import CROImage from "@/assets/CRO.png";
import CCOImage from "@/assets/CCO100.jpg";
import CIOImage from "@/assets/roman.jpg";

// Ensure all animations run only on the client-side
const boardMembers = [
  {
    name: "Abhaya Gautam",
    role: "CTO",
    image: CTOImage,
    quote: "Any sufficiently advanced technology is equivalent to magic.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhaya-gautam-462b72192/",
      instagram: "https://www.instagram.com/abyaya._/",
    },
  },
  { 
    name: "Ishan Gadal", 
    role: "CFO", 
    image: CFOImage, 
    quote: "Financial health is key to scaling the business.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fewzon-tech-15a510345/",
      instagram: "https://www.instagram.com/ishan_gadal7/" // Changed twitter to instagram
    }
  },
  { 
    name: "Sashank Ghimire", 
    role: "COO", 
    image: COOImage, 
    quote: "Operations are the backbone of progress.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fewzon-tech-15a510345/",
      instagram: "https://www.instagram.com/sashank089/" // Changed twitter to instagram
    }
  },
  { 
    name: "Rupesh Kadariya", 
    role: "CMO", 
    image: CMOImage, 
    quote: "Marketing shapes how the world sees us.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fewzon-tech-15a510345/",
      instagram: "https://www.instagram.com/rupesh_kadariya/" // Changed twitter to instagram
    }
  },
  { 
    name: "Yogesh Gadal", 
    role: "CMO", 
    image: CMO2Image, 
    quote: "Strategy meets creativity at the heart of marketing.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fewzon-tech-15a510345/",
      instagram: "https://www.instagram.com/yogesh_njr/" // Changed twitter to instagram
    }
  },
  { 
    name: "Safikul Alam", 
    role: "CMO", 
    image: CMO3Image, 
    quote: "Marketing turns data into stories that resonate.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fewzon-tech-15a510345/",
      instagram: "https://www.instagram.com/fewzontech/" // Changed twitter to instagram
    }
  },
  { 
    name: "Sudip Luitel", 
    role: "CSO", 
    image: CSOImage, 
    quote: "Strategic thinking that transforms challenges into opportunities.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sudeep-luitel-088a18340/",
      instagram: "https://www.instagram.com/lueetelsudipp/" // Changed twitter to instagram
    }
  },
  { 
    name: "Shahnawaz Alam", 
    role: "CRO", 
    image: CROImage, 
    quote: "Balancing risk and reward to ensure sustainable success.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fewzon-tech-15a510345/",
      instagram: "https://www.instagram.com/faize_khan_7/" // Changed twitter to instagram
    }
  },
  { 
    name: "Pradip Kunwar", 
    role: "CIO", 
    image: CCOImage, 
    quote: "Transforming business with intelligent information management.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fewzon-tech-15a510345/",
      instagram: "https://www.instagram.com/pradeep_kunwor/" // Changed twitter to instagram
    }
  },
  { 
    name: "Roman Bastola", 
    role: "CIO", 
    image: CIOImage, 
    quote: "Enabling smarter decision-making through powerful information systems.", 
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/fewzon-tech-15a510345/",
      instagram: "https://www.instagram.com/roman.bastola.77/" // Changed twitter to instagram
    }
  }
];

export const Pricing = () => {
  // Ensure animations and rendering happen only on the client
  const isClient = typeof window !== "undefined";

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">Meet the Team</h2>
          <p className="mt-5 text-lg text-gray-600">
            Our esteemed leaders who guide us toward excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* CEO Card */}
          {isClient && (
            <motion.div
              className="col-span-full flex justify-center mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center p-8 bg-white shadow-xl rounded-xl transform hover:scale-110 transition duration-300 ease-in-out hover:bg-sky-100">
                <Image
                  src={CEOImage}
                  alt="Image of Subigya Paudel"
                  width={220}
                  height={220}
                  className="rounded-full border-4 border-blue-600 shadow-xl"
                />
                <h3 className="mt-4 text-3xl font-bold text-blue-600 transition-colors">
                  Subigya Paudel
                </h3>
                <p className="text-gray-500 transition-colors">CEO</p>
                <p className="mt-4 italic text-gray-600">
                  {'"Tech with a twist of cool."'}
                </p>
                <div className="mt-4 flex justify-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/subigya-paudel-350855290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-sky-500"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/suvz.paudel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-sky-500"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Members */}
          {boardMembers.map(({ name, role, image, quote, socialLinks }, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white shadow-md rounded-lg flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-105 hover:bg-sky-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(0, 191, 255, 0.5)",
              }}
            >
              <Image
                src={image}
                alt={`Image of ${name}`}
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {name}
              </h3>
              <p className="text-gray-500">{role}</p>
              <p className="mt-4 italic text-gray-600">{`"${quote}"`}</p>
              <div className="mt-4 flex justify-center gap-6">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-sky-500"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-sky-500"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
