declare global {
  type StatisticCardData = import("./component").StatisticCardData;
  type TrainingItemData = import("./component").TrainingItemData;
  type NewsArticle = import("./component").NewsArticle;
  type EnterpriseCardProps = import("./component").EnterpriseCardProps;
  type Leader = import("./component").Leader;
  type ApiResponse<T> = import("./api").ApiResponse<T>;
}

export {};
