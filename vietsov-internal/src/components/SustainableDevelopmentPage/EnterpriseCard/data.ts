export interface EnterpriseCardData {
  index: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  path?: string;
  categoryLabel?: string;
  capabilities?: string[];
  imageHeight?: string;
  showQuoteIcon?: boolean;
  cardIndex?: number;
  totalCards?: number;
}
