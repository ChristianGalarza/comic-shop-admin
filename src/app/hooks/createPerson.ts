"use client";

import { PersonService } from "@/services/persons/person.service";
import { HttpResponse } from "@/types/HttpResponse";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePerson = () => {
  // Permite invalidar o refrescar queries (p. ej. la lista de cómics)
  const queryClient = useQueryClient();

  const mutation = useMutation<
    HttpResponse,
    Error,
    { name: string; isWriter: boolean; isDrawer: boolean }
  >({
    mutationFn: (personData) => PersonService.createPerson(personData),
    onSuccess: () => {
      // Refrescamos el cache de personas después de crear una
      queryClient.invalidateQueries({ queryKey: ["people"] });
      console.log("✅ Persona creada con éxito");
    },
    onError: (error) => {
      console.error("❌ Error al crear persona:", error.message);
    },
  });

  return mutation;
};
