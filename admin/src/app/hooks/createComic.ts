"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Comic } from "@/types/Comic";
import { HttpResponse } from "@/types/HttpResponse";
import { ComicService } from "@/services/comics/comic.service";

export const useCreateComic = () => {
  // Permite invalidar o refrescar queries (p. ej. la lista de cómics)
  const queryClient = useQueryClient();

  // useMutation -> para operaciones POST
  const mutation = useMutation<HttpResponse, Error, FormData>({
    mutationFn: (formData) => ComicService.createComic(formData),
    onSuccess: () => {
      // Refrescamos el cache de cómics después de crear uno
      queryClient.invalidateQueries({ queryKey: ["comics"] });
      console.log("✅ Cómic creado con éxito");
    },
    onError: (error) => {
      console.error("❌ Error al crear cómic:", error.message);
    },
  });

  return mutation;
};
