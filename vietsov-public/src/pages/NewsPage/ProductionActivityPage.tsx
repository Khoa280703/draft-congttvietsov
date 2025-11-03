import React from "react";
import { motion } from "framer-motion";
import { PageWithSidebar } from "@/components";
import { CardFullDetailHori } from "@/components/Card";
import {
  defaultMainArticle as prodMain,
  defaultSideArticles as prodSides,
} from "@/components/NewsPage/ProductionActivitySection/data";

const ProductionActivityPage: React.FC = () => {
  // Normalize data to list items (use side articles + main as first item)
  const newsData = [
    {
      id: 0,
      image: prodMain.image,
      imageAlt: prodMain.title,
      category: prodMain.category,
      title: prodMain.title,
      timestamp: prodMain.timestamp,
      description: prodMain.description,
    },
    ...prodSides.map((a) => ({
      id: a.id,
      image: a.image,
      imageAlt: a.title,
      category: "HOẠT ĐỘNG SẢN XUẤT",
      title: a.title,
      timestamp: a.timestamp,
      description: "",
    })),
  ];

  return (
    <PageWithSidebar activePath="/tintuc/hoat-dong-sx-kd">
      <div className="min-h-screen bg-gray-50">
        <div className="space-y-6 lg:space-y-5 2xl:space-y-6">
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
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default ProductionActivityPage;


