import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardSimple } from "@/components/Card";
import { SeeMoreButton } from "@/components/Button";
import { LeadershipModal } from "@/components/PublicSystem/AboutPage";
import {
  type LeadershipSectionProps,
  defaultLeaders,
  type Leader,
} from "./data";

const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  leaders = defaultLeaders,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | undefined>(
    undefined
  );

  const handleLeaderClick = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.section
        id="leadership"
        className={`${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          ></motion.div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <CardSimple
                  imageUrl={leader.image}
                  imageAlt={leader.name}
                  position={leader.title}
                  name={leader.name}
                  className="h-full cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleLeaderClick(leader)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <SeeMoreButton
              href="/gioithieu/ban-lanh-dao"
              variant="outline"
              className="mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership Modal */}
      <LeadershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leader={selectedLeader}
      />
    </>
  );
};

export default LeadershipSection;
