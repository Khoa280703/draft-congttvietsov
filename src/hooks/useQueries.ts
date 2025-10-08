import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/utils/api";

// Simple query hooks
export const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: () => api.get("/news"),
  });
};

export const useUnits = () => {
  return useQuery({
    queryKey: ["units"],
    queryFn: () => api.get("/units"),
  });
};

export const useLeadership = () => {
  return useQuery({
    queryKey: ["leadership"],
    queryFn: () => api.get("/leadership"),
  });
};

export const useStatistics = () => {
  return useQuery({
    queryKey: ["statistics"],
    queryFn: () => api.get("/statistics"),
    refetchInterval: 5 * 60 * 1000,
  });
};

export const useCreateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => api.post("/news", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });
};

export const useUpdateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      api.post(`/news/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });
};
