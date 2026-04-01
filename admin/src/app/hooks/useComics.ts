import { useQuery } from "@tanstack/react-query";
import { ComicService } from "@/services/comics/comic.service";
import { HttpResponse } from "@/types/HttpResponse";

export const useComics = () => {
  const {
    data: comics,
    isLoading,
    isError,
    refetch,
  } = useQuery<HttpResponse>({
    queryKey: ["comics"],
    queryFn: ComicService.getAll,
  });

  return { comics, isLoading, isError, refetch };
};
