"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const colors = {
  fondoCard: "#E8DCCB",
  sombraCard: "#B0AFAF",
  texto: "#1C1C1C",
  fondoBoton: "#8B2C2C",
  hoverBoton: "#641B1B",
  fondoPrincipal: "#F5EFE6",
};

const countries = [
  "Argentina",
  "Brasil",
  "Chile",
  "Colombia",
  "México",
  "Estados Unidos",
  "España",
  "Reino Unido",
  "Canadá",
  "Australia",
];

const paymentMethods = [
  "Tarjeta de crédito",
  "Tarjeta de débito",
  "MercadoPago",
  "Transferencia bancaria",
];

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Argentina",
  });

  const [payment, setPayment] = useState({
    method: "Tarjeta de crédito",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBuyerChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const validateCardFields = () => {
    if (
      payment.method === "Tarjeta de crédito" ||
      payment.method === "Tarjeta de débito"
    ) {
      return (
        payment.cardName.trim() &&
        /^\d{16}$/.test(payment.cardNumber.replace(/\s+/g, "")) &&
        /^\d{2}\/\d{2}$/.test(payment.expiryDate) &&
        /^\d{3,4}$/.test(payment.cvv)
      );
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !buyer.name ||
      !buyer.email ||
      !buyer.address ||
      !buyer.city ||
      !buyer.postalCode
    ) {
      alert(
        "Por favor completá todos los campos obligatorios de dirección y contacto."
      );
      return;
    }

    if (!validateCardFields()) {
      alert("Por favor completá correctamente los datos de la tarjeta.");
      return;
    }

    setLoading(true);

    try {
      // 1. Verificar stock de cada producto
      for (const item of cart) {
        const docRef = doc(db, "productos", item.id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          alert(
            `El producto "${item.titulo || item.title}" ya no está disponible.`
          );
          setLoading(false);
          return;
        }

        const productoData = docSnap.data();

        if (productoData.stock < item.cantidad) {
          alert(
            `No hay suficiente stock para el producto "${
              item.titulo || item.title
            }". Stock disponible: ${productoData.stock}`
          );
          setLoading(false);
          return;
        }
      }

      // 2. Crear la orden
      const order = {
        buyer,
        payment,
        items: cart.map((item) => ({
          id: item.id,
          title: item.titulo || item.title,
          price: item.precio || item.price,
          quantity: item.cantidad || item.quantity,
        })),
        total,
        date: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);

      // 3. Actualizar stock en Firestore
      for (const item of cart) {
        const docRef = doc(db, "productos", item.id);
        const docSnap = await getDoc(docRef);
        const productoData = docSnap.data();
        const nuevoStock = productoData.stock - item.cantidad;

        await updateDoc(docRef, { stock: nuevoStock });
      }

      // 4. Vaciar carrito
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden:", error);
      alert("Hubo un error procesando tu compra. Por favor, intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !orderId) {
    return (
      <div className="min-h-screen bg-[#F5EFE6] flex flex-col items-center justify-center p-6 sm:p-10">
        <p className="text-lg text-gray-600 text-center">
          Tu carrito está vacío.{" "}
          <a href="/" className="text-[#8B2C2C] font-semibold hover:underline">
            Ir al inicio
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6] p-6 sm:p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#1C1C1C] mb-8 text-center">
        Finalizar compra
      </h1>

      {orderId ? (
        <div
          className="bg-[#E8DCCB] p-8 rounded-2xl shadow-md max-w-lg w-full text-center"
          style={{ boxShadow: `0 4px 12px #B0AFAF` }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#1C1C1C]">
            ¡Gracias por tu compra!
          </h2>
          <p className="mb-6 text-[#1C1C1C]">
            Tu ID de orden es: <span className="font-bold">{orderId}</span>
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-[#8B2C2C] text-[#F5EFE6] py-2 px-6 rounded-lg hover:bg-[#641B1B] transition cursor-pointer"
          >
            Volver al inicio
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[#E8DCCB] p-8 rounded-2xl shadow-md max-w-lg w-full"
          style={{ boxShadow: `0 4px 12px #B0AFAF` }}
        >
          <section className="mb-8">
            <h2 className="text-[#1C1C1C] text-xl text-center font-semibold mb-4">
              Información personal y de envío
            </h2>

            <label className="block mb-4">
              <span className="text-[#1C1C1C] font-semibold mb-1 block">
                Nombre completo *
              </span>
              <input
                type="text"
                name="name"
                value={buyer.name}
                onChange={handleBuyerChange}
                required
                placeholder="Tu nombre"
                className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
              />
            </label>

            <label className="block mb-4">
              <span className="text-[#1C1C1C] font-semibold mb-1 block">
                Teléfono
              </span>
              <input
                type="tel"
                name="phone"
                value={buyer.phone}
                onChange={handleBuyerChange}
                placeholder="+54 9 11 1234 5678"
                className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
              />
            </label>

            <label className="block mb-4">
              <span className="text-[#1C1C1C] font-semibold mb-1 block">
                Email *
              </span>
              <input
                type="email"
                name="email"
                value={buyer.email}
                onChange={handleBuyerChange}
                required
                placeholder="tuemail@ejemplo.com"
                className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
              />
            </label>

            <label className="block mb-4">
              <span className="text-[#1C1C1C] font-semibold mb-1 block">
                Dirección *
              </span>
              <input
                type="text"
                name="address"
                value={buyer.address}
                onChange={handleBuyerChange}
                required
                placeholder="Calle, número, piso, depto"
                className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
              />
            </label>

            <label className="block mb-4">
              <span className="text-[#1C1C1C] font-semibold mb-1 block">
                Ciudad *
              </span>
              <input
                type="text"
                name="city"
                value={buyer.city}
                onChange={handleBuyerChange}
                required
                placeholder="Ciudad"
                className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
              />
            </label>

            <label className="block mb-4">
              <span className="text-[#1C1C1C] font-semibold mb-1 block">
                Código Postal *
              </span>
              <input
                type="text"
                name="postalCode"
                value={buyer.postalCode}
                onChange={handleBuyerChange}
                required
                placeholder="Código postal"
                className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
              />
            </label>

            <label className="block">
              <span className="text-[#1C1C1C] font-semibold mb-1 block">
                País *
              </span>
              <select
                name="country"
                value={buyer.country}
                onChange={handleBuyerChange}
                required
                className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section className="mb-8">
            <h2 className="text-[#1C1C1C] text-xl font-semibold mb-4 text-center">
              Método de pago
            </h2>

            <label className="block mb-4">
              <span className="text-[#1C1C1C] font-semibold mb-1 block">
                Seleccionar método *
              </span>
              <select
                name="method"
                value={payment.method}
                onChange={handlePaymentChange}
                required
                className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
              >
                {paymentMethods.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </label>

            {(payment.method === "Tarjeta de crédito" ||
              payment.method === "Tarjeta de débito") && (
              <>
                <label className="block mb-4">
                  <span className="text-[#1C1C1C] font-semibold mb-1 block">
                    Nombre en la tarjeta *
                  </span>
                  <input
                    type="text"
                    name="cardName"
                    value={payment.cardName}
                    onChange={handlePaymentChange}
                    placeholder="Nombre tal como figura en la tarjeta"
                    required
                    className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
                  />
                </label>

                <label className="block mb-4">
                  <span className="text-[#1C1C1C] font-semibold mb-1 block">
                    Número de tarjeta *
                  </span>
                  <input
                    type="text"
                    name="cardNumber"
                    value={payment.cardNumber}
                    onChange={handlePaymentChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                    className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
                    inputMode="numeric"
                    pattern="\d{4} \d{4} \d{4} \d{4}"
                  />
                </label>

                <div className="flex gap-4 mb-4">
                  <label className="flex-1">
                    <span className="text-[#1C1C1C] font-semibold mb-1 block">
                      Fecha de vencimiento *
                    </span>
                    <input
                      type="text"
                      name="expiryDate"
                      value={payment.expiryDate}
                      onChange={handlePaymentChange}
                      placeholder="MM/AA"
                      maxLength={5}
                      required
                      className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
                      pattern="\d{2}/\d{2}"
                    />
                  </label>

                  <label className="flex-1">
                    <span className="text-[#1C1C1C] font-semibold mb-1 block">
                      CVV *
                    </span>
                    <input
                      type="password"
                      name="cvv"
                      value={payment.cvv}
                      onChange={handlePaymentChange}
                      placeholder="123"
                      maxLength={4}
                      required
                      className="bg-[#F5EFE6] w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B2C2C]"
                      inputMode="numeric"
                      pattern="\d{3,4}"
                    />
                  </label>
                </div>
              </>
            )}
          </section>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B2C2C] text-[#F5EFE6] py-3 rounded-lg hover:bg-[#641B1B] transition disabled:opacity-50 font-semibold cursor-pointer"
          >
            {loading ? "Procesando..." : "Confirmar compra"}
          </button>
        </form>
      )}
    </div>
  );
}
