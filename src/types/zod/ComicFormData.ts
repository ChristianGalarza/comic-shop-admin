import { z } from "zod";

export const comicSchema = z.object({
  title: z.string().min(3, "El título es obligatorio"),
  publisher: z.number().int().positive("Debes seleccionar una editorial"),
  description: z.string(),
  writer: z.number().int().positive("Debes seleccionar un escritor"),
  drawer: z.number().int().positive("Debes seleccionar un dibujante"),
  coverArtist: z
    .number()
    .int()
    .positive("Debes seleccionar un artista de portada"),
  price: z.number().positive("El precio debe ser positivo"),
  image: z
    .any()
    .refine((file) => file?.length === 1, "Debes subir una imagen")
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/webp"].includes(file?.[0]?.type),
      "El archivo debe ser una imagen (jpg, png o webp)",
    ),
  releaseDate: z.string().nonempty("La fecha de lanzamiento es requerida"),
  stock: z.number().int().nonnegative("El stock no puede ser negativo"),
});

export type ComicFormData = z.infer<typeof comicSchema>;
