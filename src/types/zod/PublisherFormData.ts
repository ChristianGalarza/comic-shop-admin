import { z } from "zod";

export const publisherSchema = z.object({
  name: z.string().min(3, "El nombre es obligatorio"),
});

export type PublisherFormData = z.infer<typeof publisherSchema>;
