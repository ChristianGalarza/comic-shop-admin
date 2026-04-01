"use client";

import { Publisher } from "@/types/Publisher";
import styles from "../inventory.module.scss";
import { usePublishers } from "../hooks/usePublishers";
import Button from "@/components/ui/buttons/Button";
import { useRouter } from "next/navigation";

export default function PublisherPage() {
  const router = useRouter();
  const { publishers, isLoading, isError } = usePublishers();

  const handlePublishers = () => {
    console.log("Ir a editoriales...");
    router.push("publisher/addPublisher");
  };

  //TODO Mejorar carga de consultas
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar las editoriales 😢</p>;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-6">Editoriales</h1>
      <Button
        label="Agregar Editorial"
        variant="primary"
        size="md"
        onClick={handlePublishers}
      />
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className={`${styles.table} w-full`}>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center">Id</th>
              <th className="px-6 py-3 text-center">Nombre</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {publishers?.data.map((publisher: Publisher) => (
              <tr key={publisher.id} className="hover:bg-gray-100 transition">
                <td className="px-6 py-4 text-center">{publisher.id}</td>
                <td className="px-6 py-4 text-center">{publisher.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
