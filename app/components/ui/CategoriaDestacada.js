'use client'

import Link from 'next/link'

const categorias = [
  {
    nombre: 'Pianos Digitales',
    imagen: '/musicianpro-nextjs/img6.png',
    enlace: '/electrofonos/pianos-digitales',
  },
  {
    nombre: 'Guitarras',
    imagen: '/musicianpro-nextjs/img5.png',
    enlace: '/cordofonos/guitarras-electricas',
  },
  {
    nombre: 'Baterías',
    imagen: '/musicianpro-nextjs/img7.png',
    enlace: '/percusion/baterias',
  },
  {
    nombre: 'Flautas',
    imagen: '/musicianpro-nextjs/img4.png',
    enlace: '/aerofonos/flautas',
  },
]

export default function CategoriaDestacada() {
  return (
    <div className="w-full py-6 px-4 bg-[#F5EFE6]">
      <div className="max-w-screen-xl mx-auto flex justify-center gap-4 sm:gap-6 flex-wrap">
        {categorias.map((cat) => (
          <Link
            key={cat.nombre}
            href={cat.enlace}
            className="flex flex-col items-center group w-20 sm:w-24 md:w-28"
          >
            <img
              src={cat.imagen}
              alt={cat.nombre}
              className="rounded-full border border-gray-300 shadow-md w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="mt-2 text-center text-xs sm:text-sm md:text-base text-gray-700 group-hover:text-black">
              {cat.nombre}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
