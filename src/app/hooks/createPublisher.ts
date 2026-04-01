"use client";

import { PublisherService } from "@/services/publishers/publishers.service";
import { HttpResponse } from "@/types/HttpResponse";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePublisher = () => {
  // Permite invalidar o refrescar queries (p. ej. la lista de cómics)
  const queryClient = useQueryClient();

  const mutation = useMutation<HttpResponse, Error, FormData>({
    mutationFn: (formData) => PublisherService.createPublisher(formData),
    onSuccess: () => {
      // Refrescamos el cache de editoriales después de crear una
      queryClient.invalidateQueries({ queryKey: ["publishers"] });
      console.log("✅ Editorial creada con éxito");
    },
    onError: (error) => {
      console.error("❌ Error al crear editorial:", error.message);
    },
  });

  return mutation;
};
