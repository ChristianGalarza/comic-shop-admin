'use client';

import Button from "@/components/ui/buttons/Button";
import InventoryTable from "./InventoryTable";
import { comicsMock } from "@/lib/data/comics";
import { useRouter } from "next/navigation";
import { useComics } from "./hooks/useComics";

export default function InventoryPage() {
  const router = useRouter();
  const {comics, isLoading, isError } = useComics();

  //TODO Mejorar carga de consultas
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar los cómics 😢</p>;

  
  const handleAddComic = () => {
    console.log("Agregar nuevo cómic...");
    router.push('add')
  };

  console.log(comics?.data)

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Inventario de Cómics
      </h1>
      <Button
          label="Agregar Cómic"
          variant="primary"
          size="md"
          onClick={handleAddComic}
        />
      <InventoryTable data={comics?.data} />
    </main>
  );
}
