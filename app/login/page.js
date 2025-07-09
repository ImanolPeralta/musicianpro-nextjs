"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase-auth";

const colors = {
  fondoCard: "#E8DCCB",
  sombraCard: "#B0AFAF",
  texto: "#1C1C1C",
  fondoBoton: "#8B2C2C",
  hoverBoton: "#641B1B",
  fondoPrincipal: "#F5EFE6",
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas o usuario inexistente");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20"
      style={{ backgroundColor: colors.fondoPrincipal }}
    >
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md sm:p-10 p-6 rounded-2xl shadow-md"
        style={{
          backgroundColor: colors.fondoCard,
          boxShadow: `0 4px 8px ${colors.sombraCard}`,
        }}
      >
        <h1
          className="text-2xl sm:text-3xl font-bold text-center mb-6"
          style={{ color: colors.texto }}
        >
          Iniciar sesión
        </h1>

        {error && (
          <p className="text-sm text-red-600 mb-4 text-center">{error}</p>
        )}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 font-medium"
            style={{ color: colors.texto }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
            style={{ backgroundColor: colors.fondoPrincipal }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-1 font-medium"
            style={{ color: colors.texto }}
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
            style={{ backgroundColor: colors.fondoPrincipal }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-xl font-semibold transition-colors cursor-pointer text-sm sm:text-base"
          style={{
            backgroundColor: colors.fondoBoton,
            color: colors.fondoPrincipal,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = colors.hoverBoton)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = colors.fondoBoton)
          }
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
