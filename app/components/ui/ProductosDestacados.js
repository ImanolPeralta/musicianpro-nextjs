"use client";

import Link from "next/link";

export default function ProductosDestacados() {
  const productos = [
    {
      id: "vUnbKQCKDgi4Cyvqv1Az",
      nombre: "Jackson JS22 Dinky",
      precio: "$741.602",
      imagen: "/img12.png",
    },
    {
      id: "8BVHlsqfjzKWkWODZefB",
      nombre: "Yanagisawa AWO10",
      precio: "$1.150.000",
      imagen: "/img13.png",
    },
    {
      id: "svmiC3yj7qOEVG6J0KE0",
      nombre: "Yamaha TRBX304",
      precio: "$450.000",
      imagen: "/img14.png",
    },
    {
      id: "6q8j1ZO8pNXE9AlYPYRS",
      nombre: "Alesis Recital Pro",
      precio: "$290.000",
      imagen: "/img15.png",
    },
  ];

  return (
    <section className="py-10 px-4 bg-[#F5EFE6]">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Productos Destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-[#E8DCCB] p-4 rounded-xl shadow-md relative transition-transform transform hover:scale-105 flex flex-col justify-between"
            style={{ minHeight: "440px" }}
          >
            {/* Imagen con altura fija */}
            <div className="flex justify-center items-center h-72 mb-4 bg-[#E8DCCB] rounded">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Texto y botón */}
            <div className="text-center flex flex-col flex-grow justify-between">
              <h3 className="text-lg font-semibold mb-1">{producto.nombre}</h3>

              {/* No usamos precio tachado en destacados */}
              <p className="text-lg font-bold text-[#8B2C2C]">
                {producto.precio}
              </p>
              <Link
                href={`/producto/${producto.id}`}
                className="mt-4 bg-[#8B2C2C] hover:bg-[#641B1B] text-[#F5EFE6] px-4 py-2 rounded-xl w-full text-center block cursor-pointer"
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
