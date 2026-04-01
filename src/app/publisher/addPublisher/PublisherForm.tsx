"use client";

import { useCreatePublisher } from "@/app/hooks/createPublisher";
import {
  PublisherFormData,
  publisherSchema,
} from "@/types/zod/PublisherFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function PublisherForm() {
  const {
    mutate: createPublisher,
    isPending,
    isSuccess,
    isError,
  } = useCreatePublisher();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PublisherFormData>({
    resolver: zodResolver(publisherSchema),
  });
  //TODO handleSubmit
  const onSubmit = async (data: PublisherFormData) => {
    event?.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      createPublisher(formData, {
        onSuccess: () => {
          alert("🎉 Editorial creada con éxito");
        },
        onError: () => {
          alert("⚠️ Error al crear editorial");
        },
      });
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al guardar la editorial");
    }
  };

  return (
    <form
      className="bg-white shadow-xl rounded-2xl p-8 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Nombre de la Editorial
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={isSubmitting || isPending}
        >
          {isSubmitting || isPending ? "Guardando..." : "Guardar Editorial"}
        </button>
      </div>
    </form>
  );
}
