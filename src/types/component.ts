export interface StatisticCardData {
  period: string;
  plan: number;
  actual: number;
}

export interface TrainingItemData {
  id: number | string;
  title: string;
  duration: string;
  startDate: string;
}

export interface NewsArticle {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  timestamp: string;
  description: string;
  image: string;
}

export interface EnterpriseCardProps {
  index: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
}

export interface Leader {
  title: string;
  name: string;
  email: string;
  image: string;
  position: string;
  duties: string;
  qualifications: string;
  pastPositions: string[];
}
