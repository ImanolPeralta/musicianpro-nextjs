"use client";
import Link from "next/link";

const ProductCard = ({ item }) => {
  if (!item) {
    console.warn("ProductCard recibió un item undefined o null");
    return null;
  }

  const colors = {
    fondoCard: "#E8DCCB",
    sombraCard: "#B0AFAF",
    texto: "#1C1C1C",
    fondoBoton: "#8B2C2C",
    hoverBoton: "#641B1B",
    fondoPrincipal: "#F5EFE6",
  };

  return (
    <article
      className="rounded-2xl overflow-hidden shadow-md transition-transform transform hover:scale-105 flex flex-col
                 basis-full max-w-xs sm:basis-72 sm:max-w-none"
      style={{
        backgroundColor: colors.fondoCard,
        boxShadow: `0 4px 8px ${colors.sombraCard}`,
        height: "auto",
        minHeight: "440px",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: colors.fondoPrincipal,
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "288px",
        }}
      >
        <img
          alt={item.titulo}
          src={item.imagen}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        className="px-4 pt-2 pb-4 flex flex-col flex-grow"
        style={{ minHeight: "152px" }}
      >
        <div style={{ flexGrow: 1 }}>
          <h4
            className="text-lg font-semibold mb-2"
            style={{
              color: colors.texto,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minHeight: "3rem",
            }}
          >
            {item.titulo}
          </h4>
          <p
            className="text-xl font-bold mb-4"
            style={{ color: colors.fondoBoton }}
          >
            ${item.precio.toLocaleString("es-AR")}
          </p>
        </div>

        <Link href={`/producto/${item.id}`}>
          <button
            className="w-full py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
            style={{
              backgroundColor: colors.fondoBoton,
              color: colors.fondoPrincipal,
              marginBottom: "12px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = colors.hoverBoton)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = colors.fondoBoton)
            }
          >
            Ver más
          </button>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
