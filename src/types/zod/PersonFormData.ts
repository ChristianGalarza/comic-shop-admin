import { z } from "zod";

export const personSchema = z.object({
  name: z.string().min(3, "El nombre es obligatorio"),
  isWriter: z.boolean().default(false),
  isDrawer: z.boolean().default(false),
});

export type PersonFormData = z.infer<typeof personSchema>;
