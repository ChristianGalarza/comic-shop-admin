"use client";

import { useState, useRef, useEffect } from "react";

interface SearchableSelectProps {
  name: string;
  label: string;
  options: Array<{ id: number | string; name: string }>;
  value: string | number;
  onChange: (value: string | number) => void;
  isLoading?: boolean;
  placeholder?: string;
  error?: string;
}

export default function SearchableSelect({
  name,
  label,
  options,
  value,
  onChange,
  isLoading = false,
  placeholder = "Selecciona una opción...",
  error,
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Actualizar opciones filtradas cuando cambia el input de búsqueda
  useEffect(() => {
    const filtered = options.filter((option) =>
      option.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredOptions(filtered);
  }, [searchInput, options]);

  // Cerrar dropdown cuando se hace click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = value
    ? options.find((opt) => opt.id.toString() === value.toString())
    : undefined;

  const handleSelect = (optionId: number | string) => {
    onChange(optionId ?? "");
    setSearchInput("");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <label className="block mb-1 font-medium">{label}</label>
      <div
        className="border rounded w-full p-2 bg-white cursor-pointer flex justify-between items-center"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 0);
          }
        }}
      >
        <div className="flex-1">
          {isOpen ? (
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full outline-none bg-transparent"
              disabled={isLoading}
            />
          ) : (
            <span className={selectedOption ? "text-black" : "text-gray-500"}>
              {selectedOption ? selectedOption.name : placeholder}
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {isOpen && !isLoading && (
        <div className="absolute top-full left-0 right-0 mt-1 border border-gray-300 rounded bg-white shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`px-3 py-2 cursor-pointer transition-colors ${
                  value && value.toString() === option.id.toString()
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {option.name}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-500 text-sm">
              No hay resultados
            </div>
          )}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
