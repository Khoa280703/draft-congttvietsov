import React, { useMemo } from "react";
import { FeaturedNewsLayout } from "@/components/Shared";
import type { FeaturedNewsItem } from "@/components/Shared/FeaturedNewsLayout";
import { useSidebarState } from "@/components";
import { NewsGridSection } from "@/components/NewsPage";
import {
  defaultMainArticle as oilMain,
  defaultSideArticles as oilSides,
} from "@/components/NewsPage/OilNewsSection/data";
import {
  defaultMainArticle as prodMain,
  defaultSideArticles as prodSides,
} from "@/components/NewsPage/ProductionActivitySection/data";
import { defaultCommunityActivityData } from "@/components/NewsPage/CommunityActivitySection/data";
import type { NewsGridItem } from "@/components/NewsPage";

const FeaturedNews: React.FC<{ data: FeaturedNewsItem[] }> = ({ data }) => {
  const isSidebarOpen = useSidebarState();
  const mainCard = data[0];
  const sideCards = data.slice(1, 4);

  return (
    <FeaturedNewsLayout
      mainCard={mainCard}
      sideCards={sideCards}
      isSidebarOpen={isSidebarOpen}
      label="Tin nổi bật"
    />
  );
};

const NewsHomePage: React.FC = () => {
  // Combine articles from different sections
  const featuredNewsData: FeaturedNewsItem[] = useMemo(() => {
    const allArticles: FeaturedNewsItem[] = [
      {
        image: oilMain.image,
        imageAlt: oilMain.title,
        category: oilMain.category,
        title: oilMain.title,
        timestamp: oilMain.timestamp,
        description: oilMain.description,
        onClick: () => {
          window.location.href = "/tintuc/chi-tiet";
        },
      },
      {
        image: prodMain.image,
        imageAlt: prodMain.title,
        category: prodMain.category,
        title: prodMain.title,
        timestamp: prodMain.timestamp,
        description: prodMain.description,
        onClick: () => {
          window.location.href = "/tintuc/chi-tiet";
        },
      },
      ...oilSides.slice(0, 2).map((article) => ({
        image: article.image,
        imageAlt: article.title,
        category: article.category,
        title: article.title,
        timestamp: article.timestamp,
        description: article.description || "",
        onClick: () => {
          window.location.href = "/tintuc/chi-tiet";
        },
      })),
    ];

    return allArticles.slice(0, 4);
  }, []);

  // Prepare oil news data for NewsGridSection
  const oilNewsData: NewsGridItem[] = useMemo(() => {
    return [
      {
        id: 0,
        image: oilMain.image,
        imageAlt: oilMain.title,
        category: oilMain.category,
        title: oilMain.title,
        timestamp: oilMain.timestamp,
        description: oilMain.description,
      },
      ...oilSides.map((article) => ({
        id: article.id,
        image: article.image,
        imageAlt: article.title,
        category: article.category,
        title: article.title,
        timestamp: article.timestamp,
        description: article.description || "",
      })),
    ];
  }, []);

  // Prepare production activity data for NewsGridSection
  const productionActivityData: NewsGridItem[] = useMemo(() => {
    return [
      {
        id: 0,
        image: prodMain.image,
        imageAlt: prodMain.title,
        category: prodMain.category,
        title: prodMain.title,
        timestamp: prodMain.timestamp,
        description: prodMain.description,
      },
      ...prodSides.map((article) => ({
        id: article.id,
        image: article.image,
        imageAlt: article.title,
        category: article.category,
        title: article.title,
        timestamp: article.timestamp,
        description: article.description || "",
      })),
    ];
  }, []);

  return (
    <div className="min-h-screen bg-vietsov-background py-8 md:py-12 lg:py-14 laptop:py-16 fhd:py-20 qhd:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        <div className="space-y-12 md:space-y-14 lg:space-y-16 laptop:space-y-20 fhd:space-y-24 qhd:space-y-28">
          <FeaturedNews data={featuredNewsData} />
          <NewsGridSection
            title="Tin dầu khí"
            viewMoreLink="/tintuc/tin-dau-khi"
            articles={oilNewsData}
          />
          <NewsGridSection
            title="Hoạt động SX - KD"
            viewMoreLink="/tintuc/hoat-dong-sx-kd"
            articles={productionActivityData}
          />
          <NewsGridSection
            title="Hoạt động đoàn thể"
            viewMoreLink="/tintuc/hoat-dong-doan-the"
            articles={defaultCommunityActivityData}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsHomePage;
