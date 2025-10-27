import React from "react";
import { motion } from "framer-motion";
import { PageWithSidebar } from "@/components/PublicSystem";
import { CardFullDetailHori } from "@/components/Card";
import { type OilNewsSectionProps, defaultOilNewsData } from "./data";

const OilNewsSection: React.FC<OilNewsSectionProps> = ({ className = "" }) => {
  return (
    <PageWithSidebar activePath="/tintuc/tin-dau-khi">
      <div className={`min-h-screen bg-gray-50 ${className}`}>
        <div className="container mx-auto px-4 py-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {defaultOilNewsData.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardFullDetailHori
                  image={news.image}
                  imageAlt={news.imageAlt}
                  category={news.category}
                  title={news.title}
                  timestamp={news.timestamp}
                  description={news.description}
                  className="h-48"
                  onClick={() => {
                    window.location.href = "/tintuc/chi-tiet";
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default OilNewsSection;
