import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
  ref: React.RefObject<HTMLElement | null>;
}

interface HomePageNavigationProps {
  sections: Section[];
}

const HomePageNavigation: React.FC<HomePageNavigationProps> = ({
  sections,
}) => {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );
  const [isVisible, setIsVisible] = useState(false);

  // Track which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionStates = new Map<string, boolean>();

    // Function to determine which section should be active based on viewport center
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestSectionId: string | null = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        if (!section.ref.current || !sectionStates.get(section.id)) return;

        const rect = section.ref.current.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSectionId = section.id;
        }
      });

      if (closestSectionId) {
        setActiveSection(closestSectionId);
      }
    };

    sections.forEach((section) => {
      if (!section.ref.current) return;

      // Special handling for vision-mission due to sticky container
      const isVisionMission = section.id === "vision-mission";

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            sectionStates.set(section.id, entry.isIntersecting);

            // Only auto-set active if not vision-mission (to avoid conflicts)
            if (entry.isIntersecting && !isVisionMission) {
              // Small delay to allow all observers to update
              setTimeout(() => {
                updateActiveSection();
              }, 50);
            }
          });
        },
        {
          threshold: isVisionMission ? 0.1 : 0.3,
          rootMargin: isVisionMission
            ? "-10% 0px -10% 0px"
            : "-20% 0px -20% 0px",
        }
      );

      observer.observe(section.ref.current);
      observers.push(observer);
    });

    // Also update on scroll for better accuracy
    const handleScroll = () => {
      updateActiveSection();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Show navigation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section?.ref.current) {
      // Set active state immediately when clicking
      setActiveSection(sectionId);

      section.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      className="fixed right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#1a1a2e] rounded-full px-3 py-6 flex flex-col items-center gap-4 shadow-2xl">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative group"
              aria-label={`Scroll to ${section.label}`}
            >
              {/* Dot */}
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-vietsov-yellow scale-125"
                    : "bg-white/60 group-hover:bg-white/80"
                }`}
                animate={{
                  scale: isActive ? 1.25 : 1,
                }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* White outline for active dot */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>

              {/* Tooltip on hover */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded shadow-lg">
                  {section.label}
                </div>
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HomePageNavigation;
