import React from "react";
import { motion } from "framer-motion";

export interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
  link?: string;
}

import petrosetcoLogo from "@/assets/logo/petrosetco_logo.png";
import lm18Logo from "@/assets/logo/lm18_logo.jpeg";
import ptscLogo from "@/assets/logo/ptsc_logo.png";
import pvdLogo from "@/assets/logo/pvd_logo.png";
import schlumbergerLogo from "@/assets/logo/schlumberger_logo.png";
import petrovietnamLogo from "@/assets/logo/petrovietnam_logo.png";

const partnerLogosData: PartnerLogo[] = [
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "pvd", src: pvdLogo, alt: "PVD", link: "#" },
  { id: "ptsc", src: ptscLogo, alt: "PT&SC", link: "#" },
  { id: "schlumberger", src: schlumbergerLogo, alt: "Schlumberger", link: "#" },
  { id: "petrovietnam", src: petrovietnamLogo, alt: "PetroVietnam", link: "#" },
  { id: "lm18", src: lm18Logo, alt: "LM18", link: "#" },
];

const PartnerLogosGrid: React.FC = () => {
  // Duplicate logos để tạo seamless loop
  const extendedLogos = [
    ...partnerLogosData,
    ...partnerLogosData,
    ...partnerLogosData,
  ];

  return (
    <div className="relative z-10">
      <div className="pt-8 pb-12 md:pb-16">
        <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
          <div className="bg-white shadow-2xl rounded-2xl py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">
            <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
              <motion.div
                className="flex items-center"
                initial={{ x: "0%" }}
                animate={{ x: "-33.333%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                }}
              >
                {extendedLogos.map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
                    className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12"
                  >
                    <a
                      href={logo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="bg-white rounded-xl p-6 md:p-8 h-28 md:h-32 lg:h-36 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="max-w-full max-h-full object-contain transition-all duration-300"
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogosGrid;
