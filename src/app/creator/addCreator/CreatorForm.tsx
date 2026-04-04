"use client";

import { useCreatePerson } from "@/app/hooks/createPerson";
import { PersonFormData, personSchema } from "@/types/zod/PersonFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function CreatorForm() {
  const {
    mutate: createPerson,
    isPending,
    isSuccess,
    isError,
  } = useCreatePerson();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(personSchema),
    defaultValues: {
      name: "",
      isWriter: false,
      isDrawer: false,
    },
  } as const);

  //TODO handleSubmit
  const onSubmit = async (data: PersonFormData) => {
    try {
      createPerson(data, {
        onSuccess: () => {
          alert("🎉 Persona creada con éxito");
        },
        onError: () => {
          alert("⚠️ Error al crear persona");
        },
      });
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al guardar la persona");
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
            Nombre de la persona
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
          <label htmlFor="name" className="font-semibold">
            Escritor
          </label>
          <input
            type="checkbox"
            id="isWriter"
            {...register("isWriter")}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.isWriter && (
            <p className="text-red-500 text-sm mt-1">
              {errors.isWriter.message}
            </p>
          )}
          <label htmlFor="name" className="font-semibold">
            Dibujante
          </label>
          <input
            type="checkbox"
            id="isDrawer"
            {...register("isDrawer")}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.isDrawer && (
            <p className="text-red-500 text-sm mt-1">
              {errors.isDrawer.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={isSubmitting || isPending}
        >
          {isSubmitting || isPending ? "Guardando..." : "Guardar Persona"}
        </button>
      </div>
    </form>
  );
}
