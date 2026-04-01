"use client";

import { ComicFormData, comicSchema } from "@/types/zod/ComicFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useCreateComic } from "../hooks/createComic";

export default function ComicForm() {
  const {
    mutate: createComic,
    isPending,
    isSuccess,
    isError,
  } = useCreateComic();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ComicFormData>({
    resolver: zodResolver(comicSchema),
  });
  //TODO handleSubmit
  const onSubmit = async (data: ComicFormData) => {
    event?.preventDefault();
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("publisher", data.publisher);
      formData.append("description", data.description);
      formData.append("writer", data.writer);
      formData.append("drawer", data.drawer);
      formData.append("price", data.price.toString());
      formData.append("releaseDate", new Date(data.releaseDate).toISOString());
      formData.append("inventory", data.stock.toString());
      formData.append("image", data.image[0]); // solo el primer archivo
      createComic(formData, {
        onSuccess: () => {
          alert("🎉 Cómic creado con éxito");
        },
        onError: () => {
          alert("⚠️ Error al crear cómic");
        },
      });
      //   reset();
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al guardar el cómic");
    }
  };

  return (
    <form
      className="bg-white shadow-xl rounded-2xl p-8 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">Título</label>
          <input {...register("title")} className="border rounded w-full p-2" />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Editorial</label>
          <input
            {...register("publisher")}
            className="border rounded w-full p-2"
          />
          {errors.publisher && (
            <p className="text-red-500 text-sm">{errors.publisher?.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Descripción</label>
          <textarea
            {...register("description")}
            className="border rounded w-full p-2"
            placeholder="Descripción del cómic"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Escritor</label>
          <input
            {...register("writer")}
            className="border rounded w-full p-2"
          />
          {errors.writer && (
            <p className="text-red-500 text-sm">{errors.writer.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Dibujante</label>
          <input
            {...register("drawer")}
            className="border rounded w-full p-2"
          />
          {errors.drawer && (
            <p className="text-red-500 text-sm">{errors.drawer.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <label className="block mb-1 font-medium">Precio</label>
            <div className="pointer-events-none absolute inset-y-12 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              step="0.01"
              placeholder="0.00"
              {...register("price", { valueAsNumber: true })}
              className="border rounded w-full pl-7 py-2"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Stock</label>
            <input
              type="number"
              placeholder="0"
              {...register("stock", { valueAsNumber: true })}
              className="border rounded w-full p-2"
            />
            {errors.stock && (
              <p className="text-red-500 text-sm">{errors.stock.message}</p>
            )}
          </div>
        </div>
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange } }) => (
            <div>
              <label className="block mb-1 font-medium">Imagen del cómic</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onChange(e.target.files)}
                className="border rounded w-full p-2 bg-white"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">
                  {errors.image.message as string}
                </p>
              )}
            </div>
          )}
        />

        <div>
          <label className="block mb-1 font-medium">Fecha de lanzamiento</label>
          <input
            type="date"
            {...register("releaseDate")}
            className="border rounded w-full p-2"
          />
          {errors.releaseDate && (
            <p className="text-red-500 text-sm">{errors.releaseDate.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-indigo-600 text-white rounded w-full py-2 font-bold hover:bg-indigo-700 mt-4 transition-colors"
        >
          {isSubmitting ? "Guardando..." : "Agregar Cómic"}
        </button>
      </div>
    </form>
  );
}
