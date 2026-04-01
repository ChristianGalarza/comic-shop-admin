import { PublisherService } from "@/services/publishers/publishers.service";
import { HttpResponse } from "@/types/HttpResponse";
import { useQuery } from "@tanstack/react-query";

export const usePublishers = () => {
  const {
    data: publishers,
    isLoading,
    isError,
    refetch,
  } = useQuery<HttpResponse>({
    queryKey: ["publishers"],
    queryFn: PublisherService.getAll,
  });
  return { publishers, isLoading, isError, refetch };
};
