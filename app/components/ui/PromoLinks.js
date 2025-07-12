import Link from "next/link";

export default function PromoLinks() {
  const promos = [
    {
      id: 1,
      imagen: "/img20.png",
      link: "/percusion/baterias",
      alt: "Baterías",
    },
    {
      id: 2,
      imagen: "/img21.png",
      link: "/electrofonos/sintetizadores",
      alt: "Promociones",
    },
  ];

  return (
    <section className="py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {promos.map((promo) => (
        <Link href={promo.link} key={promo.id}>
          <img
            src={promo.imagen}
            alt={promo.alt}
            className="rounded-xl w-full h-40 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
      ))}
    </section>
  );
}
