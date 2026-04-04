"use client";

import { useRouter } from "next/navigation";
import styles from "../inventory.module.scss";
import { usePerson } from "../hooks/usePerson";
import { Person } from "@/types/Person";
import Button from "@/components/ui/buttons/Button";

export default function CreatorPage() {
  const router = useRouter();
  const { person, isLoading, isError } = usePerson();

  const handleCreators = () => {
    console.log("Ir a creadores...");
    router.push("creator/addCreator");
  };

  //TODO Mejorar carga de consultas
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar los creadores 😢</p>;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-6">Creadores</h1>
      <Button
        label="Agregar Creador"
        variant="primary"
        size="md"
        onClick={handleCreators}
      />
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className={`${styles.table} w-full`}>
          <thead>
            <tr>
              <th className="px-6 py-3 text-center">Nombre</th>
              <th className="px-6 py-3 text-center">Escritor</th>
              <th className="px-6 py-3 text-center">Dibujante</th>
            </tr>
          </thead>
          <tbody>
            {person?.data?.map((creator: Person) => (
              <tr key={creator.id} className="hover:bg-gray-100 transition">
                <td className="px-6 py-4 text-center">{creator.name}</td>
                <td className="px-6 py-4 text-center">
                  {creator.isWriter ? "Sí" : "No"}
                </td>
                <td className="px-6 py-4 text-center">
                  {creator.isDrawer ? "Sí" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
