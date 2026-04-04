import { PersonService } from "@/services/persons/person.service";
import { HttpResponse } from "@/types/HttpResponse";
import { useQuery } from "@tanstack/react-query";

export const usePerson = () => {
  const {
    data: person,
    isLoading,
    isError,
    refetch,
  } = useQuery<HttpResponse>({
    queryKey: ["person"],
    queryFn: PersonService.getAll,
  });
  return { person, isLoading, isError, refetch };
};
