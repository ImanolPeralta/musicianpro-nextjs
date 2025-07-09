"use client";

import Link from "next/link";
import { MonteCarlo } from "next/font/google";

const montecarlo = MonteCarlo({
  weight: "400",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5EFE6] text-[#1C1C1C] p-6 text-center">
      <h1
        className={`text-5xl font-bold mb-4 text-[#8B2C2C] ${montecarlo.className}`}
      >
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="mb-6">Lo que buscás no existe o fue eliminado.</p>
      <Link
        href="/"
        className="bg-[#8B2C2C] text-[#F5EFE6] px-6 py-2 rounded-xl shadow hover:bg-[#641B1B] transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
