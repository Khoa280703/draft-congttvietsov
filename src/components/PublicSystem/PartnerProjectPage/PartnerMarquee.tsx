import React from "react";
import { motion } from "framer-motion";

import logoPTSC from "@/assets/logo/ptsc_logo.png";
import logoPVD from "@/assets/logo/pvd_logo.png";
import logoSchlumberger from "@/assets/logo/schlumberger_logo.png";
import logoPetrosetco from "@/assets/logo/petrosetco_logo.png";
import logoLm1 from "@/assets/logo/lm18_logo.jpeg";
import logoPetroVietNam from "@/assets/logo/petrovietnam_logo.png";

const partnerLogos = [
  { id: "ptsc", src: logoPTSC, alt: "PTSC" },
  { id: "pvd", src: logoPVD, alt: "PVD" },
  { id: "schlumberger", src: logoSchlumberger, alt: "Schlumberger" },
  { id: "petrosetco", src: logoPetrosetco, alt: "Petrosetco" },
  { id: "lm1", src: logoLm1, alt: "LM1" },
  { id: "petrovietnam", src: logoPetroVietNam, alt: "PetroVietnam" },
];

const PartnerMarquee: React.FC = () => {
  const extendedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-white py-12 font-sans">
      <div className="container mx-auto">
        <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div
            className="flex"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
