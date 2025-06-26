"use client";
import { productos } from "../../data/productos";
import QtySelector from "../products/QtySelector";
import GoBack from "../ui/GoBack";

const ProductDetail = ({ id }) => {
  const item = productos.find((p) => p.id === Number(id));

  if (!item) {
    return (
      <p className="text-center mt-10 text-red-500">Producto no encontrado.</p>
    );
  }

  const colors = {
    fondo: "#F5EFE6",
    fondoCard: "#E8DCCB",
    sombra: "#B0AFAF",
    texto: "#1C1C1C",
    precio: "#8B2C2C",
  };

  return (
    <div
      className="max-w-6xl mx-auto px-6 py-10"
      style={{ backgroundColor: colors.fondo }}
    >
      <GoBack className="text-sm mb-6" />

      <section
        className="flex flex-col lg:flex-row gap-10 p-6 rounded-2xl shadow-lg"
        style={{
          backgroundColor: colors.fondoCard,
          boxShadow: `0 4px 12px ${colors.sombra}`,
        }}
      >
        {/* Imagen */}
        <div className="lg:w-1/2 flex justify-center items-center p-8 rounded-3xl">
  <div className="overflow-hidden rounded-2xl shadow-lg w-full flex justify-center items-center">
    <img
  src={item.imagen}
  alt={item.titulo}
  className="object-contain max-w-full max-h-[400px] transition-transform duration-500 ease-in-out hover:scale-110"
/>
  </div>
</div>
        {/* Info y descripción */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: colors.texto }}>
              {item.titulo}
            </h1>

            <p className="text-4xl font-bold mb-6" style={{ color: colors.precio }}>
              ${item.precio.toLocaleString("es-AR")}
            </p>

            <p className="mb-4 font-medium" style={{ color: colors.texto }}>
              Stock disponible:{" "}
              <span className="font-bold">{item.stock}</span> unidad
              {item.stock !== 1 ? "es" : ""}
            </p>

            <QtySelector item={item} />

            {/* Descripción dentro del mismo div */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2" style={{ color: colors.texto }}>
                Descripción
              </h2>
              <hr className="border-t-2 border-[#8B2C2C] mb-4" />
              <p className="text-base leading-relaxed" style={{ color: colors.texto }}>
                {item.descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
