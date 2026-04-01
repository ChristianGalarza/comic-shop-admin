"use client";

import { useState, useEffect } from "react";
import { Comic } from "@/types/Comic";
import styles from "./inventory.module.scss";

interface Props {
  data: Comic[];
}

export default function InventoryTable({ data }: Props) {
  const [comics, setComics] = useState<Comic[]>([]);

  // 🌀 Ciclo de vida simulado con useEffect (como componentDidMount)
  useEffect(() => {
    setComics(data);
  }, [data]);

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className={`${styles.table} w-full`}>
        <thead className="bg-gray-800 text-white uppercase text-sm">
          <tr>
            <th className="px-6 py-3 text-left">Cómic</th>
            <th className="px-6 py-3 text-left">Precio</th>
            <th className="px-6 py-3 text-left">Stock</th>
          </tr>
        </thead>
        <tbody>
          {comics?.map((comic) => (
            <tr
              key={comic.id}
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="px-6 py-4 flex items-center gap-3">
                <img
                  src={comic.imageUrl}
                  alt={comic.title}
                  className="w-15 h-25 object-cover rounded"
                />
                <span className="font-semibold">{comic.title}</span>
              </td>
              <td className="px-6 py-4">${comic.price.toFixed(2)}</td>
              <td className="px-6 py-4">{comic.inventory?.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
