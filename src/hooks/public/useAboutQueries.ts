import { useQuery } from "@tanstack/react-query";
import { AboutService } from "@/services/public";
import { queryKeys } from "@/lib/queryKeys";

export const useAchievements = () => {
  return useQuery({
    queryKey: queryKeys.public.about.achievements(),
    queryFn: () => AboutService.getAchievements(),
  });
};
