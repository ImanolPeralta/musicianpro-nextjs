"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { HiOutlineTrash } from "react-icons/hi";
import { HiMinus, HiPlus } from "react-icons/hi";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="min-h-screen bg-[#F5EFE6] p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-[#1C1C1C] mb-8 text-center">
        Tu carrito
      </h1>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">
          Tu carrito está vacío.{" "}
          <Link
            href="/"
            className="text-[#8B2C2C] font-semibold hover:underline"
          >
            Ir al inicio
          </Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#E8DCCB] rounded-2xl shadow-md"
                style={{ boxShadow: `0 4px 12px ${"#B0AFAF"}` }}
              >
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-24 h-24 object-contain rounded-xl border"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold text-[#1C1C1C]">
                      {item.titulo}
                    </h2>
                    <p className="text-sm text-[#1C1C1C]">
                      ${item.precio.toLocaleString("es-AR")} x {item.cantidad}{" "}
                      unidad{item.cantidad > 1 ? "es" : ""}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  {/* Botones + y - con contador */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        item.cantidad > 1 &&
                        updateQuantity(item.id, item.cantidad - 1)
                      }
                      className="bg-[#8B2C2C] text-white p-1 rounded-full hover:bg-[#641B1B] transition cursor-pointer"
                      aria-label="Disminuir"
                    >
                      <HiMinus size={18} />
                    </button>

                    <div className="flex flex-col items-center">
                      <span className="w-6 text-center">{item.cantidad}</span>
                      {item.cantidad >= item.stock && (
                        <span className="text-[10px] text-red-600">
                          Máximo alcanzado
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        item.cantidad < item.stock &&
                        updateQuantity(item.id, item.cantidad + 1)
                      }
                      className="bg-[#8B2C2C] text-white p-1 rounded-full hover:bg-[#641B1B] transition cursor-pointer"
                      aria-label="Aumentar"
                    >
                      <HiPlus size={18} />
                    </button>
                  </div>

                  {/* Botón de eliminar alineado horizontalmente */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 p-1 rounded-full cursor-pointer"
                    aria-label="Eliminar del carrito"
                  >
                    <HiOutlineTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de compra */}
          <div
            className="bg-[#E8DCCB] p-6 rounded-2xl shadow-md flex flex-col justify-between h-fit"
            style={{ boxShadow: `0 4px 12px ${"#B0AFAF"}` }}
          >
            <h2 className="text-xl font-semibold mb-4 text-[#1C1C1C]">
              Resumen
            </h2>
            <p className="text-lg text-[#1C1C1C] font-medium mb-4">
              Total:{" "}
              <span className="text-[#8B2C2C] font-bold text-2xl">
                ${total.toLocaleString("es-AR")}
              </span>
            </p>
            <Link
              href="/checkout"
              className="mt-4 block text-center bg-[#8B2C2C] text-[#F5EFE6] py-2 px-4 rounded-lg hover:bg-[#641B1B] transition-all"
            >
              Finalizar compra
            </Link>
            <Link
              href="/"
              className="text-sm mt-3 text-center text-[#8B2C2C] hover:underline"
            >
              Seguir comprando
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
