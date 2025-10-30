import React from "react";
import { motion } from "framer-motion";
import { PageWithSidebar } from "@/components";
import { CardFullDetailHori } from "@/components/Card";
import {
  defaultMainArticle as oilMain,
  defaultSideArticles as oilSides,
} from "@/components/NewsPage/OilNewsSection/data";

const OilNewsPage: React.FC = () => {
  const newsData = [
    {
      id: 0,
      image: oilMain.image,
      imageAlt: oilMain.title,
      category: oilMain.category,
      title: oilMain.title,
      timestamp: oilMain.timestamp,
      description: oilMain.description,
    },
    ...oilSides.map((a) => ({
      id: a.id,
      image: a.image,
      imageAlt: a.title,
      category: "TIN DẦU KHÍ",
      title: a.title,
      timestamp: a.timestamp,
      description: "",
    })),
  ];

  return (
    <PageWithSidebar activePath="/tintuc/tin-dau-khi">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {newsData.map((news, index) => (
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

export default OilNewsPage;


