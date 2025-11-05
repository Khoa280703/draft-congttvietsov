import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardFullDetail } from "@/components/Card";
import { SeeMoreButton } from "@/components/Button";
import { LeadershipModal } from "@/components/AboutPage";
import { type LeadershipPageProps, defaultLeaders, type Leader } from "./data";

const LeadershipPage: React.FC<LeadershipPageProps> = ({
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
        className={`bg-gray-50  ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          {/* Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <CardFullDetail
                  image={leader.image}
                  imageAlt={leader.name}
                  category={leader.title}
                  title={leader.name}
                  description={leader.position}
                  onClick={() => handleLeaderClick(leader)}
                  className="h-full"
                  detail={true}
                />
              </motion.div>
            ))}
          </div>

          {/* See More Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SeeMoreButton
              text="Xem thêm lãnh đạo"
              onClick={() => {
                // Navigate to leadership page or show more leaders
              }}
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

export default LeadershipPage;
