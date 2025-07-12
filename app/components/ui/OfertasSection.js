"use client";

import Link from "next/link";

export default function OfertasSection() {
  const ofertas = [
    {
      id: "vsbNYrGLguHJ0CRNpEE5",
      nombre: "Yamaha Pacifica PAC012",
      precioAnterior: 535013,
      precioActual: 428010,
      descuento: 25,
      imagen: "/img8.png",
    },
    {
      id: "zvNxtO1yo7liTO05cU72",
      nombre: "Yamaha TRBX304",
      precioAnterior: 280000,
      precioActual: 210000,
      descuento: 25,
      imagen: "/img9.png",
    },
    {
      id: "hmEYE6VoafnhWSXanzFI",
      nombre: "Tama Imperialstar IP52KH6",
      precioAnterior: 370000,
      precioActual: 314500,
      descuento: 15,
      imagen: "/img10.png",
    },
    {
      id: "PhIk1sTVtVEeCYIGDVrl",
      nombre: "Roland RP-102",
      precioAnterior: 670000,
      precioActual: 536000,
      descuento: 20,
      imagen: "/img11.png",
    },
  ];

  return (
    <section className="py-10 px-4 bg-[#F5EFE6]">
      <h2 className="text-2xl font-semibold text-center mb-6">Ofertas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {ofertas.map((oferta) => (
          <div
            key={oferta.id}
            className="bg-[#E8DCCB] p-4 rounded-xl shadow-md relative transition-transform transform hover:scale-105"
          >
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              {oferta.descuento}% OFF
            </span>
            <img
              src={oferta.imagen}
              alt={oferta.nombre}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
            <h3 className="text-lg font-semibold">{oferta.nombre}</h3>
            <p className="text-sm line-through text-gray-500">
              ${oferta.precioAnterior}
            </p>
            <p className="text-lg font-bold text-[#8B2C2C]">
              ${oferta.precioActual}
            </p>
            <Link href={`/producto/${oferta.id}`} passHref>
            <button className="mt-3 bg-[#8B2C2C] hover:bg-[#641B1B] text-[#F5EFE6] px-4 py-2 rounded-xl w-full cursor-pointer">
              Ver más
            </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
