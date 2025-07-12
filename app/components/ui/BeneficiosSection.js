import { Truck, Music, ShieldCheck, CreditCard } from "lucide-react";

export default function BeneficiosSection() {
  const beneficios = [
    {
      icon: <Truck size={32} />,
      titulo: "Envío rápido",
      descripcion: "Envíos a todo el país en 24-48hs",
    },
    {
      icon: <Music size={32} />,
      titulo: "Asesoramiento",
      descripcion: "Atención personalizada",
    },
    {
      icon: <ShieldCheck size={32} />,
      titulo: "Garantía",
      descripcion: "Garantía de calidad",
    },
    {
      icon: <CreditCard size={32} />,
      titulo: "Métodos de pago",
      descripcion: "Pago seguro y variado",
    },
  ];

  return (
    <section className="py-10 px-4 bg-[#F5EFE6]">
      <h2 className="text-2xl font-semibold text-center mb-6">
        ¿Porqué elegir comprar en{" "}
        <span className="text-[#8B2C2C]">MusicianPro</span>?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {beneficios.map((b, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-[#3E2723] mb-2">{b.icon}</div>
            <h3 className="font-semibold">{b.titulo}</h3>
            <p className="text-sm text-gray-700">{b.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
